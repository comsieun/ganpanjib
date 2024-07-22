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

//이미지 정의
const playerDefaults={
    default0: new Image(),
    default1: new Image(),
    default2: new Image(),
    default3: new Image(),
    default4: new Image(),
    default5: new Image(),
    default6: new Image(),
    default7: new Image(),
    default8: new Image(),
    default9: new Image(),
    default10: new Image(),
    default11: new Image(),
    default12: new Image(),
    default13: new Image(),
    default14: new Image(),
    default15: new Image(),
    default16: new Image()
};
playerDefaults.default0.src = 'img/playerDefault/Main_CH_Walk_00000.png';
playerDefaults.default1.src = 'img/playerDefault/Main_CH_Walk_00001.png';
playerDefaults.default2.src = 'img/playerDefault/Main_CH_Walk_00002.png';
playerDefaults.default3.src = 'img/playerDefault/Main_CH_Walk_00003.png';
playerDefaults.default4.src = 'img/playerDefault/Main_CH_Walk_00004.png';
playerDefaults.default5.src = 'img/playerDefault/Main_CH_Walk_00005.png';
playerDefaults.default6.src = 'img/playerDefault/Main_CH_Walk_00006.png';
playerDefaults.default7.src = 'img/playerDefault/Main_CH_Walk_00007.png';
playerDefaults.default8.src = 'img/playerDefault/Main_CH_Walk_00008.png';
playerDefaults.default9.src = 'img/playerDefault/Main_CH_Walk_00009.png';
playerDefaults.default10.src = 'img/playerDefault/Main_CH_Walk_00010.png';
playerDefaults.default11.src = 'img/playerDefault/Main_CH_Walk_00011.png';
playerDefaults.default12.src = 'img/playerDefault/Main_CH_Walk_00012.png';
playerDefaults.default13.src = 'img/playerDefault/Main_CH_Walk_00013.png';
playerDefaults.default14.src = 'img/playerDefault/Main_CH_Walk_00014.png';
playerDefaults.default15.src = 'img/playerDefault/Main_CH_Walk_00015.png';
playerDefaults.default16.src = 'img/playerDefault/Main_CH_Walk_00016.png';

const playerDeliveryMotions={
    delivery0: new Image(),
    delivery1: new Image(),
    delivery2: new Image(),
    delivery3: new Image(),
    delivery4: new Image(),
    delivery5: new Image(),
    delivery6: new Image(),
    delivery7: new Image(),
    delivery8: new Image(),
    delivery9: new Image(),
    delivery10: new Image(),
    delivery11: new Image(),
    delivery12: new Image(),
    delivery13: new Image(),
    delivery14: new Image(),
    delivery15: new Image(),
    delivery16: new Image()
};
playerDeliveryMotions.delivery0.src = 'img/playerDelivery/playerDelivery0.png';
playerDeliveryMotions.delivery1.src = 'img/playerDelivery/playerDelivery1.png';
playerDeliveryMotions.delivery2.src = 'img/playerDelivery/playerDelivery2.png';
playerDeliveryMotions.delivery3.src = 'img/playerDelivery/playerDelivery3.png';
playerDeliveryMotions.delivery4.src = 'img/playerDelivery/playerDelivery4.png';
playerDeliveryMotions.delivery5.src = 'img/playerDelivery/playerDelivery5.png';
playerDeliveryMotions.delivery6.src = 'img/playerDelivery/playerDelivery6.png';
playerDeliveryMotions.delivery7.src = 'img/playerDelivery/playerDelivery7.png';
playerDeliveryMotions.delivery8.src = 'img/playerDelivery/playerDelivery8.png';
playerDeliveryMotions.delivery9.src = 'img/playerDelivery/playerDelivery9.png';
playerDeliveryMotions.delivery10.src = 'img/playerDelivery/playerDelivery10.png';
playerDeliveryMotions.delivery11.src = 'img/playerDelivery/playerDelivery11.png';
playerDeliveryMotions.delivery12.src = 'img/playerDelivery/playerDelivery12.png';
playerDeliveryMotions.delivery13.src = 'img/playerDelivery/playerDelivery13.png';
playerDeliveryMotions.delivery14.src = 'img/playerDelivery/playerDelivery14.png';
playerDeliveryMotions.delivery15.src = 'img/playerDelivery/playerDelivery15.png';
playerDeliveryMotions.delivery16.src = 'img/playerDelivery/playerDelivery16.png';

