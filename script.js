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
const gameoverMsg = document.getElementById('gameover');
const feverMsg = document.getElementById('fever');

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
playerDefaults.default0.src = 'img/playerDefault/Walk_[00000-00016]00.png';
playerDefaults.default1.src = 'img/playerDefault/Walk_[00000-00016]01.png';
playerDefaults.default2.src = 'img/playerDefault/Walk_[00000-00016]02.png';
playerDefaults.default3.src = 'img/playerDefault/Walk_[00000-00016]03.png';
playerDefaults.default4.src = 'img/playerDefault/Walk_[00000-00016]04.png';
playerDefaults.default5.src = 'img/playerDefault/Walk_[00000-00016]05.png';
playerDefaults.default6.src = 'img/playerDefault/Walk_[00000-00016]06.png';
playerDefaults.default7.src = 'img/playerDefault/Walk_[00000-00016]07.png';
playerDefaults.default8.src = 'img/playerDefault/Walk_[00000-00016]08.png';
playerDefaults.default9.src = 'img/playerDefault/Walk_[00000-00016]09.png';
playerDefaults.default10.src = 'img/playerDefault/Walk_[00000-00016]10.png';
playerDefaults.default11.src = 'img/playerDefault/Walk_[00000-00016]11.png';
playerDefaults.default12.src = 'img/playerDefault/Walk_[00000-00016]12.png';
playerDefaults.default13.src = 'img/playerDefault/Walk_[00000-00016]13.png';
playerDefaults.default14.src = 'img/playerDefault/Walk_[00000-00016]14.png';
playerDefaults.default15.src = 'img/playerDefault/Walk_[00000-00016]15.png';
playerDefaults.default16.src = 'img/playerDefault/Walk_[00000-00016]16.png';

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
playerDeliveryMotions.delivery0.src = 'img/playerDelivery/Delivery_motion_[00000-00016]00.png';
playerDeliveryMotions.delivery1.src = 'img/playerDelivery/Delivery_motion_[00000-00016]01.png';
playerDeliveryMotions.delivery2.src = 'img/playerDelivery/Delivery_motion_[00000-00016]02.png';
playerDeliveryMotions.delivery3.src = 'img/playerDelivery/Delivery_motion_[00000-00016]03.png';
playerDeliveryMotions.delivery4.src = 'img/playerDelivery/Delivery_motion_[00000-00016]04.png';
playerDeliveryMotions.delivery5.src = 'img/playerDelivery/Delivery_motion_[00000-00016]05.png';
playerDeliveryMotions.delivery6.src = 'img/playerDelivery/Delivery_motion_[00000-00016]06.png';
playerDeliveryMotions.delivery7.src = 'img/playerDelivery/Delivery_motion_[00000-00016]07.png';
playerDeliveryMotions.delivery8.src = 'img/playerDelivery/Delivery_motion_[00000-00016]08.png';
playerDeliveryMotions.delivery9.src = 'img/playerDelivery/Delivery_motion_[00000-00016]09.png';
playerDeliveryMotions.delivery10.src = 'img/playerDelivery/Delivery_motion_[00000-00016]10.png';
playerDeliveryMotions.delivery11.src = 'img/playerDelivery/Delivery_motion_[00000-00016]11.png';
playerDeliveryMotions.delivery12.src = 'img/playerDelivery/Delivery_motion_[00000-00016]12.png';
playerDeliveryMotions.delivery13.src = 'img/playerDelivery/Delivery_motion_[00000-00016]13.png';
playerDeliveryMotions.delivery14.src = 'img/playerDelivery/Delivery_motion_[00000-00016]14.png';
playerDeliveryMotions.delivery15.src = 'img/playerDelivery/Delivery_motion_[00000-00016]15.png';
playerDeliveryMotions.delivery16.src = 'img/playerDelivery/Delivery_motion_[00000-00016]16.png';

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

