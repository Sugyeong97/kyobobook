import Image from "next/image";
import UnorderedListItem from "./atom/UnorderedListItem";
import MainSwiperImage from "./molecules/MainSwiperImage";
import Link from "next/link";
import RecommendSwiper from "./molecules/RecommendSwiper";
import WelcomeMarketingGroup from "./organism/WelcomeMarketingList";

export default function MainPage() {
  const ListItemArray = ["베스트", "신상품", "이벤트"];

  return (
    <main className="flex flex-col gap-5">
      {/* 로고 + 검색 + 장바구니 + 사용자 */}
      <section className="mx-auto max-w-[1200px] xl:h-[130px] flex items-center justify-between xl:flex-row lg:flex-col lg:h-fit lg:py-5 lg:gap-5">
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
      </section>

      {/* 상단 메뉴 */}
      <section className="w-full mx-auto xl:max-w-[1200px] lg:max-w-[888px] h-[70px] flex items-center justify-start gap-10">
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
      </section>

      {/* 슬라이드 및 광고 */}
      <section className="mx-auto xl:max-w-[1200px] h-[380px] flex items-center justify-between gap-5 xl:flex-row lg:flex-col lg:h-fit">
        {/* 슬라이드 */}
        <MainSwiperImage />
        <div className="w-[300px] h-[380px] rounded border border-[#D9D9D9] "></div>
      </section>

      {/* 하단 메뉴 */}
      <section className="mx-auto xl:max-w-[1200px] lg:max-w-[888px] h-fit xl:py-5 gap-5 flex xl:flex-row lg:flex-col items-center justify-between">
        <WelcomeMarketingGroup />
        <div>
          <Image
            width={300}
            height={100}
            src={`/MAIN_IMAGE/ad_attendance.jpg`}
            alt=""
            className="rounded"
          />
        </div>
      </section>

      {/* 오늘의 선택 */}
      <section className="w-full mx-auto xl:max-w-[1200px] py-5 my-10">
        <p className="text-3xl font-bold mb-7">오늘의 선택</p>
        <div className="flex">
          <Link href={"/"}>
            <Image
              alt=""
              src={"/MAIN_IMAGE/9791171714179.jpg"}
              width={200}
              height={300}
            />
          </Link>
          <div className="flex flex-col gap-3 p-10">
            <Link href="/" className="mb-7 text-xl font-semibold">
              법은 어떻게 민주주의를 배신하는가
            </Link>
            <div className="flex gap-1 text-blue-800 font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
              <span>우리가 법을 믿지 못할 때 필요한 시민 수업</span>
            </div>
            <div>
              <p>
                세계적 헌법 학자가 설명하는 우리가 법을 믿지 못할 때 필요한 시민
                수업. <br />
                법에만 의존하지 않고 나아가 문제 해결의 주체로서 올바른 시민이
                되는 법을 전한다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 중간광고 */}
      <section className="w-full mx-auto xl:max-w-[1200px] flex gap-5">
        <Link href={"/"}>
          <Image
            alt=""
            src={"/MAIN_IMAGE/main_mid_ad1.png"}
            width={595}
            height={180}
            className="rounded"
          />
        </Link>

        <Link href={"/"}>
          <Image
            alt=""
            src={"/MAIN_IMAGE/main_mid_ad2.png"}
            width={595}
            height={180}
            className="rounded"
          />
        </Link>
      </section>

      {/* 올 여름 추천 미스터리 소설 10 (mysteryRecommend 폴더) */}
      <section className="w-full mx-auto xl:max-w-[1200px] py-5 my-10">
        <div className="w-full h-full mb-7 flex items-center justify-between">
          <p className="text-3xl font-bold">올 여름 추천 미스터리 소설 10</p>
          <Link href={"/"} className="flex items-center gap-1 font-bold">
            더보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
        </div>
        <RecommendSwiper />
      </section>

      {/* 출판사에서 자신있게 추천해요 */}
      <section className="w-full mx-auto xl:max-w-[1200px] py-5 my-10">
        <p className="text-3xl font-bold mb-7">출판사에서 자신있게 추천해요</p>
        <div className="flex"></div>
      </section>
    </main>
  );
}
