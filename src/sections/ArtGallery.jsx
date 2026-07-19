import React from "react";

const ArtGallery = () => {
  const artworks = [
    {
      image: "/Arts/image 1.jpeg",
      alt: "Portrait sketch",
    },
    {
      image: "/Arts/image 2.jpeg",
      alt: "Landscape painting",
    },
    {
      image: "/Arts/image 3.jpeg",
      alt: "Charcoal drawing",
    },
    {
      image: "/Arts/image 4.jpeg",
      alt: "Abstract artwork",
    },
    {
      image: "/Arts/image 5.jpeg",
      alt: "Still life painting",
    },
    {
      image: "/Arts/image 6.jpeg",
      alt: "Pencil illustration",
    },
  ];
  return (
    <section id="artgallery" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase">
            ARTWORK
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-6 text-secondary-foreground">
            Creativity beyond
            <span className="font-serif italic font-normal text-white">
              {" "}
              professional work.
            </span>
          </h2>

          <p className="text-muted-foreground leading-8">
            A small collection of sketches, paintings, and personal artwork
            created as a creative outlet and exploration of visual expression.
          </p>
        </div>

        {/* Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artworks.map((art, index) => (
            <figure
              key={index}
              className="
        break-inside-avoid
        overflow-hidden
        rounded-2xl
        glass
        group
        cursor-pointer
      "
            >
              <img
                src={art.image}
                alt={art.alt}
                loading="lazy"
                className="
          w-full
          transition-transform
          duration-500
          group-hover:scale-105
        "
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
