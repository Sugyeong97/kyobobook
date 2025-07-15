"use client";

import MainPage from "@/components/MainPage";
import { darkMode, lightMode } from "@/store/actions/colorModeActions";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

export default function Page() {
  const colorMode = useSelector((state: RootState) => state.colorMode.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="font-noto-sans">
      <MainPage />
      <footer></footer>
    </div>
  );
}
