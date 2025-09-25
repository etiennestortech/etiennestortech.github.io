import { Button } from "@relume_io/relume-ui";

export const Contact10 = (props) => {
  const { image, tagline, heading, description, buttons } = {
    ...Contact10Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <img src={image.src} alt={image.alt} className="size-full object-cover rounded-md" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md mb-6 md:mb-8">{description}</p>
          </div>
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <Button 
                  key={index}
                  variant={button.variant || "primary"}
                  size={button.size || "default"}
                  onClick={button.onClick}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Contact10Defaults = {
  image: {
    src: "https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  tagline: "Tagline",
  heading: "Contact us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { title: "Get Started", variant: "primary" }
  ],
};