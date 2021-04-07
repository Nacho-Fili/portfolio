const nodemailer = require('nodemailer')

const testAccount = nodemailer.createTestAccount();

const mailerTestConfig = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass
    }
}

module.exports.mailerTestConfig = mailerTestConfig