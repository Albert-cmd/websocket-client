import './App.css';
import Navbar from "./Components/Navbar";
import VideoPlayer from "./Components/VideoPlayer";
import {Button} from "@mui/material";
import ImageViewer from "./Components/ImageViewer";
import './Components/Watch';
import client, {io, Manager, Socket} from "socket.io-client";
import {cleanup} from "@testing-library/react";

window.onload=currentTime;

function App() {
    var socket = io("http://127.0.0.1:5000");
    function connection() {

        socket.on('connect',function () {
            console.log('conectado al websocket!')
        })
        socket.on('disconnect',function () {
            console.log('desconectado del websocket!')
        })

    }
    connection();
  return (
    <div className="App">
      <header className="App-header">
            <Navbar />
            <div className={"displayArea"}>
                <VideoPlayer id="videoEmbed"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/800x600_Wallpaper_Blue_Sky.png"
                     alt="imagen" width={800} height={600}/>
            </div>
          <br/>
          <div className="controlButtons">
              <Button variant="contained" size="large" onClick={sendMsg}>Start door recognition</Button>
              <Button variant="contained" size="large">Stop door recognition</Button>
          </div>
      </header>
      <body className={"App-Body"}>
      </body>
    </div>
  );
    function sendMsg() {
        socket.emit('message','esto es un mensaje')
    }
}

export default App;

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if(hh == 0){
        hh = 12;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    document.getElementById("watch").innerText = time;
    let t = setTimeout(function(){ currentTime() }, 1000);
}


