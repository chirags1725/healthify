import { MongoClient, ServerApiVersion } from 'mongodb';
import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'OPTIONS'], // Adjust allowed methods as needed
    origin: 'http://localhost:3000', // Adjust origin as needed
  })
);

const handler = async (req, res) => {
  // Run cors middleware
  await cors(req, res);

  // MongoDB connection and query logic
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    
    const database = client.db('healthify');
    const collection = database.collection('user_data');

    const userdata = await collection.find({"booking_id": parseInt(req.query.id)}).toArray();
    
    res.status(200).json(userdata);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}

export default handler;
