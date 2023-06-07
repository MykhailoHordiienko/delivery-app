import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema({
  order: Array,
  owner: String,
  userData: Object,
});

const Order = models.order || model('order', orderSchema);

export default Order;
