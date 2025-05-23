import { useEffect } from "react";

const BGD = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function clearCanvas() {
      ctx.fillStyle = "#1A1A1D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawVioletGradientArc(x, y) {
      const radius = 500;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.05)"); // light silver
      gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.04)"); // medium gray
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.01)");

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
    }

    function animate() {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      clearCanvas();
      drawVioletGradientArc(currentX, currentY);

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="bgd">
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default BGD;
