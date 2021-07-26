const assert = require("assert")
const Transporter = require("../../main/utils/Transporter")
const mailerTestConfig = require("../config/mailerTestConfig")


describe("Transporter test", () => {
    const transporter = new Transporter(mailerTestConfig)

    it("The transporter can send an email correctly", () => {
        const mailInfo = {
            sender: '"Fred Foo 👻" <foo@example.com>',
            email: "bar@example.com, baz@example.com",
            message: "Hello ✔"
        }
        
        transporter.send(mailInfo)
            .then(ignored => assert(true))
            .catch(e => assert(false))
    })
})