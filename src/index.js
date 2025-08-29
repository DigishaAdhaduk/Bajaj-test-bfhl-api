import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import bfhlRoute from "./routes/bfhl.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json({ limit: "1mb" }));


app.use("/", bfhlRoute);

app.get("/", (_req, res) => res.status(200).json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
