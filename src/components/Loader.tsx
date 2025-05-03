import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center z-50">
      <div className="max-w-md w-full px-6">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Welcome to my Portfolio
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Data Science & Machine Learning Portfolio
        </p>
        
        <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-right text-sm text-gray-500 dark:text-gray-400">
          Loading {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
};

export default Loader;