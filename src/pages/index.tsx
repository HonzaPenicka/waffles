import localFont from "next/font/local";
import { Swiper, SwiperSlide } from "swiper/react";
import { WaffleIcon } from "../../public/icon/waffle";
import { LocationIcon } from "../../public/icon/location";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { FunctionComponent } from "react";
import { InstagramIcon } from "../../public/icon/instagram";
import { FacebookIcon } from "../../public/icon/facebook";

const Home: FunctionComponent = () => {
  return (
    <div className="flex flex-col h-auto w-screen justify-between bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500">
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

              <div className="justify-center flex items-center py-4">
                <div
                  className="aspect-video w-full md:w-3/5 rounded-3xl"
                  style={{
                    backgroundImage: 'url("/pics/head/2326.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPositionY: "50%",
                    backgroundPositionX: "50%",
                  }}
                ></div>
              </div>

              <div className="aspect-auto lg:aspect-auto lg:h-full">
                <div className="p-4 h-full w-auto rounded-3xl text-center text-lg md:text-xl lg:text-2xl">
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
                className="w-full rounded-3xl swiper__change--color"
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
                        backgroundImage: 'url("/pics/head/2326.png")',
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
                      <div className="font-bold md:text-2xl lg:text-3xl uppercase pb-8">
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
                        backgroundImage: 'url("/pics/head/2326.png")',
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
                className="aspect-square w-full md:w-4/5 rounded-3xl flex items-center justify-center"
                style={{
                  backgroundImage: 'url("/pics/products/6236.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionY: "50%",
                }}
              >
                <button className="uppercase py-2 px-4 md:py-4 md:px-8 lg:py-8 lg:px-16 h-auto bg-white text-[#8867BD] text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl">
                  Sestav si sám
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-lg md:text-xl lg:text-2xl pt-8">
              <div className="aspect-video md:w-full md:h-full rounded-3xl border bg-[url('/pics/2662.png')] bg-cover bg-no-repeat grid text-right px-4 py-4 md:py-8 gap-2"></div>
              <div className="w-full rounded-3xl border border-white grid text-right px-4 py-4 md:py-8 gap-2 items-center">
                <div className="uppercase font-semibold">Kde nás najdete</div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center font-bold justify-end text-right">
                    <LocationIcon />
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
              <div className="md:order-last aspect-video">
                <iframe
                  className="rounded-3xl"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=harrachov%20219+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
              <div className="w-full rounded-3xl border border-white grid text-left px-4 py-4 md:py-8 gap-2 items-center">
                <div className="uppercase font-semibold">Otevírací doba</div>
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
                <FacebookIcon />
                <InstagramIcon />
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
