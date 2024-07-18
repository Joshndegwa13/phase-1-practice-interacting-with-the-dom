// Step 1: Timer Incrementing Every Second
let timer = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        document.getElementById('timer').innerText = timer;
    }, 1000);
}

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});

// Step 2: Manually Increment and Decrement Counter
let counter = 0;

document.getElementById('plus').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('minus').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').innerText = counter;
});

// Step 3: "Like" Button Functionality
const likes = {};

document.getElementById('like').addEventListener('click', () => {
    if (likes[counter]) {
        likes[counter]++;
    } else {
        likes[counter] = 1;
    }
    updateLikes();
});

function updateLikes() {
    const likesList = document.getElementById('likes');
    likesList.innerHTML = '';
    for (const number in likes) {
        const li = document.createElement('li');
        li.innerText = `${number}: ${likes[number]} likes`;
        likesList.appendChild(li);
    }
}

// Step 4: Pause/Resume Button
let isPaused = false;

document.getElementById('pause').addEventListener('click', () => {
    isPaused = !isPaused;
    if (isPaused) {
        clearInterval(timerInterval);
        disableButtons(true);
        document.getElementById('pause').innerText = 'Resume';
    } else {
        startTimer();
        disableButtons(false);
        document.getElementById('pause').innerText = 'Pause';
    }
});

function disableButtons(disable) {
    document.getElementById('plus').disabled = disable;
    document.getElementById('minus').disabled = disable;
    document.getElementById('like').disabled = disable;
    document.getElementById('comment-form').querySelector('button').disabled = disable;
}

// Step 5: Comment Box
document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();
    if (comment) {
        addComment(comment);
        commentInput.value = '';
    }
});

function addComment(comment) {
    const commentsList = document.getElementById('comments');
    const li = document.createElement('li');
    li.innerText = comment;
    commentsList.appendChild(li);
}
