import { HugeiconsIcon } from "@hugeicons/react";
import { SecurityIcon, Video02Icon, MessageUnlock01Icon, CheckmarkSquare01Icon, TruckIcon, Call02Icon } from "@hugeicons/core-free-icons";
import { Navbar1 } from "../components/navbars/Navbar1";
import { Header54 } from "../components/heroes/Header54";
import { Layout16 } from "../components/heroes/Layout16";
import { Layout298 } from "../components/features/Layout298";
import { Footer12 } from "../components/footers/Footer12";

export const About = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar1 
        logo={{
          url: "#/",
          src: "/tc-logo.png",
          alt: "Tight & Compact Storage Logo"
        }}
        navLinks={[
          { title: "About", url: "#/about" },
          { title: "FAQ", url: "#/faq" },
          { title: "Community", url: "#/community" },
          { title: "Contact", url: "#/contact" }
        ]}
        buttons={[
          { title: "(506) 252-8751", variant: "secondary" },
          { title: "Rent Now", variant: "primary", onClick: () => window.open("https://stortech-dev.webflow.io/storefront/checkout?storefront_id=52&facility_id=36", "_blank") }
        ]}
      />

      {/* About Hero Header */}
      <Header54 
        heading="About Tight & Compact"
        description="Your trusted local storage solution opening Fall 2025 in Moncton, NB"
        image={{
          src: "/facility-exterior.jpg",
          alt: "Tight & Compact Storage facility"
        }}
      />

      {/* Our Story Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">Our Story</h2>
              <p className="text-gray-black-500 md:text-md mb-6">
                Tight & Compact Storage was created to address the need for secure, modern storage solutions in Moncton. We recognized that people and businesses deserve more than just a storage unit – they deserve peace of mind.
              </p>
              <p className="text-gray-black-500 md:text-md mb-6">
                Opening Fall 2025, we're bringing enterprise-grade security and modern convenience to personal storage. Our facility combines state-of-the-art technology with genuine local service to create the storage experience Moncton has been waiting for.
              </p>
              <p className="text-gray-black-500 md:text-md">
                Pre-reservations are available now, allowing you to secure your preferred unit size and location before we officially open our doors.
              </p>
            </div>
            <div>
              <img 
                src="/tc-team.jpg" 
                alt="Tight & Compact Storage team" 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <Layout298 
        tagline="What Makes Us Different"
        heading="Security-First Storage Solutions"
        description="We've reimagined storage with technology, security, and customer convenience at the forefront"
        sections={[
          {
            icon: <HugeiconsIcon icon={SecurityIcon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Individual Unit Alarms",
            description: "Every unit has its own alarm system with real-time notifications sent directly to you"
          },
          {
            icon: <HugeiconsIcon icon={Video02Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "24/7 Surveillance",
            description: "25+ security cameras with night vision monitoring your belongings around the clock"
          },
          {
            icon: <HugeiconsIcon icon={MessageUnlock01Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Smart Access Control",
            description: "Secure keypad entry with 24/7 access and instant notifications when your unit is accessed"
          },
          {
            icon: <HugeiconsIcon icon={TruckIcon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Moving Truck Service",
            description: "Complimentary truck rental with drop-off and pick-up service - no gas or kilometer charges"
          }
        ]}
        buttons={[
          { title: "Find Your Unit", variant: "primary", onClick: () => window.open("https://stortech-dev.webflow.io/storefront/checkout?storefront_id=52&facility_id=36", "_blank") }
        ]}
        className="bg-background-secondary"
      />

      {/* Our Facility */}
      <Layout16 
        tagline="Our Facility"
        heading="Built for Modern Storage Needs"
        description="168+ units ranging from personal storage to commercial solutions, all equipped with enterprise-grade security in a brand new facility designed with customers in mind."
        features={[
          {
            icon: <HugeiconsIcon icon={CheckmarkSquare01Icon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "168+ Storage Units - Complete range from small personal lockers to extra-large commercial spaces"
          },
          {
            icon: <HugeiconsIcon icon={SecurityIcon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Brand New Facility - Purpose-built in 2025 with modern design and customer-focused layout"
          },
          {
            icon: <HugeiconsIcon icon={Video02Icon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Climate Considerations - Designed for New Brunswick weather with proper ventilation and protection"
          },
          {
            icon: <HugeiconsIcon icon={MessageUnlock01Icon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Convenient Location - Easy access location in Moncton with ample parking for customers and trucks"
          },
          {
            icon: <HugeiconsIcon icon={TruckIcon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Loading Areas - Wide corridors and loading zones designed for easy move-in and move-out"
          },
          {
            icon: <HugeiconsIcon icon={Call02Icon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "On-Site Management - Local facility management and maintenance for immediate support"
          }
        ]}
        buttons={[
          { title: "Rent Now", variant: "primary", onClick: () => window.open("https://stortech-dev.webflow.io/storefront/checkout?storefront_id=52&facility_id=36", "_blank") },
          { title: "About", variant: "secondary", onClick: () => window.location.href = "#/about" }
        ]}
        image={{
          src: "/security-keypad.jpg",
          alt: "Secure keypad access at Tight & Compact Storage facility"
        }}
      />

      {/* Community Commitment */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Community Commitment</h2>
            <p className="text-gray-black-500 md:text-md mb-8">
              As a local Moncton business, we're committed to supporting our community through partnerships, 
              reliable service, and contributing to the local economy. We believe in building relationships, 
              not just renting space.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold">Local Business</h3>
                <p className="text-gray-black-500">Supporting the Moncton economy with local employment and community investment</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold">Community Partnerships</h3>
                <p className="text-gray-black-500">Working with organizations like Fulfilling Hearts Rescue to give back</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold">Bilingual Service</h3>
                <p className="text-gray-black-500">Serving customers in both English and French for our diverse community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer12 
        logo={{
          url: "#/",
          src: "/tc-logo.png",
          alt: "Tight & Compact Storage Logo"
        }}
        heading="Ready to Store with Tight & Compact?"
        description="Contact us today to reserve your unit for our Fall 2025 opening"
        buttons={[
          { title: "Rent Now", variant: "primary", onClick: () => window.open("https://stortech-dev.webflow.io/storefront/checkout?storefront_id=52&facility_id=36", "_blank") },
          { title: "(506) 252-8751", variant: "secondary" }
        ]}
        columnLinks={[
          {
            links: [
              { title: "Home", url: "#/" },
              { title: "About", url: "#/about" },
              { title: "Unit Sizes", url: "#unit-sizes" },
              { title: "Security", url: "#security" }
            ]
          },
          {
            links: [
              { title: "FAQ", url: "#/faq" },
              { title: "Community", url: "#/community" },
              { title: "Contact", url: "#/contact" },
              { title: "Moving Truck", url: "#moving-truck" }
            ]
          }
        ]}
        footerText="© 2025 Tight & Compact Storage. All rights reserved."
        footerLinks={[
          { title: "Privacy Policy", url: "#" },
          { title: "Terms of Service", url: "#" },
          { title: "Cookie Settings", url: "#" }
        ]}
      />
    </div>
  );
};