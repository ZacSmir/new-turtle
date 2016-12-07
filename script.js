var n = $("#draw").val()

function cat(n){
for (i=0; i<n; i++){
goForward(360/n)
turnLeft(360/n)
}
}


$("#clickdraw").click(
  n = $("#draw").val()
cat(n)
)

