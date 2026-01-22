export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Purple Market',
    date: '2025-02-15',
    time: '2:00 PM - 6:00 PM',
    location: 'Markham Civic Centre',
    shortDescription: 'Join us for our winter marketplace featuring youth artists and creators from across the GTA.',
    fullDescription: `Join Platform for Youth Creativity for our signature Purple Market event!

This winter marketplace brings together talented youth artists, craftspeople, and creators from across the GTA. Browse unique handmade goods, art, jewelry, clothing, and more while supporting young creative entrepreneurs.

The event features:
- 30+ youth vendor booths
- Live music performances
- Interactive art activities
- Food and refreshments
- Photo opportunities

Free admission. All ages welcome. Come support youth creativity in your community!`,
    image: '/assets/events/purple-market.jpg',
  },
];

// TO ADD MORE EVENTS: Copy the structure above and add new objects to the array.
// Make sure to update: id, title, date, time, location, shortDescription, fullDescription, and image path.