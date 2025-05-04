import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="w-full h-[180px] fixed top-0 left-0 bg-white">
        {/* 상단 메뉴 */}
        <div className="h-[50px] bg-[#f4f4f4] textbl">
          <ul className="max-w-[1200px] mx-auto h-full flex items-center justify-end gap-2 text-xs">
            <Link
              href={`/header/join`}
              className="px-5 h-full flex items-center justify-center"
            >
              회원가입
            </Link>

            <Link
              href={`/header/login`}
              className="px-5 h-full flex items-center justify-center"
            >
              로그인
            </Link>

            <Link
              href={`/header/order`}
              className="px-5 h-full flex items-center justify-center"
            >
              주문배송
            </Link>

            <Link
              href={`/header/off-shop`}
              className="px-5 h-full flex items-center justify-center"
            >
              매장안내
            </Link>

            <Link
              href={`/header/customer-service`}
              className="px-5 h-full flex items-center justify-center"
            >
              고객센터
            </Link>
          </ul>
        </div>

        {/* 검색 영역 */}
        <div className="mx-auto max-w-[1200px] h-[130px] flex items-center justify-between">
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

          {/* 검색창 */}
          <div className="w-[560px] h-[50px] px-7 border rounded-[50px] border-[#D9D9D9] flex items-center justify-between hover:cursor-text">
            <div className="flex items-center justify-center gap-1 hover:cursor-pointer text-sm">
              <div>통합검색</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div className="px-2">|</div>
            </div>

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
          </div>
        </div>
      </header>

      <main className="mt-[180px]">
        {/* 상단 메뉴 */}
        <div className="mx-auto max-w-[1200px] h-[70px] flex items-center justify-start gap-10">
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
            <li className="hover:cursor-pointer">베스트</li>
            <li className="hover:cursor-pointer">신상품</li>
            <li className="hover:cursor-pointer">이벤트</li>
          </ul>
        </div>

        {/* 슬라이드 및 광고 */}
        <div className="mx-auto max-w-[1200px] h-[380px] flex items-center justify-between">
          <div className="w-[888px] h-full pb-5 bg-[#BAD18B] rounded-[10px] flex items-end justify-center gap-10">
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

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
                d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <div className="w-[300px] h-full border border-[#D9D9D9] rounded-[10px]"></div>
        </div>

        {/* 하단 메뉴 */}
        <div className="mx-auto max-w-[1200px] h-[140px] flex items-center justify-between">
          {/* 리스트 */}
          <ul className="w-[888px] flex items-center justify-between">
            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">할인혜택</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">오늘만특가</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">책그리고꽃</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">음반·영상</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">바로출판</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">이달의 책</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">손글씨</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">사은품</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">추천</p>
            </li>

            <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
              <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
              <p className="text-sm text-center">APP혜택</p>
            </li>
          </ul>

          {/* 광고 */}
          <div className="w-[300px] h-[100px] bg-[#3264FF] rounded-[10px]"></div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
