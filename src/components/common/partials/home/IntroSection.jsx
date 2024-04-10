import React from "react";
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// import Custom Components
import ALink from "@/components/features/CustomLink";

import {
  fadeInUpShorter,
  fadeInRightShorter,
  fadeIn,
  fadeInUp,
  fadeInRight,
} from "@/utils/data/keyframes";

function IntroSection(props) {
  return (
    <>
      <div className="intro-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          noSwipingClass="slide-visible"
          watchSlidesProgress={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div
              className="banner banner-fixed intro-slide1"
              style={{ backgroundColor: "#46b2e8" }}
            >
              <figure>
                <LazyLoadImage
                  src="./images/slides/slide-1.jpg"
                  alt="Intro Slider"
                  effect="opacity"
                  width="auto"
                  height={630}
                />
              </figure>

              <div className="container">
                <div className="banner-content y-50">
                  <h4 className="banner-subtitle font-weight-bold ls-l d-flex align-items-center">
                    <Reveal
                      keyframes={fadeInRightShorter}
                      delay={200}
                      duration={1000}
                    >
                      <span className="d-inline-block">Buy 2 Get</span>
                    </Reveal>

                    <Reveal
                      keyframes={fadeInRightShorter}
                      delay={400}
                      duration={1000}
                    >
                      <span className="d-inline-block label-star bg-white text-primary">
                        1 Free
                      </span>
                    </Reveal>
                  </h4>

                  <Reveal
                    keyframes={fadeInUpShorter}
                    delay={1000}
                    duration={1200}
                  >
                    <h2 className="banner-title font-weight-bold text-white lh-1 ls-md">
                      Fashionable
                    </h2>

                    <h3 className="font-weight-normal lh-1 ls-l text-white">
                      Collection
                    </h3>

                    <p className="text-white ls-s mb-7">
                      Get Free Shipping on all orders over $99.00
                    </p>
                  </Reveal>

                  <Reveal
                    keyframes={fadeInUpShorter}
                    delay={1800}
                    duration={1000}
                  >
                    <ALink href="/shop" className="btn btn-dark btn-rounded">
                      Shop Now<i className="d-icon-arrow-right"></i>
                    </ALink>
                  </Reveal>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="banner banner-fixed intro-slide2"
              style={{ backgroundColor: "#dddee0" }}
            >
              <figure>
                <LazyLoadImage
                  src="./images/slides/slide-5.jpg"
                  alt="Intro Slider"
                  effect="opacity"
                  width="auto"
                  height={630}
                />
              </figure>

              <div className="container">
                <div className="banner-content y-50 ml-auto text-right">
                  <Reveal keyframes={fadeInUp} delay={200} duration={700}>
                    <h4 className="banner-subtitle ls-s mb-1">
                      <span className="d-block text-uppercase mb-2">
                        Coming soon
                      </span>

                      <strong className="font-weight-semi-bold text-white ls-m">
                        Birthday
                      </strong>
                    </h4>
                  </Reveal>

                  <Reveal keyframes={fadeInRight} delay={500} duration={1200}>
                    <h2 className="banner-title mb-2 d-inline-block font-weight-bold text-primary">
                      Sale
                    </h2>
                  </Reveal>

                  <Reveal keyframes={fadeInUp} delay={1200} duration={1000}>
                    <p className="font-primary ls-s text-white mb-4">
                      Up to 70% off on all products <br />
                      online &amp; Free Shipping over $90
                    </p>
                  </Reveal>

                  <Reveal keyframes={fadeInUp} delay={1400} duration={1000}>
                    <ALink href="/shop" className="btn btn-dark btn-rounded">
                      Shop Now<i className="d-icon-arrow-right"></i>
                    </ALink>
                  </Reveal>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default React.memo(IntroSection);
