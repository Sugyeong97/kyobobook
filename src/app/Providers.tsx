"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";

interface providersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: providersProps) {
  return <Provider store={store}>{children}</Provider>;
}
