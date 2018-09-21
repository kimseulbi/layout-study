// jQuery를 활용한 인터렉션 ...
// item 변수에 class 선언
var item = $(".menu-item");
var subItem = $('.sub-menu a');
// 동적으로 컨트롤 할수 있음 
item.attr('tabindex', 0);

// icon 동적으로 변경 
// toggleClass: remove + add
subItem.hover(function () {
    $(this).toggleClass("menu-act");
});
subItem.on("mouseover focusin", function() {
  //모든영역에  menu-act를 모두 지운다.
  subItem.removeClass("menu-act");
  $(this).addClass("menu-act");
});


 