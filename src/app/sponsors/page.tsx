import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
    { name: 'Arcadia Earth', logo: '/sponsors/Arcadia Earth_Logo.png', url: 'https://www.arcadiaearth.ca/' },
    { name: 'Art Gallery of Ontario', logo: '/sponsors/Art Gallery of Ontario Logo.png', url: 'https://ago.ca/' },
    { name: 'Broadcast Entertainment & Fantasia', logo: '/sponsors/Broadcast Entertainment & Fantasia_Logo.PNG', url: 'https://www.broadcastfantasia.com/' },
    { name: 'Felix and Norton', logo: '/sponsors/Felix and Norton Logo.png', url: 'https://www.fncookies.com/' },
    { name: 'Hummingbird Investment Holdings', logo: '/sponsors/Hummingbird Investment Holdings_Logo.jpeg', url: 'https://hummingbirdinvestmentholdings.com/' },
    { name: 'Jukebox Print', logo: '/sponsors/Jukebox Print_Logo.png', url: 'https://www.jukeboxprint.com/' },
    { name: 'Presotea', logo: '/sponsors/Presotea_Logo.avif', url: 'https://presotea.ca/' },
    { name: 'Royal Ontario Museum', logo: '/sponsors/Royal Ontario Museum Logo.jpg', url: 'https://www.rom.on.ca/' },
    { name: 'Starbucks', logo: '/sponsors/Starbucks.PNG', url: 'https://www.starbucks.ca/' },
    { name: 'York Region Open Mic', logo: '/sponsors/York Region Open Mic.jpg', url: 'https://linktr.ee/yorkregionpenmic' },
    { name: 'barBURRITO', logo: '/sponsors/barBURRITO_Logo.png', url: 'https://www.barburrito.ca/' },
];

export default function SponsorsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl">
                <h1 className="text-4xl font-bold mb-12 text-center">Sponsors</h1>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                    {sponsors.map((sponsor, index) => (
                        <Link 
                            key={index} 
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-[200px] aspect-square relative flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={sponsor.logo}
                                    alt={`${sponsor.name} Logo`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
