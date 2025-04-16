const wishes = [
    "শুভ নববর্ষ ১৪৩২! নতুন বছরে সুস্থতা, শান্তি আর আনন্দ আসুক।",
    "নতুন বছর ১৪৩২ হোক আপনার জীবনে খুশির বার্তা।",
    "১৪৩২ সনে সুখ আর সমৃদ্ধি আসুক। শুভ নববর্ষ!",
    "Pohela Boishakh ১৪৩২ er antorik subhechha!",
    "Wishing you a bright & joyful Bengali New Year ১৪৩২!"
];

function changeWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    document.getElementById('wish').innerHTML = `
        ${wishes[randomIndex]}
        <div class="year">১৪৩২</div>
        <div class="subtext">নতুন বছরের শুভেচ্ছা ও ভালোবাসা!</div>
        <div class="button-container">
            <button onclick="changeWish()">আরও শুভেচ্ছা</button>
            <button onclick="toggleMusic()">🎵 Play / Pause Music</button>
        </div>
    `;
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Floating festive circles
for(let i = 0; i < 30; i++) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    let size = Math.random() * 30 + 10;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.left = Math.random() * 100 + 'vw';
    circle.style.animationDuration = (Math.random() * 10 + 5) + 's';
    document.body.appendChild(circle);
}
