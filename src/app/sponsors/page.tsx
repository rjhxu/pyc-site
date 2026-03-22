import Image from 'next/image';
import Link from 'next/link';
import { sponsors } from '@/data/sponsors';

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
