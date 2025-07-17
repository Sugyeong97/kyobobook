"use client";

import { useState } from "react";
import FormInput from "../atom/FormInput";

export default function JoinPage() {
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] =
    useState<string>("비밀번호를 입력해 주세요.");

  const validateInput = (value: string) => {
    if (value.length < 5) {
      setErrorMessage("5자 이상 입력하세요.");
    } else {
      setErrorMessage(""); // 에러없음
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    validateInput(newValue);
  };

  return (
    <div className="w-full h-full">
      <form
        action=""
        className="max-w-[500px] mx-auto h-full flex flex-col items-start justify-center gap-5"
      >
        <FormInput type="text" title="아이디" />

        <div>
          <FormInput
            type="password"
            title="비밀번호"
            value={inputValue}
            onChange={handleChange}
          />

          {errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <p className="text-[#5055b1]">올바른 비밀번호입니다.</p>
          )}
        </div>

        <FormInput type="text" title="전화번호" />

        <input
          type="submit"
          value="가입하기"
          className="w-full py-4 mt-4 bg-[#5055b1] text-white rounded flex items-center justify-center hover:cursor-pointer hover:bg-[#2c307c]"
        />
      </form>
    </div>
  );
}
