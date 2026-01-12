import { CoinNameItem } from "@/app/entities/coin/ui/CoinNameItem";
import CoinList from "@/app/widgets/coin-list/ui/CoinList";

export default function ExchangePage() {
  return (
    <div className="max-w-7xl min-w-7xl min-h-screen mx-auto grid grid-cols-7 gap-1 mt-2">
      <div className="col-span-5 flex flex-col gap-1 p-2">
        <CoinNameItem koreanName="비트코인" ticker="KRW-BTC" />
        <div className="border p-2">
          <span>현재 가격이 들어갈 자리</span>
        </div>
        <div className="h-112 p-2 border">
          <span>차트 자리</span>
        </div>
        <div className="grid grid-cols-2 gap-4 h-230 mt-2 ">
          <div className="col-span-1 gap-4 flex flex-row items-start justify-start border p-2">
            <button>일반호가</button>
            <button>누적호가</button>
            <button>호가주문</button>
          </div>
          <div className="col-span-1 gap-4 flex flex-row items-start justify-start border p-2">
            <button>매수</button>
            <button>매도</button>
            <button>간편주문</button>
            <button>거래내역</button>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-2 h-full">
        <div className="flex flex-col items-start gap-2 h-full">
          <input
            className="border p-2 w-full text-xs"
            type="text"
            placeholder="코인명/심볼검색"
          />
          <div className="flex flex-row p-2 justify-center gap-10 border w-full text-xs">
            <button>원화</button>
            <button>BTC</button>
            <button>USDT</button>
            <button>보유</button>
            <button>관심</button>
          </div>
          <CoinList />
        </div>
      </div>
    </div>
  );
}
