
import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon: React.ElementType;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon, subtitle }) => (
  <div className="mb-12 text-center">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl mb-4 shadow-sm">
      <Icon size={28} />
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{title}</h2>
    {subtitle && <p className="text-slate-500 font-medium">{subtitle}</p>}
  </div>
);
