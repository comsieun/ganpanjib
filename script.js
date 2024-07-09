const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const infoLives = document.getElementById('infoLives');
const infoItems = document.getElementById('infoItems');
const infoScore = document.getElementById('infoScore');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const stopButtonImage = document.getElementById('stopButtonImage');
const emergencyTimer = document.getElementById('emergencyTimer');

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
    house: new Image(),
    house1: new Image(),
    house2: new Image(),
    house3: new Image(),
    house4: new Image(),
    house5: new Image()
};
objectImages.obstacle1.src = 'img/obstacle1.png';
objectImages.obstacle2.src = 'img/obstacle2.png';
objectImages.obstacle3.src = 'img/obstacle3.png';
objectImages.energyDrink.src = 'img/energyDrink.png';
objectImages.misfortune.src = 'img/misfortune.png';
objectImages.house.src = 'img/house.png';
objectImages.house1.src = 'img/house1.png';
objectImages.house2.src = 'img/house2.png';
objectImages.house3.src = 'img/house3.png';
objectImages.house4.src = 'img/house4.png';
objectImages.house5.src = 'img/house5.png';

let obstacleSpeed = 4;
const obstacles = [];
let gameOver = false;
let currentLane = 1;
let gameStarted = false;
let gamePaused = false;
let inFeverTime = false;
let emergency = false;
const feverTimeDuration = 10000;
let feverTimeRemaining = 0;
let feverTimeStartTime = 0;
let feverTimeTimeout;
let originalObstacleSpeed;
let emergencyCount = 30;    // 돌발상황 카운트 (기본값: 30)
let count = 0;
let tmpCount = 0;
let answer = 0;
let emergencyAnswerTime = false

const obstacleList = ['obstacle1', 'obstacle2', 'obstacle3'];
const itemList = ['misfortune', 'energyDrink'];
const houseList = ['house','house1','house2','house3','house4','house5',]

