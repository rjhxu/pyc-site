import Image from 'next/image';

export const metadata = {
  title: 'Contact Us | Platform for Youth Creativity',
  description: 'Get in touch with Platform for Youth Creativity',
};

export default function ContactPage() {
  return (
    <div className="flex-1 flex items-center justify-center">
      
        <div className="container-custom">
          
          {/* Title */} 
          <h1
            className="text-5xl text-center mb-16"
            style={{ fontFamily: 'var(--font-mochiy-pop)' }}
          >
            click me!
          </h1>

          {/* Icons */}
          <div className="flex items-start justify-between gap-32">

            {/* Instagram */}
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://instagram.com/platformforyouthcreativity"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <Image
                  src="/assets/instagram-logo.svg"
                  alt="Instagram"
                  width={260}
                  height={260}
                  priority
                />
              </a>
              <p
                className="text-sm text-black"
                style={{ fontFamily: 'var(--font-mochiy-pop)' }}
              >
                ig: platformforyouthcreativity
              </p>
            </div>

            {/* Gmail */}
            <div className="flex flex-col items-center gap-6">
              <a
                href="mailto:platformforyouthcreativity@gmail.com"
                className="hover:scale-105 transition-transform"
              >
                <Image
                  src="/assets/gmail-logo.svg"
                  alt="Email"
                  width={260}
                  height={260}
                />
              </a>
              <p
                className="text-sm text-black"
                style={{ fontFamily: 'var(--font-mochiy-pop)' }}
              >
                platformforyouthcreativity@gmail.com
              </p>
            </div>

            {/* TikTok */}
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://tiktok.com/@platformforyouth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <Image
                  src="/assets/tiktok-logo.svg"
                  alt="TikTok"
                  width={260}
                  height={260}
                />
              </a>
              <p
                className="text-sm text-black"
                style={{ fontFamily: 'var(--font-mochiy-pop)' }}
              >
                tt: platformforyouth
              </p>
            </div>

          </div>
        </div>
    </div>
  );
}
