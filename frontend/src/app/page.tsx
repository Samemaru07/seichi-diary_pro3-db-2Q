"use client";
import React from 'react';
import "@/app/globals.css";
import styles from "./top.module.css";
import Image from 'next/image';
import ContentsLayout from '@/features/ContentsLayout';
import Link from 'next/link';

const TopPage = () => {

  return (
    <div>
      <ContentsLayout
        title="このサイトについて"
        firstParagraph={
          <>
            本サイトにお越しいただき<br className="phBr" />ありがとうございます。
          </>
        }
        secondParagraph={
          <>
            当サイトは、<br className="phBr" />しがない高専生「さめまる」の<br className="phBr" />アニメの聖地巡礼や、<br className="pcBr" /><br className="phBr" />
            コラボカフェ・イベントなどに行った時の<br className="phBr" />感想や写真をまとめたブログです。
          </>
        }
        thirdParagraph={
          <>
            まだまだ経験の浅い者ですが、<br className="phBr" />ぜひごゆるりと見ていってください♪
          </>
        }
      />


      <div className={styles.images}>
        <Image
          src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/%E8%92%BC%E7%A9%B9%E3%81%AE%E3%83%95%E3%82%A1%E3%83%95%E3%83%8A%E3%83%BC.jpeg"
          alt="ファフナー尾道20周年"
          width={300}
          height={200}
          className={styles.FafnerImage}
        />

        <Image
          src="https://seichi-diary-imgs.s3.ap-northeast-1.amazonaws.com/material/SEED%E3%82%AB%E3%83%95%E3%82%A7.png"
          alt="SEEDカフェ"
          width={300}
          height={200}
          className={styles.SEEDImage}
        />
      </div>

      <div className={styles.phoneWrapper}>
        <Link href="/blog" className={styles.goToBlog}>ブログを見に行く</Link>
        <Link href="/profile" className={styles.goToProfile}>プロフィールを見に行く</Link>
      </div>
    </div>
  )
}

export default TopPage;

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
