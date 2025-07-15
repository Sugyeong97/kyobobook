import Image from "next/image";
import Link from "next/link";

interface welcomeMarketingItemProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function WelcomeMarketingItem({}: welcomeMarketingItemProps) {
  const welcomeImage = [
    "/welcomeMarketing/PC_QM_01.svg",
    "/welcomeMarketing/PC_QM_02.svg",
    "/welcomeMarketing/PC_QM_03.svg",
    "/welcomeMarketing/PC_QM_04.svg",
    "/welcomeMarketing/PC_QM_05.svg",
    "/welcomeMarketing/PC_QM_06.svg",
    "/welcomeMarketing/PC_QM_07.svg",
    "/welcomeMarketing/PC_QM_08.svg",
    "/welcomeMarketing/PC_QM_09.svg",
    "/welcomeMarketing/PC_QM_10.svg",
  ];
  const welcomeText = [
    "할인혜택",
    "오늘만특가",
    "APP혜택",
    "기프트카드",
    "바로출판",
    "이달의 책",
    "손글씨",
    "사은품",
    "추천",
    "인물&작품",
  ];
  return (
    <ul className="w-[888px] grid xl:grid-cols-10 lg:grid-cols-5 items-center justify-between text-sm">
      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_01.svg"
            width={70}
            height={70}
          />
          <span>할인혜택</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_02.svg"
            width={70}
            height={70}
          />
          <span>오늘만특가</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_03.svg"
            width={70}
            height={70}
          />
          <span>APP혜택</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_04.svg"
            width={70}
            height={70}
          />
          <span>기프트카드</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_05.svg"
            width={70}
            height={70}
          />
          <span>바로출판</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_06.svg"
            width={70}
            height={70}
          />
          <span>이달의 책</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_07.svg"
            width={70}
            height={70}
          />
          <span>손글씨</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_08.svg"
            width={70}
            height={70}
          />
          <span>사은품</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_09.svg"
            width={70}
            height={70}
          />
          <span>추천</span>
        </Link>
      </li>

      <li>
        <Link
          href="/"
          className="w-full h-full flex flex-col items-center justify-center gap-1"
        >
          <Image
            alt=""
            src="/welcomeMarketing/PC_QM_10.svg"
            width={70}
            height={70}
          />
          <span>인물&작품</span>
        </Link>
      </li>
    </ul>
  );
}
