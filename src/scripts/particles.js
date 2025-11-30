export function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let animationId;

    const particleCount = 150;
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

        animationId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
        resize();
        createParticles();
    });

    const observer = new MutationObserver(() => {
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });
}
