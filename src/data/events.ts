import { sponsors } from "./sponsors";

export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  sponsors?: string[];
}

// Parses 'YYYY-MM-DD' as a local calendar date so the displayed day
// doesn't shift due to UTC parsing in the viewer's timezone.
export function formatEventDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Groups events into school-year seasons, e.g. '2026-2027'.
// A season starts in September: Oct 2026 and May 2027 are both '2026-2027'.
// Change SEASON_START_MONTH if your year should roll over at a different time.
const SEASON_START_MONTH = 9;

export function getEventSeason(dateStr: string): string {
  const [year, month] = dateStr.split('-').map(Number);
  const startYear = month >= SEASON_START_MONTH ? year : year - 1;
  return `${startYear}-${startYear + 1}`;
}

export const events: Event[] = [

  // ───────── 2025-2026 ─────────
  {
    slug: 'spring-fest',
    title: 'Spring Fest',
    date: '2026-05-30',
    time: '4:00 PM - 8:00 PM',
    location: 'Varley Art Gallery (216 Main St Unionville)',
    shortDescription:
      'A night of live performances, cozy vibes, and good drinks in a café atmosphere.',
    fullDescription: `A night of live performances, cozy vibes, and good drinks. We’re bringing together talented performers and a café atmosphere!!

Whether you want to perform or just come watch and enjoy, this is the place to be.`,
    image: '/events/2026/spring-fest/spring-fest.png',
  },
  {
    slug: 'purple-market',
    title: 'Purple Market',
    date: '2026-03-22',
    time: '1:00 PM - 4:00 PM',
    location: 'Varley Art Gallery (216 Main St Unionville)',
    sponsors: ['Jukebox Print'],
    shortDescription:
      'A creative market spotlighting young entrepreneurs, artists, and small businesses.',
    fullDescription: `Purple Market is a creative market spotlighting young entrepreneurs, artists, and small businesses.

Come out to browse, support local talent, and connect with a community full of creativity. From handmade goods to original artwork and local brands, Purple Market is a space to celebrate and uplift youth creativity.

Calling all small businesses, artists, and creators: this is YOUR opportunity to shine!`,
    image: '/events/2026/purple-market/purple-market.png',
  },
  {
    slug: 'solstice',
    title: 'Solstice',
    date: '2025-12-27',
    time: '5:30 PM - 10:00 PM',
    location: 'Markham Museum (9350 Markham Rd)',
    sponsors: [
      'Presotea',
      'Felix and Norton',
      'Art Gallery of Ontario',
      'Arcadia Earth',
      'barBURRITO',
      'York Region Open Mic',
    ],
    shortDescription:
      'An annual semi-formal dance and dinner hosted with MTAC in support of 360kids.',
    fullDescription: `Solstice is PYC’s annual semi-formal dance and dinner hosted in collaboration with MTAC (Markham Teen Arts Council) in support of 360kids.

This year’s Mad Hatter’s Ball brought together live performances, raffles, and a photobooth for a night of creativity, community, and giving back.

Guests enjoyed an evening of celebration while supporting an important cause and connecting with fellow youth in the arts community.`,
    image: '/events/2026/winter-solstice/winter-solstice.png',
  },
  {
    slug: 'fall-coffeehouse',
    title: 'Fall Coffeehouse',
    date: '2025-10-25',
    time: '6:00 PM - 9:00 PM',
    location: 'Unionville Starbucks (201 Main Street)',
    sponsors: [
      'Starbucks',
      'Karen MacDonald',
      'Hummingbird Investment Holdings',
      'Royal Ontario Museum',
      'Presotea',
      'Broadcast Entertainment & Fantasia',
      'York Region Open Mic',
    ],
    shortDescription:
      'A cozy evening of live music, fall drinks, and art from local young performers and creators.',
    fullDescription: `Fall Coffeehouse was a cozy evening of live music featuring local performers, fall drinks, and a welcoming space for young artists to showcase their work.

Hosted at Unionville Starbucks, the event brought together community members for a warm and creative autumn night filled with music, conversation, and youth talent.

The evening also featured the debut of the 2026 PYC x Starbucks secret drink 👀.`,
    image: '/events/2026/fall-coffeehouse/fall-coffeehouse.jpg',
  },


  // ───────── 2026-2027 ─────────
  {
    slug: 'fall-coffeehouse-2026',
    title: 'Fall Coffeehouse',
    // TODO: confirm the actual date of this year's event (YYYY-MM-DD).
    date: '2026-11-1',
    time: '6:00 PM - 9:00 PM',
    location: 'Unionville Starbucks (201 Main Street)',
    // TODO: fill in with the sponsor names from the Google Drive. Each name must
    // exactly match a `name` in data/sponsors.ts (add any new sponsors there).
    sponsors: [
      'Broadcast Entertainment & Fantasia',
      'Starbucks',
      'Long & McQuade',
      'Hummingbird Investment Holdings',
      'York Region Open Mic',
    ],
    shortDescription:
      'A cozy evening of live music, fall drinks, and art from local young performers and creators.',
    fullDescription: `Fall Coffeehouse was a cozy evening of live music featuring local performers, fall drinks, and a welcoming space for young artists to showcase their work.

Hosted at Unionville Starbucks, the event brought together community members for a warm and creative autumn night filled with music, conversation, and youth talent.

The evening also featured the debut of the 2026 PYC x Starbucks secret drink 👀.`,
    image: '/events/2027/fall-coffeehouse2026-2027/fall-coffeehouse2026-2027.jpg',
  },
];