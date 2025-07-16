import WelcomeMarketingItem from "../atom/WelcomeMarketingItem";

export default function WelcomeMarketingGroup() {
  const test = [
    {
      id: 1,
      title: "할인혜택",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_01.svg",
      imageAlt: "",
    },
    {
      id: 2,
      title: "오늘만특가",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_02.svg",
      imageAlt: "",
    },
    {
      id: 3,
      title: "APP혜택",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_03.svg",
      imageAlt: "",
    },
    {
      id: 4,
      title: "기프트카드",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_04.svg",
      imageAlt: "",
    },
    {
      id: 5,
      title: "바로출판",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_05.svg",
      imageAlt: "",
    },
    {
      id: 6,
      title: "이달의 책",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_06.svg",
      imageAlt: "",
    },
    {
      id: 7,
      title: "손글씨",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_07.svg",
      imageAlt: "",
    },
    {
      id: 8,
      title: "사은품",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_08.svg",
      imageAlt: "",
    },
    {
      id: 9,
      title: "추천",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_09.svg",
      imageAlt: "",
    },
    {
      id: 10,
      title: "인물&작품",
      imageSrc: "/MAIN_IMAGE/welcomeMarketing/PC_QM_10.svg",
      imageAlt: "",
    },
  ];

  return <WelcomeMarketingItem items={test} />;
}
