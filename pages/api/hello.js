import { MongoClient } from 'mongodb';

const handler = async (req, res)=>{
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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
export default handler
