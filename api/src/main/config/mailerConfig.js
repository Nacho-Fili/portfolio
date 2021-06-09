const config = {
    auth: {
        user: process.env.NOTIFYER_EMAIL,
        pass: process.env.NOTIFYER_PASS
    },

    mailsConfig: {
        from: process.env.NOTIFYER_EMAIL,
        to: process.env.PERSONAL_EMAIL
    }
}

module.exports = config