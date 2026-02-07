import http from 'node:http'
import { getDataFromDb } from './database/db'
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destination = await getDataFromDb()
/*
Challenge:
  1. Store our data in a const ‘destinations’.
  2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
    Think: What changes will you need to make to get this to work?
*/

  if (req.url === '/api' && req.method === 'GET') {
    res.end(JSON.stringify(destination))
  }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))
