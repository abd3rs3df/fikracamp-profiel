import mongoose from "mongoose";

let url = process.env.dbUrl;
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promoise: null,
  };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached;
  }
  if (!cached.promoise) {
    cached.promoise = mongoose
      .connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promoise;
  return cached.conn;
}
