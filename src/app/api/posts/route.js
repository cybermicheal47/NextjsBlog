import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Blogpost from "@/models/Blogpost";
export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username"); //  take query and search for username
  try {
    await connect();

    const posts = await Blogpost.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Something went Wrong", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new Blogpost(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("YOUR POST IS NOW LIVE", { status: 201 });
  } catch (error) {
    return new NextResponse("Something went Wrong", { status: 500 });
  }
};
