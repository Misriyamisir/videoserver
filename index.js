//import json server

const jsonServer=require('json-server')
//import cors
const cors=require('cors')


//create json server

const server=jsonServer.create()

//json type data - js data- before resolve
const middleware=jsonServer.defaults()

//create a router
const router=jsonServer.router('db.json')

//apply in server
server.use(middleware)
server.use(cors())
server.use(router)

//to run

const PORT=5005
server.listen(PORT,()=>{
    console.log(`____json server started at port : ${PORT}____`);
})













