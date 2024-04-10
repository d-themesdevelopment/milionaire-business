import React from "react";
import Reveal from "react-awesome-reveal";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import PostEight from "@/components/features/blogs/PostEight";

import { fadeIn, fadeInRightShorter } from "@/utils/data/keyframes";

function BlogSection() {
  const posts = [
    {
      slug: "1",
      title: "The best island to visit in the Caribbean",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.",
      imgUrl: "blog1.jpg",
    },
    {
      slug: "2",
      title: "The best island to visit in the Caribbean",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.",
      imgUrl: "blog2.jpg",
    },
    {
      slug: "3",
      title: "The best island to visit in the Caribbean",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.",
      imgUrl: "blog3.jpg",
    },
  ];

  return (
    <section className="blog-post-wrapper mt-6 mt-md-10 pt-7">
      <Reveal keyframes={fadeIn} duration={1000} triggerOnce>
        <div className="container">
          <h2 className="title title-center">Featured Articles</h2>

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
                slidesPerView: 3,
              },
            }}
          >
            {posts && posts.length
              ? posts.map((post, index) => (
                  <SwiperSlide key={"post-eight" + index}>
                    <div className="blog-post mb-4">
                      <PostEight post={post} adClass="overlay-zoom" />
                    </div>
                  </SwiperSlide>
                ))
              : ""}
          </Swiper>
        </div>
      </Reveal>
    </section>
  );
}

export default React.memo(BlogSection);
