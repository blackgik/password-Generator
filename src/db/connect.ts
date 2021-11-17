import mongoose, { ConnectOptions } from "mongoose";
import config from "config";
import log from "./../logger";

async function connect() {
  const dbUri = config.get("dbUri") as string;
  return await mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
      log.info("Database connected successfully");
    })
    .catch((err: any) => {
      log.error("Failed to connect to the database", err);
      process.exit(1);
    });
}

export default connect;
