const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

// apply middlewares
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));
// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
