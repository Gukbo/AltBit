import Image from "next/image";
import BannerImg from "@/shared/images/bannerImg2.png";

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center py-20">
      <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-xl text-gray-600">대한민국 No.1</span>
        <span className="text-3xl font-bold text-gray-800">
          디지털 자산 거래소
        </span>
        <span className="text-5xl font-black text-orange-600 whitespace-nowrap">
          알트비트
        </span>

        <div className="flex flex-col xl:flex-row gap-4 mt-8 w-full">
          <button className="px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
            둘러보기
          </button>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            로그인
          </button>
        </div>
      </div>
      <div className="relative col-span-1 md:col-span-3 w-full h-100 rounded-xl overflow-hidden flex items-center justify-center">
        <Image
          src={BannerImg}
          alt="배너 이미지"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 960px"
        />
      </div>
    </div>
  );
}