playerFevers.fever0.src = 'img/playerFever/Fever_0000500.png';
playerFevers.fever1.src = 'img/playerFever/Fever_0000501.png';
playerFevers.fever2.src = 'img/playerFever/Fever_0000502.png';
playerFevers.fever3.src = 'img/playerFever/Fever_0000503.png';
playerFevers.fever4.src = 'img/playerFever/Fever_0000504.png';
playerFevers.fever5.src = 'img/playerFever/Fever_0000505.png';
playerFevers.fever6.src = 'img/playerFever/Fever_0000506.png';
playerFevers.fever7.src = 'img/playerFever/Fever_0000507.png';
playerFevers.fever8.src = 'img/playerFever/Fever_0000508.png';
playerFevers.fever9.src = 'img/playerFever/Fever_0000509.png';
playerFevers.fever10.src = 'img/playerFever/Fever_0000510.png';
playerFevers.fever11.src = 'img/playerFever/Fever_0000511.png';
playerFevers.fever12.src = 'img/playerFever/Fever_0000512.png';
playerFevers.fever13.src = 'img/playerFever/Fever_0000513.png';
playerFevers.fever14.src = 'img/playerFever/Fever_0000514.png';
playerFevers.fever15.src = 'img/playerFever/Fever_0000515.png';
playerFevers.fever16.src = 'img/playerFever/Fever_0000516.png';
playerFevers.fever17.src = 'img/playerFever/Fever_0000517.png';
playerFevers.fever18.src = 'img/playerFever/Fever_0000518.png';
playerFevers.fever19.src = 'img/playerFever/Fever_0000519.png';
playerFevers.fever20.src = 'img/playerFever/Fever_0000520.png';
playerFevers.fever21.src = 'img/playerFever/Fever_0000521.png';
playerFevers.fever22.src = 'img/playerFever/Fever_0000522.png';
playerFevers.fever23.src = 'img/playerFever/Fever_0000523.png';
playerFevers.fever24.src = 'img/playerFever/Fever_0000524.png';
playerFevers.fever25.src = 'img/playerFever/Fever_0000525.png';
playerFevers.fever26.src = 'img/playerFever/Fever_0000526.png';
playerFevers.fever27.src = 'img/playerFever/Fever_0000527.png';
playerFevers.fever28.src = 'img/playerFever/Fever_0000528.png';
playerFevers.fever29.src = 'img/playerFever/Fever_0000529.png';
playerFevers.fever30.src = 'img/playerFever/Fever_0000530.png';
playerFevers.fever31.src = 'img/playerFever/Fever_0000531.png';
playerFevers.fever32.src = 'img/playerFever/Fever_0000532.png';

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
playerFeverDeliverys.feverDelivery0.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]00.png';
playerFeverDeliverys.feverDelivery1.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]01.png';
playerFeverDeliverys.feverDelivery2.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]02.png';
playerFeverDeliverys.feverDelivery3.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]03.png';
playerFeverDeliverys.feverDelivery4.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]04.png';
playerFeverDeliverys.feverDelivery5.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]05.png';
playerFeverDeliverys.feverDelivery6.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]06.png';
playerFeverDeliverys.feverDelivery7.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]07.png';
playerFeverDeliverys.feverDelivery8.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]08.png';
playerFeverDeliverys.feverDelivery9.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]09.png';
playerFeverDeliverys.feverDelivery10.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]10.png';
playerFeverDeliverys.feverDelivery11.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]11.png';
playerFeverDeliverys.feverDelivery12.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]12.png';
playerFeverDeliverys.feverDelivery13.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]13.png';
playerFeverDeliverys.feverDelivery14.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]14.png';
playerFeverDeliverys.feverDelivery15.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]15.png';
playerFeverDeliverys.feverDelivery16.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]16.png';
playerFeverDeliverys.feverDelivery17.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]17.png';
playerFeverDeliverys.feverDelivery18.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]18.png';
playerFeverDeliverys.feverDelivery19.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]19.png';
playerFeverDeliverys.feverDelivery20.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]20.png';
playerFeverDeliverys.feverDelivery21.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]21.png';
playerFeverDeliverys.feverDelivery22.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]22.png';
playerFeverDeliverys.feverDelivery23.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]23.png';
playerFeverDeliverys.feverDelivery24.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]24.png';
playerFeverDeliverys.feverDelivery25.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]25.png';
playerFeverDeliverys.feverDelivery26.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]26.png';
playerFeverDeliverys.feverDelivery27.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]27.png';
playerFeverDeliverys.feverDelivery28.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]28.png';
playerFeverDeliverys.feverDelivery29.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]29.png';
playerFeverDeliverys.feverDelivery30.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]30.png';
playerFeverDeliverys.feverDelivery31.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]31.png';
playerFeverDeliverys.feverDelivery32.src = 'img/playerFeverDelivery/Fever_delivery_[00000-00032]32.png';

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
playerGetItems.getItem0.src = 'img/playerGetItem/Get_item_[00000-00016]00.png';
playerGetItems.getItem1.src = 'img/playerGetItem/Get_item_[00000-00016]01.png';
playerGetItems.getItem2.src = 'img/playerGetItem/Get_item_[00000-00016]02.png';
playerGetItems.getItem3.src = 'img/playerGetItem/Get_item_[00000-00016]03.png';
playerGetItems.getItem4.src = 'img/playerGetItem/Get_item_[00000-00016]04.png';
playerGetItems.getItem5.src = 'img/playerGetItem/Get_item_[00000-00016]05.png';
playerGetItems.getItem6.src = 'img/playerGetItem/Get_item_[00000-00016]06.png';
playerGetItems.getItem7.src = 'img/playerGetItem/Get_item_[00000-00016]07.png';
playerGetItems.getItem8.src = 'img/playerGetItem/Get_item_[00000-00016]08.png';
playerGetItems.getItem9.src = 'img/playerGetItem/Get_item_[00000-00016]09.png';
playerGetItems.getItem10.src = 'img/playerGetItem/Get_item_[00000-00016]10.png';
playerGetItems.getItem11.src = 'img/playerGetItem/Get_item_[00000-00016]11.png';
playerGetItems.getItem12.src = 'img/playerGetItem/Get_item_[00000-00016]12.png';
playerGetItems.getItem13.src = 'img/playerGetItem/Get_item_[00000-00016]13.png';
playerGetItems.getItem14.src = 'img/playerGetItem/Get_item_[00000-00016]14.png';
playerGetItems.getItem15.src = 'img/playerGetItem/Get_item_[00000-00016]15.png';
playerGetItems.getItem16.src = 'img/playerGetItem/Get_item_[00000-00016]16.png';

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
playerHurts.hurt0.src = 'img/playerHurt/New_Hurt_[00003-00050]00.png';
playerHurts.hurt1.src = 'img/playerHurt/New_Hurt_[00003-00050]01.png';
playerHurts.hurt2.src = 'img/playerHurt/New_Hurt_[00003-00050]02.png';
playerHurts.hurt3.src = 'img/playerHurt/New_Hurt_[00003-00050]03.png';
playerHurts.hurt4.src = 'img/playerHurt/New_Hurt_[00003-00050]04.png';
playerHurts.hurt5.src = 'img/playerHurt/New_Hurt_[00003-00050]05.png';
playerHurts.hurt6.src = 'img/playerHurt/New_Hurt_[00003-00050]06.png';
playerHurts.hurt7.src = 'img/playerHurt/New_Hurt_[00003-00050]07.png';
playerHurts.hurt8.src = 'img/playerHurt/New_Hurt_[00003-00050]08.png';
playerHurts.hurt9.src = 'img/playerHurt/New_Hurt_[00003-00050]09.png';
playerHurts.hurt10.src = 'img/playerHurt/New_Hurt_[00003-00050]10.png';
playerHurts.hurt11.src = 'img/playerHurt/New_Hurt_[00003-00050]11.png';
playerHurts.hurt12.src = 'img/playerHurt/New_Hurt_[00003-00050]12.png';
playerHurts.hurt13.src = 'img/playerHurt/New_Hurt_[00003-00050]13.png';
playerHurts.hurt14.src = 'img/playerHurt/New_Hurt_[00003-00050]14.png';
playerHurts.hurt15.src = 'img/playerHurt/New_Hurt_[00003-00050]15.png';
playerHurts.hurt16.src = 'img/playerHurt/New_Hurt_[00003-00050]16.png';
playerHurts.hurt17.src = 'img/playerHurt/New_Hurt_[00003-00050]17.png';
playerHurts.hurt18.src = 'img/playerHurt/New_Hurt_[00003-00050]18.png';
playerHurts.hurt19.src = 'img/playerHurt/New_Hurt_[00003-00050]19.png';
playerHurts.hurt20.src = 'img/playerHurt/New_Hurt_[00003-00050]20.png';
playerHurts.hurt21.src = 'img/playerHurt/New_Hurt_[00003-00050]21.png';
playerHurts.hurt22.src = 'img/playerHurt/New_Hurt_[00003-00050]22.png';
playerHurts.hurt23.src = 'img/playerHurt/New_Hurt_[00003-00050]23.png';
playerHurts.hurt24.src = 'img/playerHurt/New_Hurt_[00003-00050]24.png';
playerHurts.hurt25.src = 'img/playerHurt/New_Hurt_[00003-00050]25.png';
playerHurts.hurt26.src = 'img/playerHurt/New_Hurt_[00003-00050]26.png';
playerHurts.hurt27.src = 'img/playerHurt/New_Hurt_[00003-00050]27.png';
playerHurts.hurt28.src = 'img/playerHurt/New_Hurt_[00003-00050]28.png';
playerHurts.hurt29.src = 'img/playerHurt/New_Hurt_[00003-00050]29.png';
playerHurts.hurt30.src = 'img/playerHurt/New_Hurt_[00003-00050]30.png';
playerHurts.hurt31.src = 'img/playerHurt/New_Hurt_[00003-00050]31.png';
playerHurts.hurt32.src = 'img/playerHurt/New_Hurt_[00003-00050]32.png';
playerHurts.hurt33.src = 'img/playerHurt/New_Hurt_[00003-00050]33.png';
playerHurts.hurt34.src = 'img/playerHurt/New_Hurt_[00003-00050]34.png';
playerHurts.hurt35.src = 'img/playerHurt/New_Hurt_[00003-00050]35.png';
playerHurts.hurt36.src = 'img/playerHurt/New_Hurt_[00003-00050]36.png';
playerHurts.hurt37.src = 'img/playerHurt/New_Hurt_[00003-00050]37.png';
playerHurts.hurt38.src = 'img/playerHurt/New_Hurt_[00003-00050]38.png';
playerHurts.hurt39.src = 'img/playerHurt/New_Hurt_[00003-00050]39.png';
playerHurts.hurt40.src = 'img/playerHurt/New_Hurt_[00003-00050]40.png';
playerHurts.hurt41.src = 'img/playerHurt/New_Hurt_[00003-00050]41.png';
playerHurts.hurt42.src = 'img/playerHurt/New_Hurt_[00003-00050]42.png';
playerHurts.hurt43.src = 'img/playerHurt/New_Hurt_[00003-00050]43.png';
playerHurts.hurt44.src = 'img/playerHurt/New_Hurt_[00003-00050]44.png';
playerHurts.hurt45.src = 'img/playerHurt/New_Hurt_[00003-00050]45.png';
playerHurts.hurt46.src = 'img/playerHurt/New_Hurt_[00003-00050]46.png';
playerHurts.hurt47.src = 'img/playerHurt/New_Hurt_[00003-00050]47.png';

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

