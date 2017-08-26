var data = [
  {
    "id": 1,
    "name": "46度 口子窖 五年口子窖酒（2009年产） 400ml		",
    "price": 99,
    "img": "http://img0.gjw.com/Famous/2017/0818/9c1aae3035d447c3b0a3b102b47f991d.jpg",
    "msg": "2009年老酒",
  },
  {
    "id": 2,
    "name": "46度 口子窖 五年口子窖酒（2009年产） 400ml		",
    "price": 688,
    "img": "http://img0.gjw.com/Famous/2017/0818/9c1aae3035d447c3b0a3b102b47f991d.jpg",
    "msg": "2009年老酒",
  },
  {
    "id": 3,
    "name": "46度 口子窖 五年口子窖酒（2009年产） 400ml		",
    "price": 128,
    "img": "http://img0.gjw.com/Famous/2017/0818/9c1aae3035d447c3b0a3b102b47f991d.jpg",
    "msg": "2009年老酒",
  },
  {
    "id": 4,
    "name": "46度 口子窖 五年口子窖酒（2009年产） 400ml		",
    "price": 99,
    "img": "http://img0.gjw.com/Famous/2017/0818/9c1aae3035d447c3b0a3b102b47f991d.jpg",
    "msg": "2009年老酒",
  },
  {
    "id": 5,
    "name": "46度 口子窖 五年口子窖酒（2009年产） 400ml		",
    "price": 688,
    "img": "http://img0.gjw.com/Famous/2017/0818/9c1aae3035d447c3b0a3b102b47f991d.jpg",
    "msg": "2009年老酒",
  },
  {
    "id": 6,
    "name": "46度 口子窖 五年口子窖酒（2009年产） 400ml		",
    "price": 128,
    "img": "http://img0.gjw.com/Famous/2017/0818/9c1aae3035d447c3b0a3b102b47f991d.jpg",
    "msg": "2009年老酒",
  },
]

var myArr = []
$(function() {
  // $.get("json/items.json", function(data) {
  //     log('123')
    myArr = data
    for(var i = 0; i < data.length; i++) {
      var item = data[i]
      var li = $("<li class='item-public'></li>").appendTo($(".bgzk-rt ul"))
      $("<div class='item-public-style'>" + item.msg + "</div>").appendTo(li)
      $("<img src=" + item.img +">").appendTo(li)
      $("<div class='item-public-msg'>" + item.name + "</div>").appendTo(li)
      $("<div>.</div>").appendTo(li)
      $("<div class='item-public-price'>" + item.price + "元</div>").appendTo(li)
      // <div class="item-public-style">2009年老酒</div>
      // <img src="http://img0.gjw.com/Famous/2017/0815/a20820af7fb947e585735509ffe123ea.jpg" alt="">
      // <div class="item-public-msg">46度 口子窖 五年口子窖酒（2009年产） 400ml		</div>
      // <div>.</div>
      // <div class="item-public-price">99 元</div>
    }
  // })

    //事件委托
    $(".bgzk-rt ul").on("click", "li", function() {
      var index = $(this).index()
      var obj = myArr[index]
      var id = obj.id

      location.href = "item.html?id=" + id

    })
})
