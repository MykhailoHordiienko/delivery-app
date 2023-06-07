import Order from './models/order';
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
export async function addOrderToDb(order) {
  try {
    await connectMongoDb();
    Order.create(order);
  } catch (error) {
    return error.message;
  }
}