const frameImg = new Image();
frameImg.src = 'img/frame.png';

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
const playerwidth = 130;
const objectwidth = 70;
const lanes = [0, 0, 0];
const playerlanes = [0, 0, 0];
const playerFrameTime = 2000

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

const player = {
    width: playerwidth,
    height: playerwidth,
    speed: 5,
    color: 'black',
    lives: 3,
    items: 0,
    score: 0,
    lastType: 'default', //default, delivery, fever, feverDelivery,getItem, hurt, retire
    type: 'default' //default, delivery, fever, feverDelivery,getItem, hurt, retire
};


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
                    width: objectwidth,
                    height: objectwidth,
                    type: t,
                    image: objectImages[t]
                });
            } else if (type == 'misfortune'){
                obstacles.push({
                    x: lanes[lane],
                    y: 0,
                    width: objectwidth,
                    height: objectwidth,
                    type: type,
                    image: objectImages[type]
                });
            }else {
                obstacles.push({
                    x: lanes[lane],
                    y: 0,
                    width: objectwidth,
                    height: objectwidth,
                    type: type[0],
                    image: objectImages[type[0] === 'obstacle' ? obstacleList[Math.floor(Math.random() * 3)] : 'house']
                });
                obstacles.push({
                    x: lanes[(lane === 2) ? 0 : lane + 1],
                    y: 0,
                    width: objectwidth,
                    height: objectwidth,
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
            player.y + 30 < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y + 20
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
            setTimeout(()=>{
                if(player.lastType == 'hurt')
                    player.type='default'
                
            }, playerFrameTime)

            if (player.lives === 0) gameOver = true;
            }
        else if (obstacle.type ==  'energyDrink'){
            if (player.lives < 3) player.lives += 1;
            
            player.type = 'getItem'
            setTimeout(()=>{
                if(player.lastType == 'getItem')
                    player.type='default'
            }, playerFrameTime)
        }
        else if (obstacle.type == 'misfortune'){
            player.items += 1;
            if (player.items >= 10) startFeverTime();
        }
        else if (obstacle.type == 'house'){
            player.score += 100;
            player.type='delivery'
            
            setTimeout(()=>{
                if(player.lastType == 'delivery')
                    player.type='default'
            }, playerFrameTime)
        }
    }else if(inFeverTime) {
        if (obstacle.type === 'house') {
            player.score += 500;

            player.type='feverDelivery'
            setTimeout(()=>{
                if(player.lastType == 'feverDelivery')
                    player.type='fever'
            }, playerFrameTime)

        }else if (obstacle.type == 'obstacle'){ // (피버) 장애물 파괴시 50
            player.score += 50;
        }
    }else if(emergency){
        if (obstacle.type == 'correct'){
            console.log("correct")
            player.score += 300;

            player.type='delivery'
            setTimeout(()=>{
                if(player.lastType == 'delivery')
                    player.type='default'
            }, playerFrameTime)

        } else {
            console.log("incorrect")
            player.lives -= 1;
            if (player.lives === 0) gameOver = true;

            player.type = 'hurt'
            setTimeout(()=>{
                if(player.lastType == 'hurt')
                    player.type='default'
            }, 1500)
        }
    }
}

