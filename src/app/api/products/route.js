import { Product } from "@/app/models/Product";
import mongoose from "mongoose";

export async function GET(req) {
    await mongoose.connect(process.env.MONGO_URL);

    const url = new URL(req.url);
    const ids = url.searchParams.get('ids');

    if (ids) {
        const idsArray = ids.split(',');
        const products = await Product.find({ '_id': { $in: idsArray } })
        return Response.json(products);
    }
    else {
        const products = await Product.find();
        return Response.json(products);
    }
}