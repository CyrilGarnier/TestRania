
import React from 'react';
import { Briefcase, GraduationCap, Cpu, Heart, ChevronRight } from 'lucide-react';
import { EXPERIENCES, EDUCATIONS, LANGUAGES, SKILLS_HARD, SKILLS_SOFT, INTERESTS } from './constants';
import { Experience } from './types';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionHeader } from './components/SectionHeader';

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      <div className="absolute left-[3px] top-0 bottom-0 w-0.5 bg-slate-200 group-last:bg-transparent"></div>
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-emerald-500 bg-white transition-all group-hover:scale-150 group-hover:bg-emerald-500"></div>
      
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
            <p className="text-emerald-500 font-semibold">{exp.company} • {exp.location}</p>
          </div>
          <span className="px-4 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium h-fit">
            {exp.period}
          </span>
        </div>
        <ul className="space-y-3">
          {exp.tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-emerald-400"></div>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <Hero />

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white relative">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Expériences Professionnelles" 
            icon={Briefcase} 
            subtitle="Mon parcours professionnel récent et mes accomplissements."
          />
          <div className="mt-16">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative overflow-hidden">
        <div className="pastel-bg-blob bg-blue-100 w-[400px] h-[400px] -bottom-24 -left-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Formations & Diplômes" 
            icon={GraduationCap} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {EDUCATIONS.map((edu, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-all border-l-4 border-l-emerald-400">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{edu.degree}</h3>
                  <p className="text-slate-500 mb-4">{edu.school}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-sm font-bold text-emerald-500 uppercase tracking-wide">{edu.period}</span>
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section id="skills" className="py-24 bg-slate-900 text-white rounded-[60px] mx-4 my-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
           <Cpu size={200} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Compétences & Atouts</h2>
            <div className="w-20 h-1.5 bg-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-2 h-8 bg-emerald-400 rounded-full"></span>
                Savoir-Faire
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS_HARD.map((skill, i) => (
                  <div key={i} className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-2xl font-medium hover:border-emerald-400 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold pt-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-400 rounded-full"></span>
                Savoir-Être
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS_SOFT.map((skill, i) => (
                  <div key={i} className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-2xl font-medium hover:border-orange-400 transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-400 rounded-full"></span>
                Langues
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {LANGUAGES.map((lang, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between font-bold">
                      <span className="text-lg">{lang.name}</span>
                      <span className="text-slate-400 uppercase text-sm tracking-widest">{lang.level}</span>
                    </div>
                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-400 rounded-full transition-all duration-1000 ease-out"
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

      {/* Interests */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Centres d'Intérêt" 
            icon={Heart} 
            subtitle="Ce qui me passionne en dehors du travail."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {INTERESTS.map((interest, i) => (
              <div key={i} className={`${interest.color} p-10 rounded-[40px] flex items-center justify-center font-bold text-xl shadow-lg transition-transform hover:-rotate-3 cursor-default`}>
                {interest.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                RZ
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Rannia Zaki</h3>
                <p className="text-slate-500 text-sm">Apprentie Chef de Projet Digitaux</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-50 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Rannia Zaki. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
