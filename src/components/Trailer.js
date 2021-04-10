import React from 'react';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id'

function Trailer({trailerLink}) {
    var id = getYouTubeID(trailerLink);
    const opts = {
        height: '500',
        width: '900',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
    }

    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    
    return (
        <YouTube videoId={id} opts={opts} onReady={_onReady} />
    )
}

export default Trailer