// Real client portfolio media imports
import video1 from '../assets/portfolio video1.mp4';
import video2 from '../assets/portfolio video2.mp4';
import video3 from '../assets/portfolio video 3.mp4';
import video4 from '../assets/portfolio video 4.mp4';
import video5 from '../assets/portfolio video 5.mp4';
import video6 from '../assets/portfolio video 6.mp4';
import video7 from '../assets/portfolio video 7.mp4';
import hifiReel from '../assets/HIFI OFFER REEL INHOUSE STUDIO.mp4';
import persisReel from '../assets/Persis Tiffin - Desserts Reel.mp4';

// Real client promotional flyers
import flier1 from '../assets/flier1.jpeg';
import filer2 from '../assets/filer2.jpeg';
import filer3 from '../assets/filer3.jpeg';
import filer4 from '../assets/filer4.jpeg';
import filer5 from '../assets/filer5.jpeg';
import filer6 from '../assets/filer6.jpeg';
import filer7 from '../assets/filer7.jpeg';
import filer8 from '../assets/filer8.jpeg';
import filer9 from '../assets/filer9.jpeg';
import filer10 from '../assets/filer10.jpeg';

export interface PortfolioSample {
  id: string;
  title: string;
  client: string;
  type: 'video' | 'flyer' | 'post';
  media: string;
  thumbnail?: string;
  size: 'normal' | 'large' | 'wide';
  categoryLabel: string;
  resultMetric: string;
  tags: string[];
}

// 19 Real Client Portfolio Items featuring real videos and flyers
export const PORTFOLIO_SAMPLES: PortfolioSample[] = [
  // 1-5 (Initial View - High Impact Mix)
  {
    id: '1',
    title: 'HiFi In-House Studio Offer Reel',
    client: 'HiFi Bros',
    type: 'video',
    media: hifiReel,
    size: 'large',
    categoryLabel: 'Video Production',
    resultMetric: '+2.4M Views',
    tags: ['Studio', 'Offer Reel', 'Commercial']
  },
  {
    id: '2',
    title: 'Weekend Special Snacks Menu',
    client: 'The Hangout Place',
    type: 'flyer',
    media: flier1,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '3.8x ROAS',
    tags: ['Dining', 'Food Flyer', 'Menu']
  },
  {
    id: '3',
    title: 'Persis Tiffin Desserts & Sweets Reel',
    client: 'Persis Indian Grill',
    type: 'video',
    media: persisReel,
    size: 'normal',
    categoryLabel: 'Food & Dining',
    resultMetric: '5.2x ROAS',
    tags: ['Restaurant', 'Food Reel', 'Desserts']
  },
  {
    id: '4',
    title: 'Bar & Buffet Grand Opening Flyer',
    client: 'Persis Lounge',
    type: 'flyer',
    media: filer2,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '450+ Bookings',
    tags: ['Event', 'Launch Flyer', 'Bar']
  },
  {
    id: '5',
    title: 'BYOB Night & DJ Party Poster',
    client: 'Club Horizon',
    type: 'flyer',
    media: filer3,
    size: 'wide',
    categoryLabel: 'Graphic Design',
    resultMetric: 'Sold Out Night',
    tags: ['Nightlife', 'Party', 'Poster']
  },

  // 6-10 (Second Load)
  {
    id: '6',
    title: 'Viral UGC & High-Hook Reel',
    client: 'Snackz Creator Studio',
    type: 'video',
    media: video1,
    size: 'large',
    categoryLabel: 'Video Production',
    resultMetric: '+1.8M Views',
    tags: ['Viral', 'Reels', 'Retention']
  },
  {
    id: '7',
    title: 'Restaurant Dining Experience Reel',
    client: 'Urban Gourmet',
    type: 'video',
    media: video3,
    size: 'normal',
    categoryLabel: 'Video Production',
    resultMetric: '+1.5M Views',
    tags: ['Food', 'Hospitality', 'Viral']
  },
  {
    id: '8',
    title: 'Exclusive Banquet Deals Promo',
    client: 'Royal Feast Banquets',
    type: 'flyer',
    media: filer4,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '120+ Inquiries',
    tags: ['Catering', 'Promotions', 'Print']
  },
  {
    id: '9',
    title: 'High-Energy Brand Commercial',
    client: 'Velocity Fitness',
    type: 'video',
    media: video4,
    size: 'normal',
    categoryLabel: 'Video Production',
    resultMetric: '+850 Admits',
    tags: ['Fitness', 'Brand Film', 'Cinematic']
  },
  {
    id: '10',
    title: 'Festive Season Special Discounts',
    client: 'Bazaar Retail',
    type: 'flyer',
    media: filer5,
    size: 'wide',
    categoryLabel: 'Graphic Design',
    resultMetric: '2.8x Sales',
    tags: ['Retail', 'Festival', 'Deals']
  },

  // 11-15 (Third Load)
  {
    id: '11',
    title: 'Real Estate Luxury Tour',
    client: 'Skyline Properties',
    type: 'video',
    media: video5,
    size: 'large',
    categoryLabel: 'Video Production',
    resultMetric: '3.4x Reach',
    tags: ['Real Estate', 'Walkthrough', '4K']
  },
  {
    id: '12',
    title: 'Chef Special Thali Promotion',
    client: 'Spice Route',
    type: 'flyer',
    media: filer6,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '+40% Footfall',
    tags: ['Food', 'Social Ad', 'Menu']
  },
  {
    id: '13',
    title: 'E-Commerce Lifestyle Promo',
    client: 'Aura Apparel',
    type: 'video',
    media: video6,
    size: 'normal',
    categoryLabel: 'Video Production',
    resultMetric: '+320k Views',
    tags: ['Fashion', 'E-Commerce', 'UGC']
  },
  {
    id: '14',
    title: 'Live Music Night Announcement',
    client: 'Acoustic Cafe',
    type: 'flyer',
    media: filer7,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '500+ RSVPs',
    tags: ['Events', 'Cafe', 'Poster']
  },
  {
    id: '15',
    title: 'Weekend Brunch Buffet Showcase',
    client: 'Grand Pavilion',
    type: 'flyer',
    media: filer10,
    size: 'wide',
    categoryLabel: 'Graphic Design',
    resultMetric: 'Table Full',
    tags: ['Buffet', 'Luxury Dining', 'Flyer']
  },

  // 16-19 (Fourth Load)
  {
    id: '16',
    title: 'Brand Campaign & Commercial',
    client: 'Snackz Media Production',
    type: 'video',
    media: video2,
    size: 'large',
    categoryLabel: 'Video Production',
    resultMetric: '+25k Followers',
    tags: ['BTS', 'Filmmaking', 'Studio']
  },
  {
    id: '17',
    title: 'Short Form Retention Ad',
    client: 'Zenith Tech',
    type: 'video',
    media: video7,
    size: 'normal',
    categoryLabel: 'Video Production',
    resultMetric: '+100k Likes',
    tags: ['Tech', 'Shorts', 'TikTok']
  },
  {
    id: '18',
    title: 'Corporate Lunch Box Deal',
    client: 'Express Meal Co',
    type: 'flyer',
    media: filer8,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '850+ Orders',
    tags: ['B2B', 'Catering', 'Flyer']
  },
  {
    id: '19',
    title: 'Summer Coolers Drinks Poster',
    client: 'Brews & Shakes',
    type: 'flyer',
    media: filer9,
    size: 'normal',
    categoryLabel: 'Graphic Design',
    resultMetric: '+2.1x ROAS',
    tags: ['Beverages', 'Promo', 'Summer']
  }
];
