$(function() {
  $( ".window" ).draggable();
  $( "#iconbar" ).draggable();

});
function focusme(what) {
  $(".window").removeClass("focus");
  $(".window").addClass("unfocus");
  $(what).removeClass("unfocus");
  $(what).addClass("focus");
  $(".focus input").focus();
}

function submitInput(){
  value = $(".focus input").val();
  $(".focus input").val("");
  alert(value);
  event.preventDefault();
}
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
    if (event.which == 83) {
      createWindow('H4x0r','',"normal");
      $("#iconbar").toggleClass("active");

    }
    event.preventDefault();
  }
  var msg = "Handler for .keypress() called " + event.which;
  console.log( msg);
  console.log( event );
});
var windowlist = "";
function createWindow(windowTitle="le-le-lew1nD0w",windowCodebase="", windowSize="normal") {
  $("#windowlist").append("<div class=\"window " + windowSize + " unfocus ui-widget-content\" onclick=\"focusme(this);\"><form onsubmit=\"submitInput();\"><div class=\"windowtitle\">" + windowTitle + " #<input class=\"windowinput\" type=\"text\" /></div></form><div class=\"windowcontent\">WindowContentOfTheYear</div></div>");
  $( ".window" ).draggable();

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
window.setInterval("less.watch();",500);
