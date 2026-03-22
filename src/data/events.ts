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

export const events: Event[] = [
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
];