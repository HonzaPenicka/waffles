import localFont from "next/font/local";
import { WaffleIcon } from "../../public/icon/waffle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowIcon } from "../../public/icon/arrow";

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
    <div className="flex flex-col h-auto w-screen justify-between">
      <header className="h-8 lg:h-16 w-full top-0 grid bg-[#afb8df]"></header>

      <main className="gap-8 container mx-auto border-4 rounded-3xl h-full w-full">
        <div className="p-4 grid gap-8 items-center">
          <div className="flex items-center gap-4">
            <WaffleIcon />

            <div className="col-span-2 justify-center">
              <Swiper
                spaceBetween={2}
                slidesPerView={2}
                pagination
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="border rounded-full p-1 grid gap-2 items-center justify-center bg-white max-w-56"
              >
                <div>
                  <SwiperSlide>
                    <button className="rounded-full px-8 py-2 flex font-semibold justify-center text-[#afb8df] active:bg-[#afb8df] focus:bg-[#afb8df] active:text-white focus:text-white">
                      Prdel
                    </button>
                  </SwiperSlide>
                  <SwiperSlide className="items-center">
                    <button className="rounded-full px-8 py-2 flex font-semibold justify-center text-[#afb8df] active:bg-[#afb8df] focus:bg-[#afb8df] active:text-white focus:text-white">
                      Kunda
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button className="rounded-full px-8 py-2 flex font-semibold justify-center text-[#afb8df] active:bg-[#afb8df] focus:bg-[#afb8df] active:text-white focus:text-white">
                      Věnec
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button className="rounded-full px-8 py-2 flex font-semibold justify-center text-[#afb8df] active:bg-[#afb8df] focus:bg-[#afb8df] active:text-white focus:text-white">
                      Cecka
                    </button>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>

          <div className="grid gap-8">
            <div className="text-5xl text-center font-semibold text-[#4D5BB8]">
              Delight Your <br />
              Senses
            </div>

            <div
              className="aspect-square rounded-3xl"
              style={{
                backgroundImage: 'url("/pics/head/mobile.png")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="aspect-square bg-[#afb8df]">
              <div className="p-4 bg-[#EEEDA2] h-full w-full border-[#afb8df] rounded-3xl"></div>
            </div>

            <div className="bg-white aspect-square rounded-3xl text-[#4D5BB8]">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <div className="grid">
                  <SwiperSlide>
                    <div className="p-4 text-sm text-left flex flex-col">
                      <div className="font-semibold">Full of chocolate</div>

                      <div>creampie</div>
                    </div>

                    <div className="text-sm items-center justify-center grid">
                      <div
                        className="rounded-full border aspect-square h-44"
                        style={{
                          backgroundImage: 'url("/pics/head/mobile.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>

                    <div className="m-4 flex justify-end">
                      <button className="p-0.5 pl-4 text-sm gap-2 border border-[#afb8df] rounded-3xl items-center flex">
                        <div>Discover more</div>

                        <div className="rounded-full border border-[#afb8df] p-2 bg-[#afb8df]">
                          <ArrowIcon />
                        </div>
                      </button>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-8 lg:h-16 w-full top-0 grid bg-[#afb8df]"></footer>
    </div>
  );
}
