import Link from 'next/link';

export default function SponsorsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold mb-4">Sponsors</h1>
                <p className="text-lg text-gray-600 mb-8">
                    This page is currently under construction. We're working on something great!
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}