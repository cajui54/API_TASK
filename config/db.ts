import mongoose from "mongoose";
import config from "config";
async function connectDatabase() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log(`Database has been connect with success!`);
  } catch (error) {
    console.log("Occurred to connect with database!");
    console.log(`Error: ${error}`);
  }
}

export default connectDatabase;
