import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

import "../styles/Carousel.css"; 
import france from "../assets/france.png";
import italy from "../assets/italy.png";
import mexico from "../assets/mexico.png";


export default function TravelCarousel() {
  const travelImages = [france, italy, mexico];

  return (
    <section className="max-w-4xl mx-auto mt-20 px-4">
      <h2 className="text-2xl font-semibold text-[#005DAA] text-center mb-6">
        My Travel Gallery
      </h2>

      <div className="relative max-w-xs mx-auto">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          showIndicators={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-black text-3xl p-2 rounded-full shadow hover:bg-white transition-all"
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 text-black text-3xl p-2 rounded-full shadow hover:bg-white transition-all"
              >
                ›
              </button>
            )
          }
        >
          {travelImages.map((src, index) => (
            <div key={index} className="relative flex justify-center">
              <img
                src={src}
                alt={`Travel photo ${index + 1}`}
                className="w-72 h-96 object-cover rounded-2xl"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
