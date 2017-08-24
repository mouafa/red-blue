const http = require('http')
const IP = process.env.IP || '0.0.0.0'
let PORT = process.env.PORT|0 || 3000

function serve(color = 'red') {
  const server = http.createServer((req, res) => {
    // req.socket.setNoDelay(true)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<html style="background-color: ${color}"></html>`)
    res.end()
  }).listen(PORT++, IP, () => {
    console.log(`>>>> ${color.toUpperCase()} Server running at ${server.address().address}:${server.address().port}`)
  })
}

serve('red')
serve('blue')
serve('green')
serve('yellow')
