//alert("PROBA JS");
/* Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.
*/
window.onload = function() {
  alert("PAGE DOWNLOAD.");
  $("#slider-01 > span").on('click', function() {
    alert("CLICK by handle!");
  });
};
/*
$("#slider-01").on('click', function() {
    alert("CLICK");
});
$("ui-slider .ui-slider-handle").css("background-color", 'green');
*/