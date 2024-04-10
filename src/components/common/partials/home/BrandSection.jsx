import React from "react";
import Reveal from "react-awesome-reveal";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { fadeIn } from "@/utils/data/keyframes";

function BrandSection() {
  return (
    <Reveal keyframes={fadeIn} duration={1200} delay={300} triggerOnce>
      <section className="mt-2 pb-6 pt-10 pb-md-10">
        <h2 className="title d-none">Our Brand</h2>

        <div className="container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            noSwipingClass="slide-visible"
            watchSlidesProgress={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {new Array(6).fill(1).map((item, index) => (
              <SwiperSlide key={index}>
                <figure>
                  <img
                    src={`./images/brands/${index + 1}.png`}
                    alt="Brand"
                    width="180"
                    height="100"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Reveal>
  );
}

export default React.memo(BrandSection);
