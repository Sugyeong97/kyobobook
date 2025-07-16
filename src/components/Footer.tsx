import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-sm text-[#767676]">
      <div className="max-w-[1200px] mx-auto h-[60px] border-y-1 border-[#d5d5d5] grid grid-cols-2 justify-between items-center">
        <div>공지사항</div>
        <div>당첨자 발표</div>
      </div>

      {/* ------------------------ */}

      <section className="max-w-[1200px] mx-auto py-10 grid grid-cols-3 gap-10">
        <article className="w-full col-span-2 flex flex-col gap-7 justify-items-start">
          <Image alt="" src="/logo_book.svg" width={150} height={0} />
          <ul id="footer-li" className="flex">
            <li>
              <Link href={"/"}>회사소개</Link>
            </li>
            <li>
              <Link href={"/"}>이용약관</Link>
            </li>
            <li>
              <Link href={"/"}>개인정보처리방침</Link>
            </li>
            <li>
              <Link href={"/"}>청소년보호정책</Link>
            </li>
            <li>
              <Link href={"/"}>대량주문안내</Link>
            </li>
            <li>
              <Link href={"/"}>협력사여러분</Link>
            </li>
            <li>
              <Link href={"/"}>채용정보</Link>
            </li>
            <li>
              <Link href={"/"}>광고소개</Link>
            </li>
          </ul>

          <address className="not-italic justify-items-start grid grid-cols-3 gap-3">
            <div>대표이사 : 허정도</div>
            <div>서울특별시 종로구 종로1</div>
            <div>사업자등록번호 : 102-81-11670</div>

            <div>대표전화 : 1544-1900(발신자 부담전화)</div>
            <div>FAX : 0502-987-5711(지역번호 공통)</div>
            <div>서울특별시 통신판매업신고번호 : 제 653호</div>
          </address>

          <div>&copy; KYOBO BOOK CENTRE</div>
        </article>

        <article className="w-full flex flex-col gap-7">
          <div className="w-full py-5 flex gap-7 items-center justify-between font-black">
            <span>Family Site</span>
            <div className="flex gap-1">
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
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
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
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
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
                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-black">토스페이먼츠 구매안전서비스</div>
            <div>
              고객님은 안전거래를 위해 현금 등으로 결제 시 교보에서 가입한
              <br />
              토스페이먼츠의 구매안전서비스를 이용할 수 있습니다.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div>[인증범위] 인터넷 교보문고 및 브랜드 서비스 운영</div>
            <div>[유효기간] 2023.11.15 ~ 2026.11.14</div>
          </div>
        </article>
      </section>
    </footer>
  );
}
