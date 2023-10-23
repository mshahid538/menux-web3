const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

const api = process.env.API_URL;
const connectionString = process.env.CONNECTION_STRING;

//middleware
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));
app.use(cors());

//routers
app.use(`/restaurants`, require("./routers/restaurants"));
app.use(`/products`, require("./routers/products"));
app.use(`/categories`, require("./routers/categories"));
app.use(`/dieteries`, require("./routers/dieteries"));
app.use(`/ingredients`, require("./routers/ingredients"));
app.use(`/users`, require("./routers/users"));
app.use(`/userSessionData` , require("./routers/userSession"))

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
