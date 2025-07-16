import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface SwiperItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface MySwiperProps {
  items: SwiperItem[];
}

export default function MySwiper({ items }: MySwiperProps) {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