const playerFevers={
    fever0: new Image(),
    fever1: new Image(),
    fever2: new Image(),
    fever3: new Image(),
    fever4: new Image(),
    fever5: new Image(),
    fever6: new Image(),
    fever7: new Image(),
    fever8: new Image(),
    fever9: new Image(),
    fever10: new Image(),
    fever11: new Image(),
    fever12: new Image(),
    fever13: new Image(),
    fever14: new Image(),
    fever15: new Image(),
    fever16: new Image(),
    fever17: new Image(),
    fever18: new Image(),
    fever19: new Image(),
    fever20: new Image(),
    fever21: new Image(),
    fever22: new Image(),
    fever23: new Image(),
    fever24: new Image(),
    fever25: new Image(),
    fever26: new Image(),
    fever27: new Image(),
    fever28: new Image(),
    fever29: new Image(),
    fever30: new Image(),
    fever31: new Image(),
    fever32: new Image()
};

playerFevers.fever0.src = 'img/playerFever/Fever_00000.png';
playerFevers.fever1.src = 'img/playerFever/Fever_00001.png';
playerFevers.fever2.src = 'img/playerFever/Fever_00002.png';
playerFevers.fever3.src = 'img/playerFever/Fever_00003.png';
playerFevers.fever4.src = 'img/playerFever/Fever_00004.png';
playerFevers.fever5.src = 'img/playerFever/Fever_00005.png';
playerFevers.fever6.src = 'img/playerFever/Fever_00006.png';
playerFevers.fever7.src = 'img/playerFever/Fever_00007.png';
playerFevers.fever8.src = 'img/playerFever/Fever_00008.png';
playerFevers.fever9.src = 'img/playerFever/Fever_00009.png';
playerFevers.fever10.src = 'img/playerFever/Fever_00010.png';
playerFevers.fever11.src = 'img/playerFever/Fever_00011.png';
playerFevers.fever12.src = 'img/playerFever/Fever_00012.png';
playerFevers.fever13.src = 'img/playerFever/Fever_00013.png';
playerFevers.fever14.src = 'img/playerFever/Fever_00014.png';
playerFevers.fever15.src = 'img/playerFever/Fever_00015.png';
playerFevers.fever16.src = 'img/playerFever/Fever_00016.png';
playerFevers.fever17.src = 'img/playerFever/Fever_00017.png';
playerFevers.fever18.src = 'img/playerFever/Fever_00018.png';
playerFevers.fever19.src = 'img/playerFever/Fever_00019.png';
playerFevers.fever20.src = 'img/playerFever/Fever_00020.png';
playerFevers.fever21.src = 'img/playerFever/Fever_00021.png';
playerFevers.fever22.src = 'img/playerFever/Fever_00022.png';
playerFevers.fever23.src = 'img/playerFever/Fever_00023.png';
playerFevers.fever24.src = 'img/playerFever/Fever_00024.png';
playerFevers.fever25.src = 'img/playerFever/Fever_00025.png';
playerFevers.fever26.src = 'img/playerFever/Fever_00026.png';
playerFevers.fever27.src = 'img/playerFever/Fever_00027.png';
playerFevers.fever28.src = 'img/playerFever/Fever_00028.png';
playerFevers.fever29.src = 'img/playerFever/Fever_00029.png';
playerFevers.fever30.src = 'img/playerFever/Fever_00030.png';
playerFevers.fever31.src = 'img/playerFever/Fever_00031.png';
playerFevers.fever32.src = 'img/playerFever/Fever_00032.png';

