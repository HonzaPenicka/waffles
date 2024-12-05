import localFont from "next/font/local";
import { Swiper, SwiperSlide } from "swiper/react";
import { WaffleIcon } from "../../public/icon/waffle";
import { LocationIcon } from "../../public/icon/location";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { FunctionComponent, useState } from "react";
import { InstagramIcon } from "../../public/icon/instagram";
import { FacebookIcon } from "../../public/icon/facebook";

const Home: FunctionComponent = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [isKlasikOpen, setIsKlasikOpen] = useState(false);
  const [isAppleOpen, setIsAppleOpen] = useState(false);
  const [isBananaOpen, setIsBananaOpen] = useState(false);
  const [isMixItOpen, setIsMixItOpen] = useState(false);

  const handleRotate = () => {
    setRotation((prevRotation) => prevRotation + 45);
  };

  const handleMouseKlasikEnter = () => {
    setIsKlasikOpen(true);
  };

  const handleMouseKlasikLeave = () => {
    setIsKlasikOpen(false);
  };

  const handleMouseAppleEnter = () => {
    setIsAppleOpen(true);
  };

  const handleMouseAppleLeave = () => {
    setIsAppleOpen(false);
  };

  const handleMouseBananaEnter = () => {
    setIsBananaOpen(true);
  };

  const handleMouseBananaLeave = () => {
    setIsBananaOpen(false);
  };

  const handleMouseMixItEnter = () => {
    setIsMixItOpen(true);
  };

  const handleMouseMixItLeave = () => {
    setIsMixItOpen(false);
  };

  return (
    <div className="flex flex-col h-auto w-screen justify-between bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500">
      <header className="h-8 lg:h-16 w-full top-0 grid"></header>

      <main className="gap-8 lg:gap-16 container mx-auto border-4 rounded-3xl h-full w-full text-white">
        <div className="p-4 grid gap-8 items-center">
          <div className="grid gap-4 md:gap-8 lg:gap-16">
            <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
              <div className="flex items-center gap-4">
                <div className="md:hidden flex hover:scale-110 hover:duration-300">
                  <WaffleIcon width="60px" height="60px" />
                </div>

                <div className="hidden md:flex lg:justify-self-start hover:scale-110 hover:duration-300">
                  <WaffleIcon width="120px" height="120px" />
                </div>
              </div>

              <h1 className="text-3xl md:text-6xl text-center font-semibold uppercase">
                Nejlepší waffle <br />v Harrachově
              </h1>

              <div className="justify-center flex items-center pt-4">
                <div
                  className="aspect-video w-4/5 md:w-2/5 rounded-3xl"
                  aria-label="Nejlepší waffle v Harrachově"
                  role="img"
                  style={{
                    backgroundImage: 'url("/pics/head/2326.webp")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPositionY: "50%",
                    backgroundPositionX: "50%",
                  }}
                ></div>
              </div>

              <div className="aspect-auto lg:aspect-auto lg:h-full">
                <p className="p-4 h-full w-auto rounded-3xl text-center text-lg md:text-xl lg:text-2xl">
                  Rodinný stánek v srdci malebného Harrachova.{" "}
                  <br className="hidden md:flex" />
                  Naše vášeň je v používání prvotřídních surovin{" "}
                  <br className="hidden md:flex" />a vytváření nezapomenutelných
                  sladkých zážitků.
                </p>
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
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/MALINA.webp")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                      aria-label="Klasik waffle"
                    ></div>
                    <div className="pt-8 text-center flex flex-col">
                      <button
                        className="font-bold text-xl uppercase"
                        onMouseEnter={handleMouseKlasikEnter}
                        onMouseLeave={handleMouseKlasikLeave}
                      >
                        Klasik
                      </button>
                      {isKlasikOpen && (
                        <div
                          className="absolute z-10 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-2"
                          onMouseEnter={handleMouseKlasikEnter}
                          onMouseLeave={handleMouseKlasikLeave}
                        >
                          <p className="text-xs text-gray-700 flex flex-col text-left gap-1">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Sirup, šlehačka
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/JEBKA.webp")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                      aria-label="Waffle jablko skořice"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold text-xl uppercase"
                        onMouseEnter={handleMouseAppleEnter}
                        onMouseLeave={handleMouseAppleLeave}
                      >
                        Jablko <br /> skořice
                      </button>
                      {isAppleOpen && (
                        <div
                          className="absolute z-10 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseAppleEnter}
                          onMouseLeave={handleMouseAppleLeave}
                        >
                          <p className="text-xs text-gray-700 flex flex-col text-left gap-1">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Jablko, skořice, sirup,
                              šlehačka, křížaly
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/BANANA.webp")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                      aria-label="Waffle banana split"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold text-xl uppercase"
                        onMouseEnter={handleMouseBananaEnter}
                        onMouseLeave={handleMouseBananaLeave}
                      >
                        Banana <br /> split
                      </button>
                      {isBananaOpen && (
                        <div
                          className="absolute z-10 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseBananaEnter}
                          onMouseLeave={handleMouseBananaLeave}
                        >
                          <p className="text-xs text-gray-700 flex flex-col text-left gap-1">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Banán, nutella, sirup,
                              šlehačka, posyp
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/2326.webp")',
                        backgroundSize: "contain",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                      }}
                      aria-label="Waffle namixuj si sám"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold text-xl uppercase"
                        onMouseEnter={handleMouseMixItEnter}
                        onMouseLeave={handleMouseMixItLeave}
                      >
                        Namixuj <br /> si sám
                      </button>
                      {isMixItOpen && (
                        <div
                          className="absolute z-10 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseMixItEnter}
                          onMouseLeave={handleMouseMixItLeave}
                        >
                          <p className="text-xs text-gray-700 flex flex-col text-left gap-1">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Vytvoř si svoji wafli dle
                              výběru
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="hidden md:gap-4 md:grid">
              <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-4 items-center">
                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/MALINA.webp")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                      aria-label="Klasik waffle"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold md:text-2xl lg:text-3xl uppercase pb-8"
                        onMouseEnter={handleMouseKlasikEnter}
                        onMouseLeave={handleMouseKlasikLeave}
                      >
                        Klasik
                      </button>
                      {isKlasikOpen && (
                        <div
                          className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseKlasikEnter}
                          onMouseLeave={handleMouseKlasikLeave}
                        >
                          <p className="text-xs md:text-sm lg:text-lg text-gray-700 flex flex-col text-left md:gap-2 lg:gap-4">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Sirup, šlehačka
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/JEBKA.webp")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                      aria-label="Waffle jablko skořice"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold md:text-2xl lg:text-3xl uppercase"
                        onMouseEnter={handleMouseAppleEnter}
                        onMouseLeave={handleMouseAppleLeave}
                      >
                        jablko <br /> & skořice
                      </button>
                      {isAppleOpen && (
                        <div
                          className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseAppleEnter}
                          onMouseLeave={handleMouseAppleLeave}
                        >
                          <p className="text-xs md:text-sm lg:text-lg text-gray-700 flex flex-col text-left md:gap-2 lg:gap-4">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Jablko, skořice, sirup,
                              šlehačka, křížaly
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/BANANA.webp")',
                        backgroundSize: "cover",
                        backgroundPositionY: "70%",
                      }}
                      aria-label="Waffle banana split"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold md:text-2xl lg:text-3xl uppercase"
                        onMouseEnter={handleMouseBananaEnter}
                        onMouseLeave={handleMouseBananaLeave}
                      >
                        banana <br /> split
                      </button>
                      {isBananaOpen && (
                        <div
                          className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseBananaEnter}
                          onMouseLeave={handleMouseBananaLeave}
                        >
                          <p className="text-xs md:text-sm lg:text-lg text-gray-700 flex flex-col text-left md:gap-2 lg:gap-4">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Banán, nutella, sirup,
                              šlehačka, posyp
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <div className="text-sm items-center justify-center grid">
                    <div
                      className="rounded-full aspect-square h-40 hover:scale-110 hover:duration-300"
                      style={{
                        backgroundImage: 'url("/pics/head/2326.webp")',
                        backgroundSize: "contain",
                        backgroundPositionY: "50%",
                        backgroundRepeat: "no-repeat",
                      }}
                      aria-label="Waffle namixuj si sám"
                    ></div>
                    <div className="py-8 text-center flex flex-col">
                      <button
                        className="font-bold md:text-2xl lg:text-3xl uppercase"
                        onMouseEnter={handleMouseMixItEnter}
                        onMouseLeave={handleMouseMixItLeave}
                      >
                        namixuj <br /> si sám
                      </button>
                      {isMixItOpen && (
                        <div
                          className="absolute z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg p-4"
                          onMouseEnter={handleMouseMixItEnter}
                          onMouseLeave={handleMouseMixItLeave}
                        >
                          <p className="text-xs md:text-sm lg:text-lg text-gray-700 flex flex-col text-left md:gap-2 lg:gap-4">
                            <span>
                              <b>Těsto</b>: Světlé / Kakaové / Bezlepkové
                            </span>
                            <span>
                              <b>Ingredience</b>: Vytvoř si svoji wafli dle
                              výběru
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-center flex items-center">
              <div
                className="aspect-square w-9/12 md:w-5/12 rounded-3xl flex items-center justify-center transition-transform duration-[700ms]"
                style={{
                  backgroundImage: 'url("/pics/products/6236.webp")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPositionY: "50%",
                  transform: `rotate(${rotation}deg)`,
                }}
                aria-label="Waffle namixuj si sám, zatoč si kolem"
              >
                <button
                  onClick={handleRotate}
                  className="uppercase py-2 px-4 md:py-4 md:px-8 h-auto bg-white text-[#8867BD] text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl hover:scale-110 hover:duration-300"
                  style={{ transform: `rotate(-${rotation}deg)` }}
                >
                  Sestav si sám
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-lg md:text-xl lg:text-2xl pt-8">
              <div className="aspect-video md:w-full md:h-full rounded-3xl border-2 bg-[url('/pics/2662.webp')] bg-cover bg-no-repeat grid text-right px-4 py-4 md:py-8 gap-2"></div>
              <div className="w-full rounded-3xl border-2 border-white grid text-right px-4 py-4 md:py-8 gap-2 items-center xl:text-2xl">
                <h3 className="uppercase font-semibold lg:text-4xl xl:text-4xl">
                  Kde nás najdete
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center font-bold justify-end text-right">
                    <LocationIcon />
                    <p>
                      Harrachov 191 <br /> Harrachov
                    </p>
                  </div>

                  <p>
                    u sjezdovky <br /> pod Čertovou horou
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 text-lg md:text-xl lg:text-2xl">
              <div className="md:order-last aspect-video md:aspect-auto lg:aspect-video md:h-full">
                <iframe
                  className="rounded-3xl"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=harrachov%20191+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>

              <div className="w-full rounded-3xl border-2 border-white grid text-left px-4 py-4 md:py-8 gap-2 items-center xl:text-2xl">
                <h3 className="uppercase font-semibold lg:text-4xl xl:text-4xl">
                  Otevírací doba
                </h3>
                <div className="grid gap-2">
                  <div className="font-bold">
                    <p>pondělí - neděle</p>
                    <p>10:30 - 20:30</p>
                  </div>

                  <p>
                    u sjezdovky <br /> pod Čertovou horou
                  </p>
                </div>
              </div>
            </div>

            <div className="grid uppercase text-center items-center gap-4 font-semibold text-sm py-4">
              <div>sledujte nás</div>

              <div className="flex gap-4 items-center justify-center">
                <a
                  href="https://www.facebook.com/bubble_waffle_harrachov"
                  className="hover:scale-110 hover:duration-300"
                  target="_blank"
                  aria-hidden="true"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="https://www.instagram.com/bubble_waffle_harrachov"
                  className="hover:scale-110 hover:duration-300"
                  target="_blank"
                  aria-hidden="true"
                >
                  <InstagramIcon />
                </a>
              </div>
              <p>waffle harrachov</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-8 lg:h-16 w-full top-0 grid"></footer>
    </div>
  );
};

export default Home;
