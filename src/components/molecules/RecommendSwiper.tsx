"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function RecommendSwiper() {
  const modules = [Autoplay, Pagination, Navigation];

  const image = [
    {
      id: 1,
      title: "네버라이",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9788984374973.jpg",
    },
    {
      id: 2,
      title: "고백",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9788992036962.jpg",
    },
    {
      id: 3,
      title: "매듭의 끝",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791167903068.jpg",
    },
    {
      id: 4,
      title: "죽은 자에게 입이 있다",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791170525929.jpg",
    },
    {
      id: 5,
      title: "당신은 누군가를 죽였다",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791170611561.jpg",
    },
    {
      id: 6,
      title: "가공범",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791170612759.jpg",
    },
    {
      id: 7,
      title: "고독한 용의자",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791171713608.jpg",
    },
    {
      id: 8,
      title: "하우스 메이드",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791190157551.jpg",
    },
    {
      id: 9,
      title: "귀신 저택",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791192313764.jpg",
    },
    {
      id: 10,
      title: "지뢰 글리코",
      imageSrc: "/MAIN_IMAGE/mysteryRecommend/9791192738529.jpg",
    },
  ];

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
        {image.map((item) => (
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
