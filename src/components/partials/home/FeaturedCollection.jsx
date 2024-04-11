import React from "react";
import Reveal from "react-awesome-reveal";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductTwo from "@/components/features/products/ProductTwo";
import { fadeIn } from "@/utils/data/keyframes";

function FeaturedCollection() {
  const products = [
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product4.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product3.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product2.jpg",
    },
    {
      slug: "moka-star",
      title: "Moka Star",
      categories: [
        {
          name: "MEDITERRANEAN",
          slug: "1",
        },
        {
          name: "CARIBBEAN",
          slug: "2",
        },
      ],
      price: 8500,
      ratings: 5,
      is_new: true,
      imgUrl: "product1.jpg",
    },
  ];

  return (
    <Reveal keyframes={fadeIn} delay={300} duration={1200} triggerOnce>
      <section className="product-wrapper container mt-6 mt-md-10 pt-4 pb-8">
        <h2 className="title title-center mb-5">Our Featured</h2>

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
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {products &&
            products.map((item, index) => (
              <SwiperSlide key={`top-selling-product ${index}`}>
                <ProductTwo product={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </Reveal>
  );
}

export default React.memo(FeaturedCollection);
