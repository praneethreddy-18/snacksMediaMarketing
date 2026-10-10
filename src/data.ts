import type { ServiceItem, PortfolioItem, GrowthStep, PricingPlan } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'business-automation',
    title: 'Business Automation & Lead Management',
    category: 'automation',
    badge: 'Save Time & Scale Fast',
    description: 'Streamline your lead flow and save time with smart automation across multiple channels including Instagram, WhatsApp, and custom CRMs.',
    iconName: 'Bot',
    image: '/assets/automation_dashboard.png',
    subFeatures: [
      {
        title: 'Instagram Automation',
        description: 'Automated enquiry workflows and response journeys for Instagram DMs and comment triggers.'
      },
      {
        title: 'WhatsApp Automation',
        description: 'Automate customer communication and follow-up workflows through official WhatsApp API.'
      },
      {
        title: 'Missed-Call Automation',
        description: 'If a customer calls and the call is not answered, an automated WhatsApp message is triggered instantly.'
      },
      {
        title: 'Lead Generation Automation',
        description: 'Leads from Instagram, Facebook, and website forms are routed automatically into Google Sheets or your CRM.'
      },
      {
        title: 'Lead Pipeline Tracking',
        description: 'Organize new leads, contacted leads, follow-ups, and conversions in one clean structured board.'
      },
      {
        title: 'Follow-Up Automation',
        description: 'Reduce lead wastage by triggering automated timely follow-ups based on lead interactions.'
      }
    ],
    benefits: [
      'Eliminate manual lead response delays',
      'Boost lead conversion by up to 300%',
      'Capture 100% of missed call opportunities',
      'Centralize leads into Google Sheets / Notion / CRM'
    ],
    sampleDeliverables: [
      'Custom WhatsApp & IG Chatbot Flows',
      'Google Sheets & Webhook Integration Setup',
      'Instant Missed-Call Auto Responder System',
      'Automated Lead Nurturing Email & SMS Sequence'
    ]
  },
  {
    id: 'content-storytelling',
    title: 'Content & Storytelling',
    category: 'content',
    badge: 'Voice of Your Brand',
    description: 'We shape the voice your audience remembers. From script writing to creative messaging, our team builds narratives that feel intentional.',
    iconName: 'PenTool',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    subFeatures: [
      {
        title: 'Content Creation',
        description: 'High-impact copy, visual content, carousel graphics, and social posts designed for engagement.'
      },
      {
        title: 'Storytelling & Script Writing',
        description: 'Engaging brand origin stories, reel scripts, YouTube hooks, and promotional video scripts.'
      },
      {
        title: 'Creative Messaging',
        description: 'Unique brand positioning statements, tagline development, and compelling call-to-actions.'
      },
      {
        title: 'Content Planning',
        description: 'Comprehensive 30-day content calendar with trending topic mapping and brand alignment.'
      }
    ],
    benefits: [
      'Establish strong brand authority & trust',
      'Higher organic reach and viral audience engagement',
      'Consistent posting schedule with 0 hassle',
      'Clear positioning that sets you apart from competitors'
    ],
    sampleDeliverables: [
      'Monthly Content Calendar (30 Days)',
      '15+ High-Converting Script Hooks',
      'Brand Copywriting & Messaging Bible',
      'Carousel Graphic Templates & Copies'
    ]
  },
  {
    id: 'video-production',
    title: 'Video Production & Editing',
    category: 'video',
    badge: 'Stop the Scroll',
    description: 'We create visuals that stop the scroll. Reels, promotional videos, ad creatives, and story-based edits handled as a polished visual system.',
    iconName: 'Video',
    image: '/assets/video_editing.png',
    subFeatures: [
      {
        title: 'Reels & Short Form',
        description: 'Fast-paced vertical videos for Instagram & YouTube Shorts tailored for maximum watch time.'
      },
      {
        title: 'Promotional Videos',
        description: 'Cinematic brand story films, product launches, and corporate showcase videos.'
      },
      {
        title: 'Ad Creatives',
        description: 'High-converting video ad concepts engineered to lower Customer Acquisition Cost (CAC).'
      },
      {
        title: 'Editing & Post Production',
        description: 'Color grading, custom sound effects, captions, kinetic text, and seamless cuts built for retention.'
      }
    ],
    benefits: [
      'Dramatic increase in average view duration',
      'Professional studio-grade lighting and sound',
      'Multi-platform formatted clips (9:16, 16:9, 1:1)',
      'Proven hooks that drive clicks and sales'
    ],
    sampleDeliverables: [
      '12-20 High Quality Reels per Month',
      '4K On-Location Video Shoots',
      'Color-Graded & Subtitled Final Master Files',
      'High-Conversion Video Ad Variants'
    ]
  },
  {
    id: 'social-media-performance',
    title: 'Social Media & Performance Marketing',
    category: 'social',
    badge: 'Driven by Digital Transformation',
    description: 'A rapidly expanding global market driven by digital transformation. We manage your presence, scale your paid ads, and track ROI.',
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    subFeatures: [
      {
        title: 'Meta Account Management',
        description: 'Facebook & Instagram content coordination, publishing, comment monitoring, and community building.'
      },
      {
        title: 'Meta Ads Management',
        description: 'Campaign setup, precise audience targeting, split testing (A/B), budget optimization, and scaling.'
      },
      {
        title: 'Retargeting Campaigns',
        description: 'Reconnect with website visitors, video viewers, and lead form drop-offs to close sales.'
      },
      {
        title: 'Performance Reporting',
        description: 'Monthly reporting with key metrics, Return on Ad Spend (ROAS), and actionable growth recommendations.'
      }
    ],
    benefits: [
      'Measurable Return on Investment (ROI)',
      'Data-driven audience targeting and reach',
      'Predictable flow of inbound customer leads',
      'Complete end-to-end campaign management'
    ],
    sampleDeliverables: [
      'Meta Ads Campaign Setup & Management',
      'Custom Pixel & Conversion API Integration',
      'Weekly Optimization & Ad Refresh',
      'Detailed Monthly ROAS Performance Report'
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Brand Awareness Campaign',
    category: 'social',
    categoryLabel: 'Social Media Marketing',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    client: 'EcoLuxe Lifestyle',
    resultMetric: '+320% Impressions',
    description: 'Scaled brand awareness through strategic video reels and targeted Instagram campaign reaching 1.2M targeted impressions.',
    tags: ['Instagram', 'Brand Awareness', 'Reels Strategy']
  },
  {
    id: 'port-2',
    title: 'Product Reel Showcase',
    category: 'video',
    categoryLabel: 'Video Production',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    client: 'Apex Tech Wearables',
    resultMetric: '4.8M Views',
    description: 'High-end 4K product videography highlighting futuristic smartwatch features with custom sound design.',
    tags: ['4K Video', 'Product Reel', 'Post Production']
  },
  {
    id: 'port-3',
    title: 'Instagram Growth Campaign',
    category: 'social',
    categoryLabel: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    client: 'Gourmet Bistro & Cafe',
    resultMetric: '+15k Followers',
    description: 'Transformed local food brand into viral regional icon through aesthetic food cinematography and engaging carousels.',
    tags: ['Social Strategy', 'Community Growth', 'Food Styling']
  },
  {
    id: 'port-4',
    title: 'Complex Branding & Identity',
    category: 'branding',
    categoryLabel: 'Branding',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
    client: 'Vanguard Capital',
    resultMetric: 'Full Rebrand',
    description: 'Crafted modern corporate brand identity, typography design system, and marketing collaterals.',
    tags: ['Brand Identity', 'Visual System', 'Logo Design']
  },
  {
    id: 'port-5',
    title: 'High ROI Meta Ad Creatives',
    category: 'social',
    categoryLabel: 'Social Media / Performance',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    client: 'Nova Fitness App',
    resultMetric: '5.4x ROAS',
    description: 'Designed 20+ ad creative variants with dynamic text overlays resulting in 420+ app subscriptions.',
    tags: ['Meta Ads', 'Performance', 'Ad Creatives']
  },
  {
    id: 'port-6',
    title: 'WhatsApp Lead Funnel Automation',
    category: 'automation',
    categoryLabel: 'Automation System',
    image: '/assets/automation_dashboard.png',
    client: 'Horizon Real Estate',
    resultMetric: '850+ Qualified Leads',
    description: 'Built zero-friction WhatsApp lead capture system that instantly answers customer queries and books site visits.',
    tags: ['WhatsApp API', 'CRM Automation', 'Lead Funnel']
  }
];

