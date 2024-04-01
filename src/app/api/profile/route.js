import { User } from "@/app/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);

    const data = await req.json();
    console.log(data);
    const { _id, name, streetAddress, postalCode, city, phone } = data;

    let filter = {};
    if (_id) {
        filter = { _id }
    } else {
        const session = await getServerSession(authOptions);
        const email = session?.user?.email;
        filter = { email };
    }

    await User.findOneAndUpdate(filter, { name, streetAddress, postalCode, city, phone });

    return Response.json(true);
}


export async function GET(req, res) {
    mongoose.connect(process.env.MONGO_URL);

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');

    let filterUser = {};
    if (_id) {
        filterUser = { _id };
    } else {
        const session = await getServerSession(authOptions);
        const email = session?.user?.email;
        if (!email) {
            return Response.json({});
        }
        filterUser = { email };
    }

    const user = await User.findOne(filterUser).lean();


    return Response.json({ ...user });
}