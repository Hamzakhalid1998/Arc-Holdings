// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ImageSlider = ({
  slides = [],
  height = "h-64",
  rounded = "rounded-xl",
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}" style="background-color: orange;"></span>`,
      }}
      className={`${rounded} overflow-hidden`}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx} className="flex justify-center">
          <div
            className={`${height} w-full ${rounded} bg-cover bg-center shadow-lg overflow-hidden relative`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            {slide.title && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold text-center px-2">
                {slide.title}
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
