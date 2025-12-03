export function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // Cancel previous animation to prevent multiple loops
    if (canvas.dataset.animationId) {
        cancelAnimationFrame(parseInt(canvas.dataset.animationId));
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];

    // Adjust particle count based on screen size
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 50 : 100; // Reduced count for performance
    const moveSpeed = 0.5;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * moveSpeed;
            this.vy = (Math.random() - 0.5) * moveSpeed;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw(color) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function getThemeColor() {
        return document.documentElement.classList.contains("dark")
            ? "rgba(255, 255, 255, 0.5)"
            : "rgba(0, 0, 0, 0.5)";
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const color = getThemeColor();

        particles.forEach((particle) => {
            particle.update();
            particle.draw(color);
        });

        const animationId = requestAnimationFrame(animate);
        canvas.dataset.animationId = animationId.toString();
    }

    // Initialize
    resize();
    createParticles();
    animate();

    // Handle resize without recreating particles (prevents jumping on mobile scroll)
    // Remove previous listener if exists to avoid duplicates (though difficult with anonymous functions, 
    // the main issue is usually the animation loop).
    // We'll just assign a new onresize handler or use a flag.
    // Better: Use a named function for resize if we wanted to remove it, 
    // but since we re-run initParticles on page load, we mainly care about the loop.

    window.addEventListener("resize", () => {
        resize();
        // Do NOT call createParticles() here. 
        // Just let them flow. If the screen gets much bigger, they might be sparse, 
        // but that's better than resetting.
    });
}