const playerFeverDeliverys={
    feverDelivery0: new Image(),
    feverDelivery1: new Image(),
    feverDelivery2: new Image(),
    feverDelivery3: new Image(),
    feverDelivery4: new Image(),
    feverDelivery5: new Image(),
    feverDelivery6: new Image(),
    feverDelivery7: new Image(),
    feverDelivery8: new Image(),
    feverDelivery9: new Image(),
    feverDelivery10: new Image(),
    feverDelivery11: new Image(),
    feverDelivery12: new Image(),
    feverDelivery13: new Image(),
    feverDelivery14: new Image(),
    feverDelivery15: new Image(),
    feverDelivery16: new Image(),
    feverDelivery17: new Image(),
    feverDelivery18: new Image(),
    feverDelivery19: new Image(),
    feverDelivery20: new Image(),
    feverDelivery21: new Image(),
    feverDelivery22: new Image(),
    feverDelivery23: new Image(),
    feverDelivery24: new Image(),
    feverDelivery25: new Image(),
    feverDelivery26: new Image(),
    feverDelivery27: new Image(),
    feverDelivery28: new Image(),
    feverDelivery29: new Image(),
    feverDelivery30: new Image(),
    feverDelivery31: new Image(),
    feverDelivery32: new Image()
};
playerFeverDeliverys.feverDelivery0.src = 'img/playerFeverDelivery/feverDelivery_00000.png';
playerFeverDeliverys.feverDelivery1.src = 'img/playerFeverDelivery/feverDelivery_00001.png';
playerFeverDeliverys.feverDelivery2.src = 'img/playerFeverDelivery/feverDelivery_00002.png';
playerFeverDeliverys.feverDelivery3.src = 'img/playerFeverDelivery/feverDelivery_00003.png';
playerFeverDeliverys.feverDelivery4.src = 'img/playerFeverDelivery/feverDelivery_00004.png';
playerFeverDeliverys.feverDelivery5.src = 'img/playerFeverDelivery/feverDelivery_00005.png';
playerFeverDeliverys.feverDelivery6.src = 'img/playerFeverDelivery/feverDelivery_00006.png';
playerFeverDeliverys.feverDelivery7.src = 'img/playerFeverDelivery/feverDelivery_00007.png';
playerFeverDeliverys.feverDelivery8.src = 'img/playerFeverDelivery/feverDelivery_00008.png';
playerFeverDeliverys.feverDelivery9.src = 'img/playerFeverDelivery/feverDelivery_00009.png';
playerFeverDeliverys.feverDelivery10.src = 'img/playerFeverDelivery/feverDelivery_00010.png';
playerFeverDeliverys.feverDelivery11.src = 'img/playerFeverDelivery/feverDelivery_00011.png';
playerFeverDeliverys.feverDelivery12.src = 'img/playerFeverDelivery/feverDelivery_00012.png';
playerFeverDeliverys.feverDelivery13.src = 'img/playerFeverDelivery/feverDelivery_00013.png';
playerFeverDeliverys.feverDelivery14.src = 'img/playerFeverDelivery/feverDelivery_00014.png';
playerFeverDeliverys.feverDelivery15.src = 'img/playerFeverDelivery/feverDelivery_00015.png';
playerFeverDeliverys.feverDelivery16.src = 'img/playerFeverDelivery/feverDelivery_00016.png';
playerFeverDeliverys.feverDelivery17.src = 'img/playerFeverDelivery/feverDelivery_00017.png';
playerFeverDeliverys.feverDelivery18.src = 'img/playerFeverDelivery/feverDelivery_00018.png';
playerFeverDeliverys.feverDelivery19.src = 'img/playerFeverDelivery/feverDelivery_00019.png';
playerFeverDeliverys.feverDelivery20.src = 'img/playerFeverDelivery/feverDelivery_00020.png';
playerFeverDeliverys.feverDelivery21.src = 'img/playerFeverDelivery/feverDelivery_00021.png';
playerFeverDeliverys.feverDelivery22.src = 'img/playerFeverDelivery/feverDelivery_00022.png';
playerFeverDeliverys.feverDelivery23.src = 'img/playerFeverDelivery/feverDelivery_00023.png';
playerFeverDeliverys.feverDelivery24.src = 'img/playerFeverDelivery/feverDelivery_00024.png';
playerFeverDeliverys.feverDelivery25.src = 'img/playerFeverDelivery/feverDelivery_00025.png';
playerFeverDeliverys.feverDelivery26.src = 'img/playerFeverDelivery/feverDelivery_00026.png';
playerFeverDeliverys.feverDelivery27.src = 'img/playerFeverDelivery/feverDelivery_00027.png';
playerFeverDeliverys.feverDelivery28.src = 'img/playerFeverDelivery/feverDelivery_00028.png';
playerFeverDeliverys.feverDelivery29.src = 'img/playerFeverDelivery/feverDelivery_00029.png';
playerFeverDeliverys.feverDelivery30.src = 'img/playerFeverDelivery/feverDelivery_00030.png';
playerFeverDeliverys.feverDelivery31.src = 'img/playerFeverDelivery/feverDelivery_00031.png';
playerFeverDeliverys.feverDelivery32.src = 'img/playerFeverDelivery/feverDelivery_00032.png';

