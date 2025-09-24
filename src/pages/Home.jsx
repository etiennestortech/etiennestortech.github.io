import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkSquare01Icon, SecurityIcon, MessageUnlock01Icon, Video02Icon, EyeIcon, Grid02Icon, Search01Icon, CreditCardIcon } from "@hugeicons/core-free-icons";
import { Navbar1 } from "../components/navbars/Navbar1";
import { Header5 } from "../components/heroes/Header5";
import { Layout16 } from "../components/heroes/Layout16";
import { Layout298 } from "../components/features/Layout298";
import { Layout300 } from "../components/layouts/Layout300";
import { Layout366 } from "../components/features/Layout366";
import { Stats2 } from "../components/stats/Stats2";
import { Faq3 } from "../components/faqs/Faq3";
import { Footer12 } from "../components/footers/Footer12";

export const Home = () => {
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

      {/* Hero Section */}
      <Header5 
        tagline="Coming Fall 2025"
        heading="Secure Self Storage in Moncton, NB"
        description="Your local storage solution with uncompromising security."
        buttons={[
          { title: "Rent Now", variant: "primary" },
          { title: "Find Your Unit", variant: "secondary-alt" }
        ]}
        image={{
          src: "/enhanced-hero-image.png",
          alt: "Enhanced view of Tight & Compact Storage facility with modern security features"
        }}
      />
      
      {/* Easy Rental Process */}
      <Layout298 
        tagline="Simple Process"
        heading="Rent Your Unit in 90 Seconds"
        description="Our streamlined online process makes renting storage incredibly easy"
        sections={[
          {
            icon: <HugeiconsIcon icon={Search01Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Browse Unit Sizes",
            description: "Select from small personal items to large commercial storage options"
          },
          {
            icon: <HugeiconsIcon icon={CheckmarkSquare01Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Reserve Your Unit",
            description: "Choose your preferred unit and reserve it with just a few clicks"
          },
          {
            icon: <HugeiconsIcon icon={CreditCardIcon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Pay Securely Online",
            description: "Complete your rental with secure payment and instant confirmation"
          },
          {
            icon: <HugeiconsIcon icon={MessageUnlock01Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Get Instant Access",
            description: "Receive your access code and start storing immediately"
          }
        ]}
        buttons={[
          { title: "Find Your Unit", variant: "primary" }
        ]}
      />
      
      {/* Security Features */}
      <Layout16 
        tagline="Security Features"
        heading="You'll Know and We'll Know"
        description="Top-tier security with alarmed units and real-time notifications. Your items will be safe and secure!"
        features={[
          {
            icon: <HugeiconsIcon icon={SecurityIcon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Individual unit alarms with real-time notifications every time your door opens or closes"
          },
          {
            icon: <HugeiconsIcon icon={Video02Icon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "24/7 video surveillance with 25+ cameras monitoring the facility around the clock"
          },
          {
            icon: <HugeiconsIcon icon={EyeIcon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Separate night vision monitoring system for comprehensive after-dark security coverage"
          },
          {
            icon: <HugeiconsIcon icon={Grid02Icon} size={24} color="currentColor" strokeWidth={1.5} />,
            paragraph: "Complete perimeter security with fully fenced facility and well-lit grounds"
          }
        ]}
        buttons={[
          { title: "Rent Now", variant: "secondary" },
          { title: "About", variant: "link" }
        ]}
        image={{
          src: "/security-keypad.jpg",
          alt: "Security keypad access control at T&C Storage"
        }}
        className="bg-background-secondary"
      />
      
      {/* Unit Sizes */}
      <Layout300 
        tagline="Unit Sizes"
        heading="Perfect Size for Every Need"
        description="From personal belongings to commercial inventory, we have the right space for you"
        sections={[
          {
            image: {
              src: "/Small Units TC.png",
              alt: "Small storage units perfect for personal items"
            },
            heading: "Small Units",
            description: "Perfect for seasonal items, documents, and small household goods"
          },
          {
            image: {
              src: "/Medium Units TC.png", 
              alt: "Medium storage units for furniture and appliances"
            },
            heading: "Medium Units",
            description: "Ideal for furniture, appliances, and moving between homes"
          },
          {
            image: {
              src: "/Large Units TC.png",
              alt: "Large storage units for vehicles and large furniture"
            },
            heading: "Large Units", 
            description: "Great for vehicles, large furniture, and business inventory"
          },
          {
            image: {
              src: "/Xlarge Units TC.png",
              alt: "Extra large storage units for commercial use"
            },
            heading: "Extra Large Units",
            description: "Maximum space for large-scale commercial storage needs"
          }
        ]}
        buttons={[
          { title: "Find Your Unit", variant: "secondary" }
        ]}
      />
      
      {/* Additional Services */}
      <Layout366 
        tagline="Additional Services"
        heading="More Than Just Storage"
        description="Complete storage solutions with moving services and business support"
        cardBig={{
          image: {
            src: "/tc-truck.jpg",
            alt: "Tight & Compact Moving Truck Service"
          },
          tagline: "Service",
          heading: "Moving Truck Service",
          description: "Drop-off/pick-up at your location with no gas or kilometer charges. Our branded moving truck makes your move convenient and stress-free.",
          buttons: [
            { title: "Contact Us", variant: "secondary" }
          ]
        }}
        cardsSmall={[
          {
            tagline: "Solutions",
            image: {
              src: "/business-storage.png",
              alt: "Commercial Storage Solutions"
            },
            heading: "Business Solutions",
            description: "Secure commercial storage with 24/7 surveillance and alarmed units. Keep your business inventory protected with enterprise-grade security.",
            button: {
              title: "Learn More",
              variant: "link",
              size: "link"
            }
          },
          {
            tagline: "Community",
            image: {
              src: "/fulfilling-hearts-dog-mat.jpg",
              alt: "Fulfilling Hearts Rescue dog on Tight & Compact Storage mat"
            },
            logoOverlay: {
              src: "/fulfilling-hearts-logo.svg",
              alt: "Fulfilling Hearts Rescue Logo"
            },
            heading: "Community Programs",
            description: "Supporting local animal rescue through community partnerships and giving back to Moncton.",
            button: {
              title: "Learn More",
              variant: "link",
              size: "link"
            }
          }
        ]}
        className="bg-background-secondary"
      />
      
      {/* Statistics */}
      <Stats2 
        heading="Tight & Compact Storage by the Numbers"
        description=""
        stats={[
          {
            percentage: "168+",
            heading: "Storage units available"
          },
          {
            percentage: "25+",
            heading: "Security cameras on site"
          },
          {
            percentage: "24/7",
            heading: "Customer access available"
          }
        ]}
        className="bg-black text-white"
      />
      
      {/* FAQ Section */}
      <Faq3 
        heading="Frequently Asked Questions"
        description="Quick answers to the most common questions about Tight & Compact Storage"
        button={{
          title: "More Questions",
          variant: "secondary"
        }}
        questions={[
          {
            title: "When does Tight & Compact Storage open?",
            answer: "We're opening Fall 2025 in Moncton, NB. Pre-reservations are available now to secure your preferred unit size and location."
          },
          {
            title: "What security features do you offer?",
            answer: "Our facility features individual unit alarms, 24/7 video surveillance with 25+ cameras, night vision monitoring, and complete perimeter security with fencing and lighting."
          },
          {
            title: "Do you offer moving truck rental?",
            answer: "Yes! We provide moving truck service with drop-off and pick-up at your location. No gas or kilometer charges - making your move convenient and stress-free."
          },
          {
            title: "What unit sizes are available?",
            answer: "We offer a range of sizes from small units for personal items to extra-large units for commercial storage. Browse our unit sizes to find the perfect fit for your needs."
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