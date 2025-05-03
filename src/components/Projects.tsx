import { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

type Category = 'all' | 'machine-learning' | 'data-analysis' | 'visualization';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'data-analysis', label: 'Data Analysis' },
    { id: 'visualization', label: 'Visualization' },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 dark:from-purple-500/10 dark:to-pink-500/10 blur-3xl"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-cyan-300/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Featured Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-500 transform -translate-y-2"></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my most impactful data science and machine learning work
          </p>
        </div>
        
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`transition-all duration-700 transform ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full mb-3">
                    {project.categoryLabel}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center space-x-3 mt-auto">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                    >
                      <Github size={16} className="mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;