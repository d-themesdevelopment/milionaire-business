import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";

const MediaOne = () => {
  return (
    <>
      <div
        className="product-gallery pg-vertical media-default"
        style={{ top: "88px", justifyContent: "end" }}
      >
        <div className="product-single-carousel owl-theme owl-nav-inner">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            noSwipingClass="slide-visible"
            watchSlidesProgress={true}
          >
            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-1.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-5.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className="product-thumbs-wrap product-thumbs-one d-none d-lg-block"
          style={{ maxHeight: "460px" }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            direction="vertical"
            autoHeight={true}
            grabCursor={false}
          >
            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-1.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-2.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-3.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-5.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        <div
          className="product-thumbs-wrap product-thumbs-one d-lg-none"
          style={{ maxHeight: "460px" }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
          >
            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-1.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-2.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-3.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <figure>
                  <LazyLoadImage
                    src="./images/slides/slide-5.jpg"
                    alt="Intro Slider"
                    effect="opacity"
                    width="auto"
                    height={630}
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MediaOne;
