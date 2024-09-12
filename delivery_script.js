const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const stopButton = document.getElementById('stopButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const stopButtonImage = document.getElementById('stopButtonImage');
const emergencyTimer = document.getElementById('emergencyTimer');
const gameoverMsg = document.getElementById('gameover');
const feverMsg = document.getElementById('fever');
const lodingImg = document.getElementById('loading');

//이미지 정의
const playerMotions={
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
    default16: new Image(),

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
    delivery16: new Image(),

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
    fever32: new Image(),

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
    feverDelivery32: new Image(),

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
    getItem16: new Image(),

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
    hurt47: new Image(),

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
    retire95: new Image()
};
playerMotions.default0.src = 'img/playerDefault/Walk00.png';
playerMotions.default1.src = 'img/playerDefault/Walk01.png';
playerMotions.default2.src = 'img/playerDefault/Walk02.png';
playerMotions.default3.src = 'img/playerDefault/Walk03.png';
playerMotions.default4.src = 'img/playerDefault/Walk04.png';
playerMotions.default5.src = 'img/playerDefault/Walk05.png';
playerMotions.default6.src = 'img/playerDefault/Walk06.png';
playerMotions.default7.src = 'img/playerDefault/Walk07.png';
playerMotions.default8.src = 'img/playerDefault/Walk08.png';
playerMotions.default9.src = 'img/playerDefault/Walk09.png';
playerMotions.default10.src = 'img/playerDefault/Walk10.png';
playerMotions.default11.src = 'img/playerDefault/Walk11.png';
playerMotions.default12.src = 'img/playerDefault/Walk12.png';
playerMotions.default13.src = 'img/playerDefault/Walk13.png';
playerMotions.default14.src = 'img/playerDefault/Walk14.png';
playerMotions.default15.src = 'img/playerDefault/Walk15.png';
playerMotions.default16.src = 'img/playerDefault/Walk16.png';

playerMotions.delivery0.src = 'img/playerDelivery/Delivery00.png';
playerMotions.delivery1.src = 'img/playerDelivery/Delivery01.png';
playerMotions.delivery2.src = 'img/playerDelivery/Delivery02.png';
playerMotions.delivery3.src = 'img/playerDelivery/Delivery03.png';
playerMotions.delivery4.src = 'img/playerDelivery/Delivery04.png';
playerMotions.delivery5.src = 'img/playerDelivery/Delivery05.png';
playerMotions.delivery6.src = 'img/playerDelivery/Delivery06.png';
playerMotions.delivery7.src = 'img/playerDelivery/Delivery07.png';
playerMotions.delivery8.src = 'img/playerDelivery/Delivery08.png';
playerMotions.delivery9.src = 'img/playerDelivery/Delivery09.png';
playerMotions.delivery10.src = 'img/playerDelivery/Delivery10.png';
playerMotions.delivery11.src = 'img/playerDelivery/Delivery11.png';
playerMotions.delivery12.src = 'img/playerDelivery/Delivery12.png';
playerMotions.delivery13.src = 'img/playerDelivery/Delivery13.png';
playerMotions.delivery14.src = 'img/playerDelivery/Delivery14.png';
playerMotions.delivery15.src = 'img/playerDelivery/Delivery15.png';
playerMotions.delivery16.src = 'img/playerDelivery/Delivery16.png';

playerMotions.fever0.src = 'img/playerFever/Fever00.png';
playerMotions.fever1.src = 'img/playerFever/Fever01.png';
playerMotions.fever2.src = 'img/playerFever/Fever02.png';
playerMotions.fever3.src = 'img/playerFever/Fever03.png';
playerMotions.fever4.src = 'img/playerFever/Fever04.png';
playerMotions.fever5.src = 'img/playerFever/Fever05.png';
playerMotions.fever6.src = 'img/playerFever/Fever06.png';
playerMotions.fever7.src = 'img/playerFever/Fever07.png';
playerMotions.fever8.src = 'img/playerFever/Fever08.png';
playerMotions.fever9.src = 'img/playerFever/Fever09.png';
playerMotions.fever10.src = 'img/playerFever/Fever10.png';
playerMotions.fever11.src = 'img/playerFever/Fever11.png';
playerMotions.fever12.src = 'img/playerFever/Fever12.png';
playerMotions.fever13.src = 'img/playerFever/Fever13.png';
playerMotions.fever14.src = 'img/playerFever/Fever14.png';
playerMotions.fever15.src = 'img/playerFever/Fever15.png';
playerMotions.fever16.src = 'img/playerFever/Fever16.png';
playerMotions.fever17.src = 'img/playerFever/Fever17.png';
playerMotions.fever18.src = 'img/playerFever/Fever18.png';
playerMotions.fever19.src = 'img/playerFever/Fever19.png';
playerMotions.fever20.src = 'img/playerFever/Fever20.png';
playerMotions.fever21.src = 'img/playerFever/Fever21.png';
playerMotions.fever22.src = 'img/playerFever/Fever22.png';
playerMotions.fever23.src = 'img/playerFever/Fever23.png';
playerMotions.fever24.src = 'img/playerFever/Fever24.png';
playerMotions.fever25.src = 'img/playerFever/Fever25.png';
playerMotions.fever26.src = 'img/playerFever/Fever26.png';
playerMotions.fever27.src = 'img/playerFever/Fever27.png';
playerMotions.fever28.src = 'img/playerFever/Fever28.png';
playerMotions.fever29.src = 'img/playerFever/Fever29.png';
playerMotions.fever30.src = 'img/playerFever/Fever30.png';
playerMotions.fever31.src = 'img/playerFever/Fever31.png';
playerMotions.fever32.src = 'img/playerFever/Fever32.png';

playerMotions.feverDelivery0.src = 'img/playerFeverDelivery/Fever_delivery00.png';
playerMotions.feverDelivery1.src = 'img/playerFeverDelivery/Fever_delivery01.png';
playerMotions.feverDelivery2.src = 'img/playerFeverDelivery/Fever_delivery02.png';
playerMotions.feverDelivery3.src = 'img/playerFeverDelivery/Fever_delivery03.png';
playerMotions.feverDelivery4.src = 'img/playerFeverDelivery/Fever_delivery04.png';
playerMotions.feverDelivery5.src = 'img/playerFeverDelivery/Fever_delivery05.png';
playerMotions.feverDelivery6.src = 'img/playerFeverDelivery/Fever_delivery06.png';
playerMotions.feverDelivery7.src = 'img/playerFeverDelivery/Fever_delivery07.png';
playerMotions.feverDelivery8.src = 'img/playerFeverDelivery/Fever_delivery08.png';
playerMotions.feverDelivery9.src = 'img/playerFeverDelivery/Fever_delivery09.png';
playerMotions.feverDelivery10.src = 'img/playerFeverDelivery/Fever_delivery10.png';
playerMotions.feverDelivery11.src = 'img/playerFeverDelivery/Fever_delivery11.png';
playerMotions.feverDelivery12.src = 'img/playerFeverDelivery/Fever_delivery12.png';
playerMotions.feverDelivery13.src = 'img/playerFeverDelivery/Fever_delivery13.png';
playerMotions.feverDelivery14.src = 'img/playerFeverDelivery/Fever_delivery14.png';
playerMotions.feverDelivery15.src = 'img/playerFeverDelivery/Fever_delivery15.png';
playerMotions.feverDelivery16.src = 'img/playerFeverDelivery/Fever_delivery16.png';
playerMotions.feverDelivery17.src = 'img/playerFeverDelivery/Fever_delivery17.png';
playerMotions.feverDelivery18.src = 'img/playerFeverDelivery/Fever_delivery18.png';
playerMotions.feverDelivery19.src = 'img/playerFeverDelivery/Fever_delivery19.png';
playerMotions.feverDelivery20.src = 'img/playerFeverDelivery/Fever_delivery20.png';
playerMotions.feverDelivery21.src = 'img/playerFeverDelivery/Fever_delivery21.png';
playerMotions.feverDelivery22.src = 'img/playerFeverDelivery/Fever_delivery22.png';
playerMotions.feverDelivery23.src = 'img/playerFeverDelivery/Fever_delivery23.png';
playerMotions.feverDelivery24.src = 'img/playerFeverDelivery/Fever_delivery24.png';
playerMotions.feverDelivery25.src = 'img/playerFeverDelivery/Fever_delivery25.png';
playerMotions.feverDelivery26.src = 'img/playerFeverDelivery/Fever_delivery26.png';
playerMotions.feverDelivery27.src = 'img/playerFeverDelivery/Fever_delivery27.png';
playerMotions.feverDelivery28.src = 'img/playerFeverDelivery/Fever_delivery28.png';
playerMotions.feverDelivery29.src = 'img/playerFeverDelivery/Fever_delivery29.png';
playerMotions.feverDelivery30.src = 'img/playerFeverDelivery/Fever_delivery30.png';
playerMotions.feverDelivery31.src = 'img/playerFeverDelivery/Fever_delivery31.png';
playerMotions.feverDelivery32.src = 'img/playerFeverDelivery/Fever_delivery32.png';

playerMotions.getItem0.src = 'img/playerGetItem/Get_item00.png';
playerMotions.getItem1.src = 'img/playerGetItem/Get_item01.png';
playerMotions.getItem2.src = 'img/playerGetItem/Get_item02.png';
playerMotions.getItem3.src = 'img/playerGetItem/Get_item03.png';
playerMotions.getItem4.src = 'img/playerGetItem/Get_item04.png';
playerMotions.getItem5.src = 'img/playerGetItem/Get_item05.png';
playerMotions.getItem6.src = 'img/playerGetItem/Get_item06.png';
playerMotions.getItem7.src = 'img/playerGetItem/Get_item07.png';
playerMotions.getItem8.src = 'img/playerGetItem/Get_item08.png';
playerMotions.getItem9.src = 'img/playerGetItem/Get_item09.png';
playerMotions.getItem10.src = 'img/playerGetItem/Get_item10.png';
playerMotions.getItem11.src = 'img/playerGetItem/Get_item11.png';
playerMotions.getItem12.src = 'img/playerGetItem/Get_item12.png';
playerMotions.getItem13.src = 'img/playerGetItem/Get_item13.png';
playerMotions.getItem14.src = 'img/playerGetItem/Get_item14.png';
playerMotions.getItem15.src = 'img/playerGetItem/Get_item15.png';
playerMotions.getItem16.src = 'img/playerGetItem/Get_item16.png';

playerMotions.hurt0.src = 'img/playerHurt/New_Hurt00.png';
playerMotions.hurt1.src = 'img/playerHurt/New_Hurt01.png';
playerMotions.hurt2.src = 'img/playerHurt/New_Hurt02.png';
playerMotions.hurt3.src = 'img/playerHurt/New_Hurt03.png';
playerMotions.hurt4.src = 'img/playerHurt/New_Hurt04.png';
playerMotions.hurt5.src = 'img/playerHurt/New_Hurt05.png';
playerMotions.hurt6.src = 'img/playerHurt/New_Hurt06.png';
playerMotions.hurt7.src = 'img/playerHurt/New_Hurt07.png';
playerMotions.hurt8.src = 'img/playerHurt/New_Hurt08.png';
playerMotions.hurt9.src = 'img/playerHurt/New_Hurt09.png';
playerMotions.hurt10.src = 'img/playerHurt/New_Hurt10.png';
playerMotions.hurt11.src = 'img/playerHurt/New_Hurt11.png';
playerMotions.hurt12.src = 'img/playerHurt/New_Hurt12.png';
playerMotions.hurt13.src = 'img/playerHurt/New_Hurt13.png';
playerMotions.hurt14.src = 'img/playerHurt/New_Hurt14.png';
playerMotions.hurt15.src = 'img/playerHurt/New_Hurt15.png';
playerMotions.hurt16.src = 'img/playerHurt/New_Hurt16.png';
playerMotions.hurt17.src = 'img/playerHurt/New_Hurt17.png';
playerMotions.hurt18.src = 'img/playerHurt/New_Hurt18.png';
playerMotions.hurt19.src = 'img/playerHurt/New_Hurt19.png';
playerMotions.hurt20.src = 'img/playerHurt/New_Hurt20.png';
playerMotions.hurt21.src = 'img/playerHurt/New_Hurt21.png';
playerMotions.hurt22.src = 'img/playerHurt/New_Hurt22.png';
playerMotions.hurt23.src = 'img/playerHurt/New_Hurt23.png';
playerMotions.hurt24.src = 'img/playerHurt/New_Hurt24.png';
playerMotions.hurt25.src = 'img/playerHurt/New_Hurt25.png';
playerMotions.hurt26.src = 'img/playerHurt/New_Hurt26.png';
playerMotions.hurt27.src = 'img/playerHurt/New_Hurt27.png';
playerMotions.hurt28.src = 'img/playerHurt/New_Hurt28.png';
playerMotions.hurt29.src = 'img/playerHurt/New_Hurt29.png';
playerMotions.hurt30.src = 'img/playerHurt/New_Hurt30.png';
playerMotions.hurt31.src = 'img/playerHurt/New_Hurt31.png';
playerMotions.hurt32.src = 'img/playerHurt/New_Hurt32.png';
playerMotions.hurt33.src = 'img/playerHurt/New_Hurt33.png';
playerMotions.hurt34.src = 'img/playerHurt/New_Hurt34.png';
playerMotions.hurt35.src = 'img/playerHurt/New_Hurt35.png';
playerMotions.hurt36.src = 'img/playerHurt/New_Hurt36.png';
playerMotions.hurt37.src = 'img/playerHurt/New_Hurt37.png';
playerMotions.hurt38.src = 'img/playerHurt/New_Hurt38.png';
playerMotions.hurt39.src = 'img/playerHurt/New_Hurt39.png';
playerMotions.hurt40.src = 'img/playerHurt/New_Hurt40.png';
playerMotions.hurt41.src = 'img/playerHurt/New_Hurt41.png';
playerMotions.hurt42.src = 'img/playerHurt/New_Hurt42.png';
playerMotions.hurt43.src = 'img/playerHurt/New_Hurt43.png';
playerMotions.hurt44.src = 'img/playerHurt/New_Hurt44.png';
playerMotions.hurt45.src = 'img/playerHurt/New_Hurt45.png';
playerMotions.hurt46.src = 'img/playerHurt/New_Hurt46.png';
playerMotions.hurt47.src = 'img/playerHurt/New_Hurt47.png';

playerMotions.retire0.src = 'img/playerRetire/New_Retire00.png';
playerMotions.retire1.src = 'img/playerRetire/New_Retire01.png';
playerMotions.retire2.src = 'img/playerRetire/New_Retire02.png';
playerMotions.retire3.src = 'img/playerRetire/New_Retire03.png';
playerMotions.retire4.src = 'img/playerRetire/New_Retire04.png';
playerMotions.retire5.src = 'img/playerRetire/New_Retire05.png';
playerMotions.retire6.src = 'img/playerRetire/New_Retire06.png';
playerMotions.retire7.src = 'img/playerRetire/New_Retire07.png';
playerMotions.retire8.src = 'img/playerRetire/New_Retire08.png';
playerMotions.retire9.src = 'img/playerRetire/New_Retire09.png';
playerMotions.retire10.src = 'img/playerRetire/New_Retire10.png';
playerMotions.retire11.src = 'img/playerRetire/New_Retire11.png';
playerMotions.retire12.src = 'img/playerRetire/New_Retire12.png';
playerMotions.retire13.src = 'img/playerRetire/New_Retire13.png';
playerMotions.retire14.src = 'img/playerRetire/New_Retire14.png';
playerMotions.retire15.src = 'img/playerRetire/New_Retire15.png';
playerMotions.retire16.src = 'img/playerRetire/New_Retire16.png';
playerMotions.retire17.src = 'img/playerRetire/New_Retire17.png';
playerMotions.retire18.src = 'img/playerRetire/New_Retire18.png';
playerMotions.retire19.src = 'img/playerRetire/New_Retire19.png';
playerMotions.retire20.src = 'img/playerRetire/New_Retire20.png';
playerMotions.retire21.src = 'img/playerRetire/New_Retire21.png';
playerMotions.retire22.src = 'img/playerRetire/New_Retire22.png';
playerMotions.retire23.src = 'img/playerRetire/New_Retire23.png';
playerMotions.retire24.src = 'img/playerRetire/New_Retire24.png';
playerMotions.retire25.src = 'img/playerRetire/New_Retire25.png';
playerMotions.retire26.src = 'img/playerRetire/New_Retire26.png';
playerMotions.retire27.src = 'img/playerRetire/New_Retire27.png';
playerMotions.retire28.src = 'img/playerRetire/New_Retire28.png';
playerMotions.retire29.src = 'img/playerRetire/New_Retire29.png';
playerMotions.retire30.src = 'img/playerRetire/New_Retire30.png';
playerMotions.retire31.src = 'img/playerRetire/New_Retire31.png';
playerMotions.retire32.src = 'img/playerRetire/New_Retire32.png';
playerMotions.retire33.src = 'img/playerRetire/New_Retire33.png';
playerMotions.retire34.src = 'img/playerRetire/New_Retire34.png';
playerMotions.retire35.src = 'img/playerRetire/New_Retire35.png';
playerMotions.retire36.src = 'img/playerRetire/New_Retire36.png';
playerMotions.retire37.src = 'img/playerRetire/New_Retire37.png';
playerMotions.retire38.src = 'img/playerRetire/New_Retire38.png';
playerMotions.retire39.src = 'img/playerRetire/New_Retire39.png';
playerMotions.retire40.src = 'img/playerRetire/New_Retire40.png';
playerMotions.retire41.src = 'img/playerRetire/New_Retire41.png';
playerMotions.retire42.src = 'img/playerRetire/New_Retire42.png';
playerMotions.retire43.src = 'img/playerRetire/New_Retire43.png';
playerMotions.retire44.src = 'img/playerRetire/New_Retire44.png';
playerMotions.retire45.src = 'img/playerRetire/New_Retire45.png';
playerMotions.retire46.src = 'img/playerRetire/New_Retire46.png';
playerMotions.retire47.src = 'img/playerRetire/New_Retire47.png';
playerMotions.retire48.src = 'img/playerRetire/New_Retire48.png';
playerMotions.retire49.src = 'img/playerRetire/New_Retire49.png';
playerMotions.retire50.src = 'img/playerRetire/New_Retire50.png';
playerMotions.retire51.src = 'img/playerRetire/New_Retire51.png';
playerMotions.retire52.src = 'img/playerRetire/New_Retire52.png';
playerMotions.retire53.src = 'img/playerRetire/New_Retire53.png';
playerMotions.retire54.src = 'img/playerRetire/New_Retire54.png';
playerMotions.retire55.src = 'img/playerRetire/New_Retire55.png';
playerMotions.retire56.src = 'img/playerRetire/New_Retire56.png';
playerMotions.retire57.src = 'img/playerRetire/New_Retire57.png';
playerMotions.retire58.src = 'img/playerRetire/New_Retire58.png';
playerMotions.retire59.src = 'img/playerRetire/New_Retire59.png';
playerMotions.retire60.src = 'img/playerRetire/New_Retire60.png';
playerMotions.retire61.src = 'img/playerRetire/New_Retire61.png';
playerMotions.retire62.src = 'img/playerRetire/New_Retire62.png';
playerMotions.retire63.src = 'img/playerRetire/New_Retire63.png';
playerMotions.retire64.src = 'img/playerRetire/New_Retire64.png';
playerMotions.retire65.src = 'img/playerRetire/New_Retire65.png';
playerMotions.retire66.src = 'img/playerRetire/New_Retire66.png';
playerMotions.retire67.src = 'img/playerRetire/New_Retire67.png';
playerMotions.retire68.src = 'img/playerRetire/New_Retire68.png';
playerMotions.retire69.src = 'img/playerRetire/New_Retire69.png';
playerMotions.retire70.src = 'img/playerRetire/New_Retire70.png';
playerMotions.retire71.src = 'img/playerRetire/New_Retire71.png';

const backgroundImages = {
    basic0: new Image(),
    basic1: new Image(),
    basic2: new Image(),
    basic3: new Image(),
    basic4: new Image(),
    basic5: new Image(),
    basic6: new Image(),
    basic7: new Image(),
    basic8: new Image(),
    basic9: new Image(),
    basic10: new Image(),
    basic11: new Image(),
    basic12: new Image(),
    basic13: new Image(),
    basic14: new Image(),
    basic15: new Image(),
    basic16: new Image(),
    basic17: new Image(),
    basic18: new Image(),
    basic19: new Image(),
    basic20: new Image(),
    basic21: new Image(),
    basic22: new Image(),
    basic23: new Image(),
    basic24: new Image(),
    basic25: new Image(),
    basic26: new Image(),
    basic27: new Image(),
    basic28: new Image(),
    basic29: new Image(),
    basic30: new Image(),
    basic31: new Image(),
    basic32: new Image(),
    basic33: new Image(),
    basic34: new Image(),
    basic35: new Image(),
    basic36: new Image(),
    basic37: new Image(),
    basic38: new Image(),
    basic39: new Image(),
    basic40: new Image(),
    basic41: new Image(),
    basic42: new Image(),
    basic43: new Image(),
    basic44: new Image(),
    basic45: new Image(),
    basic46: new Image(),
    basic47: new Image(), 

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
    fever32: new Image(),
    fever33: new Image(),
    fever34: new Image(),
    fever35: new Image(),
    fever36: new Image(),
    fever37: new Image(),
    fever38: new Image(),
    fever39: new Image(),
    fever40: new Image(),
    fever41: new Image(),
    fever42: new Image(),
    fever43: new Image(),
    fever44: new Image(),
    fever45: new Image(),
    fever46: new Image(),
    fever47: new Image(), 

    obstacle0: new Image(),
    obstacle1: new Image(),
    obstacle2: new Image(),
    obstacle3: new Image(),
    obstacle4: new Image(),
    obstacle5: new Image(),
    obstacle6: new Image(),
    obstacle7: new Image(),
    obstacle8: new Image(),
    obstacle9: new Image(),
    obstacle10: new Image(),
    obstacle11: new Image(),
    obstacle12: new Image(),
    obstacle13: new Image(),
    obstacle14: new Image(),
    obstacle15: new Image(),
    obstacle16: new Image(),
    obstacle17: new Image(),
    obstacle18: new Image(),
    obstacle19: new Image(),
    obstacle20: new Image(),
    obstacle21: new Image(),
    obstacle22: new Image(),
    obstacle23: new Image(),
    obstacle24: new Image(),
    obstacle25: new Image(),
    obstacle26: new Image(),
    obstacle27: new Image(),
    obstacle28: new Image(),
    obstacle29: new Image(),
    obstacle30: new Image(),
    obstacle31: new Image(),
    obstacle32: new Image(),
    obstacle33: new Image(),
    obstacle34: new Image(),
    obstacle35: new Image(),
    obstacle36: new Image(),
    obstacle37: new Image(),
    obstacle38: new Image(),
    obstacle39: new Image(),
    obstacle40: new Image(),
    obstacle41: new Image(),
    obstacle42: new Image(),
    obstacle43: new Image(),
    obstacle44: new Image(),
    obstacle45: new Image(),
    obstacle46: new Image(),
    obstacle47: new Image(),

    last0: new Image(),
    last1: new Image(),
    last2: new Image(),
    last3: new Image(),
    last4: new Image(),
    last5: new Image(),
    last6: new Image(),
    last7: new Image(),
    last8: new Image(),
    last9: new Image(),
    last10: new Image(),
    last11: new Image(),
    last12: new Image(),
    last13: new Image(),
    last14: new Image(),
    last15: new Image(),
    last16: new Image(),
    last17: new Image(),
    last18: new Image(),
    last19: new Image(),
    last20: new Image(),
    last21: new Image(),
    last22: new Image(),
    last23: new Image(),
    last24: new Image(),
    last25: new Image(),
    last26: new Image(),
    last27: new Image(),
    last28: new Image(),
    last29: new Image(),
    last30: new Image(),
    last31: new Image(),
    last32: new Image(),
    last33: new Image(),
    last34: new Image(),
    last35: new Image(),
    last36: new Image(),
    last37: new Image(),
    last38: new Image(),
    last39: new Image(),
    last40: new Image(),
    last41: new Image(),
    last42: new Image(),
    last43: new Image(),
    last44: new Image(),
    last45: new Image(),
    last46: new Image(),
    last47: new Image()
};
backgroundImages.basic0.src = 'img/BasicBackground/BasicBG00.jpg';
backgroundImages.basic1.src = 'img/BasicBackground/BasicBG01.jpg';
backgroundImages.basic2.src = 'img/BasicBackground/BasicBG02.jpg';
backgroundImages.basic3.src = 'img/BasicBackground/BasicBG03.jpg';
backgroundImages.basic4.src = 'img/BasicBackground/BasicBG04.jpg';
backgroundImages.basic5.src = 'img/BasicBackground/BasicBG05.jpg';
backgroundImages.basic6.src = 'img/BasicBackground/BasicBG06.jpg';
backgroundImages.basic7.src = 'img/BasicBackground/BasicBG07.jpg';
backgroundImages.basic8.src = 'img/BasicBackground/BasicBG08.jpg';
backgroundImages.basic9.src = 'img/BasicBackground/BasicBG09.jpg';
backgroundImages.basic10.src = 'img/BasicBackground/BasicBG10.jpg';
backgroundImages.basic11.src = 'img/BasicBackground/BasicBG11.jpg';
backgroundImages.basic12.src = 'img/BasicBackground/BasicBG12.jpg';
backgroundImages.basic13.src = 'img/BasicBackground/BasicBG13.jpg';
backgroundImages.basic14.src = 'img/BasicBackground/BasicBG14.jpg';
backgroundImages.basic15.src = 'img/BasicBackground/BasicBG15.jpg';
backgroundImages.basic16.src = 'img/BasicBackground/BasicBG16.jpg';
backgroundImages.basic17.src = 'img/BasicBackground/BasicBG17.jpg';
backgroundImages.basic18.src = 'img/BasicBackground/BasicBG18.jpg';
backgroundImages.basic19.src = 'img/BasicBackground/BasicBG19.jpg';
backgroundImages.basic20.src = 'img/BasicBackground/BasicBG20.jpg';
backgroundImages.basic21.src = 'img/BasicBackground/BasicBG21.jpg';
backgroundImages.basic22.src = 'img/BasicBackground/BasicBG22.jpg';
backgroundImages.basic23.src = 'img/BasicBackground/BasicBG23.jpg';
backgroundImages.basic24.src = 'img/BasicBackground/BasicBG24.jpg';
backgroundImages.basic25.src = 'img/BasicBackground/BasicBG25.jpg';
backgroundImages.basic26.src = 'img/BasicBackground/BasicBG26.jpg';
backgroundImages.basic27.src = 'img/BasicBackground/BasicBG27.jpg';
backgroundImages.basic28.src = 'img/BasicBackground/BasicBG28.jpg';
backgroundImages.basic29.src = 'img/BasicBackground/BasicBG29.jpg';
backgroundImages.basic30.src = 'img/BasicBackground/BasicBG30.jpg';
backgroundImages.basic31.src = 'img/BasicBackground/BasicBG31.jpg';
backgroundImages.basic32.src = 'img/BasicBackground/BasicBG32.jpg';
backgroundImages.basic33.src = 'img/BasicBackground/BasicBG33.jpg';
backgroundImages.basic34.src = 'img/BasicBackground/BasicBG34.jpg';
backgroundImages.basic35.src = 'img/BasicBackground/BasicBG35.jpg';
backgroundImages.basic36.src = 'img/BasicBackground/BasicBG36.jpg';
backgroundImages.basic37.src = 'img/BasicBackground/BasicBG37.jpg';
backgroundImages.basic38.src = 'img/BasicBackground/BasicBG38.jpg';
backgroundImages.basic39.src = 'img/BasicBackground/BasicBG39.jpg';
backgroundImages.basic40.src = 'img/BasicBackground/BasicBG40.jpg';
backgroundImages.basic41.src = 'img/BasicBackground/BasicBG41.jpg';
backgroundImages.basic42.src = 'img/BasicBackground/BasicBG42.jpg';
backgroundImages.basic43.src = 'img/BasicBackground/BasicBG43.jpg';
backgroundImages.basic44.src = 'img/BasicBackground/BasicBG44.jpg';
backgroundImages.basic45.src = 'img/BasicBackground/BasicBG45.jpg';
backgroundImages.basic46.src = 'img/BasicBackground/BasicBG46.jpg';
backgroundImages.basic47.src = 'img/BasicBackground/BasicBG47.jpg';

backgroundImages.fever0.src = 'img/feverBackground/feverBG00.jpg';
backgroundImages.fever1.src = 'img/feverBackground/feverBG01.jpg';
backgroundImages.fever2.src = 'img/feverBackground/feverBG02.jpg';
backgroundImages.fever3.src = 'img/feverBackground/feverBG03.jpg';
backgroundImages.fever4.src = 'img/feverBackground/feverBG04.jpg';
backgroundImages.fever5.src = 'img/feverBackground/feverBG05.jpg';
backgroundImages.fever6.src = 'img/feverBackground/feverBG06.jpg';
backgroundImages.fever7.src = 'img/feverBackground/feverBG07.jpg';
backgroundImages.fever8.src = 'img/feverBackground/feverBG08.jpg';
backgroundImages.fever9.src = 'img/feverBackground/feverBG09.jpg';
backgroundImages.fever10.src = 'img/feverBackground/feverBG10.jpg';
backgroundImages.fever11.src = 'img/feverBackground/feverBG11.jpg';
backgroundImages.fever12.src = 'img/feverBackground/feverBG12.jpg';
backgroundImages.fever13.src = 'img/feverBackground/feverBG13.jpg';
backgroundImages.fever14.src = 'img/feverBackground/feverBG14.jpg';
backgroundImages.fever15.src = 'img/feverBackground/feverBG15.jpg';
backgroundImages.fever16.src = 'img/feverBackground/feverBG16.jpg';
backgroundImages.fever17.src = 'img/feverBackground/feverBG17.jpg';
backgroundImages.fever18.src = 'img/feverBackground/feverBG18.jpg';
backgroundImages.fever19.src = 'img/feverBackground/feverBG19.jpg';
backgroundImages.fever20.src = 'img/feverBackground/feverBG20.jpg';
backgroundImages.fever21.src = 'img/feverBackground/feverBG21.jpg';
backgroundImages.fever22.src = 'img/feverBackground/feverBG22.jpg';
backgroundImages.fever23.src = 'img/feverBackground/feverBG23.jpg';
backgroundImages.fever24.src = 'img/feverBackground/feverBG24.jpg';
backgroundImages.fever25.src = 'img/feverBackground/feverBG25.jpg';
backgroundImages.fever26.src = 'img/feverBackground/feverBG26.jpg';
backgroundImages.fever27.src = 'img/feverBackground/feverBG27.jpg';
backgroundImages.fever28.src = 'img/feverBackground/feverBG28.jpg';
backgroundImages.fever29.src = 'img/feverBackground/feverBG29.jpg';
backgroundImages.fever30.src = 'img/feverBackground/feverBG30.jpg';
backgroundImages.fever31.src = 'img/feverBackground/feverBG31.jpg';
backgroundImages.fever32.src = 'img/feverBackground/feverBG32.jpg';
backgroundImages.fever33.src = 'img/feverBackground/feverBG33.jpg';
backgroundImages.fever34.src = 'img/feverBackground/feverBG34.jpg';
backgroundImages.fever35.src = 'img/feverBackground/feverBG35.jpg';
backgroundImages.fever36.src = 'img/feverBackground/feverBG36.jpg';
backgroundImages.fever37.src = 'img/feverBackground/feverBG37.jpg';
backgroundImages.fever38.src = 'img/feverBackground/feverBG38.jpg';
backgroundImages.fever39.src = 'img/feverBackground/feverBG39.jpg';
backgroundImages.fever40.src = 'img/feverBackground/feverBG40.jpg';
backgroundImages.fever41.src = 'img/feverBackground/feverBG41.jpg';
backgroundImages.fever42.src = 'img/feverBackground/feverBG42.jpg';
backgroundImages.fever43.src = 'img/feverBackground/feverBG43.jpg';
backgroundImages.fever44.src = 'img/feverBackground/feverBG44.jpg';
backgroundImages.fever45.src = 'img/feverBackground/feverBG45.jpg';
backgroundImages.fever46.src = 'img/feverBackground/feverBG46.jpg';
backgroundImages.fever47.src = 'img/feverBackground/feverBG47.jpg';

backgroundImages.obstacle0.src = 'img/obstacleBackground/obstacleBG00.jpg';
backgroundImages.obstacle1.src = 'img/obstacleBackground/obstacleBG01.jpg';
backgroundImages.obstacle2.src = 'img/obstacleBackground/obstacleBG02.jpg';
backgroundImages.obstacle3.src = 'img/obstacleBackground/obstacleBG03.jpg';
backgroundImages.obstacle4.src = 'img/obstacleBackground/obstacleBG04.jpg';
backgroundImages.obstacle5.src = 'img/obstacleBackground/obstacleBG05.jpg';
backgroundImages.obstacle6.src = 'img/obstacleBackground/obstacleBG06.jpg';
backgroundImages.obstacle7.src = 'img/obstacleBackground/obstacleBG07.jpg';
backgroundImages.obstacle8.src = 'img/obstacleBackground/obstacleBG08.jpg';
backgroundImages.obstacle9.src = 'img/obstacleBackground/obstacleBG09.jpg';
backgroundImages.obstacle10.src = 'img/obstacleBackground/obstacleBG10.jpg';
backgroundImages.obstacle11.src = 'img/obstacleBackground/obstacleBG11.jpg';
backgroundImages.obstacle12.src = 'img/obstacleBackground/obstacleBG12.jpg';
backgroundImages.obstacle13.src = 'img/obstacleBackground/obstacleBG13.jpg';
backgroundImages.obstacle14.src = 'img/obstacleBackground/obstacleBG14.jpg';
backgroundImages.obstacle15.src = 'img/obstacleBackground/obstacleBG15.jpg';
backgroundImages.obstacle16.src = 'img/obstacleBackground/obstacleBG16.jpg';
backgroundImages.obstacle17.src = 'img/obstacleBackground/obstacleBG17.jpg';
backgroundImages.obstacle18.src = 'img/obstacleBackground/obstacleBG18.jpg';
backgroundImages.obstacle19.src = 'img/obstacleBackground/obstacleBG19.jpg';
backgroundImages.obstacle20.src = 'img/obstacleBackground/obstacleBG20.jpg';
backgroundImages.obstacle21.src = 'img/obstacleBackground/obstacleBG21.jpg';
backgroundImages.obstacle22.src = 'img/obstacleBackground/obstacleBG22.jpg';
backgroundImages.obstacle23.src = 'img/obstacleBackground/obstacleBG23.jpg';
backgroundImages.obstacle24.src = 'img/obstacleBackground/obstacleBG24.jpg';
backgroundImages.obstacle25.src = 'img/obstacleBackground/obstacleBG25.jpg';
backgroundImages.obstacle26.src = 'img/obstacleBackground/obstacleBG26.jpg';
backgroundImages.obstacle27.src = 'img/obstacleBackground/obstacleBG27.jpg';
backgroundImages.obstacle28.src = 'img/obstacleBackground/obstacleBG28.jpg';
backgroundImages.obstacle29.src = 'img/obstacleBackground/obstacleBG29.jpg';
backgroundImages.obstacle30.src = 'img/obstacleBackground/obstacleBG30.jpg';
backgroundImages.obstacle31.src = 'img/obstacleBackground/obstacleBG31.jpg';
backgroundImages.obstacle32.src = 'img/obstacleBackground/obstacleBG32.jpg';
backgroundImages.obstacle33.src = 'img/obstacleBackground/obstacleBG33.jpg';
backgroundImages.obstacle34.src = 'img/obstacleBackground/obstacleBG34.jpg';
backgroundImages.obstacle35.src = 'img/obstacleBackground/obstacleBG35.jpg';
backgroundImages.obstacle36.src = 'img/obstacleBackground/obstacleBG36.jpg';
backgroundImages.obstacle37.src = 'img/obstacleBackground/obstacleBG37.jpg';
backgroundImages.obstacle38.src = 'img/obstacleBackground/obstacleBG38.jpg';
backgroundImages.obstacle39.src = 'img/obstacleBackground/obstacleBG39.jpg';
backgroundImages.obstacle40.src = 'img/obstacleBackground/obstacleBG40.jpg';
backgroundImages.obstacle41.src = 'img/obstacleBackground/obstacleBG41.jpg';
backgroundImages.obstacle42.src = 'img/obstacleBackground/obstacleBG42.jpg';
backgroundImages.obstacle43.src = 'img/obstacleBackground/obstacleBG43.jpg';
backgroundImages.obstacle44.src = 'img/obstacleBackground/obstacleBG44.jpg';
backgroundImages.obstacle45.src = 'img/obstacleBackground/obstacleBG45.jpg';
backgroundImages.obstacle46.src = 'img/obstacleBackground/obstacleBG46.jpg';
backgroundImages.obstacle47.src = 'img/obstacleBackground/obstacleBG47.jpg';

backgroundImages.last0.src = 'img/lastBackground/lastBG00.jpg';
backgroundImages.last1.src = 'img/lastBackground/lastBG01.jpg';
backgroundImages.last2.src = 'img/lastBackground/lastBG02.jpg';
backgroundImages.last3.src = 'img/lastBackground/lastBG03.jpg';
backgroundImages.last4.src = 'img/lastBackground/lastBG04.jpg';
backgroundImages.last5.src = 'img/lastBackground/lastBG05.jpg';
backgroundImages.last6.src = 'img/lastBackground/lastBG06.jpg';
backgroundImages.last7.src = 'img/lastBackground/lastBG07.jpg';
backgroundImages.last8.src = 'img/lastBackground/lastBG08.jpg';
backgroundImages.last9.src = 'img/lastBackground/lastBG09.jpg';
backgroundImages.last10.src = 'img/lastBackground/lastBG10.jpg';
backgroundImages.last11.src = 'img/lastBackground/lastBG11.jpg';
backgroundImages.last12.src = 'img/lastBackground/lastBG12.jpg';
backgroundImages.last13.src = 'img/lastBackground/lastBG13.jpg';
backgroundImages.last14.src = 'img/lastBackground/lastBG14.jpg';
backgroundImages.last15.src = 'img/lastBackground/lastBG15.jpg';
backgroundImages.last16.src = 'img/lastBackground/lastBG16.jpg';
backgroundImages.last17.src = 'img/lastBackground/lastBG17.jpg';
backgroundImages.last18.src = 'img/lastBackground/lastBG18.jpg';
backgroundImages.last19.src = 'img/lastBackground/lastBG19.jpg';
backgroundImages.last20.src = 'img/lastBackground/lastBG20.jpg';
backgroundImages.last21.src = 'img/lastBackground/lastBG21.jpg';
backgroundImages.last22.src = 'img/lastBackground/lastBG22.jpg';
backgroundImages.last23.src = 'img/lastBackground/lastBG23.jpg';
backgroundImages.last24.src = 'img/lastBackground/lastBG24.jpg';
backgroundImages.last25.src = 'img/lastBackground/lastBG25.jpg';
backgroundImages.last26.src = 'img/lastBackground/lastBG26.jpg';
backgroundImages.last27.src = 'img/lastBackground/lastBG27.jpg';
backgroundImages.last28.src = 'img/lastBackground/lastBG28.jpg';
backgroundImages.last29.src = 'img/lastBackground/lastBG29.jpg';
backgroundImages.last30.src = 'img/lastBackground/lastBG30.jpg';
backgroundImages.last31.src = 'img/lastBackground/lastBG31.jpg';
backgroundImages.last32.src = 'img/lastBackground/lastBG32.jpg';
backgroundImages.last33.src = 'img/lastBackground/lastBG33.jpg';
backgroundImages.last34.src = 'img/lastBackground/lastBG34.jpg';
backgroundImages.last35.src = 'img/lastBackground/lastBG35.jpg';
backgroundImages.last36.src = 'img/lastBackground/lastBG36.jpg';
backgroundImages.last37.src = 'img/lastBackground/lastBG37.jpg';
backgroundImages.last38.src = 'img/lastBackground/lastBG38.jpg';
backgroundImages.last39.src = 'img/lastBackground/lastBG39.jpg';
backgroundImages.last40.src = 'img/lastBackground/lastBG40.jpg';
backgroundImages.last41.src = 'img/lastBackground/lastBG41.jpg';
backgroundImages.last42.src = 'img/lastBackground/lastBG42.jpg';
backgroundImages.last43.src = 'img/lastBackground/lastBG43.jpg';
backgroundImages.last44.src = 'img/lastBackground/lastBG44.jpg';
backgroundImages.last45.src = 'img/lastBackground/lastBG45.jpg';
backgroundImages.last46.src = 'img/lastBackground/lastBG46.jpg';
backgroundImages.last47.src = 'img/lastBackground/lastBG47.jpg';

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

const frame1 = new Image();
const frame2 = new Image();
frame1.src = 'img/pop_up1.png';
frame2.src = 'img/pop_up2.png';

const heart = new Image();
const emptyHeart= new Image();
const misfortuneBackground = new Image();
heart.src = 'img/heart.png';
emptyHeart.src = 'img/heartEmpty.png';
misfortuneBackground.src = 'img/misfortuneBackground.png';

const backgroundMusic = new Audio('sound/background-music.mp3');
const feverTimeMusic = new Audio('sound/feverTime.mp3');
backgroundMusic.loop = true;
feverTimeMusic.loop = true;

const hurtMusic = new Audio('sound/hurt.wav');
const addItemMusic = new Audio('sound/add_item.wav');
const deliveryMusic = new Audio('sound/delivery.wav');
const bumpMusic = new Audio('sound/bump.wav');
const retiredMusic = new Audio('sound/death.aac');
const misfortuneMusic = new Audio('sound/eatBread.aac');
const countdownMusic = new Audio('sound/go.aac');


const heartWidth = 30
const heartHeight = 70

const misfortunewidth = 77
const misfortuneheigh = 70

const scorewidth = 152
const scoreheigh = 60

const playerwidth = 170;
const objectwidth = 85;

const frameWidth = 375
const frameHeigh = 300
const answerWidth = objectwidth+20

let obstacleSpeed = 4;
let originalSpeed = 4;
const obstacles = [];
let gameOver = false;
let currentLane = 1;
let gameStarted = false;
let gamePaused = false;
let inFeverTime = false;
let emergency = false;
let invincibility = false;

const feverTimeDuration = 10000;
let feverTimeRemaining = 0;
let feverTimeStartTime = 0;
let feverTimeTimeout;
let emergencyCount = 30;    // 돌발상황 카운트 (기본값: 30)
let count = 0;
let tmpCount = 0;
let answer = 0;
let emergencyAnswerTime = false
let playerFrame = 0
let backgroundFrame = 0

let houseCount = 0
let emergencySetCount = 1000

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

const playerType = ["default", "delivery", "fever", "feverDelivery", "getItem", "hurt", "retire"]
const player = {
    width: playerwidth,
    height: playerwidth,
    lastBackground: 'basic',
    background: 'basic', // basic, fever, obstacle
    backgroundImage: backgroundImages[`basic${backgroundFrame}`],
    lives: 3,
    items: 0,
    score: 0,
    lastType: 'default', //default, delivery, fever, feverDelivery,getItem, hurt, retire
    type: 'default' //default, delivery, fever, feverDelivery,getItem, hurt, retire
};

function updateCanvasSize() {
    if (matchMedia("screen and (min-width: 501px)").matches) {
        canvas.width = 375;
        canvas.height = canvas.offsetHeight;
    } else {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    player.x = (canvas.width / 2) - (player.width / 2); // 중간위치에서 시작
    player.y = canvas.height - player.height - 10;  //캔버스 높이에서 플레이어+10만큼 뺀 높이

    // 레인 정의 0, 1, 2
    playerlanes[0] = canvas.width / 4 - player.width / 2; // 1/4에서 플레이어 반절만큼 이동
    playerlanes[1] = canvas.width / 2 - player.width / 2; // 2/4에서 플레이어 반절만큼 이동
    playerlanes[2] = (canvas.width / 4) * 3 - player.width / 2; // 3/4에서 플레이어 반절만큼 이동

    lanes[0] = (canvas.width / 4 - objectwidth / 2) - 15; // 1/4에서 플레이어 반절만큼 이동
    lanes[1] = canvas.width / 2 - objectwidth / 2; // 2/4에서 플레이어 반절만큼 이동
    lanes[2] =( (canvas.width / 4) * 3 - objectwidth / 2) + 15; // 3/4에서 플레이어 반절만큼 이동
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
            player.x + 50 < obstacle.x + obstacle.width &&
            player.x + player.width -50 > obstacle.x &&
            player.y + 50 < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y + 60
        ) {
            handleCollision(obstacle);
            obstacles.splice(index, 1);
        }
    });
}

