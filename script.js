var n = $("#draw").val()

function cat(n,x){
for (i=0; i<n; i++){
goForward(x/n)
turnLeft(360/n)
}
}


$("#clickdraw").click( function() {
  n = $("#draw").val()
cat(n)
//star(n)
})


//function star(x){
//for (i=0; i<x; i++){
//goForward(360/n)
//turnLeft(720/n)
//goForward(360/n)
//turnRight(360/n)
//}  
//}
cat(360, 1440)
turnLeft(90)
goinvisible(60)
turnRight(90)
cat(360, 1080)
turnLeft(90)
goinvisible(60)
turnRight(90)
cat(360, 720)
turnLeft(90)
goinvisible(60)
turnRight(90)
cat(360,360)
turnLeft(90)
goinvisible(30)
turnRight(90)
cat(360, 180)
turnLeft(90)
goinvisible(60)
turnRight(90)
cat(360, 180)
