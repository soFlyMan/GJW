window.onload = function() {
  var up = document.getElementById('up')
  up.onclick = function() {
    clearInterval(timer)
    var initX = document.body.scrollTop || document.documentElement.scrollTop
    var speed = Math.ceil(initX/5)
    var timer = window.setInterval(function () {
    var x = document.body.scrollTop || document.documentElement.scrollTop
      if(x <= 0) {
        clearInterval(timer)
      }
      document.body.scrollTop = document.documentElement.scrollTop =  x - speed
    }, 30);
  }
}
