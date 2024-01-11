import Link from "next/link";
// work slider data
import { FaCode, FaEye } from "react-icons/fa6";

export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Places Full Stack Website",
          path: "/projects/placesProject.png",
          demoLink: "https://places-project-front.vercel.app/",
          githubLink: "https://github.com/mario-george/places-project-front",
        },
        {
          title: "Meetups App with Next",
          path: "/projects/MeetupsNext.png",
          demoLink: "https://meetups-next-red.vercel.app/",
          githubLink: "https://github.com/mario-george/MeetupsNext.JS",
        },
        {
          title: "Ecommerce",
          path: "/projects/ecommerceCourses.png",
          demoLink: "https://ecommerce-courses-roan.vercel.app/",
          githubLink: "https://github.com/mario-george/Ecommerce-Courses",
        },
        {
          title: "Image gallery",
          path: "/projects/imageGallery.png",
          demoLink: "https://image-gallery-orcin-nine.vercel.app/",
          githubLink: "https://github.com/mario-george/Image-Gallery",
        },
      ],
    },
    {
      images: [
        {
          title: "Pricing Cards",
          path: "/projects/pricingCards.png",
          demoLink: "https://pricing-cards.vercel.app/",
          githubLink: "https://github.com/mario-george/Pricing-Cards",
        },
        {
          title: "Product Modal",
          path: "/projects/productModal.png",
          demoLink: "https://product-modal-tailwind-css.vercel.app/",
          githubLink:
            "https://github.com/mario-george/product-modal-TailwindCSS",
        },

        {
          title: "Email Subscribe",
          path: "/projects/emailSubscribe.png",
          demoLink: "https://email-subscribe-ruddy.vercel.app/",
          githubLink: "https://github.com/mario-george/Email-Subscribe",
        },
        {
          title: "React Meal App",
          path: "/projects/reactMealApp.png",
          demoLink: "https://react-meal-app-nine.vercel.app/",
          githubLink: "https://github.com/mario-george/react-meal-app",
        },
      ],
    },
    {
      images: [
        {
          title: "NARQA",
          path: "/projects/narqa-logo.png",
          demoLink: "https://github.com/mario-george/NARS",
          githubLink: "https://github.com/mario-george/NARS",
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
                  <div
                    key={index}
    
                  >
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
          
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-500 opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center  text-[13px] tracking-[0.2em] space-x-12">
                            {/* title part 1 */}
                            <Link
                              key={index}
                              href={image.githubLink}
                              passHref
                              legacyBehavior
                            >
                              <a
                                className=" noopener noreferrer"
                                key={index}
                                target="_blank"
                              >
                                {" "}
                                <div className=" text-4xl delay-100  duration-100 hover:scale-125 transition-all">
                                  <FaCode />
                                </div>
                              </a>
                            </Link>
                            {/* title part 2 */}
                            <Link
                              key={index}
                              href={image.demoLink}
                              passHref
                              legacyBehavior
                            >
                              <a
                                className="noopener noreferrer"
                                key={index}
                                target="_blank"
                              >
                                <div className="rounded-full text-4xl translate-y-[500%] group-hover:translate-y-0 transition-all delay-150 duration-100 hover:scale-125">
                                  <FaEye />
                                </div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
