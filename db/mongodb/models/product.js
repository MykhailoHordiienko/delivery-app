import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  MAC: Array,
  KFC: Array,
  BURRITO: Array,
});

const Product = models.product || model('product', productSchema);

export default Product;
