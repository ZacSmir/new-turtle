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

cat(360, 360)
cat(360,180)
cat(360, 90)
cat(360, 45)