const playerGetItems={
    getItem0: new Image(),
    getItem1: new Image(),
    getItem2: new Image(),
    getItem3: new Image(),
    getItem4: new Image(),
    getItem5: new Image(),
    getItem6: new Image(),
    getItem7: new Image(),
    getItem8: new Image(),
    getItem9: new Image(),
    getItem10: new Image(),
    getItem11: new Image(),
    getItem12: new Image(),
    getItem13: new Image(),
    getItem14: new Image(),
    getItem15: new Image(),
    getItem16: new Image()
};
playerGetItems.getItem0.src = 'img/playerGetItem/getItem_00000.png';
playerGetItems.getItem1.src = 'img/playerGetItem/getItem_00001.png';
playerGetItems.getItem2.src = 'img/playerGetItem/getItem_00002.png';
playerGetItems.getItem3.src = 'img/playerGetItem/getItem_00003.png';
playerGetItems.getItem4.src = 'img/playerGetItem/getItem_00004.png';
playerGetItems.getItem5.src = 'img/playerGetItem/getItem_00005.png';
playerGetItems.getItem6.src = 'img/playerGetItem/getItem_00006.png';
playerGetItems.getItem7.src = 'img/playerGetItem/getItem_00007.png';
playerGetItems.getItem8.src = 'img/playerGetItem/getItem_00008.png';
playerGetItems.getItem9.src = 'img/playerGetItem/getItem_00009.png';
playerGetItems.getItem10.src = 'img/playerGetItem/getItem_00010.png';
playerGetItems.getItem11.src = 'img/playerGetItem/getItem_00011.png';
playerGetItems.getItem12.src = 'img/playerGetItem/getItem_00012.png';
playerGetItems.getItem13.src = 'img/playerGetItem/getItem_00013.png';
playerGetItems.getItem14.src = 'img/playerGetItem/getItem_00014.png';
playerGetItems.getItem15.src = 'img/playerGetItem/getItem_00015.png';
playerGetItems.getItem16.src = 'img/playerGetItem/getItem_00016.png';

