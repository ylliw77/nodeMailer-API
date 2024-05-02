require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const nodemailerAuth = require("./middleware/email-auth");
const { sendMail } = require("./nodemailer/schedule-mailer");
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

app.post("/mails", sendMail(req, res))

app.listen(() => console.log("Server is running on http://localhost:" + PORT));
