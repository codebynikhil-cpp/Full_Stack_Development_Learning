import http from 'node:http'
import { getDataFromDB } from './database/db.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()


  if (req.url === '/api' && req.method === 'GET') {
/*
Challenge:
1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
   Content-Type to ‘application/json’ - watch out for casing! 
*/
    res.end(JSON.stringify(destinations))
    res.setHeader('Content-Type','application/json')
    res.statusCode = 200
  }else{
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
