
import React from 'react';
import { 
  Wrench, 
  Droplets, 
  Bath, 
  ArrowUpCircle, 
  Clock, 
  Building2, 
  Star, 
  ShieldCheck, 
  Award,
  ThumbsUp
} from 'lucide-react';
import { Service, Review, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Aditya Plumbing Services",
  hindiName: "आदित्य प्लंबिंग सर्विसेज",
  phone: "081491 48912",
  phoneRaw: "08149148912",
  address: "Sr No 45/3, Preetnagar Housing Society, Kharadi Road, Chandan Nagar, Pune, Maharashtra 411014",
  rating: 4.9,
  reviewCount: 33,
  hours: "Open 24 Hours",
  serviceAreas: ["Chandan Nagar", "Kharadi Road", "Pune"],
};

export const SERVICES: Service[] = [
  {
    id: "general-repairs",
    title: "General Plumbing Repairs",
    description: "Expert fixing of common plumbing issues from minor leaks to complex system failures.",
    iconName: "Wrench",
    detailedContent: "Our team handles everyday plumbing challenges including faucet replacements, toilet repairs, and drainage clear-outs with professional precision."
  },
  {
    id: "leakage-fixing",
    title: "Tap, Pipe & Leakage Fixing",
    description: "Stop water wastage and prevent property damage with our advanced leak detection and repair.",
    iconName: "Droplets",
    detailedContent: "We use high-quality materials to ensure that once a leak is fixed, it stays fixed. From dripping taps to hidden pipe bursts, we solve it all."
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom & Washroom Plumbing",
    description: "Complete bathroom fitting, shower repairs, and sanitary ware installation services.",
    iconName: "Bath",
    detailedContent: "Transform your bathroom with modern fittings and reliable plumbing. We handle commode installations, vanity setups, and shower pressure issues."
  },
  {
    id: "water-line-upgrades",
    title: "Water Line Installation & Upgrades",
    description: "Upgrading old plumbing systems with modern, durable pipes for better water pressure.",
    iconName: "ArrowUpCircle",
    detailedContent: "Whether you're building a new home or upgrading an old one, we provide efficient water line layouts using industry-grade CPVC and UPVC materials."
  },
  {
    id: "emergency-services",
    title: "Emergency Plumbing (24/7)",
    description: "Round-the-clock support for urgent plumbing crises that just can't wait.",
    iconName: "Clock",
    detailedContent: "Pipe burst at midnight? Overflowing tank? Our emergency response team is available 24 hours a day in Chandan Nagar and Kharadi."
  },
  {
    id: "commercial-plumbing",
    title: "Residential & Commercial Support",
    description: "Comprehensive maintenance contracts and large-scale plumbing for businesses and homes.",
    iconName: "Building2",
    detailedContent: "We provide specialized plumbing solutions for offices, restaurants, and residential complexes, focusing on heavy-duty performance and reliability."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Rahul Sharma",
    rating: 5,
    content: "Excellent service! They arrived within 30 minutes for a pipe leak in Chandan Nagar. Very professional work and fair pricing.",
    date: "2 months ago"
  },
  {
    id: "2",
    author: "Priya Deshmukh",
    rating: 5,
    content: "The best plumber in Kharadi Road. Fixed my bathroom fittings perfectly. Clean execution and polite staff.",
    date: "1 month ago"
  },
  {
    id: "3",
    author: "Amit Kulkarni",
    rating: 5,
    content: "Highly recommend Aditya Plumbing for water line upgrades. They used quality materials and finished the work on time.",
    date: "3 weeks ago"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" }
];

export const WHY_CHOOSE_US = [
  { title: "24/7 Availability", icon: <Clock className="w-6 h-6" />, desc: "Emergency help whenever you need it, day or night." },
  { title: "Expert Skill", icon: <Wrench className="w-6 h-6" />, desc: "Years of experience in residential and commercial plumbing." },
  { title: "Quality Materials", icon: <ShieldCheck className="w-6 h-6" />, desc: "We use only top-tier, durable materials for long-lasting solutions." },
  { title: "Transparent Pricing", icon: <ThumbsUp className="w-6 h-6" />, desc: "No hidden costs. Clear communication before we start any work." }
];

export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Bath: <Bath className="w-8 h-8" />,
  ArrowUpCircle: <ArrowUpCircle className="w-8 h-8" />,
  Clock: <Clock className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};
