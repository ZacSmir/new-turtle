var n = $("#draw").val()

function cat(n){
for (i=0; i<n; i++){
goForward(360/n)
turnLeft(360/n)
}
}


$("#clickdraw").click( function() {
  n = $("#draw").val()
cat(n)
star(6)
})


function star(x){
for (i=0; i<x; i++){
goForward(360/x)
turnLeft(720/x)
goForward(360/x)
turnleft(720/x)
}  
}

star(6)