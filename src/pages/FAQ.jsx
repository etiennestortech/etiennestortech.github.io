import { Navbar1 } from "../components/navbars/Navbar1";
import { Header54 } from "../components/heroes/Header54";
import { Faq3 } from "../components/faqs/Faq3";
import { Footer12 } from "../components/footers/Footer12";

export const FAQ = () => {
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
          { title: "Rent Now", variant: "primary" }
        ]}
      />

      {/* FAQ Hero Header */}
      <Header54 
        heading="FAQ"
        description="Find answers to common questions about Tight & Compact Storage services, security, and rental process."
        image={{
          src: "/security-keypad.jpg",
          alt: "Tight & Compact Storage FAQ and support"
        }}
      />

      {/* FAQ Content */}
      <Faq3 
        heading="Frequently Asked Questions"
        description="Everything you need to know about storage with Tight & Compact"
        button={{
          title: "Contact Us",
          variant: "secondary",
          onClick: () => window.location.href = "/contact"
        }}
        questions={[
          {
            title: "When does Tight & Compact Storage open?",
            answer: "We're opening Fall 2025 in Moncton, NB. Pre-reservations are available now to secure your preferred unit size and location. Contact us today to reserve your spot!"
          },
          {
            title: "What security features do you offer?",
            answer: "Our facility features individual unit alarms with real-time notifications, 24/7 video surveillance with 25+ cameras, night vision monitoring system, and complete perimeter security with fencing and lighting. You'll receive instant notifications every time your unit is accessed."
          },
          {
            title: "Do you offer moving truck rental?",
            answer: "Yes! We provide moving truck service with drop-off and pick-up at your location. No gas or kilometer charges - making your move convenient and stress-free. Our branded trucks are well-maintained and perfect for local moves."
          },
          {
            title: "What unit sizes are available?",
            answer: "We offer a range of sizes from small units (perfect for personal items and documents) to extra-large units for commercial storage. Our sizes include small, medium, large, and extra-large units to accommodate everything from seasonal items to business inventory."
          },
          {
            title: "What are your access hours?",
            answer: "Gate access is available 24/7 with secure keypad entry. You can access your unit anytime that's convenient for you. Our phone support is available Monday-Friday 8 AM-6 PM, Saturday 9 AM-4 PM, and Sunday 10 AM-2 PM, with emergency support available 24/7."
          },
          {
            title: "How do I make payments?",
            answer: "We accept secure online payments, credit cards, debit cards, and automatic monthly billing for your convenience. You can manage your account and payments through our online portal once we launch."
          },
          {
            title: "Can I reserve a unit before you open?",
            answer: "Absolutely! Pre-reservations are available now. Contact us at (506) 252-8751 or info@tightandcompact.ca to secure your preferred unit size and location for our Fall 2025 opening."
          },
          {
            title: "Do you offer business storage solutions?",
            answer: "Yes! We provide secure commercial storage with 24/7 surveillance and alarmed units. Perfect for inventory, equipment, documents, and supplies. Our enterprise-grade security keeps your business assets protected."
          },
          {
            title: "What items are not allowed in storage units?",
            answer: "For safety and legal reasons, we prohibit hazardous materials, flammable liquids, explosive materials, perishable food items, live animals, illegal substances, and items that could cause odors or attract pests. Contact us if you're unsure about specific items."
          },
          {
            title: "Is there a minimum rental period?",
            answer: "We offer flexible rental terms to meet your needs. Month-to-month rentals are available with no long-term commitment required. Contact us to discuss the best rental option for your situation."
          },
          {
            title: "Do you provide insurance for stored items?",
            answer: "We recommend that customers maintain their own insurance coverage for stored items. We can provide information about storage insurance options. Our security features help protect your belongings, but personal insurance provides additional peace of mind."
          },
          {
            title: "How do I get my access code?",
            answer: "Once your rental is confirmed and payment is processed, you'll receive your unique access code via email and SMS. This code works with our secure keypad entry system and is active 24/7 for your convenience."
          }
        ]}
      />

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
          { title: "Rent Now", variant: "primary" },
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