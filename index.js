 var getusermedia = require('getusermedia')

 var Peer = require('simple-peer')

 var intiator = false

 getusermedia(
    {
        video:true,
        audio:true
    },
    function(err,stream){
        if(err) console.log(err)
        var peer = new Peer({
            // intiator === true, 
            initiator:location.hash === "#init",

            trickle:false,
            stream:stream
        })
        peer.on('signal',function(data){
            console.log(data)

            document.getElementById("YourId").value=JSON.stringify(data)
        })
        document.getElementById("start_int").addEventListener('click',function(){
            intiator=true

        })
        document.getElementById("connect").addEventListener('click',function(){
            console.log("button connect was clicked")

            var otherId = JSON.parse(document.getElementById('otherId').value)

            peer.signal(otherId)
        })

        document.getElementById('send').addEventListener('click',function(){
        console.log("button send was clicked")

        var yourMessage  = document.getElementById('YourMessage').value

        peer.send(yourMessage)
        })
        // 
        peer.on('data',function(data){
            console.log(data)
            document.getElementById("messages").textContent +=data +"\n"
        })
        peer.on('stream',function(stream){
            console.log(stream)
            showWebcam(stream)
            audio(stream)
        })

       
    }
 )
 function showWebcam(stream){
        const video = document.createElement('video')
        console.log(video)
        document.body.appendChild(video)

        video.srcObject = stream

        video.play()
 }
 function audio(audiostream){
    const audio = document.createElement('audio')
    console.log(audio)
    document.body.appendChild(audio)

    audio.srcObject = audiostream

    audio.play()
}