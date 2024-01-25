import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  if (isConnected) {
    console.log("MongoDb already connected ");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });
  } catch (error) {}
};
