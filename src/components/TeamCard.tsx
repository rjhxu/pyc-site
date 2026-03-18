import Image from 'next/image';
import { useState } from 'react';
import type { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="relative h-120 flex items-center justify-center">
        {imageError ? (
          <p className="text-gray-500 text-lg">no image yet :(</p>
        ) : (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-purple-600" style={{ fontFamily: 'var(--font-mochiy-pop)' }}>
          {member.name}
        </h3>
        <p className="text-lg text-pink-500 mb-3" style={{ fontFamily: 'var(--font-mochiy-pop)' }}>
          {member.title}
        </p>
        {member.description?.trim() && (
          <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            {member.description}
          </p>
        )}
      </div>
    </div>
  );
}