import express from "express";
import config from "config";
import cors from "cors"
import { Router } from "express";
import log from "./logger";
import connect from "./db/connect";
import root from "./routes/index"
const router = Router()
const rootRouter = root(router)

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use("/api/v1", rootRouter)

app.listen(port, host, async () => {
  log.info("server is up on " + `https//${host}/${port}`);
  await connect();
  
});
