import CoinItem from "@/app/entities/coin/ui/CoinListItem";

export default function CoinList() {
  return (
    <div className="flex-1 p-2 border w-full">
      <CoinItem />
      <CoinItem />
      <CoinItem />
      <CoinItem />
      <CoinItem />
      <CoinItem />
    </div>
  );
}
