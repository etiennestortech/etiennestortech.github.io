import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

// Using inline SVG chevron to avoid dependency issues
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

type CardBaseProps = {
  tagline: string;
  image: ImageProps;
  heading: string;
  description: string;
};

type CardsSmallProps = CardBaseProps & {
  button: ButtonProps;
  logoOverlay?: ImageProps;
};

type CardBigProps = CardBaseProps & {
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  cardsSmall: CardsSmallProps[];
  cardBig: CardBigProps;
};

export type Layout366Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout366 = (props: Layout366Props) => {
  const { tagline, heading, description, cardsSmall, cardBig } = {
    ...Layout366Defaults,
    ...props,
  };
  return (
    <section id="relume" className="bg-background-secondary px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="text-gray-black-500 md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            <div className="order-first flex flex-col items-stretch border border-gray-black-200 bg-white lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
              <div>
                <img
                  src={cardBig.image.src}
                  alt={cardBig.image.alt}
                  className="w-full object-cover"
                />
              </div>
              <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-semibold">{cardBig.tagline}</p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    {cardBig.heading}
                  </h3>
                  <p className="text-gray-black-500">{cardBig.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  {cardBig.buttons.map((button, index) => (
                    <Button key={index} {...button}>
                      {button.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            {cardsSmall.map((card, index) => (
              <div
                key={index}
                className="order-last flex flex-col border border-gray-black-200 bg-white md:grid md:grid-cols-2 lg:order-none"
              >
                <div className="flex w-full items-center justify-center relative">
                  <img src={card.image.src} alt={card.image.alt} className="w-full h-full object-cover" />
                  {card.logoOverlay && (
                    <div className="absolute inset-0 flex items-end justify-center pb-4">
                      <img 
                        src={card.logoOverlay.src} 
                        alt={card.logoOverlay.alt} 
                        className="w-32 h-auto drop-shadow-lg"
                      />
                    </div>
                  )}
                </div>
                <div className="block flex-col justify-center p-6 md:flex">
                  <div>
                    <p className="mb-2 font-semibold">{card.tagline}</p>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">{card.heading}</h3>
                    <p className="text-gray-black-500">{card.description}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-4 md:mt-6">
                    <Button {...card.button}>{card.button.title}</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout366Defaults: Props = {
  tagline: "Tagline",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cardsSmall: [
    {
      tagline: "Tagline",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg",
        alt: "Relume placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
    {
      tagline: "Tagline",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg",
        alt: "Relume placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    },
  ],
  cardBig: {
    tagline: "Tagline",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: "Relume placeholder image 3",
    },
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [
      { title: "Button", variant: "secondary" },
      {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight />,
      },
    ],
  },
};