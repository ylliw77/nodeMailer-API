const transporter = require("../nodemailer/transporter");

function nodemailerAuth() {
  transporter.verify((err, success) => {
    err ? console.log(err) : console.log(success, "Server ready to sent email");
  });
}
module.exports = nodemailerAuth;
