import Order from "@/app/models/Order";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req) {
    await mongoose.connect(process.env.MONGO_URL);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');



    if (_id) {
        return Response.json(await Order.findById(_id));
    }

    if (email) {
        return Response.json(await Order.find({ email }));
    }


}