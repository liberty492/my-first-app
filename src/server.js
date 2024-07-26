var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pnarayana1405@gmail.com',
        pass: 'jsreact@54321'
    }
})

var option = {
    from: 'pnarayana1405@gmail.com',
    to: 'parsa.narayana@gmail.com',
    subject: 'good morning',
    text: 'greek the code'
}

transporter.sendMail(option, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Email is sen' + info.response);
    }
})