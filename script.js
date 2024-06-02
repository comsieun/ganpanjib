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

const objectImages = {
    obstacle1: new Image(),
    obstacle2: new Image(),
    obstacle3: new Image(),
    energyDrink: new Image(),
    misfortune: new Image(),
    house: new Image()
};
objectImages.obstacle1.src = 'img/obstacle1.png';
objectImages.obstacle2.src = 'img/obstacle2.png';
objectImages.obstacle3.src = 'img/obstacle3.png';
objectImages.energyDrink.src = 'img/energyDrink.png';
objectImages.misfortune.src = 'img/misfortune.png';
objectImages.house.src = 'img/house.png';

let obstacleSpeed = 2;
const obstacles = [];
let gameOver = false;
let currentLane = 1;
let gameStarted = false;
let gamePaused = false;
let inFeverTime = false;
const feverTimeDuration = 10000;

const obstacleList = ['obstacle1', 'obstacle2', 'obstacle3'];
const itemList = ['misfortune', 'energyDrink'];

const obstacleSet = [
    ['house', 'obstacle'],
    ['obstacle', 'house'], 
    ['house','house'],
    ['obstacle', 'obstacle'], 
    ['item']
];

const lanes = [0, 0, 0];

function updateCanvasSize() {
    canvas.width = 400;
    canvas.height = 600;

    player.x = (canvas.width / 2) - (player.width / 2); // 중간위치에서 시작
    player.y = canvas.height - player.height - 10;  //캔버스 높이에서 플레이어+10만큼 뺀 높이

    // 레인 정의 0, 1, 2
    lanes[0] = canvas.width / 4 - player.width / 2; // 1/4에서 플레이어 반절만큼 이동
    lanes[1] = canvas.width / 2 - player.width / 2; // 2/4에서 플레이어 반절만큼 이동
    lanes[2] = (canvas.width / 4) * 3 - player.width / 2; // 3/4에서 플레이어 반절만큼 이동
}

updateCanvasSize();
window.addEventListener('resize', updateCanvasSize);

// 방향 이동시
document.addEventListener('keydown', (e) => {
    if (gameStarted && !gamePaused) {
        if (e.key === 'ArrowLeft') movePlayer(-1);
        if (e.key === 'ArrowRight') movePlayer(1);
    }
});
leftButton.addEventListener('click', () => {
    if (gameStarted && !gamePaused) movePlayer(-1);
});
rightButton.addEventListener('click', () => {
    if (gameStarted && !gamePaused) movePlayer(1);
});

function movePlayer(direction) {
    const newLane = currentLane + direction;
    if (newLane >= 0 && newLane < lanes.length) {
        currentLane = newLane;
        player.x = lanes[currentLane];
    }
}

//장애물 생성
function createObstacle() {
    if (!gamePaused) {
        const lane = Math.floor(Math.random() * 3); // 랜덤숫자 0, 1, 2
        const type = inFeverTime
            ? obstacleSet[Math.floor(Math.random() * 4)] // 피버타임인경우 아이템 제외 0, 1, 2, 3
            : obstacleSet[Math.floor(Math.random() * 5)]; // 피버타임이 아닌 경우 아이템까지 0, 1, 2, 3, 4
        if (type === 'item') { // 아이템인 경우
            // 불행조각과 에너지드링크 중 결정
            const t = itemList[Math.floor(Math.random() * 2)]; // 0, 1
            obstacles.push({
                x: lanes[lane],
                y: 0,
                width: 50,
                height: 50,
                type: t,
                image: objectImages[t]
            });
        } else {
            obstacles.push({
                x: lanes[lane],
                y: 0,
                width: 50,
                height: 50,
                type: type[0],
                image: objectImages[type[0] === 'obstacle' ? obstacleList[Math.floor(Math.random() * 3)] : 'house']
            });
            obstacles.push({
                x: lanes[(lane === 2) ? 0 : lane + 1],
                y: 0,
                width: 50,
                height: 50,
                type: type[1],
                image: objectImages[type[1] === 'obstacle' ? obstacleList[Math.floor(Math.random() * 3)] : 'house']
            });
        }
    }
}

function updateObstacles() {
    const speed = inFeverTime ? (obstacleSpeed + 3) : obstacleSpeed;
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
        switch (obstacle.type) {
            case 'obstacle':
                player.lives -= 1;
                if (player.lives === 0) gameOver = true;
                break;
            case 'energyDrink':
                if (player.lives < 3) player.lives += 1;
                break;
            case 'misfortune':
                player.items += 1;
                if (player.items >= 10) startFeverTime();
                break;
            case 'house':
                player.score += 100;
                break;
        }
    } else {
        if (obstacle.type === 'house') {
            player.score += 500;
        }
    }
}

function startFeverTime() {
    inFeverTime = true;
    player.items = 0;
    const tmp2 = obstacleSpeed;

    setTimeout(() => {
        inFeverTime = false;
        obstacleSpeed = tmp2;
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
    drawFeverTimeMessage();

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
        ctx.fillText('Fever!', canvas.width / 2 - 50, canvas.height / 2);
    }
}

var timer1 = setInterval(createObstacle, 700);
var timer2 = setInterval(() => {
    if (gameStarted && !gamePaused) {
        obstacleSpeed += 0.07;
    }
}, 1000);
