export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-5 border-b-2">
      <div className="flex flex-row gap-10">
        <h1>로고</h1>
        <h1>거래소</h1>
        <h1>입출금</h1>
        <h1>거래내역</h1>
      </div>
      <div className="flex flex-row gap-5">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}
