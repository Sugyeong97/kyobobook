"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function RecommendSwiper() {
  const modules = [Autoplay, Pagination, Navigation, EffectFade];

  const image = [
    "/mysteryRecommend/9788984374973.jpg",
    "/mysteryRecommend/9788992036962.jpg",
    "/mysteryRecommend/9791167903068.jpg",
    "/mysteryRecommend/9791170525929.jpg",
    "/mysteryRecommend/9791170611561.jpg",
    "/mysteryRecommend/9791170612759.jpg",
    "/mysteryRecommend/9791171713608.jpg",
    "/mysteryRecommend/9791190157551.jpg",
    "/mysteryRecommend/9791192313764.jpg",
    "/mysteryRecommend/9791192738529.jpg",
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        effect="slide"
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
        {image.map((item) => (
          <SwiperSlide>
            <Image alt="" src={item} width={200} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
