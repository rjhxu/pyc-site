import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Platform for Youth Creativity',
  description: 'Join us for creative events and opportunities for youth in the GTA.',
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      {/* Who is PYC Section */}
      <section className="py-12 bg-transparent flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            
            
            {/* Centered Image */}
            <div className="mb-12">
              <Image
                src="/assets/who-is-pyc.png"
                alt="who is Platform for Youth Creativity?"
                width={900}
                height={300}
                className="rounded-lg"
                priority
              />
            </div>
            
            
            {/* Body Text - Handwritten Font (mochiy pop one) */}
            <div className="max-w-4xl mx-auto">
              <p 
                className="text-xl leading-relaxed text-center"
                style={{ fontFamily: 'var(--font-mochiy-pop)' }}
              >
                pyc is a youth arts council based in markham with the goal of providing artistic opportunities to youth around the gta  to unleash their creativity. through several events we hold throughout the year, including our seasonal coffeehouses, solstice, purple  market, and others, we help foster a positive environment for youth creatives both in person and online, for students to feel empowered by their artistic abilities and share their love of the arts with others!
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}