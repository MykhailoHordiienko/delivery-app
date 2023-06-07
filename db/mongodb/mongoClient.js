import mongoose from 'mongoose';

const DB_HOST = process.env.MONGODB_HOST;

export const connectMongoDb = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return await mongoose.connect(DB_HOST);
};
