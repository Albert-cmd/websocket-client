import {Button} from "@mui/material";
import {ContextSocketProvider} from "../context/context-socketio";
import {useContext} from "react";

function ControlButtons() {

    return (
        <box className="controlButtons">
            <Button variant="contained" size="large"  onClick={() => sendMessage()}>Start door recognition</Button>
            <Button variant="contained" size="large">Stop door recognition</Button>
        </box>
    )
}

function sendMessage() {
    const  Socket  = useContext(ContextSocketProvider);
    Socket.emit("message","esto es un mensaje")


}
export default ControlButtons;
