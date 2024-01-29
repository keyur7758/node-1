import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
})

export const Product = mongoose.model('Product', ProductsSchema);
