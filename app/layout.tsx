import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ruff-pepper-shrimp.jamal-ferguson8.chatgpt.site'),
  title: 'RUFF Pepper Shrimp | Yard Style in Broward',
  description: 'Authentic Jamaican pepper shrimp served whole with the heads on and Scotch bonnet heat. $20 tubs available in Broward County, Florida.',
  openGraph: { title: 'RUFF Pepper Shrimp', description: 'Real yaad flavor. Whole shrimp, Scotch bonnet heat, $20 a tub.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'RUFF Pepper Shrimp', description: 'Real yaad flavor. Whole shrimp, Scotch bonnet heat, $20 a tub.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
