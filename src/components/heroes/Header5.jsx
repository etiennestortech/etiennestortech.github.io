import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline?: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header5 = (props: Header5Props) => {
  const { tagline, heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-[75vh] items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            {tagline && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-alternative md:mb-4">
                {tagline}
              </p>
            )}
            <h1 className="mb-5 text-7xl font-bold text-text-alternative md:mb-6 md:text-10xl lg:text-11xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="w-full h-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header5Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};