const vid = document.getElementById("heroVid");

vid.muted = false;
vid.loop = false;
vid.autoplay = true;
vid.play();

vid.addEventListener("ended", () => {
  vid.muted = true;
  vid.loop = true;
  vid.play();
});
