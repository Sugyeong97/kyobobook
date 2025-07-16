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
    <div className="flex flex-col gap-3">
      <ul className="w-[888px] grid xl:grid-cols-10 lg:grid-cols-5 items-center justify-between text-sm">
        {welcomeImage.map((item, idx) => (
          <li key={idx}>
            <Link
              href="/"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <Image alt="" src={item} width={70} height={70} />
            </Link>
          </li>
        ))}
      </ul>

      <ul className="w-[888px] grid xl:grid-cols-10 lg:grid-cols-5 items-center justify-between text-sm">
        {welcomeText.map((item, idx) => (
          <li key={idx}>
            <Link
              href="/"
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <span>{item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
