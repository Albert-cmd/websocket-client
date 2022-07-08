socket.connect()
function stop_instances(){
    console.log("stop_instances clicked")
    socket.emit('stop_aws')
}
function start_instances(){
    console.log("start_instances clicked")
    socket.emit('run_aws')
}
