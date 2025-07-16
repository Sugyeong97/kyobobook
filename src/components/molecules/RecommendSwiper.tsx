"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { main_mystery_image } from "@/contexts/VariousList";

export default function RecommendSwiper() {
  const modules = [Autoplay, Pagination, Navigation];

  return (
    <section className="w-full h-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="slide"
        modules={modules}
        style={
          {
            width: "100%",
            height: "100%",
            paddingLeft: "100px",
            paddingBottom: "50px",
            "--swiper-navigation-color": "#6db329",
            "--swiper-pagination-color": "#6db329",
          } as React.CSSProperties
        }
      >
        {main_mystery_image.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full flex flex-col items-center">
              <div className="w-[200px] h-[300px]">
                <Image
                  alt=""
                  src={item.imageSrc}
                  layout="fill"
                  objectFit="fill"
                />
              </div>
              <span>{item.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
