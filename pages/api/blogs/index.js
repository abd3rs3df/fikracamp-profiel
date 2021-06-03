import nc from "next-connect";
import cors from "cors";
import multer from "multer";
import Blog from "../../../models/blog";
import dbConnect from "../../../utils/db-connect";
import fs from "fs";
import path from "path";

const upload = multer({ dest: process.env.temp });
const handler = nc()
  .use(cors())
  .use(upload.single("image"))
  .post(async (req, res) => {
    await dbConnect();
    let newPath;
    if (req.file) {
      const oldPath = req.file.path;
      const ext = req.file.mimetype.split("/")[1];
      const imageName = `${req.file.filename}.${ext}`;
      newPath = path.join(process.env.upload, imageName);
      fs.renameSync(oldPath, newPath);
    }
    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      imagePath: newPath,
      imageType: req.file.mimetype,
      imageSize: req.file.size,
    });
    await blog.save();
    res.json({
      success: true,
      blog: blog,
    });
  });
export default handler;
export const config = {
  api: { bodyParser: false },
};
