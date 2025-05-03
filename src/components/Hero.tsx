import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import FluidBackground from './ParticleBackground';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Data Science & Machine Learning Expert";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <FluidBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-slate-900 z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Rajesh S.
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium mb-8 h-10">
            <span>{text}</span>
            <span className={`inline-block w-0.5 h-7 bg-purple-600 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-purple-600 dark:border-cyan-500 text-purple-600 dark:text-cyan-500 font-medium py-3 px-8 rounded-full hover:bg-purple-600/10 dark:hover:bg-cyan-500/10 transition-all transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
          
          <div className="animate-bounce">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-purple-500 hover:text-purple-500 dark:hover:border-cyan-500 dark:hover:text-cyan-500 transition-colors"
            >
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;