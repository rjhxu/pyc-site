'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'home' },
    { href: '/team', label: 'our team' },
    { href: '/events', label: 'events' },
    { href: '/contact', label: 'contact us' },
  ];

  return (
    <nav className="bg-transparent">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo-wide.png"
              alt="Platform for Youth Creativity"
              width={400}
              height={144}
              className="h-20 w-auto select-none"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-20">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors ${
                  pathname === link.href
                    ? 'text-purple-300 font-bold'
                    : 'text-gray-700 hover:text-purple-200'
                }`}
                style={{ fontFamily: 'var(--font-mochiy-pop)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 bg-transparent background-blur-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-lg ${
                  pathname === link.href
                    ? 'text-purple-300 font-bold'
                    : 'text-gray-700'
                }`}
                style={{ fontFamily: 'var(--font-mochiy-pop)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}