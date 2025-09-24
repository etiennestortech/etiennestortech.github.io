import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

// Using inline SVG to avoid react-icons issues
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps | React.ReactNode;
  paragraph: string;
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout16 = (props: Layout16Props) => {
  const { tagline, heading, description, features, buttons, image, className, ...rest } = {
    ...Layout16Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`} {...rest}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="mb-5 text-base text-gray-black-500 md:mb-6 md:text-md">{description}</p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    {typeof feature.icon === 'object' && feature.icon.src ? (
                      <img src={feature.icon.src} alt={feature.icon.alt} className="w-6 h-6" />
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center text-current">
                        {feature.icon}
                      </div>
                    )}
                  </div>
                  <span className="text-gray-black-500">{feature.paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="h-full">
            <img src={image.src} className="w-full h-full object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout16Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  features: [
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};