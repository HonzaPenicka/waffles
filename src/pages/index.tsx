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
    <div className="flex flex-col h-auto w-screen justify-between">
      <header className="h-8 lg:h-16 w-full top-0 grid bg-[#D7C2D7]"></header>

      <main className="gap-8 container mx-auto border-4 rounded-3xl h-full w-full">
        <div className="p-4 grid gap-8 items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col lg:col-span-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="lg:hidden flex">
                  <WaffleIcon width="70px" height="70px" />
                </div>

                <div className="hidden lg:flex lg:justify-self-start">
                  <WaffleIcon width="100px" height="100px" />
                </div>
              </div>

              <div className="text-5xl lg:text-7xl text-center font-semibold text-[#9F7EA9]">
                Bubble Waffle <br />
                Harrachov
              </div>

              <div className="justify-center flex items-center">
                <div
                  className="aspect-square w-full lg:w-3/5 rounded-3xl"
                  style={{
                    backgroundImage: 'url("/pics/products/pink-blue.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "70%",
                  }}
                ></div>
              </div>

              <div className="aspect-square lg:aspect-auto lg:h-full bg-[#D7C2D7]">
                <div className="p-4 bg-[#EEEDA2] h-full w-full border-[#D7C2D7] rounded-3xl"></div>
              </div>
            </div>

            {/* Wrap Swiper in a div with visibility classes */}
            <div className="grid lg:hidden">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                className="w-full bg-white rounded-3xl aspect-square"
              >
                <SwiperSlide className="grid text-[#4D5BB8]">
                  <div className="w-full flex flex-col justify-between">
                    <div className="p-4 text-sm text-left flex flex-col">
                      <div className="font-semibold">Full of chocolate</div>
                      <div>Creampie</div>
                    </div>

                    <div className="text-sm items-center justify-center grid">
                      <div
                        className="rounded-full border aspect-square h-44 lg:h-36"
                        style={{
                          backgroundImage:
                            'url("/pics/products/pink-blue.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPositionY: "70%",
                        }}
                      ></div>
                    </div>

                    <div className="m-4 flex justify-end">
                      <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                        <div>Discover more</div>

                        <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                          <ArrowIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="grid text-[#4D5BB8]">
                  <div className="w-full flex flex-col justify-between">
                    <div className="p-4 text-sm text-left flex flex-col">
                      <div className="font-semibold">Full of chocolate</div>
                      <div>Creampie</div>
                    </div>

                    <div className="text-sm items-center justify-center grid">
                      <div
                        className="rounded-full border aspect-square h-44 lg:h-36"
                        style={{
                          backgroundImage:
                            'url("/pics/products/pink-blue.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPositionY: "70%",
                        }}
                      ></div>
                    </div>

                    <div className="m-4 flex justify-end">
                      <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                        <div>Discover more</div>

                        <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                          <ArrowIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="grid text-[#4D5BB8]">
                  <div className="w-full flex flex-col justify-between">
                    <div className="p-4 text-sm text-left flex flex-col">
                      <div className="font-semibold">Full of chocolate</div>
                      <div>Creampie</div>
                    </div>

                    <div className="text-sm items-center justify-center grid">
                      <div
                        className="rounded-full border aspect-square h-44 lg:h-36"
                        style={{
                          backgroundImage:
                            'url("/pics/products/pink-blue.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPositionY: "70%",
                        }}
                      ></div>
                    </div>

                    <div className="m-4 flex justify-end">
                      <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                        <div>Discover more</div>

                        <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                          <ArrowIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="grid text-[#4D5BB8]">
                  <div className="w-full flex flex-col justify-between">
                    <div className="p-4 text-sm text-left flex flex-col">
                      <div className="font-semibold">Full of chocolate</div>
                      <div>Creampie</div>
                    </div>

                    <div className="text-sm items-center justify-center grid">
                      <div
                        className="rounded-full border aspect-square h-44 lg:h-36"
                        style={{
                          backgroundImage:
                            'url("/pics/products/pink-blue.png")',
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPositionY: "70%",
                        }}
                      ></div>
                    </div>

                    <div className="m-4 flex justify-end">
                      <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                        <div>Discover more</div>

                        <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                          <ArrowIcon />
                        </div>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Add other SwiperSlide components here */}
              </Swiper>
            </div>

            <div className="hidden lg:gap-4 lg:flex lg:flex-col">
              <div className="w-full flex flex-col justify-between bg-white aspect-square rounded-3xl">
                <div className="p-4 text-sm text-left flex flex-col">
                  <div className="font-semibold">Full of chocolate</div>
                  <div>Creampie</div>
                </div>

                <div className="text-sm items-center justify-center grid">
                  <div
                    className="rounded-full border aspect-square h-44"
                    style={{
                      backgroundImage: 'url("/pics/products/pink-blue.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPositionY: "70%",
                    }}
                  ></div>
                </div>

                <div className="m-4 flex justify-end">
                  <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                    <div>Discover more</div>

                    <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col justify-between bg-white aspect-square rounded-3xl">
                <div className="p-4 text-sm text-left flex flex-col">
                  <div className="font-semibold">Full of chocolate</div>
                  <div>Creampie</div>
                </div>

                <div className="text-sm items-center justify-center grid">
                  <div
                    className="rounded-full border aspect-square h-44"
                    style={{
                      backgroundImage: 'url("/pics/products/pink-blue.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPositionY: "70%",
                    }}
                  ></div>
                </div>

                <div className="m-4 flex justify-end">
                  <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                    <div>Discover more</div>

                    <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col justify-between bg-white aspect-square rounded-3xl">
                <div className="p-4 text-sm text-left flex flex-col">
                  <div className="font-semibold">Full of chocolate</div>
                  <div>Creampie</div>
                </div>

                <div className="text-sm items-center justify-center grid">
                  <div
                    className="rounded-full border aspect-square h-44"
                    style={{
                      backgroundImage: 'url("/pics/products/pink-blue.png")',
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPositionY: "70%",
                    }}
                  ></div>
                </div>

                <div className="m-4 flex justify-end">
                  <button className="p-0.5 pl-4 text-sm gap-2 border border-[#D7C2D7] rounded-3xl items-center flex">
                    <div>Discover more</div>

                    <div className="rounded-full border border-[#D7C2D7] p-2 bg-[#D7C2D7]">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="h-8 lg:h-16 w-full top-0 grid bg-[#D7C2D7]"></footer>
    </div>
  );
};

export default Home;
