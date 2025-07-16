const http = require('http') 

const server = http.createServer()

server.listen(3000,()=>{
    console.log('server is unning on port 3000')
})