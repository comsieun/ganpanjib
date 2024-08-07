const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
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

const playerRetires={
    retire0: new Image(),
    retire1: new Image(),
    retire2: new Image(),
    retire3: new Image(),
    retire4: new Image(),
    retire5: new Image(),
    retire6: new Image(),
    retire7: new Image(),
    retire8: new Image(),
    retire9: new Image(),
    retire10: new Image(),
    retire11: new Image(),
    retire12: new Image(),
    retire13: new Image(),
    retire14: new Image(),
    retire15: new Image(),
    retire16: new Image(),
    retire17: new Image(),
    retire18: new Image(),
    retire19: new Image(),
    retire20: new Image(),
    retire21: new Image(),
    retire22: new Image(),
    retire23: new Image(),
    retire24: new Image(),
    retire25: new Image(),
    retire26: new Image(),
    retire27: new Image(),
    retire28: new Image(),
    retire29: new Image(),
    retire30: new Image(),
    retire31: new Image(),
    retire32: new Image(),
    retire33: new Image(),
    retire34: new Image(),
    retire35: new Image(),
    retire36: new Image(),
    retire37: new Image(),
    retire38: new Image(),
    retire39: new Image(),
    retire40: new Image(),
    retire41: new Image(),
    retire42: new Image(),
    retire43: new Image(),
    retire44: new Image(),
    retire45: new Image(),
    retire46: new Image(),
    retire47: new Image(),
    retire48: new Image(),
    retire49: new Image(),
    retire50: new Image(),
    retire51: new Image(),
    retire52: new Image(),
    retire53: new Image(),
    retire54: new Image(),
    retire55: new Image(),
    retire56: new Image(),
    retire57: new Image(),
    retire58: new Image(),
    retire59: new Image(),
    retire60: new Image(),
    retire61: new Image(),
    retire62: new Image(),
    retire63: new Image(),
    retire64: new Image(),
    retire65: new Image(),
    retire66: new Image(),
    retire67: new Image(),
    retire68: new Image(),
    retire69: new Image(),
    retire70: new Image(),
    retire71: new Image(),
    retire72: new Image(),
    retire73: new Image(),
    retire74: new Image(),
    retire75: new Image(),
    retire76: new Image(),
    retire77: new Image(),
    retire78: new Image(),
    retire79: new Image(),
    retire80: new Image(),
    retire81: new Image(),
    retire82: new Image(),
    retire83: new Image(),
    retire84: new Image(),
    retire85: new Image(),
    retire86: new Image(),
    retire87: new Image(),
    retire88: new Image(),
    retire89: new Image(),
    retire90: new Image(),
    retire91: new Image(),
    retire92: new Image(),
    retire93: new Image(),
    retire94: new Image(),
    retire95: new Image(),
    retire96: new Image(),
    retire97: new Image(),
    retire98: new Image(),
    retire99: new Image(),
    retire100: new Image(),
    retire101: new Image(),
    retire102: new Image(),
    retire103: new Image(),
    retire104: new Image(),
    retire105: new Image(),
    retire106: new Image(),
    retire107: new Image(),
    retire108: new Image(),
    retire109: new Image(),
    retire110: new Image(),
    retire111: new Image(),
    retire112: new Image(),
    retire113: new Image(),
    retire114: new Image(),
    retire115: new Image(),
    retire116: new Image(),
    retire117: new Image(),
    retire118: new Image(),
    retire119: new Image()
}
playerRetires.retire0.src = 'img/playerRetire/New_Retire_[00000-00119]000.png';
playerRetires.retire1.src = 'img/playerRetire/New_Retire_[00000-00119]001.png';
playerRetires.retire2.src = 'img/playerRetire/New_Retire_[00000-00119]002.png';
playerRetires.retire3.src = 'img/playerRetire/New_Retire_[00000-00119]003.png';
playerRetires.retire4.src = 'img/playerRetire/New_Retire_[00000-00119]004.png';
playerRetires.retire5.src = 'img/playerRetire/New_Retire_[00000-00119]005.png';
playerRetires.retire6.src = 'img/playerRetire/New_Retire_[00000-00119]006.png';
playerRetires.retire7.src = 'img/playerRetire/New_Retire_[00000-00119]007.png';
playerRetires.retire8.src = 'img/playerRetire/New_Retire_[00000-00119]008.png';
playerRetires.retire9.src = 'img/playerRetire/New_Retire_[00000-00119]009.png';
playerRetires.retire10.src = 'img/playerRetire/New_Retire_[00000-00119]010.png';
playerRetires.retire11.src = 'img/playerRetire/New_Retire_[00000-00119]011.png';
playerRetires.retire12.src = 'img/playerRetire/New_Retire_[00000-00119]012.png';
playerRetires.retire13.src = 'img/playerRetire/New_Retire_[00000-00119]013.png';
playerRetires.retire14.src = 'img/playerRetire/New_Retire_[00000-00119]014.png';
playerRetires.retire15.src = 'img/playerRetire/New_Retire_[00000-00119]015.png';
playerRetires.retire16.src = 'img/playerRetire/New_Retire_[00000-00119]016.png';
playerRetires.retire17.src = 'img/playerRetire/New_Retire_[00000-00119]017.png';
playerRetires.retire18.src = 'img/playerRetire/New_Retire_[00000-00119]018.png';
playerRetires.retire19.src = 'img/playerRetire/New_Retire_[00000-00119]019.png';
playerRetires.retire20.src = 'img/playerRetire/New_Retire_[00000-00119]020.png';
playerRetires.retire21.src = 'img/playerRetire/New_Retire_[00000-00119]021.png';
playerRetires.retire22.src = 'img/playerRetire/New_Retire_[00000-00119]022.png';
playerRetires.retire23.src = 'img/playerRetire/New_Retire_[00000-00119]023.png';
playerRetires.retire24.src = 'img/playerRetire/New_Retire_[00000-00119]024.png';
playerRetires.retire25.src = 'img/playerRetire/New_Retire_[00000-00119]025.png';
playerRetires.retire26.src = 'img/playerRetire/New_Retire_[00000-00119]026.png';
playerRetires.retire27.src = 'img/playerRetire/New_Retire_[00000-00119]027.png';
playerRetires.retire28.src = 'img/playerRetire/New_Retire_[00000-00119]028.png';
playerRetires.retire29.src = 'img/playerRetire/New_Retire_[00000-00119]029.png';
playerRetires.retire30.src = 'img/playerRetire/New_Retire_[00000-00119]030.png';
playerRetires.retire31.src = 'img/playerRetire/New_Retire_[00000-00119]031.png';
playerRetires.retire32.src = 'img/playerRetire/New_Retire_[00000-00119]032.png';
playerRetires.retire33.src = 'img/playerRetire/New_Retire_[00000-00119]033.png';
playerRetires.retire34.src = 'img/playerRetire/New_Retire_[00000-00119]034.png';
playerRetires.retire35.src = 'img/playerRetire/New_Retire_[00000-00119]035.png';
playerRetires.retire36.src = 'img/playerRetire/New_Retire_[00000-00119]036.png';
playerRetires.retire37.src = 'img/playerRetire/New_Retire_[00000-00119]037.png';
playerRetires.retire38.src = 'img/playerRetire/New_Retire_[00000-00119]038.png';
playerRetires.retire39.src = 'img/playerRetire/New_Retire_[00000-00119]039.png';
playerRetires.retire40.src = 'img/playerRetire/New_Retire_[00000-00119]040.png';
playerRetires.retire41.src = 'img/playerRetire/New_Retire_[00000-00119]041.png';
playerRetires.retire42.src = 'img/playerRetire/New_Retire_[00000-00119]042.png';
playerRetires.retire43.src = 'img/playerRetire/New_Retire_[00000-00119]043.png';
playerRetires.retire44.src = 'img/playerRetire/New_Retire_[00000-00119]044.png';
playerRetires.retire45.src = 'img/playerRetire/New_Retire_[00000-00119]045.png';
playerRetires.retire46.src = 'img/playerRetire/New_Retire_[00000-00119]046.png';
playerRetires.retire47.src = 'img/playerRetire/New_Retire_[00000-00119]047.png';
playerRetires.retire48.src = 'img/playerRetire/New_Retire_[00000-00119]048.png';
playerRetires.retire49.src = 'img/playerRetire/New_Retire_[00000-00119]049.png';
playerRetires.retire50.src = 'img/playerRetire/New_Retire_[00000-00119]050.png';
playerRetires.retire51.src = 'img/playerRetire/New_Retire_[00000-00119]051.png';
playerRetires.retire52.src = 'img/playerRetire/New_Retire_[00000-00119]052.png';
playerRetires.retire53.src = 'img/playerRetire/New_Retire_[00000-00119]053.png';
playerRetires.retire54.src = 'img/playerRetire/New_Retire_[00000-00119]054.png';
playerRetires.retire55.src = 'img/playerRetire/New_Retire_[00000-00119]055.png';
playerRetires.retire56.src = 'img/playerRetire/New_Retire_[00000-00119]056.png';
playerRetires.retire57.src = 'img/playerRetire/New_Retire_[00000-00119]057.png';
playerRetires.retire58.src = 'img/playerRetire/New_Retire_[00000-00119]058.png';
playerRetires.retire59.src = 'img/playerRetire/New_Retire_[00000-00119]059.png';
playerRetires.retire60.src = 'img/playerRetire/New_Retire_[00000-00119]060.png';
playerRetires.retire61.src = 'img/playerRetire/New_Retire_[00000-00119]061.png';
playerRetires.retire62.src = 'img/playerRetire/New_Retire_[00000-00119]062.png';
playerRetires.retire63.src = 'img/playerRetire/New_Retire_[00000-00119]063.png';
playerRetires.retire64.src = 'img/playerRetire/New_Retire_[00000-00119]064.png';
playerRetires.retire65.src = 'img/playerRetire/New_Retire_[00000-00119]065.png';
playerRetires.retire66.src = 'img/playerRetire/New_Retire_[00000-00119]066.png';
playerRetires.retire67.src = 'img/playerRetire/New_Retire_[00000-00119]067.png';
playerRetires.retire68.src = 'img/playerRetire/New_Retire_[00000-00119]068.png';
playerRetires.retire69.src = 'img/playerRetire/New_Retire_[00000-00119]069.png';
playerRetires.retire70.src = 'img/playerRetire/New_Retire_[00000-00119]070.png';
playerRetires.retire71.src = 'img/playerRetire/New_Retire_[00000-00119]071.png';
playerRetires.retire72.src = 'img/playerRetire/New_Retire_[00000-00119]072.png';
playerRetires.retire73.src = 'img/playerRetire/New_Retire_[00000-00119]073.png';
playerRetires.retire74.src = 'img/playerRetire/New_Retire_[00000-00119]074.png';
playerRetires.retire75.src = 'img/playerRetire/New_Retire_[00000-00119]075.png';
playerRetires.retire76.src = 'img/playerRetire/New_Retire_[00000-00119]076.png';
playerRetires.retire77.src = 'img/playerRetire/New_Retire_[00000-00119]077.png';
playerRetires.retire78.src = 'img/playerRetire/New_Retire_[00000-00119]078.png';
playerRetires.retire79.src = 'img/playerRetire/New_Retire_[00000-00119]079.png';
playerRetires.retire80.src = 'img/playerRetire/New_Retire_[00000-00119]080.png';
playerRetires.retire81.src = 'img/playerRetire/New_Retire_[00000-00119]081.png';
playerRetires.retire82.src = 'img/playerRetire/New_Retire_[00000-00119]082.png';
playerRetires.retire83.src = 'img/playerRetire/New_Retire_[00000-00119]083.png';
playerRetires.retire84.src = 'img/playerRetire/New_Retire_[00000-00119]084.png';
playerRetires.retire85.src = 'img/playerRetire/New_Retire_[00000-00119]085.png';
playerRetires.retire86.src = 'img/playerRetire/New_Retire_[00000-00119]086.png';
playerRetires.retire87.src = 'img/playerRetire/New_Retire_[00000-00119]087.png';
playerRetires.retire88.src = 'img/playerRetire/New_Retire_[00000-00119]088.png';
playerRetires.retire89.src = 'img/playerRetire/New_Retire_[00000-00119]089.png';
playerRetires.retire90.src = 'img/playerRetire/New_Retire_[00000-00119]090.png';
playerRetires.retire91.src = 'img/playerRetire/New_Retire_[00000-00119]091.png';
playerRetires.retire92.src = 'img/playerRetire/New_Retire_[00000-00119]092.png';
playerRetires.retire93.src = 'img/playerRetire/New_Retire_[00000-00119]093.png';
playerRetires.retire94.src = 'img/playerRetire/New_Retire_[00000-00119]094.png';
playerRetires.retire95.src = 'img/playerRetire/New_Retire_[00000-00119]095.png';
playerRetires.retire96.src = 'img/playerRetire/New_Retire_[00000-00119]096.png';
playerRetires.retire97.src = 'img/playerRetire/New_Retire_[00000-00119]097.png';
playerRetires.retire98.src = 'img/playerRetire/New_Retire_[00000-00119]098.png';
playerRetires.retire99.src = 'img/playerRetire/New_Retire_[00000-00119]099.png';
playerRetires.retire100.src = 'img/playerRetire/New_Retire_[00000-00119]100.png';
playerRetires.retire101.src = 'img/playerRetire/New_Retire_[00000-00119]101.png';
playerRetires.retire102.src = 'img/playerRetire/New_Retire_[00000-00119]102.png';
playerRetires.retire103.src = 'img/playerRetire/New_Retire_[00000-00119]103.png';
playerRetires.retire104.src = 'img/playerRetire/New_Retire_[00000-00119]104.png';
playerRetires.retire105.src = 'img/playerRetire/New_Retire_[00000-00119]105.png';
playerRetires.retire106.src = 'img/playerRetire/New_Retire_[00000-00119]106.png';
playerRetires.retire107.src = 'img/playerRetire/New_Retire_[00000-00119]107.png';
playerRetires.retire108.src = 'img/playerRetire/New_Retire_[00000-00119]108.png';
playerRetires.retire109.src = 'img/playerRetire/New_Retire_[00000-00119]109.png';
playerRetires.retire110.src = 'img/playerRetire/New_Retire_[00000-00119]110.png';
playerRetires.retire111.src = 'img/playerRetire/New_Retire_[00000-00119]111.png';
playerRetires.retire112.src = 'img/playerRetire/New_Retire_[00000-00119]112.png';
playerRetires.retire113.src = 'img/playerRetire/New_Retire_[00000-00119]113.png';
playerRetires.retire114.src = 'img/playerRetire/New_Retire_[00000-00119]114.png';
playerRetires.retire115.src = 'img/playerRetire/New_Retire_[00000-00119]115.png';
playerRetires.retire116.src = 'img/playerRetire/New_Retire_[00000-00119]116.png';
playerRetires.retire117.src = 'img/playerRetire/New_Retire_[00000-00119]117.png';
playerRetires.retire118.src = 'img/playerRetire/New_Retire_[00000-00119]118.png';
playerRetires.retire119.src = 'img/playerRetire/New_Retire_[00000-00119]119.png';

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
const frameText = new Image();
frameImg.src = 'img/frame.png';
frameText.src = 'img/frameText.png';

