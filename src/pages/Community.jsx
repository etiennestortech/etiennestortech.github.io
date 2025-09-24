import { HugeiconsIcon } from "@hugeicons/react";
import { SecurityIcon, Video02Icon, MessageUnlock01Icon, CheckmarkSquare01Icon } from "@hugeicons/core-free-icons";
import { Navbar1 } from "../components/navbars/Navbar1";
import { Header54 } from "../components/heroes/Header54";
import { Layout298 } from "../components/features/Layout298";
import { Footer12 } from "../components/footers/Footer12";

export const Community = () => {
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

      {/* Community Hero Header */}
      <Header54 
        heading="Community Partnership"
        description="Supporting local organizations that make a difference in Moncton and beyond"
        image={{
          src: "/fulfilling-hearts-dog-mat.jpg",
          alt: "Fulfilling Hearts Rescue dog on Tight & Compact Storage mat"
        }}
      />

      {/* Cardboard Box Program */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-20">
            <div>
              <h2 className="mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">Cardboard Box Program</h2>
              <p className="text-gray-black-500 md:text-md mb-6">
                Launching Fall 2025, our Cardboard Box Program (CBP) connects local businesses with the Greater Moncton community while supporting Fulfilling Hearts Rescue.
              </p>
              <p className="text-gray-black-500 md:text-md mb-6">
                We collect excess inventory boxes from local businesses, sort them by size at our facility, and make them available for free to residents who need moving or organizing supplies. The program runs by donation, with all proceeds going directly to Fulfilling Hearts Rescue.
              </p>
              <p className="text-gray-black-500 md:text-md">
                It's a win-win-win: businesses minimize recycling costs, boxes get reused multiple times, and we support local animal rescue - all while providing free moving supplies to our community.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/fulfilling-hearts-dog-mat.jpg" 
                alt="Fulfilling Hearts Rescue dog on Tight & Compact Storage mat" 
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute bottom-4 right-4">
                <img 
                  src="/fulfilling-hearts-logo.svg" 
                  alt="Fulfilling Hearts Rescue Logo" 
                  className="h-12 w-auto bg-white p-2 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <Layout298 
        tagline="How It Works"
        heading="Simple Process, Big Impact"
        description="Our Cardboard Box Program creates value for businesses, residents, and local animal rescue"
        sections={[
          {
            icon: <HugeiconsIcon icon={CheckmarkSquare01Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Businesses Donate Boxes",
            description: "Local businesses with excess inventory boxes donate them to us, reducing their recycling costs"
          },
          {
            icon: <HugeiconsIcon icon={SecurityIcon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "We Sort & Store",
            description: "Boxes are sorted by size and stored securely at our facility until needed"
          },
          {
            icon: <HugeiconsIcon icon={MessageUnlock01Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Free for Residents",
            description: "Greater Moncton residents can pick up free boxes for moving and organizing projects"
          },
          {
            icon: <HugeiconsIcon icon={Video02Icon} size={32} color="currentColor" strokeWidth={1.5} />,
            heading: "Proceeds to Rescue",
            description: "All donations from the program go directly to Fulfilling Hearts Rescue"
          }
        ]}
        buttons={[
          { title: "Contact About CBP", variant: "primary", onClick: () => window.location.href = "mailto:Sales@TightandCompact.ca" }
        ]}
        className="bg-background-secondary"
      />

      {/* About Fulfilling Hearts */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">About Fulfilling Hearts Rescue</h2>
            <p className="text-gray-black-500 md:text-md mb-8">
              An all-breed dog rescue based in Moncton, NB, dedicated to rescuing neglected, abandoned, and injured dogs. Their mission: "Speaking Out for Those Who Cannot Speak for Themselves."
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Get Involved</h2>
            <p className="text-gray-black-500 md:text-md mb-8">
              Support the Cardboard Box Program and help local dog rescue in multiple ways.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold">Business with Boxes?</h3>
                <p className="text-gray-black-500">Donate your excess inventory boxes and reduce recycling costs while supporting a good cause</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold">Need Moving Boxes?</h3>
                <p className="text-gray-black-500">Pick up free boxes from our program and make a donation to Fulfilling Hearts Rescue</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold">Visit Fulfilling Hearts</h3>
                <p className="text-gray-black-500">Learn about adoption, fostering, or direct donations to support their rescue work</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = "mailto:Sales@TightandCompact.ca"}
                className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-black-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Contact About CBP
              </button>
              <button 
                onClick={() => window.open("https://www.fulfillinghearts.ca/", "_blank")}
                className="rounded-md border border-gray-black-300 px-6 py-3 text-black transition-colors hover:bg-gray-black-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Visit Fulfilling Hearts
              </button>
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