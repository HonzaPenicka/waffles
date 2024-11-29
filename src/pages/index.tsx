import localFont from "next/font/local";
import { Swiper, SwiperSlide } from "swiper/react";
import { WaffleIcon } from "../../public/icon/waffle";
import { ArrowIcon } from "../../public/icon/arrow";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { FunctionComponent } from "react";

enum Colors {
  PURPLE = "",
  YELLOW = "#",
  GREEN = "",
  MIX = "",
}
interface Props {
  isVisible: boolean;
  numberOfSlides: number;
  backgroundColor: Colors[];
}

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

const Home: FunctionComponent<Props> = ({ isVisible, numberOfSlides }) => {
  return (
    <div className="flex flex-col h-auto w-screen justify-between bg-gradient-to-b from-[#BA73C6] via-[#D9A9EA] to-[#8B71BE]">
      <header className="h-8 lg:h-16 w-full top-0 grid"></header>

      <main className="gap-8 container mx-auto border-4 rounded-3xl h-full w-full text-white">
        <div className="p-4 grid gap-8 items-center">
          <div className="grid gap-8">
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="md:hidden flex">
                  <WaffleIcon width="60px" height="60px" />
                </div>

                <div className="hidden md:flex lg:justify-self-start">
                  <WaffleIcon width="100px" height="100px" />
                </div>
              </div>

              <div className="text-3xl md:text-6xl text-center font-semibold uppercase">
                Nejlepší waffle <br />v Harrachově
              </div>

              <div className="justify-center flex items-center">
                <div
                  className="aspect-square w-4/5 md:w-3/5 lg:w-2/5 rounded-3xl"
                  style={{
                    backgroundImage: 'url("/pics/head/OREO.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "50%",
                  }}
                ></div>
              </div>

              <div className="aspect-auto lg:aspect-auto lg:h-full lg:pt-4">
                <div className="p-4 h-full w-auto rounded-3xl text-center text-sm md:text-xl lg:text-2xl">
                  "Jsme rodinný stánek nacházející se v malebném Harrachově.{" "}
                  <br className="hidden md:flex" />
                  Naše vášeň spočívá v komplikování kvalitních surovin{" "}
                  <br className="hidden md:flex" /> a vytváření těch nejlepších
                  sladkých zážitků."
                </div>
              </div>
            </div>

            {/* Wrap Swiper in a div with visibility classes */}
            <div className="grid md:hidden">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                className="w-full rounded-3xl"
              >
                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/MALINA.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="pt-8 text-center flex flex-col">
                      <div className="font-bold text-xl uppercase">Klasik</div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/JEBKA.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold text-xl uppercase">
                        Jablko <br /> skořice
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/BANANA.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold text-xl uppercase">
                        Banana <br /> split
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/OREO.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold text-xl uppercase">
                        Namixuj <br /> si sám
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Add other SwiperSlide components here */}
              </Swiper>
            </div>

            <div className="hidden md:gap-4 md:grid">
              <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4 items-center">
                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/MALINA.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold md:text-2xl lg:text-3xl uppercase">
                        Klasik
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/JEBKA.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold md:text-2xl lg:text-3xl uppercase">
                        jablko <br /> & skořice
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/BANANA.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold md:text-2xl lg:text-3xl uppercase">
                        banana <br /> split
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full border aspect-square h-40"
                      style={{
                        backgroundImage: 'url("/pics/head/OREO.png")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <div className="font-bold md:text-2xl lg:text-3xl uppercase">
                        namixuj <br /> si sám
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-center flex items-center">
              <div
                className="aspect-square w-4/5 md:w-3/5 lg:w-2/5 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/pics/head/OREO.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionY: "50%",
                }}
              >
                <button className="uppercase py-2 px-4 md:py-4 md:px-8 h-auto bg-white text-[#8867BD] text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl">
                  Sestav si sám
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-lg md:text-xl lg:text-2xl pt-8">
              <div className="aspect-video md:w-full md:h-full rounded-3xl border bg-white grid text-right px-4 py-4 md:py-8 gap-2"></div>
              <div className="w-full rounded-3xl border border-white grid text-right px-4 py-4 md:py-8 gap-2 items-center">
                <div className="uppercase font-semibold">Kde nás najedete</div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center font-bold justify-end text-right">
                    <ArrowIcon />
                    <div>
                      Zimní 139 <br /> Harrachov
                    </div>
                  </div>

                  <div>
                    u sjezdovky <br /> pod Černou horou
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-lg md:text-xl lg:text-2xl">
              <div className="aspect-video md:w-full md:h-full rounded-3xl border bg-white grid text-right px-4 py-4 md:py-8 gap-2 md:order-last"></div>
              <div className="w-full rounded-3xl border border-white grid text-right px-4 py-4 md:py-8 gap-2 items-center">
                <div className="uppercase">Otevírací doba</div>
                <div className="grid gap-2">
                  <div className="font-bold">
                    <div>pondělí - neděle</div>
                    <div>10:30 - 20:30</div>
                  </div>

                  <div>
                    u sjezdovky <br /> pod Černou horou
                  </div>
                </div>
              </div>
            </div>

            <div className="grid uppercase text-center items-center gap-4 font-semibold text-sm py-4">
              <div>sledujte nás</div>
              <div className="flex gap-4 items-center justify-center">
                <div>FB</div>
                <div>INS</div>
              </div>
              <div>waffle harrachov</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-8 lg:h-16 w-full top-0 grid"></footer>
    </div>
  );
};

export default Home;
