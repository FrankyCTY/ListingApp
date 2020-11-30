const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const productRouter = require("./routers/product.router");

const app = express();
app.use(cors({credentials: true, origin: true}));
app.enable('trust proxy');

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Reading data from body into req.body
app.use(
  express.json({
    limit: "1000kb",
    verify: (req, res, buffer) => (req['rawBody'] = buffer),
  })
);

// ============== Routes ==============
app.use(`${process.env.URL}/products`, productRouter);

module.exports = app;