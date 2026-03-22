'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Event } from '@/data/events';
import { sponsors as allSponsors } from '@/data/sponsors';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const eventSponsors = event.sponsors 
    ? allSponsors.filter(s => event.sponsors?.includes(s.name))
    : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        <div className="p-8">
          <h2 
            className="text-4xl font-bold mb-4 text-purple-600"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {event.title}
          </h2>
          
          <div className="space-y-3 mb-6 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <span className="font-semibold">
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-xl">🕐</span>
              <span className="font-semibold">{event.time}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-xl">📍</span>
              <span className="font-semibold">{event.location}</span>
            </p>
          </div>
          
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {event.fullDescription}
            </p>
          </div>

          {eventSponsors.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Event Sponsors</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center justify-items-center">
                {eventSponsors.map((sponsor, index) => (
                  <Link
                    key={index}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[150px] aspect-square relative flex items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-50"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} Logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}