import Image from "next/image";
import Link from "next/link";

interface MainMidAdProps {
  id: number;
  href?: string;
  imageAlt?: string;
  imageSrc: string;
  width?: number;
  height?: number;
}

export default function MainMidAd({
  id,
  href = "",
  imageAlt = "",
  imageSrc,
  width = 595,
  height = 180,
}: MainMidAdProps) {
  // const mainMidAdList = [
  //   {
  //     id: 1,
  //     href: "/",
  //     imageAlt: "",
  //     imageSrc: "/MAIN_IMAGE/middleAdvertise/main_mid_ad1.png",
  //     width: 595,
  //     height: 180,
  //   },
  // ];

  return (
    <Link href={href} key={id}>
      <Image
        alt={imageAlt}
        src={imageSrc}
        width={width}
        height={height}
        className="rounded"
      />
    </Link>
  );
}
