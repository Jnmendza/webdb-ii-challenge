const server = require('./server')

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`=== Webdb-ii-challenge on http://localHost:${PORT}`)
})