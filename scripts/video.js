const video = document.querySelector("#videoPlayer");
let progress = document.querySelector("#progress");

let isPlaying = false;

const convertTime = (sec) => {
  const msec = sec * 1000;
  const date = new Date(msec);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const mSeconds = date.getMilliseconds();
  const result = [
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
    mSeconds.toString().padStart(3, "00"),
  ].join(":");

  return result;
};

progress.textContent = convertTime(0);

const progressUpdate = () => {
  let curTime = video.currentTime;
  let convertedTime = convertTime(curTime);

  progress.textContent = convertedTime;
};

const playPause = () => {
  isPlaying ? video.pause() : video.play();
};

video.onplay = () => {
  isPlaying = true;
};

video.onpause = () => {
  isPlaying = false;
};

video.onended = () => {
  isPlaying = false;
  video.currentTime = 0;
};

video.ontimeupdate = progressUpdate;

video.onclick = playPause;
