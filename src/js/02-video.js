import Player from "@vimeo/player";
import Throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    //переменная для ключа
    const timeKey = "videoplayer-current-time"
// функция с помощью диструктаризации получили текущие секунды видео и отправляем в локалстораж
    function durationSaveToStorage({seconds}) {  
        localStorage.setItem(timeKey, seconds)
    }
// слушатель на окно, функция запускает плеер с сохранными секундами
    window.addEventListener("load", newStart);

player.on('timeupdate', Throttle(durationSaveToStorage, 1000));

function newStart() {
    if (!localStorage.getItem(timeKey)) { return }
    const currentVideoTime = localStorage.getItem(timeKey)
    player.setCurrentTime(currentVideoTime)
        .then(() => player.play())
        .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
}
 console.log(player)