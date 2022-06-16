
function processRealImg() {
        // recuperamos el nombre del archivo que se ha subido al servidor
        var filename = getCookie('SelectedFileName')
        // Variable to hold request
        var request;
        // Bind to the submit event of our form
        $.ajax({
            type:"GET", // la variable type guarda el tipo de la peticion GET,POST,..
            data: {filename: filename},
            url:"get_image.php", //url guarda la ruta hacia donde se hace la peticion
            success:function(datos){ //success es una funcion que se utiliza si el servidor retorna informacion
                console.log(datos)

                // RECOGEMOS LA URL DE DONDE HA GUARDADO LA IMAGEN PROCESADA EL SERVIDOR Y LA MOSTRAMOS

            }})

}

function base64convert(file) {
    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        console.log(srcData)
        var newImage = document.getElementById('unprocessedImg')
        newImage.src = srcData;

    }
}

function saveFileName(selectedFile){
    var files = selectedFile.files;
    var filename = files[0].name
    setCookie('SelectedFileName',filename,2147483647)
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
