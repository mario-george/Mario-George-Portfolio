import Link from "next/link";
// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Image gallery",
          path: "/projects/imageGallery.png",
          link: "https://image-gallery-orcin-nine.vercel.app/",
        },
        {
          title: "Pricing Cards",
          path: "/projects/pricingCards.png",
          link: "https://pricing-cards.vercel.app/",
        },
        {
          title: "Product Modal",
          path: "/projects/productModal.png",
          link: "https://product-modal-tailwind-css.vercel.app/",
        },
        {
          title: "Ecommerce",
          path: "/projects/ecommerceCourses.png",
          link: "https://ecommerce-courses-roan.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "React Meal App",
          path: "/projects/reactMealApp.png",
          link: "https://react-meal-app-nine.vercel.app/",
        },
        {
          title: "Meetups App with Next",
          path: "/projects/MeetupsNext.png",
          link: "https://meetups-next-red.vercel.app/",
        },
        // {
        //   title: "NARQA",
        //   path: "/NARQA.jpg",
        // },
        {
          title: "Product Modal",
          path: "/projects/productModal.png",
          link: "https://product-modal-tailwind-css.vercel.app/ ",
        },
        {
          title: "Email Subscribe",
          path: "/projects/emailSubscribe.png",
          link: "https://email-subscribe-ruddy.vercel.app/",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.link} passHref legacyBehavior>
                    <a
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group noopener noreferrer"
                      key={index}
                      target="_blank"
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}

                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          className="max-w-[500px] max-h-[300px]"
                          alt=""
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">Open</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Project
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
