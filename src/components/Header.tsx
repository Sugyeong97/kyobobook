import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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

        {/* 검색영역 */}
        <div className="w-[560px] h-[50px] px-7 border rounded-[50px] border-[#D9D9D9] flex items-center justify-between">
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
    </header>
  );
}
