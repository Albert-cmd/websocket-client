import Viewer from 'react-viewer';

function ImageViewer() {
    return (
        <div>
            <Viewer
                images={
                [{
                    src: 'https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/imgscursoweb-01_xl.png',
                    alt: 'image viewer'}
                ]}/>
        </div>
    );
}
export default ImageViewer;
