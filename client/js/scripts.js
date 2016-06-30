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
    event.which == 113 ) {
    event.preventDefault();
  }

  if (event.which == 113) {
    $("#iconbar").toggleClass("active");
  }
  if ($("#iconbar").hasClass( "active" )) {
    if (event.which >=48 && event.which <= 57 ) {
      console.log("starte programm " + (event.which - 48));

      $("#iconbar").toggleClass("active");
    }
    if (event.which == 84) {
      createWindow('Terminal',"app","normal","","center");
      $("#iconbar").toggleClass("active");

    }
    if (event.which == 82) {
      randomColor();
    }
    event.preventDefault();
  }
  var msg = "Handler for .keypress() called " + event.which;
  console.log( msg);
});
var windowlist = "";
function createWindow(windowTitle="",windowType="bullshit",windowSize="small",windowCodebase="",windowPos="random") {
  windowId=Math.floor(Math.random()*16777215).toString(16);
  var scriptlink = "<script type=\"text/javascript\">if (typeof App" + windowCodebase + "Init == 'function') { App" + windowCodebase + "Init($(\"#windowId" + windowId + "\")); }</script>";
  pos="";
  autoFocus="";
  if (windowPos == "random") {
    leftpos=Math.floor(Math.random() * 17)*5;
    toppos=Math.floor(Math.random() * 17)*5;
    while (leftpos>=25 && leftpos<=75 && toppos>=25 && toppos<=75) {
      leftpos=Math.floor(Math.random() * 9)*10;
    }

    pos+=" style=\"top: " + toppos + "%;left: " + leftpos + "%;\"";

  }
  if (windowType!="bullshit") {
    autoFocus="<script>focusme($(\"#windowId" + windowId + "\"));</script>";
  }
  $("#windowlist").append("<div id=\"windowId" + windowId + "\" class=\"window " + windowSize + " wtype" + windowType + " unfocus ui-widget-content\"" + pos + " onclick=\"focusme(this);\">" + autoFocus + scriptlink + "<form onsubmit=\"submitInput();\"><div class=\"windowtitle\">" + windowTitle + " #<input class=\"windowinput\" type=\"text\" /></div></form><div class=\"windowcontent\"></div></div>");
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
  while (n >= 10) {
    $('.wtypebullshit:eq(0)').remove();
    n = $( ".wtypebullshit" ).size();

  }
  createWindow('H4x0r',"bullshit","small","bullshit","random");


}
function randomColor() {
  colbase = Math.floor(Math.random()*16777215).toString(16);
  colback = Math.floor(Math.random()*16777215).toString(16);
  console.log("#" + colbase + "  -- #" + colback);
  less.modifyVars({
    '@base': '#' + colbase,
    '@back': '#' + colback
  });

}
function AppbullshitInit(target) {
  randomvalue = "";
  for (i=0;i<=64;i++) {
    randomvalue+= Math.floor(Math.random()*16).toString(16) + "" + Math.floor(Math.random()*16).toString(16) + " ";

  }

  $(target.selector + " .windowcontent").html(randomvalue);
}
function updateScoreboard() {
  $.getJSON( "../api/players", function( data ) {
    var output = "";
    var num=1;
    $.each( data, function( key, val ) {
      output+="    <div id=\"player" + num++ + "\" class=\"playerbar\" style=\"background: " + val.color + ";width: " + val.scorepercent + "%;\">" + val.score + "</div>";
    });
    $("#scoreboard").html(output);
    $.each( data, function( key, val ) {
      $("#player" + num).animate({
        width: val.widthpercent-10 + "%"

      },500);
    });

  });
}
window.setInterval("less.watch();",500);
window.setInterval("updateScoreboard();",500);
window.setInterval("bullshitWindow();",5000);
