const nodemailer = require('nodemailer');

const sendMail = async (to) => {
    const options = {

        from:"samir.royal4all@gmail.com",
        to:to,
        subject:"Test Mail",
        text: "Hello World"
    
    }

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user:"samir.royal4all@gmail.com",
            pass:"xaunyqrdcbywcoou"
        }
    })

    let info = await transporter.sendMail(options);
    return info;
}


module.exports = {sendMail};
