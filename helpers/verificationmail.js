const nodemailer = require("nodemailer");

module.exports.sendMail = async(userEmail, uuid) => {
    
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, 
      auth: {
        user: testAccount.user, 
        pass: testAccount.pass, 
      },
    });
  
    let info = await transporter.sendMail({
      from: '"test 👻" <test@example.com>', 
      to: userEmail, 
      subject: "Verification Mail ✔", 
      html: `hi click link to verify acccount <a href="http:localhost:3000/verify${uuid}" a/>`, 
    });
  
    console.log("Message sent: %s", info.messageId);
  
  }
  