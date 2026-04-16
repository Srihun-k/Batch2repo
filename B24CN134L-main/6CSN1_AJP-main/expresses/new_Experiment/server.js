import http from 'http'

const log=console.log

const server=http.createServer((req,res)=>{
    res.write("hello world")
    res.end()
})
server.listen(3000,()=>{
    log("server running on http://localhost:3000")
})

