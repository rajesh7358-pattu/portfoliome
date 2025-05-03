import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const dataScience: Skill[] = [
    { name: 'Machine Learning', level: 95, color: 'from-purple-600 to-indigo-600' },
    { name: 'Deep Learning', level: 90, color: 'from-indigo-600 to-blue-600' },
    { name: 'Natural Language Processing', level: 85, color: 'from-blue-600 to-cyan-600' },
    { name: 'Computer Vision', level: 80, color: 'from-cyan-600 to-teal-600' },
    { name: 'Time Series Analysis', level: 88, color: 'from-teal-600 to-green-600' },
  ];

  const tools: Skill[] = [
    { name: 'Python', level: 98, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Scikit/Keras', level: 92, color: 'from-orange-500 to-red-500' },
    { name: 'SQL', level: 85, color: 'from-red-500 to-pink-500' },
    { name: 'Excel', level: 75, color: 'from-pink-500 to-purple-500' },
    { name: 'PowerBI', level: 90, color: 'from-purple-500 to-indigo-500' },
  ];

  const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ 
            width: isInView ? `${skill.level}%` : '0%', 
            transitionDelay: `${delay * 200}ms` 
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-l from-purple-300/10 to-transparent dark:from-purple-900/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-300/10 to-transparent dark:from-cyan-900/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Skills & Expertise
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-500 transform -translate-y-2"></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical toolkit and proficiencies in data science and machine learning
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-600">
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Data Science Expertise
        </h3>
        <div className="space-y-4">
          {dataScience.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index} />
          ))}
        </div>
      </div>
            </div>
            
            <div className={`transition-all duration-700 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-slate-600">
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
          Tools & Technologies
        </h3>
        <div className="space-y-4">
          {tools.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={index} />
          ))}
        </div>
      </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'Keras'].map((tech, index) => (
              <div 
                key={tech}
                className={`bg-white dark:bg-slate-900 rounded-xl p-4 text-center shadow-md border border-gray-100 dark:border-slate-700 transition-all duration-700 transform ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="font-semibold text-gray-800 dark:text-gray-200">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;