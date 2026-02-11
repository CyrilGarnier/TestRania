
import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon: React.ElementType;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon, subtitle }) => (
  <div className="mb-12 text-center flex flex-col items-center">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-white shadow-2xl shadow-emerald-100 text-emerald-500 rounded-[2rem] mb-8 border border-slate-50 hover:scale-110 hover:rotate-3 transition-transform duration-500">
      <Icon size={36} strokeWidth={2.5} />
    </div>
    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">{title}</h2>
    {subtitle && (
      <div className="max-w-2xl">
        <p className="text-slate-500 text-lg font-medium leading-relaxed">{subtitle}</p>
        <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-8 rounded-full"></div>
      </div>
    )}
  </div>
);
