$(function() {
  function getList() {
    var arrC = JSON.parse($.cookie("cart"))
    var yh = 12
    var table = $(".goods table")
    for(var i = 0; i < arrC.length; i++) {
      var obj = arrC[i]
      var tr = $("<tr></tr>").appendTo(table)
      $("<td class='cb-r1'></td>").appendTo(tr)
      $("<td class='cb-r2'>" + obj.name + "</td>").appendTo(tr)
      $("<td class='cb-r3'>" + obj.price + "</td>").appendTo(tr)
      $("<td class='cb-r4'>" + yh * obj.num + "</td>").appendTo(tr)
      $("<td class='cb-r5'>" + obj.num + "<button class='add'>+</button><button  class='dec'>-</button></td>").appendTo(tr)
      $("<td class='cb-r6'>" + (obj.price - yh) * obj.num + "</td>").appendTo(tr)
      $("<td class='cb-r7 del'>删除</td>").appendTo(tr)
      // <tr>
      //   <td class="cb-r1"></td>
      //   <td class="cb-r2">46度 口子窖 五年口子窖酒（2009年产） 400ml		</td>
      //   <td class="cb-r3">99</td>
      //   <td class="cb-r4">21</td>
      //   <td class="cb-r5">1</td>
      //   <td class="cb-r6">78</td>
      //   <td class="cb-r7">删除</td>
      // </tr>

    }
  }

  getList()

  $(".add").on("click", function() {
    log(123)
    var arrC = JSON.parse($.cookie("cart"))
    var index = $(this).parent().parent().index()
    arrC[index].num++
    log(arrC)

    $.cookie("cart", JSON.stringify(arrC), { expires: 10, })

    location.href = "cart.html"
  })

  $(".dec").on("click", function() {
    var arrC = JSON.parse($.cookie("cart"))
    var index = $(this).parent().parent().index()
    log(arrC[index].num)
    if(arrC[index].num <= 1) {
      alert("数量不能小于1")
      return;
    }
    arrC[index].num--

    $.cookie("cart", JSON.stringify(arrC), { expires: 10, })

    location.href = "cart.html"
  })

  $(".del").on("click", function() {
    var arrC = JSON.parse($.cookie("cart"))
    var index = $(this).parent().index()
    arrC.splice(index, 1)
    $.cookie("cart", JSON.stringify(arrC), { expires: 10, })

    location.href = "cart.html"
  })

})
