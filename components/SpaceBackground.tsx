import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        let meteors: Meteor[] = [];
        let planets: Planet[] = [];
        let nebulaClouds: NebulaCloud[] = [];
        let moon: Moon;
        let comet: Comet | null = null;

        const starCount = 200;

        let mouseX = 0;
        let mouseY = 0;

        class Star {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            pulseSpeed: number;
            parallaxFactor: number;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.05;
                this.speedY = (Math.random() - 0.5) * 0.05;
                this.opacity = Math.random();
                this.pulseSpeed = Math.random() * 0.02 + 0.005;
                this.parallaxFactor = Math.random() * 0.1 + 0.02;
            }

            update(width: number, height: number) {
                this.x += this.speedX;
                this.y += this.speedY;

                const targetX = this.x + (mouseX - width / 2) * this.parallaxFactor;
                const targetY = this.y + (mouseY - height / 2) * this.parallaxFactor;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                this.opacity += this.pulseSpeed;
                if (this.opacity > 1 || this.opacity < 0.2) {
                    this.pulseSpeed = -this.pulseSpeed;
                }

                return { targetX, targetY };
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                const { targetX, targetY } = this.update(width, height);
                ctx.beginPath();
                ctx.arc(targetX, targetY, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
                return { targetX, targetY };
            }
        }

        class NebulaCloud {
            x: number;
            y: number;
            radius: number;
            color: string;
            parallaxFactor: number;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 400 + 200;
                const colors = [
                    'rgba(76, 29, 149, 0.03)', // Deep Purple
                    'rgba(30, 58, 138, 0.03)', // Deep Blue
                    'rgba(124, 45, 18, 0.03)', // Deep Orange/Rust
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.parallaxFactor = 0.005;
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                const targetX = this.x + (mouseX - width / 2) * this.parallaxFactor;
                const targetY = this.y + (mouseY - height / 2) * this.parallaxFactor;

                const gradient = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(targetX, targetY, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Planet {
            x: number;
            y: number;
            radius: number;
            color: string;
            hasRings: boolean;
            parallaxFactor: number;
            angle: number;

            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 15 + 5;
                const colors = ['#4a5568', '#718096', '#2d3748', '#ecc94b', '#f56565'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.hasRings = Math.random() > 0.7;
                this.parallaxFactor = Math.random() * 0.01 + 0.005;
                this.angle = Math.random() * Math.PI * 2;
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                this.angle += 0.0001;
                const targetX = this.x + (mouseX - width / 2) * this.parallaxFactor + Math.cos(this.angle) * 20;
                const targetY = this.y + (mouseY - height / 2) * this.parallaxFactor + Math.sin(this.angle) * 20;

                // Rings back
                if (this.hasRings) {
                    ctx.beginPath();
                    ctx.ellipse(targetX, targetY, this.radius * 2.5, this.radius * 0.8, Math.PI / 6, 0, Math.PI, false);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }

                // Planet body
                const gradient = ctx.createRadialGradient(targetX - this.radius / 3, targetY - this.radius / 3, 0, targetX, targetY, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'black');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(targetX, targetY, this.radius, 0, Math.PI * 2);
                ctx.fill();

                // Rings front
                if (this.hasRings) {
                    ctx.beginPath();
                    ctx.ellipse(targetX, targetY, this.radius * 2.5, this.radius * 0.8, Math.PI / 6, Math.PI, Math.PI * 2, false);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }
        }

        class Meteor {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            angle: number;

            constructor(width: number) {
                this.reset(width);
            }

            reset(width: number) {
                this.x = Math.random() * width;
                this.y = -100;
                this.length = Math.random() * 100 + 50;
                this.speed = Math.random() * 10 + 10;
                this.opacity = 1;
                this.angle = Math.PI / 4;
            }

            update(width: number, height: number) {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity -= 0.015;

                return !(this.y > height || this.opacity <= 0);
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                if (!this.update(width, height)) return;

                const gradient = ctx.createLinearGradient(
                    this.x, this.y,
                    this.x - Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                ctx.stroke();
            }
        }

        class Moon {
            x: number;
            y: number;
            radius: number;
            parallaxFactor: number;

            constructor(width: number, height: number) {
                this.x = width * 0.85;
                this.y = height * 0.25;
                this.radius = 100;
                this.parallaxFactor = 0.003;
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                const targetX = this.x + (mouseX - width / 2) * this.parallaxFactor;
                const targetY = this.y + (mouseY - height / 2) * this.parallaxFactor;

                const glow = ctx.createRadialGradient(targetX, targetY, this.radius, targetX, targetY, this.radius * 2.5);
                glow.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
                glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(targetX, targetY, this.radius * 2.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(targetX, targetY, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#f0f0f0';
                ctx.fill();

                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                [
                    { x: -25, y: -35, r: 15 },
                    { x: 10, y: 25, r: 22 },
                    { x: 45, y: -10, r: 10 },
                ].forEach(c => {
                    ctx.beginPath();
                    ctx.arc(targetX + c.x, targetY + c.y, c.r, 0, Math.PI * 2);
                    ctx.fill();
                });

                ctx.globalCompositeOperation = 'source-atop';
                ctx.beginPath();
                ctx.arc(targetX - 35, targetY, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
            }
        }

        class Comet {
            x: number;
            y: number;
            speed: number;
            angle: number;
            opacity: number;

            constructor(width: number, height: number) {
                this.x = -100;
                this.y = Math.random() * height * 0.5;
                this.speed = 0.2;
                this.angle = Math.PI / 8;
                this.opacity = 0;
            }

            draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
                this.x += this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (this.x < width * 0.2) this.opacity += 0.001;
                if (this.x > width * 0.8) this.opacity -= 0.001;

                if (this.opacity <= 0 && this.x > width) return false;

                const tailLength = 150;
                const grad = ctx.createLinearGradient(this.x, this.y, this.x - tailLength, this.y - Math.sin(this.angle) * tailLength);
                grad.addColorStop(0, `rgba(135, 206, 235, ${this.opacity * 0.8})`);
                grad.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - tailLength, this.y - Math.sin(this.angle) * tailLength);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();

                return true;
            }
        }

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push(new Star(canvas.width, canvas.height));
            }
            planets = [new Planet(canvas.width, canvas.height), new Planet(canvas.width, canvas.height)];
            nebulaClouds = [new NebulaCloud(canvas.width, canvas.height), new NebulaCloud(canvas.width, canvas.height), new NebulaCloud(canvas.width, canvas.height)];
            moon = new Moon(canvas.width, canvas.height);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const bgGrad = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            bgGrad.addColorStop(0, '#0a0a0c');
            bgGrad.addColorStop(1, '#000000');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nebulaClouds.forEach(cloud => cloud.draw(ctx, canvas.width, canvas.height));
            moon.draw(ctx, canvas.width, canvas.height);
            planets.forEach(p => p.draw(ctx, canvas.width, canvas.height));

            const starPositions = stars.map(star => star.draw(ctx, canvas.width, canvas.height));

            // Constellations near mouse
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < starPositions.length; i++) {
                for (let j = i + 1; j < starPositions.length; j++) {
                    const s1 = starPositions[i];
                    const s2 = starPositions[j];
                    const dist = Math.hypot(s1.targetX - s2.targetX, s1.targetY - s2.targetY);
                    const mouseDist = Math.hypot(s1.targetX - mouseX, s1.targetY - mouseY);

                    if (dist < 100 && mouseDist < 150) {
                        ctx.moveTo(s1.targetX, s1.targetY);
                        ctx.lineTo(s2.targetX, s2.targetY);
                    }
                }
            }
            ctx.stroke();

            if (Math.random() < 0.005) meteors.push(new Meteor(canvas.width));
            meteors = meteors.filter(m => {
                m.draw(ctx, canvas.width, canvas.height);
                return m.opacity > 0;
            });

            if (!comet && Math.random() < 0.001) {
                comet = new Comet(canvas.width, canvas.height);
            }
            if (comet) {
                if (!comet.draw(ctx, canvas.width, canvas.height)) {
                    comet = null;
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', handleMouseMove);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{ background: '#000' }}
        />
    );
};

export default SpaceBackground;
