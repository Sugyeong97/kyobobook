export default function MainPage() {
  return (
    <main>
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
  );
}
