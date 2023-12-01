let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function initCanvas() {
    document.body.appendChild(canvas);
    resizeCanvas(canvas);
    window.addEventListener('resize', function () {
        resizeCanvas(canvas);
    });
    return canvas;
}

// Function to resize the canvas based on the window size
function resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Add your drawing or other canvas-related code here
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

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
  if (x>window.innerWidth) x=window.innerWidth;
  if (y<0) y=0;
  if (y>window.innerHeight) y=window.innerHeight;

  requestAnimationFrame(refresh);
}
refresh();

const myCanvas = initCanvas();