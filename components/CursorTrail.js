// components/CursorTrail.jsx
'use client';
import { useRef, useEffect } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const circles = useRef([]); // holds active trail dots
  const cursorImg = useRef(null); // we'll load a small cursor icon

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // load a tiny cursor icon
    cursorImg.current = new Image(16, 16);
    cursorImg.current.src = '/cursor-icon.png'; // drop a 16×16 PNG in /public

    // resize to full screen
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // on every mouse move, add a new dot
    function onMouseMove(e) {
      circles.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1,
        size: 16,
      });
      // keep max ~30 dots
      if (circles.current.length > 30) circles.current.shift();
    }
    window.addEventListener('mousemove', onMouseMove);

    // animation loop
    let raf;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.current.forEach((c, i) => {
        ctx.globalAlpha = c.alpha;
        ctx.drawImage(
          cursorImg.current,
          c.x - c.size / 2,
          c.y - c.size / 2,
          c.size,
          c.size
        );
        // fade & shrink
        c.alpha -= 0.03;
        c.size *= 0.92;
      });

      // drop fully faded circles
      circles.current = circles.current.filter((c) => c.alpha > 0.05);

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full pointer-events-none z-50'
    />
  );
}
