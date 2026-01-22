import Image from 'next/image';
import type { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="relative h-120">
        <Image src={member.image} alt={member.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1 text-purple-600" style={{ fontFamily: 'var(--font-mochiy-pop)' }}>
          {member.name}
        </h3>
        <p className="text-lg text-pink-500 mb-3" style={{ fontFamily: 'var(--font-mochiy-pop)' }}>
          {member.title}
        </p>
        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          {member.description}
        </p>
      </div>
    </div>
  );
}