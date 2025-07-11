import FormInput from "@/components/atom/FormInput";

export default function page() {
  return (
    <div className="w-full h-full">
      <form
        action=""
        className="max-w-[1200px] mx-auto h-full flex flex-col items-center justify-center gap-5"
      >
        <FormInput title="아이디" type="text" />
        <FormInput title="비밀번호" type="password" />
        <FormInput title="비밀번호 확인" type="password" />
        <FormInput title="이름" type="text" />
        <FormInput title="전화번호(선택)" type="text" />

        <FormInput type="submit" value="가입하기" />
      </form>
    </div>
  );
}
