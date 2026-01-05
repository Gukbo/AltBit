import Image from "next/image"; // Next.js 이미지 컴포넌트

interface Props {
  koreanName: string;
  ticker: string; // "KRW-BTC"
}

export const CoinNameItem = ({ koreanName, ticker }: Props) => {
  const symbol = ticker.split("-")[1];
  const logoUrl = `https://static.upbit.com/logos/${symbol}.png`;

  return (
    <div className="border p-2 flex flex-row items-center gap-2">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={logoUrl}
              alt={koreanName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-row gap-2 justify-center items-center">
            <span className="text-[16px] font-bold">{koreanName}</span>
            <span className="text-xs text-gray-500">{ticker}</span>
          </div>
        </div>
        <div className="flex flex-row gap-6 text-[14px] mr-3 text-gray-600">
          <span className="text-blue-600 font-bold">시세</span>
          <span>정보</span>
          <span>마켓 인사이트</span>
        </div>
      </div>
    </div>
  );
};