// 충돌 처리
function handleCollision(obstacle) {
    if (!inFeverTime && !emergency) {
        if (obstacle.type == 'obstacle' && !invincibility){
            player.lives -= 1;
            
            player.type = 'hurt'
            player.background = 'obstacle'

            if (player.lives <= 1) 
                player.background = 'lastOne'

            setTimeout(()=>{
                if(player.background == 'obstacle'){
                    player.background = 'basic'
                }
            }, 2000)
            setTimeout(()=>{
                if(player.lastType == 'hurt'){
                    player.type='default'
                }
            }, playerFrameTime)

            if (player.lives === 0) {
                gameOver = true;
            }else{
                hurtMusic.currentTime = 0; 
                hurtMusic.play()
            }
        }
        else if (obstacle.type ==  'energyDrink'){
            if (player.lives < 3) player.lives += 1;
            if (player.lives === 2) player.background = 'basic'

            player.type = 'getItem'
            addItemMusic.currentTime = 0; 
            addItemMusic.play()
            setTimeout(()=>{
                if(player.lastType == 'getItem')
                    player.type='default'
            }, playerFrameTime)
        }
        else if (obstacle.type == 'misfortune'){
            misfortuneMusic.currentTime = 0; 
            misfortuneMusic.play()
            player.items += 1;
            if (player.items >= 10) startFeverTime();
        }
        else if (obstacle.type == 'house'){
            deliveryMusic.currentTime = 0; 
            deliveryMusic.play()

            houseCount += 1;
            player.score += 100;
            player.type='delivery'
            
            setTimeout(()=>{
                if(player.lastType == 'delivery'){
                    player.type='default'
                }
            }, playerFrameTime)
        }
    }else if(inFeverTime) {
        if (obstacle.type === 'house') {
            deliveryMusic.currentTime = 0; 
            deliveryMusic.play()
            houseCount += 1;
            player.score += 500;

            player.type='feverDelivery'
            setTimeout(()=>{
                if(player.lastType == 'feverDelivery'){
                    player.type='fever'
                }
            }, playerFrameTime)

        }else if (obstacle.type == 'obstacle'){ // (피버) 장애물 파괴시 50
            bumpMusic.currentTime = 0; 
            bumpMusic.play()
            player.score += 50;
        }
    }else if(emergency){
        if (obstacle.type == 'correct'){
            deliveryMusic.currentTime = 0; 
            deliveryMusic.play()
            houseCount += 1;
            player.score += 300;

            player.type='delivery'
            setTimeout(()=>{
                if(player.lastType == 'delivery')
                    player.type='default'
            }, playerFrameTime)

        } else {
            hurtMusic.currentTime = 0; 
            hurtMusic.play()
            player.lives -= 1;
            if (player.lives === 0) gameOver = true;

            player.background = 'obstacle'
            player.type = 'hurt'
            setTimeout(()=>{
                if(player.background == 'obstacle'){
                    player.background = 'basic'
                }
            }, 2000)

            setTimeout(()=>{
                if(player.lastType == 'hurt'){
                    player.type='default'
                }
            }, 1500)
        }
    }
}

