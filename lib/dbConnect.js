import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };

}

export default async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    cached.promise = mongoose.connect(MONGODB_URI, {
        dbName: "jec-tpo",
        bufferCommands: false,
        connectTimeoutMS: 30000,
    });

    cached.conn = await cached.promise;
    return cached.conn;
}
