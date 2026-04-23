import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.css";
export const slides = [
  "public/pic1.png",
  "public/pic2.png",
  "public/cave4.jpg",
  "public/sea5.jpg",
  "public/sea6.jpg",
];

export default function Carousel() {
  return (
    // <div className="carousel-wrapper">
    //   <Swiper
    //     effect="coverflow"
    //     // grabCursor={true}
    //     centeredSlides={true}
    //     slidesPerView="auto"
    //     loop={true}
    //     pagination={{ clickable: true }}
    //     modules={[EffectCoverflow, Pagination]}
    //     className="mySwiper"
    //   >
    //     {slides.map((img, index) => (
    //       <SwiperSlide
    //         key={`slide-${img}-${index}`}
    //         className="slide"
    //         style={{ width: 200, height: 200 }}
    //       >
    //         <img src={img} alt={`slide-${index}`} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>

      <div className="carousel-wrapper">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index} className="slide">
            <span className="slide-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
