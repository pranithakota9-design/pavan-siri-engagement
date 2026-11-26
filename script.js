
const music = document.getElementById("bgMusic");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");
const musicButton = document.getElementById("musicButton");

// Opening invitation
function openInvitation() {

    welcome.style.display = "none";
    invitation.classList.remove("hidden");

    music.play()
        .then(() => {
            musicButton.textContent = "♫ Music On";
        })
        .catch(() => {
            musicButton.textContent = "♫ Play Music";
        });

    window.scrollTo(0, 0);
}

// Music control
function toggleMusic() {

    if (music.paused) {
        music.play()
            .then(() => {
                musicButton.textContent = "♫ Music On";
            })
            .catch(() => {
                musicButton.textContent = "♫ Play Music";
            });
    } else {
        music.pause();
        musicButton.textContent = "♫ Music Off";
    }
}

// Countdown
const engagementDate =
    new Date("2026-12-10T00:00:00+05:30").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const difference = engagementDate - now;

    const countdown = document.getElementById("countdown");

    if (difference <= 0) {
        countdown.innerHTML = "The special day has arrived!";
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    countdown.innerHTML = `
        ${days} Days <br>
        ${hours} Hours <br>
        ${minutes} Minutes <br>
        ${seconds} Seconds
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
