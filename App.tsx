
import React, { useEffect } from 'react';
import { Briefcase, GraduationCap, Code, Heart, ChevronRight, Star, ArrowUpRight, Rocket } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS, LANGUAGES, SKILLS_HARD, SKILLS_SOFT, INTERESTS, PROJECTS } from './constants';
import { Experience, Project } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionHeader } from './components/SectionHeader';

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="relative pl-8 pb-16 last:pb-0 group">
    <div className="absolute left-[3px] top-0 bottom-0 w-[2px] bg-slate-200 group-last:bg-transparent"></div>
    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-emerald-500 bg-white group-hover:bg-emerald-500 transition-all duration-300"></div>
    
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-emerald-100 transition-all duration-500">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{exp.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-emerald-600 font-bold">{exp.company}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500">{exp.location}</span>
          </div>
        </div>
        <span className="px-5 py-2 bg-slate-50 text-slate-600 rounded-2xl text-sm font-bold border border-slate-100">
          {exp.period}
        </span>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {exp.tasks.map((task, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
            <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-emerald-400"></div>
            <span className="text-[15px]">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon = project.icon;
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
      <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-extrabold mb-3 group-hover:text-emerald-600 transition-colors">{project.title}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-slate-100 text-slate-600 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-grid">
      <Navbar />
      
      <Hero />

      {/* Projects Section - NEW */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Projets Marquants" 
            icon={Rocket} 
            subtitle="Quelques exemples de missions digitales réalisées."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white/50 backdrop-blur-sm relative">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Parcours Professionnel" 
            icon={Briefcase} 
            subtitle="Mon évolution au sein de grandes entreprises comme Enedis."
          />
          <div className="mt-16">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Atouts - Modernized */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader title="Compétences & Atouts" icon={Code} />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
              <div className="bg-slate-900 rounded-[50px] p-12 text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Star size={120} />
                 </div>
                 <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
                    <span className="w-3 h-10 bg-emerald-400 rounded-full"></span>
                    Savoir-Faire
                 </h3>
                 <div className="flex flex-wrap gap-4">
                    {SKILLS_HARD.map((skill, i) => (
                      <div key={i} className="px-6 py-4 bg-slate-800 border border-slate-700 rounded-3xl font-bold text-lg hover:border-emerald-400 hover:text-emerald-400 transition-all cursor-default">
                        {skill}
                      </div>
                    ))}
                 </div>

                 <h3 className="text-3xl font-black mt-16 mb-12 flex items-center gap-4">
                    <span className="w-3 h-10 bg-orange-400 rounded-full"></span>
                    Savoir-Être
                 </h3>
                 <div className="flex flex-wrap gap-4">
                    {SKILLS_SOFT.map((skill, i) => (
                      <div key={i} className="px-6 py-4 bg-slate-800 border border-slate-700 rounded-3xl font-bold text-lg hover:border-orange-400 hover:text-orange-400 transition-all cursor-default">
                        {skill}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col justify-center space-y-12">
                <h3 className="text-3xl font-black text-slate-800 flex items-center gap-4">
                    <span className="w-3 h-10 bg-blue-500 rounded-full"></span>
                    Maîtrise Linguistique
                </h3>
                <div className="space-y-10">
                  {LANGUAGES.map((lang, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div>
                           <span className="text-2xl font-black text-slate-800">{lang.name}</span>
                           <span className="ml-3 text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">{lang.level}</span>
                        </div>
                        <span className="text-emerald-600 font-black text-xl">{lang.percentage}%</span>
                      </div>
                      <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-200">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1000"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-emerald-900 text-white rounded-[60px] mx-4 lg:mx-10 my-10 overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Formations" icon={GraduationCap} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {EDUCATIONS.map((edu, i) => (
              <div key={i} className="bg-emerald-800/50 border border-emerald-700 p-10 rounded-[40px] flex flex-col justify-between hover:bg-emerald-800 transition-all duration-300">
                <div>
                  <h3 className="text-2xl font-black mb-3 leading-snug">{edu.degree}</h3>
                  <p className="text-emerald-200 text-lg font-medium">{edu.school}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-emerald-700/50 flex items-center justify-between">
                  <span className="text-emerald-400 font-black tracking-widest">{edu.period}</span>
                  <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Passions" icon={Heart} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {INTERESTS.map((interest, i) => (
              <div key={i} className={`${interest.color} p-12 rounded-[50px] flex items-center justify-center font-black text-xl shadow-xl transition-all hover:scale-105 hover:-rotate-2 cursor-default`}>
                {interest.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                RZ
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-none">Rannia Zaki</h3>
                <p className="text-slate-500 font-bold mt-1 uppercase tracking-widest text-xs">Chef de Projet Digitaux</p>
              </div>
            </div>
            
            <div className="flex gap-6">
               <a href="mailto:ranniazaki@gmail.com" className="bg-slate-900 text-white px-10 py-5 rounded-3xl font-black hover:bg-emerald-500 transition-all shadow-xl hover:shadow-emerald-200">
                 Démarrons un projet
               </a>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-slate-50 text-center text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Rannia Zaki — Conçu avec excellence digitale.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
