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
  if (Math.floor(Math.random() * 3) == 0) {
    bullshitWindow();
  }
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
      createWindow('H4x0r',"app","normal","","center");
      $("#iconbar").toggleClass("active");

    }
    event.preventDefault();
  }
  var msg = "Handler for .keypress() called " + event.which;
  console.log( msg);
  console.log( event );
});
var windowlist = "";
function createWindow(windowTitle="",windowType="bullshit",windowSize="small",windowCodebase="",windowPos="random") {
  pos="";
  if (windowPos == "random") {
    leftpos=Math.floor(Math.random() * 17)*5;
    toppos=Math.floor(Math.random() * 17)*5;
    while (leftpos>=25 && leftpos<=75 && toppos>=25 && toppos<=75) {
      leftpos=Math.floor(Math.random() * 9)*10;
    }

    pos+=" style=\"top: " + toppos + "%;left: " + leftpos + "%;\"";

  }
  $("#windowlist").append("<div class=\"window " + windowSize + " wtype" + windowType + " unfocus ui-widget-content\"" + pos + " onclick=\"focusme(this);\"><form onsubmit=\"submitInput();\"><div class=\"windowtitle\">" + windowTitle + " #<input class=\"windowinput\" type=\"text\" /></div></form><div class=\"windowcontent\">WindowContentOfTheYear</div></div>");
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
function bullshitWindow() {
  var n = $( ".wtypebullshit" ).size();
  while (n >= 50) {
    $('.wtypebullshit:eq(0)').remove();
    n = $( ".wtypebullshit" ).size();

  }
  createWindow('H4x0r',"bullshit","small","","random");


}
// less.modifyVars({
//   '@base': '#FF00FF'
// });
window.setInterval("less.watch();",500);
window.setInterval("bullshitWindow();",15);