export const GROWTH_STEPS: GrowthStep[] = [
  {
    step: 1,
    title: 'Attract',
    subtitle: 'High-Impact Media & Targeted Ads',
    description: 'We position your brand in front of high-intent audiences through viral short-form content, aesthetic reels, and targeted Meta ads.',
    iconName: 'Magnet',
    metrics: 'Reach 100k+ Potential Buyers',
    tools: ['Meta Ads', 'Short-form Video', 'SEO & Hashtags']
  },
  {
    step: 2,
    title: 'Capture',
    subtitle: 'Zero-Friction Lead Generation',
    description: 'Instant lead capture using automated Instagram DM keyword triggers, custom landing pages, and interactive lead forms.',
    iconName: 'UserCheck',
    metrics: '3x Higher Opt-in Rates',
    tools: ['IG Auto-Responder', 'Custom Forms', 'Webhooks']
  },
  {
    step: 3,
    title: 'Follow Up',
    subtitle: 'Instant WhatsApp & Email Nurturing',
    description: 'Sub-minute automated response on WhatsApp, SMS, and email. Never let a qualified lead go cold again.',
    iconName: 'MessageSquare',
    metrics: '98% WhatsApp Open Rate',
    tools: ['WhatsApp API', 'Missed Call Trigger', 'CRM Routing']
  },
  {
    step: 4,
    title: 'Convert',
    subtitle: 'High-Converting Sales Assets',
    description: 'Empower your sales team with script templates, automated call reminders, and high-conversion pitch decks.',
    iconName: 'CheckCircle2',
    metrics: '40%+ Lead to Customer Conversion',
    tools: ['Sales Scripts', 'Booking Calendars', 'Retargeting Ads']
  },
  {
    step: 5,
    title: 'Measure',
    subtitle: 'Real-time ROI & Analytics Dashboard',
    description: 'Track key growth indicators, cost per acquisition (CPA), return on ad spend (ROAS), and scale what works.',
    iconName: 'BarChart3',
    metrics: 'Clear Transparent ROI',
    tools: ['Custom Analytics', 'ROAS Tracker', 'Monthly Reports']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Growth Starter',
    tagline: 'Perfect for small businesses scaling up',
    price: '₹25,000',
    period: '/ month',
    description: 'A solid foundation for building your brand presence and generating steady leads.',
    features: [
      '12 High-Quality Reels / Month',
      'Basic Social Media Management (Meta)',
      '1 WhatsApp Automation Flow',
      'Monthly Strategy Call',
      'Basic Reporting'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Partner',
    tagline: 'For aggressive growth & market dominance',
    price: '₹40,000',
    period: '/ month',
    description: 'Complete end-to-end digital marketing suite with premium video production and full automation.',
    features: [
      '20 High-Quality Reels / Month',
      'Professional Video Shoots & Editing',
      'Full Meta Ads Management',
      'Advanced WhatsApp & IG Automation',
      'Brand Identity & Graphic Design',
      'Dedicated Account Manager'
    ],
    isPopular: true
  },
  {
    id: 'elite',
    name: 'Elite Scale',
    tagline: 'Full agency team at your disposal',
    price: '₹75,000',
    period: '/ month',
    description: 'The ultimate enterprise package. We become your entire marketing department.',
    features: [
      'Unlimited Video Editing & Production',
      'Omnichannel Ads (Meta, Google, LinkedIn)',
      'Custom CRM Setup & Integrations',
      'Custom Web & App Funnels',
      'Weekly Optimization Calls',
      'Priority 24/7 Slack Support'
    ]
  }
];

export const ABOUT_STATS = [
  { value: '100+', label: 'Projects Delivered', desc: 'Successful campaigns across industries' },
  { value: '50+', label: 'Happy Clients', desc: 'Long-term trusted brand partners' },
  { value: '3+', label: 'Years of Experience', desc: 'Cutting-edge digital marketing mastery' },
  { value: '100%', label: 'Client Satisfaction', desc: 'Focus on measurable real-world growth' }
];

export const OUR_VALUES = [
  {
    title: 'Creativity',
    desc: 'We bring fresh ideas to every project, ensuring your content stands out.'
  },
  {
    title: 'Results',
    desc: 'Measurable outcomes that drive growth and maximize return on ad spend.'
  },
  {
    title: 'Partnership',
    desc: 'Your business is our business. We work as an extended growth team.'
  },
  {
    title: 'Innovation',
    desc: 'We use the latest tools, AI automation, and trends to stay ahead.'
  }
];