// 피버타임 시작
function startFeverTime() {
    inFeverTime = true;
    player.type = 'fever'
    player.background = 'fever'
    feverTimeMusic.currentTime = 0; 
    feverTimeMusic.play()
    backgroundMusic.pause()

    player.items = 0;
    feverMsg.style.display = 'block';

    feverTimeStartTime = Date.now(); //지금 시간 저장
    feverTimeRemaining = feverTimeDuration; //남은시간에 10000밀리초 저장

    feverTimeTimeout = setTimeout(() => {
        player.type = 'default'
        player.background = 'basic'

        backgroundMusic.play()
        feverTimeMusic.pause()
        
        feverMsg.style.display = 'none';

        inFeverTime = false;
        invincibility = true;
        setTimeout(()=>{
            invincibility = false;
        }, 1000)
    }, feverTimeRemaining);
}

//플레이어 이미지 설정
function setPlayer(){
    if(player.lastType != player.type){
        playerFrame = 0
        player.lastType = player.type
    }
    if(player.type == 'default'){
        player.image = playerMotions[`default${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
    else if(player.type =='delivery'){
        player.image = playerMotions[`delivery${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }
    else if(player.type =='fever'){
        player.image = playerMotions[`fever${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 33)
            playerFrame = 0
    }
    else if(player.type =='feverDelivery'){
        player.image = playerMotions[`feverDelivery${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 33)
            playerFrame = 0
    }
    else if(player.type =='getItem'){
        player.image = playerMotions[`getItem${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 17)
            playerFrame = 0
    }else if(player.type =='hurt'){
        player.image = playerMotions[`hurt${playerFrame}`]
        playerFrame += 1
        if(playerFrame >= 48)
            playerFrame = 0
    }else if(player.type =='retire'){
        player.image = playerMotions[`retire${playerFrame}`]
        playerFrame += 1
    }
}
// 플레이어 그려줌
function drawPlayer() {
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
}

function setBackground(){

    if(player.lastBackground != player.background){
        playerFrame = 0
        player.lastBackground = player.background
    }
    // player.backgroundImage = backgroundImages[`${player.background}${backgroundFrame}`]
    // backgroundFrame += 1
    // if(backgroundFrame>=48){
    //     backgroundFrame = 0
    // }
    if(player.background == 'basic'){
        player.backgroundImage = backgroundImages[`basic${backgroundFrame}`]
    } else if(player.background == 'fever'){
        player.backgroundImage = backgroundImages[`fever${backgroundFrame}`]
    } else if(player.background == 'obstacle'){
        player.backgroundImage = backgroundImages[`obstacle${backgroundFrame}`]
    } else if (player.background == 'lastOne'){
        player.backgroundImage = backgroundImages[`last${backgroundFrame}`]
    }

    backgroundFrame += 1
    if(backgroundFrame>=48){
        backgroundFrame = 0
    }
}

function drawBackground() {
    ctx.drawImage(player.backgroundImage, 0, 0, canvas.width, canvas.height);
}

function drawAnswer(answer) {
    ctx.drawImage(frame1, canvas.width / 2 - frameWidth/2 , canvas.height / 2 - frameHeigh/2 , frameWidth, frameHeigh);
    ctx.drawImage(objectImages[houseList[answer]], 133, canvas.height / 2 - frameHeigh/2 + 133, answerWidth, answerWidth);
}

// 오브젝트 그려줌
function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(obstacle.image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

// 아이템 메세지 그려줌
function updateInfo() {
    if(player.lives==0){
        ctx.drawImage(emptyHeart, canvas.width / 2 - heartWidth/2 - heartWidth , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(emptyHeart, canvas.width / 2 - heartWidth/2 , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(emptyHeart, canvas.width / 2 - heartWidth/2 + heartWidth, heartHeight , heartWidth, heartWidth);
    }else if(player.lives==1){
        ctx.drawImage(heart, canvas.width / 2 - heartWidth/2 - heartWidth , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(emptyHeart, canvas.width / 2 - heartWidth/2 , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(emptyHeart, canvas.width / 2 - heartWidth/2 + heartWidth, heartHeight , heartWidth, heartWidth);
    }else if(player.lives==2){
        ctx.drawImage(heart, canvas.width / 2 - heartWidth/2 - heartWidth , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(heart, canvas.width / 2 - heartWidth/2 , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(emptyHeart, canvas.width / 2 - heartWidth/2 + heartWidth, heartHeight , heartWidth, heartWidth);
    }else if(player.lives==3){
        ctx.drawImage(heart, canvas.width / 2 - heartWidth/2 - heartWidth , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(heart, canvas.width / 2 - heartWidth/2 , heartHeight , heartWidth, heartWidth);
        ctx.drawImage(heart, canvas.width / 2 - heartWidth/2 + heartWidth, heartHeight , heartWidth, heartWidth);
    }

    ctx.drawImage(misfortuneBackground, 10, 27 , misfortunewidth, misfortuneheigh);
    
    ctx.font = '25px cc-pixel-arcade-Display';
    ctx.textAlign = "center"
    ctx.lineWidth = 4;

    ctx.fillStyle = 'black'
    ctx.fillText(`${player.items}`, 10+misfortunewidth/2, 37+misfortuneheigh/2);
    
    ctx.font = 'italic 40px cc-pixel-arcade-Display';
    ctx.fillStyle = 'black'
    ctx.strokeText(`${player.score}`, canvas.width / 2 +1 , 30 + scoreheigh / 2 + 1);
    ctx.fillStyle = 'yellow'
    ctx.fillText(`${player.score}`, canvas.width / 2 , 30 + scoreheigh / 2);
}

let timer1;

function updateObstacleSpeed() {
    if (player.score < 3000) {
        obstacleSpeed = 4;
        frequency = 800
        emergencySetCount = 1000
    }
    else if (player.score < 10000) {
        obstacleSpeed = 5;
        frequency = 700
        emergencySetCount = 850
    } else if (player.score < 25000) {
        obstacleSpeed = 6;
        frequency = 600
        emergencySetCount = 700
    } else if (player.score < 50000) {
        obstacleSpeed = 7;
        frequency = 500
        emergencySetCount = 550
    } else {
        obstacleSpeed = 8;
        frequency = 400
        emergencySetCount = 400
    }
    
    if (originalSpeed != obstacleSpeed){
        originalSpeed = obstacleSpeed
        clearInterval(timer1);
        timer1 = setInterval(createObstacle, frequency); // 800ms마다 생성
    }
}

//기본 실행 함수
function gameLoop() {
    if (!gameStarted || gamePaused) return;

    if (gameOver) {
        gameoverMsg.style.display = 'block';
        player.type = 'retire';
        retiredMusic.play()
        retired();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();

    if(!emergency){
        countEmergency();
    }
    if(emergencyAnswerTime){
        drawAnswer(answer);
    }

    drawObstacles();
    updateObstacles();
    checkCollision();
    drawPlayer();
    updateInfo();
    updateObstacleSpeed(); // 장애물 속도 및 생성 빈도 업데이트

    requestAnimationFrame(gameLoop);
}


// 게임 멈춤
stopButton.addEventListener('click', () => {
    gamePaused = !gamePaused;
    if (gamePaused) {
        stopButtonImage.src='img/play.png'
        if(inFeverTime){
            feverTimeMusic.pause()
        }else{
            backgroundMusic.pause();
        }
        
        // 피버 타임 타이머 멈추기
        if (inFeverTime) {
            clearTimeout(feverTimeTimeout);
            feverTimeRemaining -= Date.now() - feverTimeStartTime;
        }
    } else {
        // 피버 타임 타이머 재개 
        stopButtonImage.src='img/stop.png'

        if(inFeverTime){
            feverTimeMusic.play()
        }else{
            backgroundMusic.play();
        }

        if (inFeverTime) {
            feverTimeStartTime = Date.now();
            feverTimeTimeout = setTimeout(() => {
                feverMsg.style.display = 'none';

                player.type = 'default'
                player.background = 'basic'

                backgroundMusic.play()
                feverTimeMusic.pause()
                
                inFeverTime = false;
                invincibility = true;
                setTimeout(()=>{
                    invincibility = false;
                }, 1000)
            }, feverTimeRemaining);
        }
        gameLoop();
    }
});

//돌발상황 카운트
function countEmergency(){
    if(emergencyCount < 0){
        emergencyCount = 1000
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
    }, 7*emergencySetCount*count)
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
        
        //1줄
        createEmergencyObject(answer);

        setTimeout(()=>{
            // 2줄
            createEmergencyObject(answer)
            setTimeout(() => {
                //3줄
                createEmergencyObject(answer)
                if(tmpCount>0){
                    setTimeout(() => {
                        emergencySet()
                    }, 3*emergencySetCount);
                }
            }, emergencySetCount);
        }, emergencySetCount)
    }, 2*emergencySetCount);

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
    if(playerFrame >= 72) {
        localStorage.setItem('houseCount', houseCount);
        localStorage.setItem('score', player.score);
        link = 'delivery_result.html'
        location.replace(link)
        return;
    }
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        updateInfo();
        drawPlayer()
        requestAnimationFrame(retired); 
    }
}

//로딩중
// 1. 캐릭터 이미지 로딩 (0~6) `${playerType[0]}${playerFrame}`으로 로딩
//     에러잡고 에러일시 type++, playerFrame=0해줌
// 2. 아이템 이미지 로딩
// for (var i of (obstacleList+itemList+houseList)){
//     ctx.drawImage(objectImages[i], canvas.width, canvas.height, canvas.width, canvas.height);
// }


const countdown1 = new Image();
const countdown2 = new Image();
const countdown3 = new Image();
const countdown4 = new Image();
countdown1.src = 'img/countdown1.png';
countdown2.src = 'img/countdown2.png';
countdown3.src = 'img/countdown3.png';
countdown4.src = 'img/countdown4.png';

function loading(){
    let lane = 0
    let y = 0

    // 오브젝트 로딩
    const objectList = obstacleList.concat(itemList, houseList)
    for (var t of objectList){
        obstacles.push({
            x: lanes[++lane % 3],
            y: y + 50,
            width: objectwidth,
            height: objectwidth,
            type: t,
            image: objectImages[t]
        });
    }
    drawObstacles();

    // 캐릭터 로딩
    playerFrame = 0
    player.type = 'default'
    for(playerFrame = 0; playerFrame<17 ;playerFrame++){
        player.image = playerMotions[`default${playerFrame}`]
        drawPlayer();
    }
    player.type = 'delivery'
    for(playerFrame = 0; playerFrame<17 ;playerFrame++){
        player.image = playerMotions[`delivery${playerFrame}`]
        drawPlayer();
    }
    player.type = 'fever'
    for(playerFrame = 0; playerFrame<33 ;playerFrame++){
        player.image = playerMotions[`fever${playerFrame}`]
        drawPlayer();
    }
    player.type = 'feverDelivery'
    for(playerFrame = 0; playerFrame<33 ;playerFrame++){
        player.image = playerMotions[`feverDelivery${playerFrame}`]
        drawPlayer();
    }
    player.type = 'getItem'
    for(playerFrame = 0; playerFrame<17 ;playerFrame++){
        player.image = playerMotions[`getItem${playerFrame}`]
        drawPlayer();
    }
    player.type = 'hurt'
    for(playerFrame = 0; playerFrame<48  ;playerFrame++){
        player.image = playerMotions[`hurt${playerFrame}`]
        drawPlayer();
    }
    player.type = 'retire'
    for(playerFrame = 0; playerFrame<72 ;playerFrame++){
        player.image = playerMotions[`retire${playerFrame}`]
        drawPlayer();
    }
    player.type = 'default'
    playerFrame = 0
}

function drawCountdown(image, callback) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화
    ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2); // 중앙에 이미지 그리기
    countdownMusic.currentTime = 0; 
    countdownMusic.play()
    if (callback) {
        setTimeout(callback, 1000); // 1초 후에 다음 이미지 호출
    }
}

function startCountdown() {
    drawCountdown(countdown1, () => {
        drawCountdown(countdown2, () => {
            drawCountdown(countdown3, () => {
                drawCountdown(countdown4);
            });
        });
    });
}

// 로딩이 끝난 후 카운트다운 시작
loading(); // 로딩 함수 호출

//로딩 끝
let countdown = 3
setTimeout(()=>{
    lodingImg.style.display = 'none';
    startCountdown(); // 카운트다운 시작


    // 게임 시작
    setTimeout(() => {
        stopButtonImage.style.display = 'block';
        gameStarted = true;
        gamePaused = false;
        player.lives = 3;
        player.items = 0;
        player.score = 0;
        obstacles.length = 0; 
        gameOver = false;
        var timerEmergency = setInterval(() => {
            if (!inFeverTime && !gamePaused){
                emergencyCount -= 1
            }}, 1000);
        backgroundMusic.play();
        gameLoop();
    }, 5000);
    timer1 = setInterval(createObstacle, 800);
    var timer2 = setInterval(setPlayer, 70);
    var timer3 = setInterval(setBackground, 70);
}, 3000);