'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import type { Event } from '@/data/events';

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
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {event.fullDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}