import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageSliderProps = {
  images: string[];
};

export function SliderTemplate({images}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


  return (
    <div className="container mx-auto relative w-full overflow-hidden my-12">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full shrink-0"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="mx-auto w-[50%] h-60 sm:h-100 lg:h-150 object-cover border-0 rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          bg-white/80
          hover:bg-white
          rounded-full
          p-2
          shadow-lg
          transition
          cursor-pointer
        "
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          bg-white/80
          hover:bg-white
          rounded-full
          p-2
          shadow-lg
          transition
          cursor-pointer
        "
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div
        className="
          absolute
          bottom-4
          left-1/2
          -translate-x-1/2
          flex
          gap-2
        "
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              h-3 w-3 rounded-full transition
              ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}