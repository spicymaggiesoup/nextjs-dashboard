import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from './ui/fonts';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <AcmeLogo/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* 챕터-2 css @/app/ui/home.module.css 의 클래스로 즉각적용 */}
          <div className={styles.shape}></div>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}></p>
          <a href="https://openai-board-assistant.vercel.app/" className="text-blue-500">
            보드봇에게 물어보기
          </a>
          <br></br>
          <a href="https://github.com/spicymaggiesoup/board/blob/main/nUBoard-Guide-Admin_20230926v.pdf?raw=true" className="text-blue-500">
            관리자페이지 매뉴얼 다운받기
          </a>
        </div>
      </div>
    </main>
  );
}
