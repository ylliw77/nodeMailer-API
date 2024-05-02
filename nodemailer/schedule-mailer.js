const cron = require("node-cron");
const transporter = require("./transporter");

cron.schedule("* * * * *", () => {
  transporter.sendMail({
    to: "recipient",
    from: "domain / email",
    subject: "lorem ipsum dolor...",
    text: "lorem ipsum dolor sit..",
  });
});

async function sendMail(req, res) {
  try {
    transporter.sendMail({
      to: "example@mail.com",
      from: process.env.GMAIL_EMAIL,
      subject: "lorem ipsum dolor...",
      text: "lorem ipsum dolor sit..",
    });
    res.status(200).send({
      message : "Email successfully delivered"
    })
  } catch (err) {
    console.log(err);
    
  }
}

module.exports = { sendMail };
