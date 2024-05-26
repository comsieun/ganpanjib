const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const infoLives = document.getElementById('infoLives');
const infoItems = document.getElementById('infoItems');
const infoScore = document.getElementById('infoScore');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

const player = {
    width: 50,
    height: 50,
    speed: 5,
    color: 'black',
    lives: 3,
    items: 0,
    score: 0,
    image: new Image()
};

player.image.src = 'img/player.png';

const obstacleImages = {
    red: new Image(),
    orange: new Image(),
    yellow: new Image(),
    green: new Image(),
    blue: new Image(),
    purple: new Image()
};

obstacleImages.red.src = 'img/red.png';
obstacleImages.orange.src = 'img/orange.png';
obstacleImages.yellow.src = 'img/yellow.png';
obstacleImages.green.src = 'img/green.png';
obstacleImages.blue.src = 'img/blue.png';
obstacleImages.purple.src = 'img/purple.png';

let obstacleSpeed = 2;
const obstacles = [];
let gameOver = false;
let currentLane = 1;
let gameStarted = false;
let gamePaused = false;
let inFeverTime = false;
const feverTimeDuration = 7000; // 7 seconds
let timeattack = 1000

const obstacleColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const lanes = [0, 0, 0];

function updateCanvasSize() {
    canvas.width = canvas.clientWidth;
    canvas.height = 600;

    player.x = (canvas.width / 2) - (player.width / 2);
    player.y = canvas.height - player.height - 10;

    lanes[0] = canvas.width / 4 - player.width / 2;
    lanes[1] = canvas.width / 2 - player.width / 2;
    lanes[2] = (canvas.width / 4) * 3 - player.width / 2;
}

updateCanvasSize();
window.addEventListener('resize', updateCanvasSize);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') movePlayer(-1);
    if (e.key === 'ArrowRight') movePlayer(1);
});

leftButton.addEventListener('click', () => movePlayer(-1));
rightButton.addEventListener('click', () => movePlayer(1));

function movePlayer(direction) {
    const newLane = currentLane + direction;
    if (newLane >= 0 && newLane < lanes.length) {
        currentLane = newLane;
        player.x = lanes[currentLane];
    }
}

function createObstacle() {
    if (!gamePaused) {
        const lane = Math.floor(Math.random() * 3);
        const color = inFeverTime
            ? obstacleColors[Math.floor(Math.random() * 4)]
            : obstacleColors[Math.floor(Math.random() * obstacleColors.length)];

        obstacles.push({
            x: lanes[lane],
            y: 0,
            width: 50,
            height: 50,
            color: color,
            image: obstacleImages[color]
        });
    }
}

function updateObstacles() {
    const speed = inFeverTime ? (obstacleSpeed+3) : obstacleSpeed;
    obstacles.forEach((obstacle, index) => {
        if (!gamePaused) {
            obstacle.y += speed;
        }
        if (obstacle.y > canvas.height) {
            obstacles.splice(index, 1);
        }
    });
}

function checkCollision() {
    obstacles.forEach((obstacle, index) => {
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            handleCollision(obstacle);
            obstacles.splice(index, 1);
        }
    });
}

function handleCollision(obstacle) {
    if (!inFeverTime) {
        switch (obstacle.color) {
            case 'red':
            case 'orange':
            case 'yellow':
                player.lives -= 1;
                if (player.lives === 0) gameOver = true;
                break;
            case 'green':
                if (player.lives < 3) player.lives += 1;
                break;
            case 'blue':
                player.items += 1;
                if (player.items >= 10) startFeverTime();
                break;
            case 'purple':
                player.score += 100;
                break;
        }
    } else {
        if (obstacle.color === 'green') {
            if (player.lives < 3) player.lives += 1;
        } else if (obstacle.color === 'purple') {
            player.score += 500;
        }
    }
}

function startFeverTime() {
    inFeverTime = true;
    player.items = 0;
    let tmp1 = timeattack
    let tmp2 = obstacleSpeed
    timeattack -= 2

    setTimeout(() => {
        inFeverTime = false;
        timeattack = tmp1
        obstacleSpeed = tmp2
    }, feverTimeDuration);
}

function drawPlayer() {
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(obstacle.image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

function updateInfo() {
    infoLives.textContent = `생명력: ${player.lives}`;
    infoItems.textContent = `불행조각: ${player.items}`;
    infoScore.textContent = `점수: ${player.score}`;
}

function gameLoop() {
    if (!gameStarted || gamePaused) return;

    if (gameOver) {
        ctx.fillStyle = 'black';
        ctx.font = '48px serif';
        ctx.fillText('Game Over', canvas.width / 2 - 120, canvas.height / 2);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawObstacles();
    updateObstacles();
    checkCollision();
    updateInfo();
    drawFeverTimeMessage()

    requestAnimationFrame(gameLoop);
}

startButton.addEventListener('click', () => {
    gameStarted = true;
    gamePaused = false;
    startButton.style.display = 'none';
    infoLives.style.display = 'block';
    infoItems.style.display = 'block';
    infoScore.style.display = 'block';
    player.lives = 3;
    player.items = 0;
    player.score = 0;
    obstacles.length = 0; // Clear existing obstacles
    gameOver = false;
    gameLoop();
});

stopButton.addEventListener('click', () => {
    gamePaused = !gamePaused;
    if (!gamePaused) {
        gameLoop();
    }
});

function drawFeverTimeMessage() {
    if (inFeverTime) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)'; // 반투명한 빨간 배경
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '48px serif';
        ctx.fillText('Fever!', canvas.width / 2, canvas.height / 2);
    }
}

var timer1 = setInterval(createObstacle, timeattack);
var timer2 = setInterval(()=>{
    obstacleSpeed += 0.1;
    timeattack -= 50;
}, 1000);