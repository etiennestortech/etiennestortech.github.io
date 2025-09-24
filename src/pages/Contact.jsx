import { Navbar1 } from "../components/navbars/Navbar1";
import { Header54 } from "../components/heroes/Header54";
import { Footer12 } from "../components/footers/Footer12";

export const Contact = () => {
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

      {/* Contact Hero Header */}
      <Header54 
        heading="Contact Us"
        description="Get in touch with us for storage solutions, support, or to reserve your unit for our Fall 2025 opening."
        image={{
          src: "/tc-truck.jpg",
          alt: "Tight & Compact Storage contact and support"
        }}
      />

      {/* Contact Page Content */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-20">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-md border border-gray-black-200 px-3 py-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-md border border-gray-black-200 px-3 py-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-black-200 px-3 py-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border border-gray-black-200 px-3 py-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-md border border-gray-black-200 px-3 py-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="">Select a subject</option>
                    <option value="unit-rental">Unit Rental Inquiry</option>
                    <option value="moving-truck">Moving Truck Service</option>
                    <option value="business-storage">Business Storage Solutions</option>
                    <option value="support">Customer Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-md border border-gray-black-200 px-3 py-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-black-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Get in touch</h2>
              <div className="space-y-8">
                
                {/* Phone */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                  <p className="text-gray-black-500">
                    <a href="tel:506-252-8751" className="hover:text-black transition-colors">
                      (506) 252-8751
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Email</h3>
                  <p className="text-gray-black-500">
                    <a href="mailto:info@tightandcompact.ca" className="hover:text-black transition-colors">
                      info@tightandcompact.ca
                    </a>
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Address</h3>
                  <p className="text-gray-black-500">
                    123 Storage Street<br />
                    Moncton, NB E1C 1A1<br />
                    Canada
                  </p>
                </div>

                {/* Gate Hours */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Gate Access Hours</h3>
                  <div className="text-gray-black-500 space-y-1">
                    <p>24/7 Access Available</p>
                    <p className="text-sm">Secure keypad entry allows access anytime</p>
                  </div>
                </div>

                {/* Phone Support Hours */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Phone Support Hours</h3>
                  <div className="text-gray-black-500 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                    <p className="text-sm mt-2">Emergency support available 24/7</p>
                  </div>
                </div>


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