// function getStyleAttr(obj, attr){
//     if (window.getComputedStyle){
//         return window.getComputedStyle(obj, null)[attr];
//     }
//     return obj.currentStyle[attr];
// }
//
// function animate(obj, json, fn){
//
//
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function(){
//
//         var bStop = true; //表示全部到达目标值
//
//         //遍历json对象中的每个css样式属性键值对
//         for (var attr in json) {
//             var iTarget = json[attr];
//
//             //1, current
//             var current;
//             if (attr == "opacity") { //透明度
//                 current = Math.round(getStyleAttr(obj,attr) * 100);
//             }
//             else { //left,top,width,height
//                 current = parseFloat(getStyleAttr(obj, attr));
//                 current = Math.round(current);
//             }
//
//             //2, speed
//             var speed = (iTarget-current) / 8;
//             speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
//
//             //3, 判断临界值
//             if (current != iTarget){
//                 bStop = false; //说明有至少一个样式属性没有到达目标值
//             }
//
//             //4, 运动
//             if (attr == "opacity") {
//                 obj.style[attr] = (current + speed) / 100;
//                 obj.style.filter = "alpha(opacity="+ (current+speed) +")";
//             }
//             else {
//                 obj.style[attr] = current + speed + "px";
//             }
//
//         }
//
//         //如果bStop=true， 则说明所有样式属性都到达了目标值
//         if (bStop) {
//             clearInterval(obj.timer); //停止运动了
//
//             //回调
//             if (fn) {
//                 fn();
//             }
//         }
//
//     }, 30);
//
// }
//
// var log = console.log.bind(console)
//
// var Carousel = function() {
//   // clearInterval(timer)
//   var o = {
//     left: 0,
//     moveToLeft: -600,
//     clickFlag: true,
//   }
//   // o.direction = 'left'
//   var id = o.id = document.getElementById('list')
//   var carousel = o.carousel = document.getElementById('carousel')
//   var pre = o.pre = document.getElementsByClassName('switch')[0]
//   var next = o.next = document.getElementsByClassName('switch')[1]
//
//   o.play = function() {
//     o.left += o.moveToLeft
//
//     //seamless switch
//     if(o.left > 0) {
//       o.id.style.left = -2400 + 'px'
//       o.left = -1800
//     }
//     if(o.left < -2400) {
//       id.style.left = 0 + 'px'
//       o.left = -600
//     }
//
//     animate(id, { left: o.left }, function() {
//       log('123')
//       o.clickFlag = true
//     })
//   }
//   o.stop = function() {
//     clearInterval(timer)
//   }
//   o.infinitePlay = function() {
//     timer = setInterval(function() {
//       o.play()
//     },2000)
//   }
//
//   carousel.onmouseover = function() {
//     o.stop()
//   }
//   carousel.onmouseout = function() {
//     o.infinitePlay()
//   }
//
//   next.onclick = function() {
//     o.moveToLeft = -600
//
//     if(o.clickFlag) {
//       o.play()
//     }
//
//     o.clickFlag = false
//   }
//
//   pre.onclick = function() {
//     o.moveToLeft = 600
//
//     if(o.clickFlag) {
//       o.play()
//     }
//
//     o.clickFlag = false
//   }
//
//   return o
// }
//
// window.onload = function() {
//   var carousel = Carousel()
//
//   carousel.infinitePlay()
// }
