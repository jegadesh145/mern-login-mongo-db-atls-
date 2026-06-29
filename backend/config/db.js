import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Warning: MongoDB Connection failed. Make sure your database cluster is active and your current IP address is whitelisted in MongoDB Atlas.`);
    console.error(`Error details: ${error.message}`);
  }
};

export default connectDB;
