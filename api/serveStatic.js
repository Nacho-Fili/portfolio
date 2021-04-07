const path = require("path")

module.exports = async (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
}