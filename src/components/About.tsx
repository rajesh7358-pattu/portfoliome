import { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Brain, TrendingUp, FileSpreadsheet, Star } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-500/10 dark:to-pink-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-300/20 to-cyan-300/20 dark:from-blue-500/10 dark:to-cyan-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-500 transform -translate-y-2"></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate data scientist with expertise in turning complex data into actionable insights and innovative solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg h-full border border-gray-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Professional Background</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <FileSpreadsheet size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Data Science Intern</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Prodigy InfoTech • 2024 sep - Oct</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Assisted in data cleaning and preprocessing for machine learning models
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <TrendingUp size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Machine Learning Intern</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Prodigy InfoTech • 2024 Nov - Dec</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Developed interactive dashboards and performed statistical analysis for business intelligence
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                        <Brain size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">ML Research Assistant</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">University of Technology • 2016 - 2018</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Conducted research on neural networks and published papers on deep learning applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-300 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg h-full border border-gray-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Education & Achivements</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        <Star size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">B.tech in Artificial intelligence & Data Science</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Kings Engineering college • 2022 - 2026</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Specialized in Machine Learning and Artificial Intelligence
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                        <Star size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Hackathon Winner</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">SIH • 2024</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Performing well in hackation and win prize for best project
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <Star size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Volunteer</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Ramachandra school • 2024</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        Perform volunteer work and help and motivate students in their studies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;