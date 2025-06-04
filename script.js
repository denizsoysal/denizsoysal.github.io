const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  stars = Array.from({ length: 300 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speedX: 0.3 + Math.random() * 0.5,
    speedY: 0.1 + Math.random() * 0.8,
    phase: Math.random() * Math.PI * 2,
  }));
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    const brightness = 0.7 + 0.3 * Math.sin(star.phase);
    ctx.fillStyle = `rgba(255, 255, 255, ${brightness.toFixed(2)})`;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.x += star.speedX;
    star.y += star.speedY;
    star.phase += 0.05;

    // Respawn stars from top or left when out of bounds
    if (star.y > canvas.height || star.x > canvas.width) {
      const fromTop = Math.random() < 0.5;
      if (fromTop) {
        star.x = Math.random() * canvas.width;
        star.y = 0;
      } else {
        star.x = 0;
        star.y = Math.random() * canvas.height;
      }
      star.phase = Math.random() * Math.PI * 2;
    }
  }

  requestAnimationFrame(draw);
}

draw();
