'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import EventCard from '@/components/EventCard';
import EventModal from '@/components/EventModal';
import { events } from '@/data/events';
import type { Event } from '@/data/events';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Sort events chronologically
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="min-h-screen py-24 bg-transparent">
      <div className="container-custom">
        <h1 
          className="text-5xl font-bold text-center mb-12 text-purple-600"
          style={{ fontFamily: 'var(--font-mochiy-pop)' }}
        >
          Our Events
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sortedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}