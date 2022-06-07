import { Player, BigPlayButton } from 'video-react';



function VideoPlayer() {

        return(
            <Player playsInline poster="/assets/poster.png"
                    src="https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8"
                    fluid={false}
                    width={800}
                    height={600}
                    >
                <BigPlayButton position="center" />
            </Player>
        )
}
export default VideoPlayer;
