console.log("console xxx")
document.getElementById("messaggio").innerHTML = "ci siamo"
document.getElementById("Navicella").style.marginLeft = "1px"
document.getElementById("btMuovi").onclick = moveClick

var speed = 10,
  pos = 1
 
function moveClick() {
  pos = move(speed, pos)
  console.log("moveClick")
  document.getElementById("Navicella").style.marginLeft = pos + "px"
}

function move(speed, pos) {
  return  pos + (pos * speed)
}
