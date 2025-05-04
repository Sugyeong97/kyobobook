interface welcomeMarketingListProps {
  title?: string;
}

export default function WelcomeMarketingList({
  title = "",
}: welcomeMarketingListProps) {
  return (
    <li className="w-[70px] h-[100px] flex flex-col items-center justify-between hover:cursor-pointer">
      {/* 이미지로 변경 */}
      <div className="w-full h-[70px] bg-[#D9D9D9] rounded"></div>
      <p className="text-sm text-center">{title}</p>
    </li>
  );
}
