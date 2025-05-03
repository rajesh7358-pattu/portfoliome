import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lastX = 0;
    let lastY = 0;
    let velocityX = 0;
    let velocityY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(76, 29, 149, 0.1)');  // purple-900
        gradient.addColorStop(0.5, 'rgba(30, 58, 138, 0.1)'); // blue-900
        gradient.addColorStop(1, 'rgba(19, 78, 74, 0.1)');   // cyan-900
      } else {
        gradient.addColorStop(0, 'rgba(216, 180, 254, 0.1)'); // purple-200
        gradient.addColorStop(0.5, 'rgba(191, 219, 254, 0.1)'); // blue-200
        gradient.addColorStop(1, 'rgba(165, 243, 252, 0.1)'); // cyan-200
      }
      return gradient;
    };

    const drawFluid = () => {
      ctx.fillStyle = theme === 'dark' ? '#0f172a' : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update velocity based on mouse movement
      velocityX = mouseX - lastX;
      velocityY = mouseY - lastY;
      lastX = mouseX;
      lastY = mouseY;

      // Create multiple layers of flowing patterns
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = createGradient();

        for (let j = 0; j < 50; j++) {
          const x = canvas.width * 0.5 + 
            Math.cos(time * 0.001 + j * 0.2 + i) * (100 + velocityX * 2) +
            Math.sin(time * 0.002 + j * 0.3) * 50;
          
          const y = canvas.height * 0.5 + 
            Math.sin(time * 0.001 + j * 0.2 + i) * (100 + velocityY * 2) +
            Math.cos(time * 0.002 + j * 0.3) * 50;

          const size = Math.sin(time * 0.001 + j * 0.1) * 20 + 40;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Add shimmering effect
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        
        ctx.fillStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${Math.random() * 0.1})`
          : `rgba(0, 0, 0, ${Math.random() * 0.05})`;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time++;
    };

    const animate = () => {
      drawFluid();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default FluidBackground;