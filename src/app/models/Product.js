import mongoose, { model, models } from 'mongoose';
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    picture: { type: String },
    category: { type: String },
}, { timestamps: true });


export const Product = models?.Product || model('Product', ProductSchema);