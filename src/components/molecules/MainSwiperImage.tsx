"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { main_slide_img } from "@/contexts/VariousList";

export default function MainSwiperImage() {
  const modules = [Autoplay, Pagination, Navigation, EffectFade];

  return (
    <div className="w-[888px] h-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={modules}
        style={
          {
            width: "100%",
            height: "100%",
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
      >
        {main_slide_img.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.imageSrc}
              width={888}
              height={380}
              className="rounded-[10px]"
              alt={item.imageAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
