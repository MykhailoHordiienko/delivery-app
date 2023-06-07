import Product from './models/product';
import { connectMongoDb } from './mongoClient';

export async function getProductsFromDb() {
  try {
    await connectMongoDb();
    const res = await Product.find();

    return res;
  } catch (error) {
    return error.message;
  }
}
