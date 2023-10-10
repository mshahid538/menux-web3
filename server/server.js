const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv/config");

const api = process.env.API_URL;
const connectionString = process.env.CONNECTION_STRING;

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//routers
app.use(`/restaurants`, require("./routers/restaurants"));
app.use(`/products`, require("./routers/products"));
app.use(`/categories`, require("./routers/categories"));
app.use(`/dieteries`, require("./routers/dieteries"));
app.use(`/ingredients`, require("./routers/ingredients"));
app.use(`/users`, require("./routers/users"));

app.get("/", (req, res) => {
  res.send("default route running.");
});

mongoose
  .connect(connectionString, {
    dbName: "menux",
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database is connected.."))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running at port 5000");
});
