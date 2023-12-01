var joystick = new VirtualJoystick({
  container: document.getElementById("container"),
  mouseSupport: true,
});
joystick.addEventListener("touchStart", function () {
  console.log("down");
});
joystick.addEventListener("touchEnd", function () {
  console.log("up");
});

setInterval(function () {
  x=x+joystick.deltaX()/2;
  y=y+joystick.deltaY()/2;
  //joystick.deltaX();
  //joystick.deltaY();
}, (1 / 30) * 1000);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let x = 150;
let y = 150;

function refresh() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#003300";
  ctx.stroke();
  if (x<0) x=0;
  if (x>300) x=300;
  if (y<0) y=0;
  if (y>300) y=300;

  requestAnimationFrame(refresh);
}
refresh();