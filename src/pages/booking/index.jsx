// import Accordion from "@/components/features/accordion/Accordion";
// import Card from "@/components/features/accordion/Card";
import TestimonialOne from "@/components/features/testimonials/TestimonialOne";
import RelatedBooking from "@/components/partials/Booking/RelatedBooking";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BookingPage = () => {
  const [date, setDate] = useState();

  const handleChangeDate = (date) => {
    setDate(date);
  };

  return (
    <main className="booking mt-6 mb-6">
      <div className="container">
        <div className="product-single row">
          <div className="col-12 col-lg-8">
            <div
              className="shop-banner banner banner-background parallax text-center bg-gradient"
              data-option="{'speed': 4}"
              style={{
                backgroundImage: `url(./images/slides/slide-4.jpg)`,
                backgroundColor: "#313237",
                height: 450,
              }}
            ></div>

            <div className="product-details mt-4">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="product-name">Moka Star</h2>

                <a
                  href="#"
                  className="btn-product btn-wishlist text-right mb-1"
                  title="Add to wishlist"
                >
                  <i className="d-icon-heart"></i>
                </a>
              </div>

              <div className="product-meta">
                SKU: <span className="product-sku">9871236</span>CATEGORIES:{" "}
                <span className="product-brand">
                  <a href="#">Cosmetic</a>
                </span>
              </div>

              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "70%" }}></span>
                  <span className="tooltiptext tooltip-top">3.50</span>
                </div>
                <a class="rating-reviews" href="#">
                  ( 2 reviews )
                </a>
              </div>

              <h5 className="mt-10">About this Activity</h5>
              <div className="row">
                <div className="col-12 col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.71 16.29L12.56 16.17C12.5043 16.1322 12.4437 16.1019 12.38 16.08L12.2 16C12.0378 15.9661 11.8698 15.973 11.7109 16.0201C11.5521 16.0673 11.4074 16.1531 11.29 16.27C11.2017 16.3672 11.1306 16.4788 11.08 16.6C11.0043 16.7822 10.9842 16.9827 11.0223 17.1763C11.0603 17.3699 11.1547 17.5479 11.2937 17.688C11.4327 17.828 11.61 17.9238 11.8033 17.9633C11.9966 18.0028 12.1972 17.9843 12.38 17.91C12.4995 17.852 12.6105 17.778 12.71 17.69C12.8488 17.5494 12.9428 17.3708 12.9801 17.1768C13.0175 16.9828 12.9966 16.7821 12.92 16.6C12.8701 16.4844 12.7989 16.3792 12.71 16.29ZM16 2H8C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V19C5 19.7956 5.31607 20.5587 5.87868 21.1213C6.44129 21.6839 7.20435 22 8 22H16C16.7956 22 17.5587 21.6839 18.1213 21.1213C18.6839 20.5587 19 19.7956 19 19V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2ZM17 19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20H8C7.73478 20 7.48043 19.8946 7.29289 19.7071C7.10536 19.5196 7 19.2652 7 19V5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V19Z"
                        fill="url(#paint0_linear_143_318)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_318"
                          x1="12"
                          y1="2"
                          x2="16"
                          y2="32"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#22ABCC"></stop>
                          <stop offset="1" stop-color="#3FB2A1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    <h6 className="mb-0 ml-1">
                      Present QR code or E-voucher on-site
                    </h6>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <svg
                      fill="#22ABCC"
                      width="24px"
                      height="24px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M441.71 414.154c0-23.138-17.983-41.656-39.864-41.656-21.875 0-39.864 18.522-39.864 41.656s17.989 41.656 39.864 41.656c21.881 0 39.864-18.518 39.864-41.656zm40.96 0c0 45.495-36.048 82.616-80.824 82.616-44.769 0-80.824-37.124-80.824-82.616s36.055-82.616 80.824-82.616c44.776 0 80.824 37.121 80.824 82.616zm176.274 192.62c0-23.138-17.983-41.656-39.864-41.656-21.875 0-39.864 18.522-39.864 41.656s17.989 41.656 39.864 41.656c21.881 0 39.864-18.518 39.864-41.656zm40.96 0c0 45.495-36.048 82.616-80.824 82.616-44.769 0-80.824-37.124-80.824-82.616s36.055-82.616 80.824-82.616c44.776 0 80.824 37.121 80.824 82.616zm-95.515-225.529L363.022 629.79c-7.88 8.114-7.69 21.08.424 28.96s21.08 7.69 28.96-.424l241.367-248.545c7.88-8.114 7.69-21.08-.424-28.96s-21.08-7.69-28.96.424z"
                        stroke="#3FB2A1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="40"
                        fill="url(#paint0_linear_143_319)"
                      ></path>
                      <path
                        d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z"
                        stroke="#3FB2A1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="40"
                        fill="url(#paint0_linear_143_319)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_319"
                          x1="11.9998"
                          y1="1.87714"
                          x2="11.9998"
                          y2="22.1229"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#22ABCC"></stop>
                          <stop offset="1" stop-color="#3FB2A1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    <h6 className="mb-0 ml-1">Price includes VAT</h6>
                  </div>
                </div>

                <div className="col-12 col-md-6 mb-2">
                  <div className="d-flex align-items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7098 8.29002C15.6169 8.19629 15.5063 8.1219 15.3844 8.07113C15.2626 8.02036 15.1318 7.99422 14.9998 7.99422C14.8678 7.99422 14.7371 8.02036 14.6153 8.07113C14.4934 8.1219 14.3828 8.19629 14.2898 8.29002L11.9998 10.59L9.70984 8.29002C9.52153 8.10171 9.26614 7.99593 8.99984 7.99593C8.73353 7.99593 8.47814 8.10171 8.28983 8.29002C8.10153 8.47832 7.99574 8.73372 7.99574 9.00002C7.99574 9.26632 8.10153 9.52171 8.28983 9.71002L10.5898 12L8.28983 14.29C8.19611 14.383 8.12171 14.4936 8.07094 14.6154C8.02017 14.7373 7.99404 14.868 7.99404 15C7.99404 15.132 8.02017 15.2627 8.07094 15.3846C8.12171 15.5065 8.19611 15.6171 8.28983 15.71C8.3828 15.8037 8.4934 15.8781 8.61526 15.9289C8.73712 15.9797 8.86782 16.0058 8.99984 16.0058C9.13185 16.0058 9.26255 15.9797 9.38441 15.9289C9.50627 15.8781 9.61687 15.8037 9.70984 15.71L11.9998 13.41L14.2898 15.71C14.3828 15.8037 14.4934 15.8781 14.6153 15.9289C14.7371 15.9797 14.8678 16.0058 14.9998 16.0058C15.1318 16.0058 15.2626 15.9797 15.3844 15.9289C15.5063 15.8781 15.6169 15.8037 15.7098 15.71C15.8036 15.6171 15.878 15.5065 15.9287 15.3846C15.9795 15.2627 16.0056 15.132 16.0056 15C16.0056 14.868 15.9795 14.7373 15.9287 14.6154C15.878 14.4936 15.8036 14.383 15.7098 14.29L13.4098 12L15.7098 9.71002C15.8036 9.61705 15.878 9.50645 15.9287 9.38459C15.9795 9.26274 16.0056 9.13203 16.0056 9.00002C16.0056 8.86801 15.9795 8.7373 15.9287 8.61544C15.878 8.49358 15.8036 8.38298 15.7098 8.29002ZM19.0698 4.93002C18.1474 3.97492 17.0439 3.21309 15.8239 2.689C14.6038 2.16491 13.2916 1.88905 11.9638 1.87751C10.6361 1.86598 9.31926 2.11899 8.09029 2.6218C6.86133 3.12461 5.74481 3.86714 4.80589 4.80607C3.86696 5.745 3.12443 6.86151 2.62162 8.09048C2.11881 9.31944 1.86579 10.6362 1.87733 11.964C1.88887 13.2918 2.16473 14.604 2.68882 15.8241C3.21291 17.0441 3.97473 18.1476 4.92984 19.07C5.8523 20.0251 6.95575 20.7869 8.17579 21.311C9.39583 21.8351 10.708 22.111 12.0358 22.1225C13.3636 22.1341 14.6804 21.881 15.9094 21.3782C17.1383 20.8754 18.2549 20.1329 19.1938 19.194C20.1327 18.255 20.8752 17.1385 21.3781 15.9096C21.8809 14.6806 22.1339 13.3638 22.1223 12.036C22.1108 10.7082 21.8349 9.39601 21.3109 8.17597C20.7868 6.95593 20.0249 5.85249 19.0698 4.93002ZM17.6598 17.66C16.3519 18.9694 14.6304 19.7848 12.7886 19.9673C10.9469 20.1498 9.09884 19.6881 7.55936 18.6608C6.01987 17.6335 4.88419 16.1042 4.34581 14.3335C3.80742 12.5628 3.89964 10.6602 4.60675 8.9498C5.31386 7.23945 6.59211 5.82717 8.22373 4.95358C9.85534 4.07999 11.7394 3.79915 13.5548 4.15889C15.3703 4.51863 17.0049 5.49671 18.1801 6.92648C19.3553 8.35625 19.9984 10.1493 19.9998 12C20.0034 13.0513 19.7984 14.0929 19.3968 15.0644C18.9951 16.0359 18.4047 16.9182 17.6598 17.66Z"
                        fill="url(#paint0_linear_143_319)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_319"
                          x1="11.9998"
                          y1="1.87714"
                          x2="11.9998"
                          y2="22.1229"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#22ABCC"></stop>
                          <stop offset="1" stop-color="#3FB2A1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    <h6 className="mb-0 ml-1"> No Cancellation</h6>
                  </div>
                </div>
              </div>

              <h5 className="mt-10 mb-1">Overview</h5>
              <p>
                Now you can go with your friends on a boat trip for 6 hours to
                Bayada island on the red sea. This amazing island is a natural
                destination that has attracted tourists for years because of its
                stunning views of the red sea, wonderful sandy beaches, and
                corals with amazing colors. This trip gives you an ideal chance
                to try new activities in Jeddah. Book now!
              </p>

              <h5 className="mt-10">Categories</h5>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="d-flex align-items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="url(#paint0_linear_143_320)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_320"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#22ABCC"></stop>
                          <stop offset="1" stop-color="#3FB2A1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    <h6 className="mb-0 ml-1">Water Activities</h6>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="d-flex align-items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="url(#paint0_linear_143_320)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_320"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#22ABCC"></stop>
                          <stop offset="1" stop-color="#3FB2A1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    <h6 className="mb-0 ml-1">Day Trips</h6>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-2">
                  <div className="d-flex align-items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                        fill="url(#paint0_linear_143_320)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_320"
                          x1="12"
                          y1="2"
                          x2="12"
                          y2="22"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#22ABCC"></stop>
                          <stop offset="1" stop-color="#3FB2A1"></stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    <h6 className="mb-0 ml-1">Outdoor Activities</h6>
                  </div>
                </div>
              </div>

              <div className="booking-form mt-10">
                <h5 className="text-center text-white bg-primary pt-3 pb-3 mb-0">
                  Select Date/Time
                </h5>

                <div className="details">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <p className="mb-2">Select Date of Activity</p>
                      <div className="date-picker">
                        <DatePicker
                          selected={date}
                          onChange={handleChangeDate}
                        />

                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#000"
                              d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <p className="mb-2">Number Of Persons</p>
                      <input
                        type="number"
                        class="form-control"
                        name="number"
                        placeholder="0"
                        fdprocessedid="psa07g"
                        data-listener-added_55e77ef4="true"
                      />
                    </div>

                    <div className="col-12">
                      <p className="mb-2 mt-5">Total Amount</p>

                      <div className="d-flex align-items-center justify-content-between">
                        <div className="price d-flex">
                          <h1 className="mb-0 text-primary">0.00</h1>
                          <h4 className="mb-0 text-primary ml-1">USD</h4>
                        </div>

                        <div className="d-flex align-items-center">
                          <a
                            class="btn btn-yellow text-white btn-rounded mr-2 ml-3"
                            href="#"
                          >
                            Add to Cart
                          </a>

                          <a
                            class="btn btn-red text-white btn-rounded"
                            href="#"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="mt-10 mb-3">Highly recommended by customers</h5>
              <div className="ratings-container">
                <div class="rating-reviews d-flex align-items-center mr-2">
                  <h4 className="mb-0 mr-1 text-red">4.8</h4>
                  <p className="mb-0"> / 5.0</p>
                </div>

                <div className="rating-bg ratings-full">
                  <span className="ratings" style={{ width: "70%" }}></span>
                  <span className="tooltiptext tooltip-top">3.50</span>
                </div>
              </div>

              <h6 className="mb-3">View All 63 Reviews</h6>

              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                noSwipingClass="slide-visible"
                watchSlidesProgress={true}
                autoplay={{
                  delay: 3000,
                }}
                loop={true}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {new Array(4).fill().map((item, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialOne />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-10 "></div>
              {/* <Accordion adClass="accordion-simple">
                <Card
                  title="Activities you can do on Bayda island:"
                  adClass="border-no"
                >
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum.
                  </p>
                </Card>

                <Card title="Package includes">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum.
                  </p>
                </Card>

                <Card title="Notes">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum.
                  </p>
                </Card>

                <Card title="Policies">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum.
                  </p>
                </Card>

                <Card title="How to book with Ootlah">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna nibh, viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum.
                  </p>
                </Card>

                <Card title="Location" expanded={true}>
                  <div className="google-map">
                    <img
                      src="./images/map.png"
                      width={761}
                      height={300}
                      alt="Map"
                    />
                    <img
                      src="./images/map-picker.png"
                      className="map-picker"
                      width={36}
                      height={57}
                      alt="Map"
                    />
                  </div>
                </Card>
              </Accordion> */}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="book-box">
              <div className="d-flex align-items-end mb-2">
                <div className="price d-flex">
                  <h2 className="mb-0 text-primary">320.40</h2>
                  <h5 className="mb-0 text-primary ml-1">USD</h5>
                </div>

                <h5 className="mb-2"> / per group</h5>
              </div>

              <a class="btn btn-red text-white btn-rounded" href="#">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <RelatedBooking />
    </main>
  );
};

export default BookingPage;
