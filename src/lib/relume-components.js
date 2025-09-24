/**
 * RELUME COMPONENT LIBRARY
 * 
 * This file exports all available Relume sections for easy reuse across projects.
 * When building landing pages, import from this library to maintain consistency.
 */

// Navigation Components
export { Navbar1 } from '../components/navbars/Navbar1';

// Hero/Layout Components  
export { Layout1 } from '../components/heroes/Layout1';
export { Layout16 } from '../components/heroes/Layout16';
export { Layout44 } from '../components/heroes/Layout44';
export { Layout48 } from '../components/heroes/Layout48';
export { Header5 } from '../components/heroes/Header5';
export { Header30 } from '../components/heroes/Header30';

// Feature/Grid Components
export { Layout401 } from '../components/features/Layout401';
export { Layout298 } from '../components/features/Layout298';
export { Layout300 } from '../components/layouts/Layout300';
export { Layout366 } from '../components/features/Layout366';
export { SizeGuide } from '../components/features/SizeGuide';

// FAQ Components
export { Faq3 } from '../components/faqs/Faq3';

// Testimonial Components
export { Testimonial33 } from '../components/testimonials/Testimonial33';

// CTA Components
export { Cta39 } from '../components/ctas/Cta39';

// Footer Components
export { Footer12 } from '../components/footers/Footer12';

// Logo/Social Proof Components
export { Logo1 } from '../components/logos/Logo1';

// Gallery Components
export { Gallery6 } from '../components/galleries/Gallery6';

// Blog Components
export { Blog33 } from '../components/blogs/Blog33';

// Content Components
export { Content7 } from '../components/content/Content7';

// Stats Components
export { Stats2 } from '../components/stats/Stats2';

/**
 * COMPONENT CATALOG
 * 
 * Available sections for building landing pages:
 * 
 * NAVIGATION:
 * - Navbar1: Professional navigation with mobile menu, dropdowns, and buttons
 * 
 * HEROES:
 * - Layout1: Two-column hero with large heading, description, buttons, and image
 * - Layout16: Two-column section with tagline, heading, bullet features, and image
 * - Layout44: Background image hero with overlay text and dark styling
 * - Layout48: Content section with large heading and sub-headings grid
 * - Header5: Full-screen background hero with overlay and left-aligned content
 * - Header30: Full-screen background hero with centered content and overlay
 * 
 * FEATURES:
 * - Layout401: Four-column feature grid with icons, headings, descriptions, and buttons
 * - Layout298: Four-column feature grid with centered icons and clean layout
 * - SizeGuide: Storage unit size comparison with pricing and what fits
 * 
 * FAQ:
 * - Faq3: Two-column FAQ section with accordion functionality
 * 
 * TESTIMONIALS:
 * - Testimonial33: Animated testimonials with scroll-based parallax effects
 * 
 * CTA SECTIONS:
 * - Cta39: Two-column call-to-action with image and buttons
 * 
 * FOOTERS:
 * - Footer12: Comprehensive footer with social media, links, and footer images
 * 
 * LOGOS/SOCIAL PROOF:
 * - Logo1: Company logos section for trust and credibility
 * 
 * GALLERIES:
 * - Gallery6: Responsive image gallery with 2-4 column grid layout
 * 
 * BLOG/CONTENT:
 * - Blog33: Three-column blog post grid with author info and categories
 * 
 * CONTENT/LEGAL:
 * - Content7: Centered content section with prose styling - perfect for legal pages, terms, privacy policy
 * 
 * STATS/METRICS:
 * - Stats2: Three-column statistics section with large numbers and descriptions
 * 
 * Usage Example:
 * import { Navbar1, Layout1, Layout16, Layout44, Layout48, Header5, Header30, Layout401, Layout298, Faq3, Testimonial33, Cta39, Footer12, Logo1, Gallery6, Blog33, Content7, Stats2 } from '../lib/relume-components';
 * 
 * <Navbar1 />
 * <Layout1 heading="Your Custom Heading" />
 * <Layout401 tagline="Features" />
 * <Faq3 heading="Frequently Asked Questions" />
 * <Logo1 heading="Trusted by Industry Leaders" />
 * <Footer12 />
 */

// Component Categories for easy reference
export const RELUME_SECTIONS = {
  NAVIGATION: {
    Navbar1: 'Professional navigation with mobile menu and dropdowns'
  },
  HEROES: {
    Layout1: 'Two-column hero with heading, description, and image',
    Layout16: 'Two-column section with tagline, heading, bullet features, and image',
    Layout44: 'Background image hero with overlay text and dark styling',
    Layout48: 'Content section with large heading and sub-headings grid',
    Header5: 'Full-screen background hero with overlay and left-aligned content',
    Header30: 'Full-screen background hero with centered content and overlay'
  },
  FEATURES: {
    Layout401: 'Four-column feature grid with icons and buttons',
    Layout298: 'Four-column feature grid with centered icons and clean layout',
    SizeGuide: 'Storage unit size comparison with pricing and what fits'
  },
  FAQ: {
    Faq3: 'Two-column FAQ section with accordion functionality'
  },
  TESTIMONIALS: {
    Testimonial33: 'Animated testimonials with scroll-based parallax effects'
  },
  CTA: {
    Cta39: 'Two-column call-to-action with image and buttons'
  },
  FOOTERS: {
    Footer12: 'Comprehensive footer with social media, links, and footer images'
  },
  LOGOS: {
    Logo1: 'Company logos section for trust and credibility'
  },
  GALLERIES: {
    Gallery6: 'Responsive image gallery with 2-4 column grid layout'
  },
  BLOG: {
    Blog33: 'Three-column blog post grid with author info and categories'
  },
  CONTENT: {
    Content7: 'Centered content section with prose styling - perfect for legal pages, terms, privacy policy'
  },
  STATS: {
    Stats2: 'Three-column statistics section with large numbers and descriptions'
  }
};