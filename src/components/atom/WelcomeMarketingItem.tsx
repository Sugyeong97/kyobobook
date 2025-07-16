import Image from "next/image";
import Link from "next/link";

interface welcomeMarketingItem {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

interface welcomeMarketingItemProps {
  items: welcomeMarketingItem[];
}

export default function WelcomeMarketingItem({
  items,
}: welcomeMarketingItemProps) {
  return (
    <ul className="w-[888px] grid xl:grid-cols-10 lg:grid-cols-5 items-center justify-between text-sm">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href="/"
            className="w-full h-full flex flex-col gap-3 items-center justify-center"
          >
            <Image
              alt={item.imageAlt}
              src={item.imageSrc}
              width={70}
              height={70}
            />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
