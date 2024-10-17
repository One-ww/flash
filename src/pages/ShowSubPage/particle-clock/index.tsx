import React, { useEffect, useRef } from "react";

import styles from "./index.scss";

const ParticleClock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;
    if (!ctx) return;

    function initCanvasSize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    }

    initCanvasSize();

    function getRandom(min: number, max: number) {
      return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    const particles: any[] = [];
    let text: any = null;

    function clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      requestIdleCallback(() => {
        clear();
        update();
        particles.forEach((particle) => particle.draw());
        requestAnimationFrame(draw);
      });
    }

    function getText() {
      return new Date().toTimeString().substring(0, 8);
    }

    function update() {
      const newText = getText();
      if (newText === text) {
        return;
      }
      clear();
      text = newText;
      const { width, height } = canvas;
      ctx.fillStyle = "#000";
      ctx.textBaseline = "middle";
      ctx.font = `${140 * window.devicePixelRatio}px 'DS-Digital', sans-serif`;
      ctx.fillText(text, (width - ctx.measureText(text).width) / 2, height / 2);
      const points = getPoints();
      for (let i = 0; i < points.length; i++) {
        let particle = particles[i];
        if (!particle) {
          particle = createParticle();
          particles.push(particle);
        }
        const [x, y] = points[i];
        particle.moveTo(x, y);
      }
      if (points.length < particles.length) {
        particles.splice(points.length);
      }
    }

    function getPoints() {
      const { width, height, data } = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const points = [];
      const gap = 6;
      for (let i = 0; i < width; i += gap) {
        for (let j = 0; j < height; j += gap) {
          const index = (i + j * width) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const a = data[index + 3];
          if (r === 0 && g === 0 && b === 0 && a === 255) {
            points.push([i, j]);
          }
        }
      }
      return points;
    }

    function createParticle() {
      const r = Math.min(canvas.width, canvas.height) / 2;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const rad = (getRandom(0, 360) * Math.PI) / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy + r * Math.sin(rad);
      const size = getRandom(
        2 * window.devicePixelRatio,
        7 * window.devicePixelRatio
      );
      return {
        x,
        y,
        size,
        draw() {
          ctx.beginPath();
          ctx.fillStyle = "#5445544d";
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fill();
        },
        moveTo(tx: number, ty: number) {
          const duration = 500;
          let sx = this.x;
          let sy = this.y;
          const xSpeed = (tx - sx) / duration;
          const ySpeed = (ty - sy) / duration;
          const startTime = Date.now();
          const _move = () => {
            const t = Date.now() - startTime;
            const x = sx + xSpeed * t;
            const y = sy + ySpeed * t;
            this.x = x;
            this.y = y;
            if (t >= duration) {
              this.x = tx;
              this.y = ty;
              return;
            }
            requestAnimationFrame(_move);
          };
          _move();
        },
      };
    }

    draw();
  }, []);

  return (
    <div className={styles.ParticleClockContainer}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ParticleClock;
