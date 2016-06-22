$(function() {
  $( ".window" ).draggable();
  $( "#iconbar" ).draggable();

});
  $(".window").click(function() {
  $(".window").removeClass("focus");
  $(".window").addClass("unfocus");
  $(this).removeClass("unfocus");
  $(this).addClass("focus");
  $(".focus input").focus();
});
$( "html" ).keydown(function( event ) {
  if (
    event.which == 9 ||
    event.which == 16 ||
    event.which == 17 ||
    event.which == 18 ||
    event.which == 33 ||
    event.which == 34 ||
    event.which == 35 ||
    event.which == 36 ||
    event.which == 45 ||
    event.which == 46 ||
    event.which == 93 ||
    event.which == 192 ) {
    event.preventDefault();
  }

  if (event.which == 192) {
    $("#iconbar").toggleClass("active");
  }
  if ($("#iconbar").hasClass( "active" )) {
    if (event.which >=48 && event.which <= 57 ) {
      console.log("starte programm " + (event.which - 48));
      $("#iconbar").toggleClass("active");
    }
  }
  var msg = "Handler for .keypress() called " + event.which;
  console.log( msg);
  console.log( event );
});
var windowlist = "";
function createWindow(windowTitle,windowCodebase, windowSize) {

}
function windowFocus(windowId) {
  toFocus = $("#" + windowId);
  $(".window").removeClass("focus");
  $(".window").addClass("unfocus");
  $(toFocus).removeClass("unfocus");
  $(toFocus).addClass("focus");
  $(".focus input").focus();

}
// less.modifyVars({
//   '@base': '#FF00FF'
// });
// window.setInterval("less.watch();",500);
