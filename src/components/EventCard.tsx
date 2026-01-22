import Image from 'next/image';
import type { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

export default function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all hover:scale-105"
    >
      <div className="relative h-48">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 
          className="text-2xl font-bold mb-2 text-purple-600"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          📅 {new Date(event.date).toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          🕐 {event.time}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          📍 {event.location}
        </p>
        <p className="text-gray-700 line-clamp-3">
          {event.shortDescription}
        </p>
      </div>
    </div>
  );
}