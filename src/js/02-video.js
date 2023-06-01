var throttle = require('lodash.throttle');
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(function(data) {
    window.localStorage.setItem("videoplayer-current-time", data.seconds);
}, 250));

const currentTime = window.localStorage.getItem('videoplayer-current-time');


player.setCurrentTime(currentTime).then(function(seconds) {
    seconds = currentTime;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
