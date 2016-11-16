// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var rectClicked = 0
function makeShape(){
  if (rectClicked == 0) {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 100)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 40)
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
rectClicked =  1
}
}
var rectClicked2 = 0
function makeShape2(){
  if (rectClicked2 == 0) {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 200)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 40)
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
rectClicked2 =  1
}

}
var rectClicked3 = 0
function makeShape3(){
  if (rectClicked3 == 0) {
 var circle = document.createElementNS(namespace, "circle")
 circle.setAttribute("cx", 300)
circle.setAttribute("cy", 100)
circle.setAttribute("r", 40)
var canvas = document.getElementById("game-board")
canvas.appendChild(circle)
rectClicked3 =  1
}
}