// 피버타임 시작
function startFeverTime() {
    inFeverTime = true;
    player.type = 'fever'

    player.items = 0;
    feverMsg.style.display = 'block';

    feverTimeStartTime = Date.now(); //지금 시간 저장
    feverTimeRemaining = feverTimeDuration; //남은시간에 10000밀리초 저장
    const originalObstacleSpeed = obstacleSpeed; //원래 스피드 따로 저장
    obstacleSpeed += 3; // 장애물 속도를 증가시킴

    feverTimeTimeout = setTimeout(() => {
        player.type = 'default'
        feverMsg.style.display = 'none';

        inFeverTime = false;
        obstacleSpeed = originalObstacleSpeed; // 원래 속도로 복원
    }, feverTimeRemaining);
}

//플레이어 이미지 설정
function setPlayer(){
    console.log(player.type)
    if(player.lastType != player.type){
        playerFrame = 0
        player.lastType = player.type
    }
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
    ctx.drawImage(frameImg, canvas.width / 2 - objectwidth / 2, canvas.height / 2 - objectwidth/2, objectwidth, objectwidth);
    ctx.drawImage(objectImages[houseList[answer]], canvas.width / 2 - objectwidth / 2, canvas.height / 2 - objectwidth/2, objectwidth, objectwidth);

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
        gameoverMsg.style.display = 'block';
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(!emergency){
        countEmergency();
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
                feverMsg.style.display = 'none';
                player.type = 'default'
                obstacleSpeed = originalObstacleSpeed; // 원래 속도로 복원
                inFeverTime = false;
            }, feverTimeRemaining);
        }
        gameLoop();
    }
});

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

// 돌발상황 세트
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

// 돌발상황 오브젝트 생성
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
        width: objectwidth,
        height: objectwidth,
        type: 'correct',
        image: objectImages[houseList[answer]]
    })
    obstacles.push({    // 정답 아님1
        x: lanes[(lane === 2) ? 0 : lane + 1],
        y: 0,
        width: objectwidth,
        height: objectwidth,
        type: 'incorrect',
        image: objectImages[houseList[a]]
    })
    obstacles.push({    // 정답 아님1
        x: lanes[(lane === 0) ? 2 : lane -1],
        y: 0,
        width: objectwidth,
        height: objectwidth,
        type: 'incorrect',
        image: objectImages[houseList[b]]
    })
}

var timer1 = setInterval(createObstacle, 800);
var timer2 = setInterval(setPlayer, 70);