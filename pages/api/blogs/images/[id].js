import nc from "next-connect";
import cors from "cors";
import BlogModel from "../../../../models/blog";
import dbConnect from "../../../../utils/db-connect";
import fs from "fs";

const handler = nc()
  .use(cors())
  .get(async (req, res) => {
    const { id } = req.query;
    await dbConnect();
    const blog = await BlogModel.findById(id).exec();
    res.writeHead(200, {
      "Content-Type": blog.imageType,
      "Content-Length": blog.imageSize,
    });
    fs.ReadStream(blog.imagePath).pipe(res);
  });

export default handler;
