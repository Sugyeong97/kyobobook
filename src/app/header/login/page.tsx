import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="mx-auto max-w-[340px] w-full h-[700px] flex flex-col items-center justify-center text-sm">
      {/* 로고 */}
      <Link href={`/`} className="w-[250px] flex items-center justify-start">
        <Image
          src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/united/logo_book.svg"
          alt="로고"
          className="w-[200px] hover:cursor-pointer"
          width={250}
          height={250}
          style={{ width: "100%", height: "auto" }}
        />
      </Link>

      <div className="w-full my-5 flex flex-col gap-1">
        <input
          type="text"
          placeholder={"아이디를 입력해 주세요."}
          className="border rounded p-4 w-full h-12"
        />
        <input
          type="password"
          placeholder={"비밀번호를 입력해 주세요."}
          className="border rounded p-4 w-full h-12"
        />

        <div className="w-full h-12 mt-4 bg-[#5055b1] text-white rounded flex items-center justify-center hover:cursor-pointer hover:bg-[#2c307c]">
          로그인
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        <div className="hover:cursor-pointer">아이디 찾기</div>
        <div>|</div>
        <div className="hover:cursor-pointer">비밀번호 찾기</div>
      </div>
    </div>
  );
}
