var heading = 0
var position = {x: 250, y: 250};
var turtle = $("#turtle");
var turtleCage = $(".turtle-cage")

function turnRight(n) {
  heading = heading + n  
}

function turnLeft(n) {
  heading = heading - n
}

function goForward(distance) {    
  var radians = -1 * heading * (Math.PI/180);
  var yIncrement = Math.sin(radians) * distance;
  var xIncrement = Math.cos(radians) * distance;        

  var origPosition = {x: position.x, y: position.y}; 
  var origHeading = heading;

  position.x = position.x + xIncrement;
  position.y = position.y + yIncrement;

  turtle.animate({
    left: position.x, 
    bottom: position.y,
  },{
    duration: 2
    complete : function(){
      insertLine(origPosition, origHeading, distance)
    }
  })

}

function insertLine(start, angle, distance) {
  var lineEl = $("<div class='line'></div>")
  lineEl.css({
    "left": start.x,
    "bottom": start.y,
    "width": distance,
    height: "1px",
    "transform-origin": "0 0 0",
    transform: "rotate(" + angle + "deg)",
    background: "black",
    position: "absolute"
  })
  
  turtleCage.append(lineEl)
}