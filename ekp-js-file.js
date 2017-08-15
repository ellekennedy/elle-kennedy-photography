$(document).ready(function(){
  $(".submenu1").hide();
  $(".submenu2").hide();
  $(".portfolionav").click(function(){
    $(".submenu1").toggle();
    $(".submenu2").hide();
  });
  $(".blognav").click(function(){
    $(".submenu2").toggle();
    $(".submenu1").hide();
  });

});
