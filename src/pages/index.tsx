import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="grid">
      <main
        className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start w-screen h-screen mx-auto"
        style={{
          backgroundImage: 'url("/pics/head/strawberry-choco.jpeg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-24 w-full backdrop-blur-lg backdrop-filter absolute top-0 "></div>
        <footer className="h-24 w-full backdrop-blur-lg backdrop-filter absolute bottom-0">
          <div>vymrdej holiday smradlavou píčou</div>
        </footer>
      </main>
    </div>
  );
}
