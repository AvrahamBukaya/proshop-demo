import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected at Host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Failed to connect MongoDB: see error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
