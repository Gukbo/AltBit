export default function CoinItem() {
  return (
    <div className="flex flex-row border gap-2 p-2 m-2 text-[11px] items-center justify-evenly">
      <span>⭐</span>
      <div className="flex flex-col">
        <h1>한글이름</h1>
        <span className="text-gray-500">coin/krw</span>
      </div>
      <span>1234</span>
      <span>+0.00%</span>
      <span>000,000백만</span>
    </div>
  );
}
