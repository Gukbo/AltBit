import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더 전체 감시
  ],
  theme: {
    extend: {
      fontFamily: {
        // ▼ 여기를 수정!
        // var(--font-pretendard)를 가장 앞에 둬서 최우선 적용
        sans: [
          "var(--font-pretendard)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
