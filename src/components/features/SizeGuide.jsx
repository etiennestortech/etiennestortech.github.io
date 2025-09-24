import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

// Using SVG chevron to match existing approach
const ChevronRight = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M6 4L10 8L6 12" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

type ImageProps = {
  src: string;
  alt?: string;
};

type UnitSize = {
  icon: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: UnitSize[];
};

export type SizeGuideProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const SizeGuide = (props: SizeGuideProps) => {
  const { tagline, heading, description, featureSections } = {
    ...SizeGuideDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {featureSections.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = (featureSection: UnitSize) => {
  return (
    <div className="flex flex-col justify-center border border-border-primary p-6">
      <div className="mb-3 md:mb-4">
        <img src={featureSection.icon.src} className="w-12 h-12" alt={featureSection.icon.alt} />
      </div>
      <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">{featureSection.heading}</h3>
      <p>{featureSection.description}</p>
      <div className="mt-5 md:mt-6">
        <Button {...featureSection.button}>{featureSection.button.title}</Button>
      </div>
    </div>
  );
};

export const SizeGuideDefaults: Props = {
  tagline: "Storage Solutions",
  heading: "Find Your Perfect Size",
  description: "Choose from our range of storage units designed to fit your specific needs.",
  featureSections: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Small unit icon",
      },
      heading: "Small Units",
      description: "Perfect for seasonal items, holiday decorations, small furniture, boxes and files, sports equipment.",
      button: {
        title: "View Sizes",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Medium unit icon",
      },
      heading: "Medium Units",
      description: "Ideal for 1-bedroom apartment contents, appliances, mattress & furniture, multiple boxes, exercise equipment.",
      button: {
        title: "View Sizes",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Large unit icon",
      },
      heading: "Large Units",
      description: "Great for 2-3 bedroom home contents, car or boat storage, large appliances, business inventory, construction tools.",
      button: {
        title: "View Sizes",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Extra large unit icon",
      },
      heading: "Extra Large Units",
      description: "Perfect for 4+ bedroom home contents, multiple vehicles, commercial inventory, large machinery, entire business contents.",
      button: {
        title: "View Sizes",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
};