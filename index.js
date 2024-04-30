require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const nodemailerAuth = require("./middleware/email-auth");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors);

app.use(nodemailerAuth);

app.get("/", (req, res) => {
  res.send({
    message: "API is running",
  });
});

app.listen(() => console.log("http://localhost:" + PORT));
