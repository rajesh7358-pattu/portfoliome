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
        gradient.addColorStop(0, 'rgba(138, 43, 226, 0.25)');  // softer purple
        gradient.addColorStop(0.5, 'rgba(65, 105, 225, 0.25)'); // softer blue
        gradient.addColorStop(1, 'rgba(0, 206, 209, 0.25)');   // softer cyan
      } else {
        gradient.addColorStop(0, 'rgba(186, 85, 211, 0.25)'); // softer purple
        gradient.addColorStop(0.5, 'rgba(135, 206, 250, 0.25)'); // softer blue
        gradient.addColorStop(1, 'rgba(64, 224, 208, 0.25)'); // softer cyan
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

      // Create multiple layers of flowing patterns with varying speeds and glowing effect
      for (let i = 0; i < 4; i++) {
        ctx.save();
        ctx.globalAlpha = 0.4 - i * 0.08;
        ctx.shadowColor = theme === 'dark' ? 'rgba(138, 43, 226, 0.5)' : 'rgba(186, 85, 211, 0.5)';
        ctx.shadowBlur = 10;
        ctx.fillStyle = createGradient();

        for (let j = 0; j < 50; j++) {
          const speedFactor = 0.001 + i * 0.0004;
          const x = canvas.width * 0.5 + 
            Math.cos(time * speedFactor + j * 0.2 + i) * (100 + velocityX * 2) +
            Math.sin(time * speedFactor * 2 + j * 0.3) * 50;
          
          const y = canvas.height * 0.5 + 
            Math.sin(time * speedFactor + j * 0.2 + i) * (100 + velocityY * 2) +
            Math.cos(time * speedFactor * 2 + j * 0.3) * 50;

          const size = Math.sin(time * speedFactor + j * 0.1) * 20 + 40;

          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Add twinkling star-like particles with varying sizes and brightness
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const alpha = Math.random() * 0.2;

        ctx.fillStyle = theme === 'dark' 
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(0, 0, 0, ${alpha * 0.5})`;

        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add subtle color pulsation effect
      const pulse = (Math.sin(time * 0.02) + 1) / 2; // 0 to 1
      ctx.globalAlpha = 0.05 + pulse * 0.1;
      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

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
