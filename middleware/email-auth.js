const transporter = require("../nodemailer/transporter");

function nodemailerAuth(req, res) {
  transporter.verify((err, success) => {
    err
      ? res.status(401).send({
          message: "Nodemailer unauthorized",
        })
      : console.log(success, "Server ready to sent email");
  });
}
module.exports = nodemailerAuth;
