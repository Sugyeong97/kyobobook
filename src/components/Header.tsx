import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-10 h-[50px] bg-[#f4f4f4] text-black">
      <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between">
        {/* 메인 */}
        <Link href={`/`}>
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>

        <ul className="h-full flex items-center justify-end gap-2 text-xs">
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
    </header>
  );
}
