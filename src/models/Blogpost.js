import mongoose from "mongoose";

const { Schema } = mongoose;

let Blogpost;

try {
  Blogpost = mongoose.model("Blogpost");
} catch {
  const blogpostSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

  Blogpost = mongoose.model("Blogpost", blogpostSchema);
}

export default Blogpost;
