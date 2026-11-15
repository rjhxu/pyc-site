'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import EventCard from '@/components/EventCard';
import EventModal from '@/components/EventModal';
import { events, getEventSeason } from '@/data/events';
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

  // Tabs are built from the data, oldest season on the left and newest on the
  // right. Adding an event in a new season (e.g. 2027-2028) creates its tab
  // automatically.
  const seasons = useMemo(
    () =>
      Array.from(new Set(events.map((event) => getEventSeason(event.date)))).sort(
        (a, b) => a.localeCompare(b)
      ),
    []
  );

  // Open on the newest season by default.
  const [activeSeason, setActiveSeason] = useState<string>(
    seasons[seasons.length - 1]
  );

  const visibleEvents = useMemo(
    () => sortedEvents.filter((event) => getEventSeason(event.date) === activeSeason),
    [sortedEvents, activeSeason]
  );

  useEffect(() => {
    const modalSlug = searchParams.get('modal');

    if (!modalSlug) {
      setSelectedEvent(null);
      return;
    }

    const matchedEvent = events.find((event) => event.slug === modalSlug) ?? null;
    setSelectedEvent(matchedEvent);

    // If a shared link points at an event from another season, jump to that tab.
    if (matchedEvent) {
      setActiveSeason(getEventSeason(matchedEvent.date));
    }
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
          className="text-5xl font-bold text-center mb-8 text-purple-400"
          style={{ fontFamily: 'var(--font-mochiy-pop)' }}
        >
          Events
        </h1>

        <div
          role="tablist"
          aria-label="Event seasons"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {seasons.map((season) => {
            const isActive = season === activeSeason;
            return (
              <button
                key={season}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveSeason(season)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/80 text-purple-600 hover:bg-white'
                }`}
              >
                {season}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {visibleEvents.map((event) => (
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