const playerHurts={
    hurt0: new Image(),
    hurt1: new Image(),
    hurt2: new Image(),
    hurt3: new Image(),
    hurt4: new Image(),
    hurt5: new Image(),
    hurt6: new Image(),
    hurt7: new Image(),
    hurt8: new Image(),
    hurt9: new Image(),
    hurt10: new Image(),
    hurt11: new Image(),
    hurt12: new Image(),
    hurt13: new Image(),
    hurt14: new Image(),
    hurt15: new Image(),
    hurt16: new Image(),
    hurt17: new Image(),
    hurt18: new Image(),
    hurt19: new Image(),
    hurt20: new Image(),
    hurt21: new Image(),
    hurt22: new Image(),
    hurt23: new Image(),
    hurt24: new Image(),
    hurt25: new Image(),
    hurt26: new Image(),
    hurt27: new Image(),
    hurt28: new Image(),
    hurt29: new Image(),
    hurt30: new Image(),
    hurt31: new Image(),
    hurt32: new Image(),
    hurt33: new Image(),
    hurt34: new Image(),
    hurt35: new Image(),
    hurt36: new Image(),
    hurt37: new Image(),
    hurt38: new Image(),
    hurt39: new Image(),
    hurt40: new Image(),
    hurt41: new Image(),
    hurt42: new Image(),
    hurt43: new Image(),
    hurt44: new Image(),
    hurt45: new Image(),
    hurt46: new Image(),
    hurt47: new Image()
};
playerHurts.hurt0.src = 'img/playerHurt/hurt_000.png';
playerHurts.hurt1.src = 'img/playerHurt/hurt_001.png';
playerHurts.hurt2.src = 'img/playerHurt/hurt_002.png';
playerHurts.hurt3.src = 'img/playerHurt/hurt_003.png';
playerHurts.hurt4.src = 'img/playerHurt/hurt_004.png';
playerHurts.hurt5.src = 'img/playerHurt/hurt_005.png';
playerHurts.hurt6.src = 'img/playerHurt/hurt_006.png';
playerHurts.hurt7.src = 'img/playerHurt/hurt_007.png';
playerHurts.hurt8.src = 'img/playerHurt/hurt_008.png';
playerHurts.hurt9.src = 'img/playerHurt/hurt_009.png';
playerHurts.hurt10.src = 'img/playerHurt/hurt_010.png';
playerHurts.hurt11.src = 'img/playerHurt/hurt_011.png';
playerHurts.hurt12.src = 'img/playerHurt/hurt_012.png';
playerHurts.hurt13.src = 'img/playerHurt/hurt_013.png';
playerHurts.hurt14.src = 'img/playerHurt/hurt_014.png';
playerHurts.hurt15.src = 'img/playerHurt/hurt_015.png';
playerHurts.hurt16.src = 'img/playerHurt/hurt_016.png';
playerHurts.hurt17.src = 'img/playerHurt/hurt_017.png';
playerHurts.hurt18.src = 'img/playerHurt/hurt_018.png';
playerHurts.hurt19.src = 'img/playerHurt/hurt_019.png';
playerHurts.hurt20.src = 'img/playerHurt/hurt_020.png';
playerHurts.hurt21.src = 'img/playerHurt/hurt_021.png';
playerHurts.hurt22.src = 'img/playerHurt/hurt_022.png';
playerHurts.hurt23.src = 'img/playerHurt/hurt_023.png';
playerHurts.hurt24.src = 'img/playerHurt/hurt_024.png';
playerHurts.hurt25.src = 'img/playerHurt/hurt_025.png';
playerHurts.hurt26.src = 'img/playerHurt/hurt_026.png';
playerHurts.hurt27.src = 'img/playerHurt/hurt_027.png';
playerHurts.hurt28.src = 'img/playerHurt/hurt_028.png';
playerHurts.hurt29.src = 'img/playerHurt/hurt_029.png';
playerHurts.hurt30.src = 'img/playerHurt/hurt_030.png';
playerHurts.hurt31.src = 'img/playerHurt/hurt_031.png';
playerHurts.hurt32.src = 'img/playerHurt/hurt_032.png';
playerHurts.hurt33.src = 'img/playerHurt/hurt_033.png';
playerHurts.hurt34.src = 'img/playerHurt/hurt_034.png';
playerHurts.hurt35.src = 'img/playerHurt/hurt_035.png';
playerHurts.hurt36.src = 'img/playerHurt/hurt_036.png';
playerHurts.hurt37.src = 'img/playerHurt/hurt_037.png';
playerHurts.hurt38.src = 'img/playerHurt/hurt_038.png';
playerHurts.hurt39.src = 'img/playerHurt/hurt_039.png';
playerHurts.hurt40.src = 'img/playerHurt/hurt_040.png';
playerHurts.hurt41.src = 'img/playerHurt/hurt_041.png';
playerHurts.hurt42.src = 'img/playerHurt/hurt_042.png';
playerHurts.hurt43.src = 'img/playerHurt/hurt_043.png';
playerHurts.hurt44.src = 'img/playerHurt/hurt_044.png';
playerHurts.hurt45.src = 'img/playerHurt/hurt_045.png';
playerHurts.hurt46.src = 'img/playerHurt/hurt_046.png';
playerHurts.hurt47.src = 'img/playerHurt/hurt_047.png';

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

