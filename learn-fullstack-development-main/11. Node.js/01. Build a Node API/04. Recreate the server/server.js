import http from 'node:http'

const PORT = 8000

const server = http.createServer((req,res)=>{
    res.end("hello from the server", 'utf8')
})

server.listen(PORT, ()=> {
    console.log(`server connected to the port 8000`)
})
/*
Challenge:
1. Recreate our server so we send a string over http when a GET request comes in. 
2. Test it by making a GET request to http://localhost:8000 in the network widget.
See hint.md for prompts.
*/
