"use client";
import {
  decreaseProduct,
  increaseProduct,
} from "@/store/actions/basketCounterActions";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";

export default function Page() {
  const book_info = {
    title: "시간의 계곡",
    price: "18000",
  };

  const basketCounter = useSelector(
    (state: RootState) => state.basketCounter.quantity
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    // 장바구니
    <div className="mx-auto w-[1200px] h-full flex justify-between">
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
            <div>{book_info.title}</div>
            <div>{book_info.price}원</div>
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

      {/* 주문 정보 */}
      <div className="w-[300px] h-[400px]">
        {/* 위 */}
        <div className="w-full h-[350px] border border-[#D9D9D9] rounded-[5px] flex flex-col items-center">
          {/* 상품금액 + 배송비 */}
          <div className="w-full h-[150px] flex flex-col items-center justify-center gap-5">
            <div className="w-[260px] flex justify-between">
              <div>상품금액</div>
              <div>{book_info.price}원</div>
            </div>
            <div className="w-[260px] flex justify-between">
              <div>배송비</div>
              <div>3,000원</div>
            </div>
          </div>

          <hr className="w-[260px] border border-[#D9D9D9]" />

          {/* 총 금액 */}
          <div className="w-full h-[100px] flex flex-col items-center justify-center gap-5">
            <div className="w-[260px] flex justify-between">
              <div>총 금액</div>
              <div>21,000원</div>
            </div>
          </div>

          {/* 주문하기 */}
          <div className="w-full h-[100px] flex flex-col items-center justify-center">
            <button className="w-[250px] h-[55px] bg-[#3b3f92] rounded-[5px] text-white font-black hover:cursor-pointer">
              주문하기
            </button>
          </div>
        </div>

        {/* 아래 */}
        <div className="w-full h-[40px] mt-2.5 flex justify-between">
          <div className="w-[145px] h-full flex items-center justify-center border border-[#D9D9D9] rounded-[5px] hover:cursor-pointer">
            주문하기
          </div>
          <div className="w-[150px] h-full flex items-center justify-center border border-[#D9D9D9] rounded-[5px] hover:cursor-pointer">
            여러곳 배송
          </div>
        </div>
      </div>
    </div>
  );
}
