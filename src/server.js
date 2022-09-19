import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
const app = express();

const morgan = require("morgan");

app.use(morgan("combined"));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Backend running on PORT: ${port}`);
});
