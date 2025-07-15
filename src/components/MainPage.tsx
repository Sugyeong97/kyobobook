import Image from "next/image";
import UnorderedListItem from "./atom/UnorderedListItem";
import MainSwiperImage from "./molecules/MainSwiperImage";
import Link from "next/link";
import WelcomeMarketingList from "./organism/WelcomeMarketingList";

export default function MainPage() {
  const ListItemArray = ["베스트", "신상품", "이벤트"];

  return (
    <main className="flex flex-col gap-5">
      {/* 로고 + 검색 + 장바구니 + 사용자 */}
      <div className="mx-auto max-w-[1200px] xl:h-[130px] flex items-center justify-between xl:flex-row lg:flex-col lg:h-fit lg:py-5 lg:gap-5">
        {/* 로고 */}
        <Link
          href={`/`}
          className="w-[250px] h-full flex items-center justify-start"
        >
          <Image
            src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/united/logo_book.svg"
            alt="로고"
            className="w-[200px] hover:cursor-pointer"
            width={250}
            height={250}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>

        {/* 검색영역 */}
        <div className="w-[560px] h-[50px] px-7 bg-white border rounded-[50px] border-[#D9D9D9] flex items-center justify-between">
          <div className="w-fit h-full flex items-center justify-center">
            <div className="hover:cursor-pointer">통합검색</div>
            {/* 아래화살표 */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 w-fit px-2 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            <div>|</div>
          </div>

          {/* 검색창 */}
          <div className="w-[380px] h-full hover:cursor-text"></div>

          {/* 돋보기 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>

        {/* 장바구니, 사용자 */}
        <div className="flex items-center justify-center gap-5">
          {/* 장바구니 */}
          <Link href={"/header/search-area/shop-basket"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          {/* 사용자 */}
          <Link href={"/header/search-area/user-info"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* 상단 메뉴 */}
      <div className="mx-auto w-full xl:max-w-[1200px] lg:max-w-[888px] h-[70px] flex items-center justify-start gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <ul className="flex items-center justify-center gap-7">
          <li className="font-bold text-[#3C9A17] hover:cursor-pointer">
            책의 날 특집
          </li>
          {ListItemArray.map((item, index) => (
            <UnorderedListItem key={index} title={item} />
          ))}
        </ul>
      </div>

      {/* 슬라이드 및 광고 */}
      <div className="mx-auto xl:max-w-[1200px] h-[380px] flex items-center justify-between gap-5 xl:flex-row lg:flex-col lg:h-fit">
        {/* 슬라이드 */}
        <div className="w-[888px] h-full">
          <MainSwiperImage />
        </div>
        <div className="w-[300px] h-[380px] rounded border border-[#D9D9D9] "></div>
      </div>

      {/* 하단 메뉴 */}
      <div className="mx-auto xl:max-w-[1200px] lg:max-w-[888px] h-fit xl:py-5 gap-5 flex xl:flex-row lg:flex-col items-center justify-between">
        <WelcomeMarketingList />
        <div className="w-[300px] h-[100px] rounded">
          <Image width={300} height={100} src={`/ad_attendance.jpg`} alt="" />
        </div>
      </div>
    </main>
  );
}