const heart = new Image();
const emptyheart= new Image();
const scoreBackground = new Image();
const misfortuneBackground = new Image();

heart.src = 'img/heart.png';
emptyheart.src = 'img/heartEmpty.png';
scoreBackground.src = 'img/scoreBackground.png';
misfortuneBackground.src = 'img/misfortuneBackground.png';

const heartwidth = 40

const misfortunewidth = 77
const misfortuneheigh = 70

const scorewidth = 152
const scoreheigh = 60

const playerwidth = 130;
const objectwidth = 70;

const frameWidth = objectwidth+70
const frameTextWidth = 200
const frameTextHeigh = 40
const answerWidth = objectwidth+20

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
let houseCount = 0


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
            houseCount += 1;
            player.score += 100;
            player.type='delivery'
            
            setTimeout(()=>{
                if(player.lastType == 'delivery')
                    player.type='default'
            }, playerFrameTime)
        }
    }else if(inFeverTime) {
        if (obstacle.type === 'house') {
            houseCount += 1;
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
            houseCount += 1;
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
    }else if(player.type =='retire'){
        player.image = playerRetires[`retire${playerFrame}`]
        playerFrame += 1
    }
}
// 플레이어 그려줌
function drawPlayer() {
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
}



function drawAnswer(answer) {
    ctx.drawImage(frameText, canvas.width / 2 - frameTextWidth/2 , canvas.height / 2 -( frameWidth/2 +frameTextHeigh*1.5), frameTextWidth, frameTextHeigh);
    ctx.drawImage(frameImg, canvas.width / 2 - frameWidth/2 , canvas.height / 2 - frameWidth/2, frameWidth, frameWidth);
    ctx.drawImage(objectImages[houseList[answer]], canvas.width / 2 - answerWidth / 2, canvas.height / 2 - answerWidth/2, answerWidth, answerWidth);

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
    if(player.lives==0){
        ctx.drawImage(emptyheart, canvas.width / 2 - heartwidth/2 - heartwidth , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(emptyheart, canvas.width / 2 - heartwidth/2 , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(emptyheart, canvas.width / 2 - heartwidth/2 + heartwidth, scoreheigh , heartwidth, heartwidth);
    }else if(player.lives==1){
        ctx.drawImage(heart, canvas.width / 2 - heartwidth/2 - heartwidth , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(emptyheart, canvas.width / 2 - heartwidth/2 , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(emptyheart, canvas.width / 2 - heartwidth/2 + heartwidth, scoreheigh , heartwidth, heartwidth);
    }else if(player.lives==2){
        ctx.drawImage(heart, canvas.width / 2 - heartwidth/2 - heartwidth , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(heart, canvas.width / 2 - heartwidth/2 , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(emptyheart, canvas.width / 2 - heartwidth/2 + heartwidth, scoreheigh , heartwidth, heartwidth);
    }else if(player.lives==3){
        ctx.drawImage(heart, canvas.width / 2 - heartwidth/2 - heartwidth , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(heart, canvas.width / 2 - heartwidth/2 , scoreheigh , heartwidth, heartwidth);
        ctx.drawImage(heart, canvas.width / 2 - heartwidth/2 + heartwidth, scoreheigh , heartwidth, heartwidth);
    }

    ctx.drawImage(scoreBackground, canvas.width / 2 - scorewidth/2, 0 , scorewidth, scoreheigh);
    ctx.drawImage(misfortuneBackground, 10, 10 , misfortunewidth, misfortuneheigh);

    ctx.font = '20px Bagel Fat One';
    ctx.textAlign = "center"
    ctx.fillText(`${player.items}`, 10+misfortunewidth/2, 20+misfortuneheigh/2);
    ctx.fillText(`${player.score}`, canvas.width / 2 , 5+scoreheigh / 2);
}

//기본 실행 함수
function gameLoop() {
    if (!gameStarted || gamePaused) return;

    if (gameOver) {
        gameoverMsg.style.display = 'block';
        player.type = 'retire'
        retired()
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
        emergencyCount = 60
        // console.log("돌발 상황 시작")
        startEmergency()
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

// 끝!!
function retired() {
    if(playerFrame == 120) {
        localStorage.setItem('houseCount', houseCount);
        localStorage.setItem('score', player.score);
        link = 'delivery_result.html'
        location.replace(link)
        return;
    }
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateInfo();
        drawPlayer()
        requestAnimationFrame(retired); 
    }
}

var timer1 = setInterval(createObstacle, 800);
var timer2 = setInterval(setPlayer, 70);