const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');

let yesSize = 16;

// YES BUTTON
function yes() {
    text.style.display = 'block';
    buttons.style.display = 'none';

    question.innerHTML = [
        'See you on Saturday! 💕',
        'What: Valentines Date',
        'When: February 14, 2026',
        'Where: The Frazzled Cook Makati (LPL Mansions, 122 LP Leviste Street, Salcedo, Makati)',
        'What to wear: Anything Comfortable',
        'See you honeybunch!'
    ].join('<br>');

    createHeartAnimation();

    showGif("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGV1cDl2emZ6NWk4eXpndXZ3NDdvMWRhYjdwdHkwbnB5eWd4dTVqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jIITRmFUDaTDJXi7is/giphy.gif");
}

// NO BUTTON
let noClickCount = 0;
const maxNoClicksBeforeDisappear = 6;

function no() {
    if (!noBtn) return;

    noClickCount++;

    // shrink "No" button
    const noScale = Math.max(0.3, 1 - noClickCount * 0.12);
    noBtn.style.transform = `scale(${noScale})`;

    // grow "Yes" button
    const yesScale = 1 + noClickCount * 0.18;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (noClickCount >= maxNoClicksBeforeDisappear) {
        noBtn.remove();
        createHeartAnimation();
    }

    showGif("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWNsMHE1YzFjNWxvbjVvZ3M0NWs4ODJ5enljdmEzNGU0d2RkeTl1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WK7omsLop0431tZjXb/giphy.gif");
}

// HEARTS
function createHeartAnimation() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Cursor hearts
let lastCursorHeartTime = 0;

function createCursorHeart(x, y) {
    const now = Date.now();
    if (now - lastCursorHeartTime < 70) return; // throttle so it doesn't get too crazy
    lastCursorHeartTime = now;

    const heart = document.createElement('div');
    heart.classList.add('cursor-heart');
    heart.textContent = '💗';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 900);
}

window.addEventListener('mousemove', (e) => {
    createCursorHeart(e.clientX, e.clientY);
});

// Falling petals (bouquet vibes)
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.textContent = '🌸';

    const startLeft = Math.random() * window.innerWidth;
    const duration = 6 + Math.random() * 4; // 6–10s

    petal.style.left = startLeft + 'px';
    petal.style.animationDuration = duration + 's';

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, duration * 1000 + 1000);
}

function startPetalRain() {
    // dense but not too heavy
    setInterval(createPetal, 1);
}

// start petals when page is ready
window.addEventListener('load', () => {
    startPetalRain();

    // add bouquet at the background
    const bouquet = document.createElement('div');
    bouquet.classList.add('bouquet');
    bouquet.textContent = '💐';
    document.body.appendChild(bouquet);
});

// GIF FUNCTION (NO OVERLAP)
function showGif(src) {
    const container = document.querySelector('.gif-container');
    container.innerHTML = "";

    let gif = document.createElement('img');
    gif.src = src;
    gif.classList.add('anime-gif');

    container.appendChild(gif);
}
