import { main_md_list } from "@/contexts/VariousList";
import Image from "next/image";
import Link from "next/link";

export default function MD_RecommandList() {
  return (
    <div className="w-full max-w-[1200px] overflow-hidden overflow-x-scroll pt-5 py-8 flex gap-5">
      {main_md_list.map((item) => (
        <Link href={"/"} key={item.id}>
          <Image
            alt={item.imageAlt}
            src={item.imageSrc}
            width={200}
            height={300}
            className="!w-[200px] !h-[300px] !max-w-[200px] !max-h-[300px]"
          />
          <span className="flex items-center justify-center py-2">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
