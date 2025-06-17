import { WebSocketServer } from "ws";
import {prismaClient} from "@repo/db/clients"
const server = new WebSocketServer({
    port:3001
})

server.on('connection',(socket)=>{
prismaClient.user.create({
    data:{
        username:Math.random().toString(),
        password:Math.random().toString()
    }
})
socket.send("hey conected to ws")
})