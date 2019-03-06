function start1(argument) {
    // body...
    ws1 = new WebSocket("ws://localhost:8000")

    var t1 = {"info_hash":"dddddddddddddddddddd", 
    "action": "announce",
    "left" : 1000,
    "uploaded": 0,
    "downloaded": 500,
    "peer_id": "eeeeeeeeeeeeeeeeeeee"
    }

    var t2 = {"info_hash":"ddddddddddddddddddde", 
    "action": "announce",
    "left" : 1000,
    "uploaded": 0,
    "downloaded": 500,
    "peer_id": "eeeeeeeeeeeeeeeeeeee"
    }

    var t3 = {"info_hash":"dddddddddddddddddddf", 
    "action": "announce",
    "left" : 1000,
    "uploaded": 0,
    "downloaded": 500,
    "peer_id": "eeeeeeeeeeeeeeeeeeee"
    }

    setInterval( ()=>{ws1.send(JSON.stringify(t1))},5000)
    setInterval( ()=>{ws1.send(JSON.stringify(t2))},5000)
    setInterval( ()=>{ws1.send(JSON.stringify(t3))},5000)
    console.log("started peer1")
}
