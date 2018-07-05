window.onload = function () {
    let cxt = document.getElementById('doraemon').getContext('2d');
    /* 头部*/
    cxt.beginPath();
    cxt.lineWidth = 1;
    cxt.strokeStyle = '#000';
    cxt.arc(200, 175, 175, 0.7 * Math.PI, 0.3 * Math.PI);
    cxt.fillStyle = '#019FE8';
    cxt.fill();
    cxt.stroke();
    /*脸部*/
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.moveTo(110, 110);
    cxt.quadraticCurveTo(-10, 200, 130, 315);
    cxt.lineTo(270, 315);
    cxt.quadraticCurveTo(400, 210, 290, 110);
    cxt.fill();
    cxt.stroke();
    /*眼睛*/
    cxt.beginPath();
    cxt.lineWidth = 1;
    cxt.fillStyle = '#fff';
    cxt.moveTo(110, 110);
    cxt.bezierCurveTo(110, 25, 200, 25, 200, 100);//创建三次贝塞尔曲线,控制点1(110,25),控制点2(200,25),结束点(200,100)，也就是画左上半椭圆
    cxt.bezierCurveTo(200, 175, 110, 175, 110, 100);//画左下半椭圆
    cxt.moveTo(200, 100);
    cxt.bezierCurveTo(200, 25, 290, 25, 290, 100);
    cxt.bezierCurveTo(290, 175, 200, 175, 200, 100);
    cxt.fill();
    cxt.stroke();
    /*左眼球横线*/
    cxt.beginPath();
    cxt.fillStyle = '#000';
    cxt.moveTo(110, 100);
    cxt.lineTo(200, 100);
    cxt.fill();
    cxt.stroke();
    /*右眼球横线*/
    cxt.beginPath();
    cxt.fillStyle = '#000';
    cxt.moveTo(200, 100);
    cxt.lineTo(290, 100);
    cxt.fill();
    cxt.stroke();
    /*右眼球*/
    cxt.beginPath();
    cxt.fillStyle = '#000';
    cxt.arc(230, 110, 12, 1.7 * Math.PI, 1.3 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /*左眼球*/
    cxt.beginPath();
    cxt.fillStyle = '#000';
    cxt.arc(140, 110, 12, 1.7 * Math.PI, 1.3 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /*右眼白*/
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.arc(230, 110, 5, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /*左眼白*/
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.arc(140, 110, 5, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /* 鼻子*/
    cxt.beginPath();
    cxt.arc(200, 170, 25, 0, 2 * Math.PI);
    cxt.fillStyle = '#E1002a';
    cxt.fill();
    cxt.stroke();
    /*胡须*/
    //左胡须
    cxt.beginPath();
    cxt.moveTo(80, 175);
    cxt.lineTo(150, 195);
    cxt.moveTo(80, 200);
    cxt.lineTo(150, 205);
    cxt.moveTo(80, 225);
    cxt.lineTo(150, 215);
    //中部胡须
    cxt.moveTo(200, 195);
    cxt.lineTo(200, 240);
    //右胡须
    cxt.moveTo(250, 195);
    cxt.lineTo(320, 175);
    cxt.moveTo(250, 205);
    cxt.lineTo(320, 200);
    cxt.moveTo(250, 215);
    cxt.lineTo(320, 225);
    cxt.stroke();
    /*嘴*/
    cxt.moveTo(200, 240);
    cxt.bezierCurveTo(170, 245, 170, 250, 195, 260);
    cxt.stroke();
    cxt.moveTo(195, 260);
    cxt.bezierCurveTo(165, 270, 165, 275, 200, 280);
    cxt.stroke();
    /*脖圈儿*/
    cxt.beginPath();
    cxt.moveTo(76, 316);
    cxt.lineTo(325, 316);
    cxt.lineTo(325, 336);
    cxt.lineTo(76, 336);
    cxt.lineTo(76, 316);
    cxt.fillStyle = '#E1002a';
    cxt.fill();
    cxt.stroke();
    /*下半身*/
    cxt.beginPath();
    cxt.fillStyle = '#019FE8';
    cxt.moveTo(85, 336);
    cxt.lineTo(26, 406);
    cxt.lineTo(65, 440);
    cxt.lineTo(90, 418);
    cxt.lineTo(90, 528);
    cxt.lineTo(180, 528);
    cxt.lineTo(310, 528);
    cxt.lineTo(310, 418);
    cxt.lineTo(337, 440);
    cxt.lineTo(374, 406);
    cxt.lineTo(315, 336);
    cxt.fill();
    cxt.stroke();
    /*铃铛*/
    cxt.beginPath();
    cxt.fillStyle = '#FCE439';
    cxt.arc(200, 326, 17, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /*铃铛横线*/
    cxt.beginPath();
    cxt.fillStyle = '#000';
    cxt.moveTo(183, 322);
    cxt.lineTo(217, 322);
    cxt.moveTo(183, 327);
    cxt.lineTo(217, 327);
    cxt.fill();
    cxt.stroke();
    /*铃铛口*/
    cxt.beginPath();
    cxt.fillStyle = '#000';
    cxt.arc(200, 337, 6, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /*手*/
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.arc(37, 433, 30, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.arc(363, 433, 30, 0, 2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    /*肚*/
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.arc(200, 400, 91, 1.8 * Math.PI, 1.2 * Math.PI);
    cxt.fill();
    cxt.stroke();
    //小口袋
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.moveTo(130, 394);
    cxt.lineTo(270, 394);
    cxt.moveTo(130, 394);
    cxt.bezierCurveTo(130, 490, 270, 490, 270, 394);
    cxt.fill();
    cxt.stroke();
    /*两只脚的空隙*/
    cxt.beginPath();
    cxt.fillStyle = '#fff';
    cxt.arc(200, 529, 20, Math.PI, 0);
    cxt.fill();
    cxt.stroke();
};