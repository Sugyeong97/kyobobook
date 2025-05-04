"use client";
import {
  decreaseProduct,
  increaseProduct,
} from "@/store/actions/basketCounterActions";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

export default function Page() {
  const basketCounter = useSelector(
    (state: RootState) => state.basketCounter.quantity
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    // 장바구니
    <div className="mx-auto w-[1200px] h-full flex">
      {/* 제품목록 */}
      <div className="w-[890px] h-full border-t">
        {/* 책정보 */}
        <div className="w-full h-[150px] border-b flex items-center justify-center">
          <div className="w-[70px] h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div className="w-[150px] h-full flex items-center justify-center">
            <div className="w-[70px] h-[100px] bg-[#D9D9D9]"></div>
          </div>
          <div className="w-[370px] h-full flex flex-col justify-center gap-3">
            <div>시간의 계곡</div>
            <div>18,000원</div>
          </div>
          <div className="w-[150px] h-full flex items-center justify-center">
            <div className="w-full h-[50px] flex items-center justify-around border border-[#D9D9D9] rounded">
              <button
                onClick={() => dispatch(decreaseProduct())}
                className="w-full flex items-center justify-center hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <div className="w-full flex items-center justify-center">
                {basketCounter}
              </div>
              <button
                onClick={() => dispatch(increaseProduct())}
                className="w-full flex items-center justify-center hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[150px] h-full flex items-center justify-center">
            18,000원
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
