import { CoinType } from "./../model/type";

export async function getMarkets(): Promise<CoinType[]> {
  try {
    const response = await fetch(
      "https://api.upbit.com/v1/market/all?isDetails=false"
    );

    if (!response.ok) {
      throw new Error("연결 실패");
    }

    const data: CoinType[] = await response.json();

    const krwMarkets = data.filter((coin) => coin.market.startsWith("KRW-"));

    return krwMarkets;
  } catch (error) {
    console.error("불러오기 실패", error);
    return [];
  }
}
