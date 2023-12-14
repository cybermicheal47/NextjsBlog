import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Blogpost from "@/models/Blogpost";
export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();

    const post = await Blogpost.findById(slug);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Something went Wrong", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();

    await Blogpost.findByIdAndDelete(slug);

    return new NextResponse("Post Deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Something went Wrong", { status: 500 });
  }
};
