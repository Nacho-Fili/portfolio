const { response } = require("express")
const path = require("path")

module.exports = async (req, res) => {
    const filePath = path.join(__dirname, '../client/build/index.html')
    const stat = fileSystem.statSync(filePath)

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    })

    const readStream = fileSystem.createReadStream(filePath)
    readStream.pipe(response)
}