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
    id: 'purple-market',
    title: 'Purple Market',
    date: '2025-03-23',
    time: '1:00 PM - 4:00 PM',
    location: 'Varley Art Gallery, Markham',
    shortDescription: 'Join us for our winter marketplace supporting small businesses and creators from across the GTA.',
    fullDescription: `Join Platform for Youth Creativity for our signature Purple Market event!

This winter marketplace brings together talented youth artists, craftspeople, and creators from across the GTA. Browse unique handmade goods, art, jewelry, clothing, and more while supporting young creative entrepreneurs.

The event features:
- 30+ youth vendor booths
- Live music performances
- Interactive art activities
- Food and refreshments
- Photo opportunities

Free admission. All ages welcome. Come support youth creativity in your community!`,
    image: '/events/2025/purple-market/purple-market.png',
  },
  {
    id: 'winter-solstice',
    title: 'Winter Solstice',
    date: '2024-12-27',
    time: '6:00 PM - 10:00 PM',
    location: 'Crystal Fountain Event Venue, Markham',
    shortDescription: 'A semi-formal winter celebration hosted with MTAC, with all ticket proceeds supporting the 360°kids charity.',
    fullDescription: `Winter Solstice is a special semi-formal celebration hosted in collaboration between Platform for Youth Creativity (PYC) and the Markham Toronto Arts Council (MTAC).

Held at the Crystal Fountain Event Venue, the evening brings together youth from across the community for a night of music, performances, and celebration during the winter season.

All ticket proceeds from the event are donated to 360°kids, a local organization dedicated to supporting youth experiencing homelessness and crisis.

The evening features:
- Live musical performances
- A semi-formal winter celebration
- Community gathering of youth artists and students
- Charity fundraising supporting 360°kids

Dress up, celebrate the season, and join us in supporting an important cause while showcasing youth creativity and talent.`,
    image: '/events/2025/solstice/winter-solstice.jpg',
  },
  {
    id: 'fall-coffeehouse',
    title: 'Fall Coffeehouse',
    date: '2024-10-26',
    time: '6:00 PM - 9:00 PM',
    location: 'Starbucks, Unionville Main Street, Markham',
    shortDescription: 'An intimate coffeehouse night featuring a custom PYC drink and cozy live music from local youth artists.',
    fullDescription: `Kick off the fall season with Platform for Youth Creativity at our Fall Coffeehouse!

Hosted at the Starbucks on Unionville Main Street, this cozy evening brings together young musicians and creatives from the community for a relaxed night of music and connection.

Guests can enjoy a special custom PYC drink created just for the event while listening to acoustic performances from talented local youth artists.

The evening features:
- Live acoustic music from local youth performers
- A special limited-time PYC drink
- A cozy café atmosphere
- A chance to meet and support young creatives

Whether you're coming for the music, the coffee, or the community, the Fall Coffeehouse is the perfect way to spend a crisp autumn evening.`,
    image: '/events/2025/fall-coffeehouse/fall-coffeehouse.png',
  },
];

// TO ADD MORE EVENTS: Copy the structure above and add new objects to the array.
// Make sure to update: id, title, date, time, location, shortDescription, fullDescription, and image path.