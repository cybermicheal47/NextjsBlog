import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Blogpost from "@/models/Blogpost";
export const GET = async (request) => {
  try {
    await connect();

    const posts = await Blogpost.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Something went Wrong", { status: 500 });
  }
};
