import Head from "next/head";
import { useEffect, useRef } from "react";
import { personalData } from "../../common/lib/data/personal";
import WithPageTransition from "../../layouts/root/WithPageTransition";
import type { NextPageWithLayout } from "../_app";

type TParticle = {
  x: number;
  y: number;
  radius: number;
  explosionRadius: number;

  angle: number;
  color: number;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;

  reset: () => void;
  draw: () => void;
  update: () => void;
};

const MouseFollow: NextPageWithLayout = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const ctx = canvas?.getContext("2d");

    if (!ctx) return;

    const particles: TParticle[] = [];
    const mousePos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const canvasWidth = window?.innerWidth;
    const canvasHeight = window?.innerHeight;

    const multiply = 500;

    function draw() {
      ctx?.clearRect(0, 0, canvasWidth, canvasHeight);

      if (particles.length < multiply) {
        for (let i = 0; i < multiply; i++) {
          const p = new Particle();
          particles.push(p);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i]?.update();
        particles[i]?.draw();
      }
      requestAnimationFrame(draw);
    }

    class Particle {
      x!: number;
      y!: number;
      radius!: number;
      explosionRadius!: number;
      angle!: number;
      color!: number;
      velocity!: {
        x: number;
        y: number;
      };
      alpha!: number;

      constructor() {
        this.reset();
      }
      reset() {
        this.radius = 1;
        this.x = mousePos.x;
        this.y = mousePos.y;
        this.explosionRadius = 1;
        this.angle = random(0, Math.PI * 2);
        this.color = 255;
        this.velocity = {
          x: Math.sin(this.angle) * this.explosionRadius,
          y: Math.cos(this.angle) * this.explosionRadius,
        };
        this.alpha = Math.random();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255, ${this.color}, ${this.color}, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
        this.color = Math.abs(this.color - 5);
        if (this.alpha < 0) {
          this.reset();
        }
      }
    }

    function follow(e: MouseEvent) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    }

    function random(min: number, max: number) {
      return Math.random() * (max - min + 1) + min;
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("mousemove", follow);
    window.addEventListener("resize", resize);
    resize();
    draw();
  }, []);

  return (
    <>
      <Head>
        <title>{`${personalData?.firstName} ${personalData?.lastName}`}</title>
      </Head>
      <canvas id="canvas" ref={canvasRef}></canvas>
      {/* <div className="container m-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
        <MainMenu menuItems={mainMenuItems} className="flex flex-col gap-8" />
      </div> */}
    </>
  );
};

MouseFollow.getLayout = function getLayout(page) {
  return <WithPageTransition>{page}</WithPageTransition>;
};

export default MouseFollow;
