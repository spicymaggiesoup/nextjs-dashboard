// 챕터-2 tailwind css 적용하기
import '@/app/ui/global.css';
// 챕터03 font 적용 next/font/google
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