const player = {
    width: 50,
    height: 50,
    speed: 5,
    color: 'black',
    lives: 3,
    items: 0,
    score: 0,
    type: 'default' //default, delivery, fever, feverDelivery,getItem, hurt, retire
};

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
let playerFrame = 0
const objectwidth = 50

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
const playerlanes = [0, 0, 0];

function updateCanvasSize() {
    canvas.width = 400;
    canvas.height = 600;

    player.x = (canvas.width / 2) - (player.width / 2); // 중간위치에서 시작
    player.y = canvas.height - player.height - 10;  //캔버스 높이에서 플레이어+10만큼 뺀 높이

    // 레인 정의 0, 1, 2
    playerlanes[0] = canvas.width / 4 - player.width / 2; // 1/4에서 플레이어 반절만큼 이동
    playerlanes[1] = canvas.width / 2 - player.width / 2; // 2/4에서 플레이어 반절만큼 이동
    playerlanes[2] = (canvas.width / 4) * 3 - player.width / 2; // 3/4에서 플레이어 반절만큼 이동

    lanes[0] = canvas.width / 4 - objectwidth / 2; // 1/4에서 플레이어 반절만큼 이동
    lanes[1] = canvas.width / 2 - objectwidth / 2; // 2/4에서 플레이어 반절만큼 이동
    lanes[2] = (canvas.width / 4) * 3 - objectwidth / 2; // 3/4에서 플레이어 반절만큼 이동
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
    if (newLane >= 0 && newLane < playerlanes.length) {
        currentLane = newLane;
        player.x = playerlanes[currentLane];
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
            player.y + 10 < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y - 10
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
            
            player.type = 'hurt'
            playerFrame = 0
            setTimeout(()=>{
                player.type='default'
                playerFrame = 0
            }, 2000)

            if (player.lives === 0) gameOver = true;
            }
        else if (obstacle.type ==  'energyDrink'){
            if (player.lives < 3) player.lives += 1;
            
            player.type = 'getItem'
            playerFrame = 0
            setTimeout(()=>{
                player.type='default'
                playerFrame = 0
            }, 2000)
        }
        else if (obstacle.type == 'misfortune'){
            player.items += 1;
            if (player.items >= 10) startFeverTime();
        }
        else if (obstacle.type == 'house'){
            player.score += 100;
            player.type='delivery'
            playerFrame = 0
            
            setTimeout(()=>{
                player.type='default'
                playerFrame = 0
            }, 2000)
        }
    }else if(inFeverTime) {
        if (obstacle.type === 'house') {
            player.score += 500;

            player.type='feverDelivery'
            playerFrame = 0
            setTimeout(()=>{
                player.type='fever'
                playerFrame = 0
            }, 2000)

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

    player.type = 'fever'
    playerFrame = 0

    feverTimeStartTime = Date.now(); //지금 시간 저장
    feverTimeRemaining = feverTimeDuration; //남은시간에 10000밀리초 저장
    const originalObstacleSpeed = obstacleSpeed; //원래 스피드 따로 저장
    obstacleSpeed += 3; // 장애물 속도를 증가시킴

    feverTimeTimeout = setTimeout(() => {
        player.type = 'default'
        playerFrame = 0

        inFeverTime = false;
        obstacleSpeed = originalObstacleSpeed; // 원래 속도로 복원
    }, feverTimeRemaining);
}

//플레이어 이미지 설정
function setPlayer(){
    if(player.type == 'default'){
        player.image = playerDefaults[`default${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
    else if(player.type =='delivery'){
        player.image = playerDeliveryMotions[`delivery${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
    else if(player.type =='fever'){
        player.image = playerFevers[`fever${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
    else if(player.type =='feverDelivery'){
        player.image = playerFeverDeliverys[`feverDelivery${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
    else if(player.type =='getItem'){
        player.image = playerGetItems[`getItem${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }else if(player.type =='hurt'){
        player.image = playerHurts[`hurt${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
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
                player.type = 'default'
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
var timer2 = setInterval(setPlayer, 70);