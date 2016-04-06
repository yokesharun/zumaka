
//  mail coding starts

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://arun%40appoets.com:arun_yokesh@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"arun from node 👥" <arun@appoets.com>', // sender address
    to: 'jayakumar@appoets.com, jayakumar@appoets.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world jaypa 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

// mail coding ends