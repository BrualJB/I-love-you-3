const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');
const body = document.querySelector('body');

let yesSize = 16; // Initial font size of Yes button

function yes() {
    text.style.display = 'block';
    buttons.style.display = 'none';
    question.textContent = "See you on 15! <3";
    createHeartAnimation();
    showGif("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTYwNmhwa2N5cXgzaHRod2Jzazh3aHYwMmN1cG41NTRqd2JuaHRseCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13k4VSc3ngLPUY/giphy.gif"); // Happy Anime GIF
}

// Phrases for the no button
var phrase = ['Bakit ayaw??', 'Seryoso ka dyann??', 'Hindi nga pwede!', 'What if umiyak ako?', 'gagi iiyak talaga ko', 'Final na?', 'WALA KANANG CHOICE!'];

var noCount = 0;

function no() {
    if (noCount < phrase.length - 1) {
        noBtn.style.position = 'absolute';
        var newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        var newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
        noBtn.textContent = phrase[noCount];

        // Increase "Yes" button size
        yesSize += 20;
        yesBtn.style.fontSize = `${yesSize}px`;
        yesBtn.style.padding = `${yesSize / 3}px ${yesSize / 2}px`;

        noCount++;
    } else {
        noBtn.textContent = phrase[noCount]; // Show final phrase

        // Keep moving "No" button until it's removed
        let moveInterval = setInterval(() => {
            var newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            var newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.left = newX + "px";
            noBtn.style.top = newY + "px";
        }, 300);
    }

    showGif("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOG4xcjA5bXdzZXU5NWZ3eHJvdnZtc2phYmlvdGJ1MjZvZWtrZ3RnZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif"); // Sad Anime GIF
}

// Heart animation when clicking "Yes"
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

// Function to show GIF without overlapping buttons
function showGif(src) {
    // Remove any existing GIF
    let existingGif = document.querySelector('.anime-gif');
    if (existingGif) {
        existingGif.remove();
    }

    // Create and position the new GIF
    let gif = document.createElement('img');
    gif.src = src;
    gif.classList.add('anime-gif');
    document.body.appendChild(gif);
}
