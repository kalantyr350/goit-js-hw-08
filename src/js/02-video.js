import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const iframe = document.querySelector('#vimeo-player');
const player = new Player('vimeo-player');

player.on('timeupdate', throttle(savedSessionTime, 1000));

function savedSessionTime(time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
}

updatedTime();

function updatedTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');

  player.setCurrentTime(savedTime);
}
