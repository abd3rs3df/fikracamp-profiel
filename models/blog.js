import { model, Schema, models } from "mongoose";

const BlogSchema = new Schema({
  title: String,
  content: String,
  imagePath: String,
  imageType: String,
  imageSize: Number
});

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;