const obstacleSet = [
    ['house', 'obstacle'],
    ['obstacle', 'house'], 
    ['house','house'],
    ['obstacle', 'obstacle'], 
    ['item'],
    ['misfortune'] // 불행조각 잦은 빈도를 위해..
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

// 장애물 생성
function createObstacle() {
    if (!gamePaused && !gameOver && gameStarted && !emergency) {
        const lane = Math.floor(Math.random() * 3); // 랜덤숫자 0, 1, 2
        const type = inFeverTime
            ? obstacleSet[Math.floor(Math.random() * 4)] // 피버타임인경우 아이템 제외 0, 1, 2, 3
            : obstacleSet[Math.floor(Math.random() * 6)]; // 피버타임이 아닌 경우 아이템까지 0, 1, 2, 3, 4, 5
            if (type == 'item') { // 아이템인 경우
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
            } else if (type == 'misfortune'){
                obstacles.push({
                    x: lanes[lane],
                    y: 0,
                    width: 50,
                    height: 50,
                    type: type,
                    image: objectImages[type]
                });
            }else {
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

// 오브젝트 내려옴
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

// 충돌 체크
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

// 충돌 처리
function handleCollision(obstacle) {
    if (!inFeverTime && !emergency) {
        if (obstacle.type == 'obstacle'){
            player.lives -= 1;
            if (player.lives === 0) gameOver = true;
            }
        else if (obstacle.type ==  'energyDrink'){
            if (player.lives < 3) player.lives += 1;
        }
        else if (obstacle.type == 'misfortune'){
            player.items += 1;
            if (player.items >= 10) startFeverTime();
        }
        else if (obstacle.type == 'house'){
            player.score += 100;
        }
    }else if(inFeverTime) {
        if (obstacle.type === 'house') {
            player.score += 500;
        }else if (obstacle.type == 'obstacle'){ // (피버) 장애물 파괴시 50
            player.score += 50;
        }
    }else if(emergency){
        if (obstacle.type == 'correct'){
            console.log("correct")
            player.score += 300;
        } else {
            console.log("incorrect")
            player.lives -= 1;
            if (player.lives === 0) gameOver = true;
        }
    }
}

// 피버타임 시작
function startFeverTime() {
    inFeverTime = true;
    player.items = 0;
    player.image.src = 'img/player_fever.png';
    feverTimeStartTime = Date.now(); //지금 시간 저장
    feverTimeRemaining = feverTimeDuration; //남은시간에 10000밀리초 저장
    const originalObstacleSpeed = obstacleSpeed; //원래 스피드 따로 저장
    obstacleSpeed += 3; // 장애물 속도를 증가시킴

    feverTimeTimeout = setTimeout(() => {
        inFeverTime = false;
        player.image.src = 'img/player.png';
        obstacleSpeed = originalObstacleSpeed; // 원래 속도로 복원
    }, feverTimeRemaining);
}

// 플레이어 그려줌
function drawPlayer() {
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
}

function drawAnswer(answer) {
    ctx.drawImage(objectImages[houseList[answer]], canvas.width / 2 - 25, canvas.height / 2 - 25, 50, 50);
}

// 오브젝트 그려줌
function drawObstacles() {
    obstacles.forEach(obstacle => {
        // console.log("obstacle.image: ", obstacle.image)
        // console.log("obstacle.x: ", obstacle.x)
        // console.log("obstacle.y: ", obstacle.y)
        // console.log("obstacle.width: ", obstacle.width)
        // console.log("obstacle.height: ", obstacle.height)
        ctx.drawImage(obstacle.image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

// 아이템 메세지 그려줌
function updateInfo() {
    infoLives.textContent = `생명력: ${player.lives}`;
    infoItems.textContent = `불행조각: ${player.items}`;
    infoScore.textContent = `점수: ${player.score}`;
}

//기본 실행 함수
function gameLoop() {
    if (!gameStarted || gamePaused) return;

    if (gameOver) {
        ctx.fillStyle = 'black';
        ctx.font = '48px serif';
        ctx.fillText('Game Over', canvas.width / 2 - 120, canvas.height / 2);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(!emergency){
        countEmergency();
        drawFeverTimeMessage();
    }
    if(emergencyAnswerTime){
        drawAnswer(answer)
    }

    drawObstacles();
    updateObstacles();
    checkCollision();
    drawPlayer();
    updateInfo();

    requestAnimationFrame(gameLoop); 
}

// 게임 시작
startButton.addEventListener('click', () => {
    gameStarted = true;
    gamePaused = false;
    startButton.style.display = 'none';
    infoLives.style.display = 'block';
    infoItems.style.display = 'block';
    infoScore.style.display = 'block';
    emergencyTimer.style.display = 'block';
    player.lives = 3;
    player.items = 0;
    player.score = 0;
    obstacles.length = 0; 
    gameOver = false;
    var timerEmergency = setInterval(() => {
        if (!inFeverTime){
            emergencyCount -= 1
        }}, 1000);
    gameLoop();
});

// 게임 멈춤
stopButton.addEventListener('click', () => {
    gamePaused = !gamePaused;
    if (gamePaused) {
        stopButtonImage.src='img/play.png'
        // 피버 타임 타이머 멈추기
        if (inFeverTime) {
            clearTimeout(feverTimeTimeout);
            feverTimeRemaining -= Date.now() - feverTimeStartTime;
        }
    } else {
        // 피버 타임 타이머 재개 
        stopButtonImage.src='img/stop.png'

        if (inFeverTime) {
            feverTimeStartTime = Date.now();
            feverTimeTimeout = setTimeout(() => {
                inFeverTime = false;
                player.image.src = 'img/player.png';
                obstacleSpeed = originalObstacleSpeed; // 원래 속도로 복원
            }, feverTimeRemaining);
        }
        gameLoop();
    }
});

// 피버타임 메시지
function drawFeverTimeMessage() {
    if (inFeverTime) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)'; // 반투명한 빨간 배경
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '48px serif';
        ctx.fillText('Fever!', canvas.width / 2 - 50, canvas.height / 2);
    }
}

//돌발상황 카운트
function countEmergency(){
    if(emergencyCount < 0){
        emergencyTimer.style.display = 'none';
        emergencyCount = 60
        // console.log("돌발 상황 시작")
        startEmergency()
    } else{
        emergencyTimer.textContent = `돌발 상황이 일어나기까지... ${emergencyCount}초`;
    }
}

//돌발상황 시작
function startEmergency(){
    emergency = !emergency // true
    // console.log("이멀전씨 트루")
    count += 1
    tmpCount = count

    console.log("count: ", count)

    // 필드에 있던 오브젝트 삭제
    obstacles.splice(0)
    drawObstacles();    
    emergencySet()
    
    setTimeout(() => {
        emergency = !emergency // false
        emergencyCount = 30     //돌발상황 카운트 (기본값: 30)
        emergencyTimer.style.display = 'block';
        // console.log("돌발 상황 끝")
    }, 7000*count)
}

function emergencySet() {
    tmpCount -= 1
    console.log("남은 count: ", tmpCount)
    answer = Math.floor(Math.random() * 6);
    // console.log("answer: ", answer)

    drawAnswer(answer)
    emergencyAnswerTime = true

    setTimeout(() => {
        emergencyAnswerTime = false
        createEmergencyObject(answer);
        setTimeout(()=>{
            createEmergencyObject(answer)
            setTimeout(() => {
                createEmergencyObject(answer)
                if(tmpCount>0){
                    setTimeout(() => {
                        emergencySet()
                    }, 3000);
                }
            }, 1000);
        }, 1000)
    }, 2000);



}

function createEmergencyObject(answer){
    let tmp = Math.floor(Math.random() * 6)
    tmp = tmp === answer ? tmp+1 : tmp
    
    const a = tmp >= houseList.length ? tmp - (houseList.length) : tmp

    // console.log(`페이크: ${houseList[tmp]}`)

    tmp = Math.floor(Math.random() * 6)
    tmp = tmp === answer ? tmp+1 : tmp

    const b = tmp >= houseList.length ? tmp - (houseList.length) : tmp
    
    // console.log(`페이크: ${houseList[tmp]}`)

    const lane = Math.floor(Math.random() * 3);

    obstacles.push({    // 정답
        x: lanes[lane],
        y: 0,
        width: 50,
        height: 50,
        type: 'correct',
        image: objectImages[houseList[answer]]
    })
    obstacles.push({    // 정답 아님1
        x: lanes[(lane === 2) ? 0 : lane + 1],
        y: 0,
        width: 50,
        height: 50,
        type: 'incorrect',
        image: objectImages[houseList[a]]
    })
    obstacles.push({    // 정답 아님1
        x: lanes[(lane === 0) ? 2 : lane -1],
        y: 0,
        width: 50,
        height: 50,
        type: 'incorrect',
        image: objectImages[houseList[b]]
    })
}

var timer1 = setInterval(createObstacle, 700);