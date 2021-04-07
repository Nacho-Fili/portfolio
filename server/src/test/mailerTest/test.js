const assert = require("assert")
const Transporter = require("../../main/utils/mailer")
const mailerTestConfig = require("../config/mailerTestConfig")


describe("Transporter test", () => {
    const transporter = new Transporter(mailerTestConfig)
    
    it("The transporter has the correct port setted", () => {
        assert.strictEqual(transporter.getPort(), 587)
    })
    
    it("The transporter has the correct host setted", () => {
        assert.strictEqual(transporter.getHost(), "smtp.ethereal.email")
    })

    it("The transporter can send an email correctly", () => {
        const mailInfo = {
            from: '"Fred Foo 👻" <foo@example.com>',
            to: "bar@example.com, baz@example.com",
            subject: "Hello ✔",
            text: "Hello world?"
        }
        
        transporter.send(mailInfo)
            .then(info => assert(info.messageId))
            .catch(assert(false))
    })
})