const websocket =require('ws');

const wss= new websocket.Server({
    port:1000
});


const clients=[]
wss.on('connection',function(ws){
    // ws.send("hii from server");

    clients.push(ws)
    
    ws.on('message',function(data){
        console.log(data);
       // ws.send(data.toString());
        clients.forEach(client=>client.send(data.toString()))
        })
});