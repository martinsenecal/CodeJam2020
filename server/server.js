const express = require("express");
const connectDB = require("./config/mongodb-config");
const config = require("./config/config");
const rootRouter = require("./routes/root");
const bodyParser = require("body-parser");
const cors = require("cors");
require("express-async-errors");

//Connect Database
connectDB();

//  Middleware
const app = express();
app.use(
  cors({
    origin: config.HOME_PAGE_DOMAIN, // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(bodyParser.json());

app.use("/", rootRouter);

//  Start server
app.listen(config.PORT, () =>
  console.log(`Server started on port ${config.PORT}`)
);
