// Aos
AOS.init({
  once: true,
});

// Modal on load
window.onload = function () {
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
};

// Waktu mundur
const endDate = new Date("2023-11-8 08:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Waktu hitung mundur telah berakhir!";
  }
}, 1000); // Setiap 1 detik

// Audio
const playButton = document.getElementById("playButton");
const music = document.getElementById("music");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    playButton.innerHTML = '<i class="bi bi-play-circle-fill"></i>';
  } else {
    music.play();
    playButton.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
  }
  isPlaying = !isPlaying;
}

playButton.addEventListener("click", toggleMusic);
