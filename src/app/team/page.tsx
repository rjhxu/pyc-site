'use client';

import { useState } from 'react';
import TeamCard from '@/components/TeamCard';
import { teams } from '@/data/team';

export default function TeamPage() {
  const years = Object.keys(teams).sort().reverse();
  const [selectedYear, setSelectedYear] = useState<string>(years[0] ?? '');

  const currentTeam = teams[selectedYear] ?? [];

  return (
    <div className="min-h-screen py-12 bg-transparent">
      <div className="container-custom">
        <h1
          className="text-5xl font-bold text-center mb-12 text-purple-400"
          style={{ fontFamily: 'var(--font-mochiy-pop)' }}
        >
          Our Team
        </h1>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedYear === year
                  ? 'bg-purple-500 text-white shadow-lg scale-105'
                  : 'bg-white text-purple-600 border-2 border-purple-300 hover:border-purple-500'
              }`}
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {currentTeam.map((member) => (
            <TeamCard
              key={`${selectedYear}-${member.id}`}
              member={member}
            />
          ))}
        </div>
      </div>
    </div>
  );
}