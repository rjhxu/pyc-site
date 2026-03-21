'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import EventCard from '@/components/EventCard';
import EventModal from '@/components/EventModal';
import { events } from '@/data/events';
import type { Event } from '@/data/events';

export default function EventsPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const sortedEvents = useMemo(
    () =>
      [...events].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  useEffect(() => {
    const modalSlug = searchParams.get('modal');

    if (!modalSlug) {
      setSelectedEvent(null);
      return;
    }

    const matchedEvent = events.find((event) => event.slug === modalSlug) ?? null;
    setSelectedEvent(matchedEvent);
  }, [searchParams]);

  const openEventModal = (event: Event) => {
    setSelectedEvent(event);
    router.push(`/events?modal=${event.slug}`);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    router.push('/events');
  };

  return (
    <div className="min-h-screen py-12 bg-transparent">
      <div className="container-custom">
        <h1
          className="text-5xl font-bold text-center mb-12 text-purple-400"
          style={{ fontFamily: 'var(--font-mochiy-pop)' }}
        >
          Our Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sortedEvents.map((event) => (
            <EventCard
              key={event.slug}
              event={event}
              onClick={() => openEventModal(event)}
            />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}