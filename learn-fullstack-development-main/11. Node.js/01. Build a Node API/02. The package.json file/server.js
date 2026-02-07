// http module 
import http from 'node:http'

const PORT = 8000
const server = http.createServer((req,res)=>{ //req -> request object ||| res-> response object
    res.end('Hello from the server')
})

server.listen(PORT, ()=> console.log(`server running on port: ${PORT}`))