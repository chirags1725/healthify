import { MongoClient, ServerApiVersion } from "mongodb";

const handler = async (req, res) => {
  // Set CORS headers

  // Check if it's a preflight request (OPTIONS) and handle it
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // MongoDB connection and query logic
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();

    const database = client.db("healthify");
    const collection = database.collection("user_data");

    const userdata = await collection
      .find({ booking_id: parseInt(req.query.id) })
      .toArray();

    // collection.

    res.status(200).json(userdata);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await client.close();
  }
};

export default handler;
