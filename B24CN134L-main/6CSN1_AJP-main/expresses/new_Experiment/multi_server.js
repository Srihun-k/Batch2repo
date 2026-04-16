// const http=require('http')
import http from 'http' // for this change the type in the package.json
import chalk from 'chalk'

const log=console.log

const server=http.createServer((req,res)=>{
    res.write(chalk.blueBright.bold("hello world"))
    res.end()
})
server.listen(3000,()=>{
    log("server running on http://localhost:3000")
})

const myserver=http.createServer((req,res)=>{
    res.write("hello world")
    res.end()
})
myserver.listen(2000,()=>{
    log("server running on http://localhost:2000")
})

const server1=http.createServer((req,res)=>{
    res.write(chalk.blueBright.bold("hello world"))
    res.end()
})
server1.listen(4000,()=>{
    log("server running on http://localhost:4000")
})

const myserver1=http.createServer((req,res)=>{
    res.write("hello world")
    res.end()
})
myserver1.listen(5000,()=>{
    log("server running on http://localhost:5000")
})

const server2=http.createServer((req,res)=>{
    res.write(chalk.blueBright.bold("hello world"))
    res.end()
})
server2.listen(6000,()=>{
    log("server running on http://localhost:6000")
})

const myserver2=http.createServer((req,res)=>{
    res.write("hello world")
    res.end()
})
myserver2.listen(1000,()=>{
    log("server running on http://localhost:1000")
})