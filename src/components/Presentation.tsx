const SLIDE_COUNT = 25;

const Presentation = () => {
  const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => {
    const n = i + 1;
    return {
      id: n,
      src: `/Apresentação/Slide${n}.PNG`,
      alt: `Slide ${n}`,
    };
  });

  return (
    <section id="presentation" aria-label="Apresentação CRX Capital">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="relative h-screen w-full bg-white flex items-center justify-center"
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full w-full object-contain"
            loading={slide.id <= 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}
    </section>
  );
};

export default Presentation;

