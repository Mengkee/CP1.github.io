
window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.pageYOffset+500
//console.log("top: " + last_known_scroll_position + "px;")
  function scroll(){
    var element = document.getElementById("elem");
    element.style.cssText += "top: " + last_known_scroll_position + "px;";}
    scroll();
});

function myFunction() {
var x = document.getElementById("sidebar");
var y = document.getElementById("nonsiderbar");
if (x.style.display === "none") {
  x.style.display = "block";
  y.style.width = 0.7;
} else {
  x.style.display = "none";
  y.style.width = 1;
}
}
