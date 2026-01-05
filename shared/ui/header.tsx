import Link from "next/link";
import Image from "next/image";
import Logo from "@/shared/images/logo.png";

export default function Header() {
  return (
    <header className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
       <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src={Logo}
              alt="로고"
              width={80}
              height={30}
              className="object-contain"
            />
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-gray-700">
            <Link
              href="/exchange"
              className="hover:text-orange-500 transition-colors"
            >
              거래소
            </Link>
            <Link
              href="/deposit"
              className="hover:text-orange-500 transition-colors"
            >
              입출금
            </Link>
            <Link
              href="/history"
              className="hover:text-orange-500 transition-colors"
            >
              거래내역
            </Link>
          </nav>
        </div>

        <div className="flex gap-3">
          <Link href="/login">
            <button className="px-4 py-2 text-sm font-bold text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
              로그인
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
