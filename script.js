//var n = $("#draw").val()
//
//function cat(n,x){
//for (i=0; i<n; i++){
//goForward(x/n)
//turnLeft(360/n)
//}
//}
//
//
//$("#clickdraw").click( function() {
//  n = $("#draw").val()
//cat(n)
//star(n)
//})
//
//
//function star(x){
//for (i=0; i<x; i++){
//goForward(360/n)
//turnLeft(720/n)
//goForward(360/n)
//turnRight(360/n)
//}  
//}

//cat(360,270)
//turnLeft(90)
//goinvisible(15)
//turnRight(90)
//
//cat(360, 180)
//turnLeft(90)
//goinvisible(15)
//turnRight(90)
//
//cat(360, 90)
//var gameInput = $("#gameinput")
//
//gameInput.keydown(function(keydownEvent) {
//  // the key code for enter is 13

var gameInput = $(document)

var x = goForward


gameInput.keydown(function(keydownEvent) {
  // the key code for enter is 13
  if (keydownEvent.keyCode == 68) {      
   console.log("up")
   heading = 0
   goForward(50)
  }  
  if (keydownEvent.keyCode == 65) {      
    console.log("down")
    heading = 180
    x(50)
  }  
  if (keydownEvent.keyCode == 87) {
    heading = 270
    console.log("left")
    goForward(50)
  }  
  if (keydownEvent.keyCode == 83) {      
    console.log("right")
    heading = 90
    goForward(50)
  }  
  if (keydownEvent.keyCode == 32) {      
  
    
  }  
  
})





























