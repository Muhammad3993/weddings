
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Css
import "./theBest.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Autoplay } from "swiper";

// import Icons
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";


const TheBest = () => {
  return (
    <div className="thebest">
      <div className="container_navbar">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <div className="my-first-swiper">
            <SwiperSlide className="carousel-1">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">
                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                  </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca2">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca3">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca4">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca5">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca6">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca7">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca8">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carousel-1 ca9">
              <div className="bac-round">
                <div className="left-carou-sel"></div>
                <div className="right-best">

                  <div className="title-best">
                    <h1>To’yxona nomi</h1>
                  </div>
                  <div className="location-best">
                    <p>Manzil</p>
                    <div className="bottom-best">
                      <span className="location-main">
                        <IoLocationOutline />
                      </span>
                      <span>
                        <p>
                          Shayxontohur tumani, <br /> Gulshan ko’chasi, 4-uy
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="tel-best">
                    <p>Telefon raqami</p>
                    <div className="bottom-best">
                      <span className="telephone-main">
                        <BsTelephone />
                      </span>
                      <span>
                        <p>
                          +99 999 99 99 Sunnat
                          <br />
                          +99 999 99 90 Abror
                        </p>
                      </span>
                    </div>
                    <div className="narxlari">
                      <p>Narxi kishi boshiga</p>
                      <p>30 000-80 000 gacha </p>
                    </div>
                    <div className="tbn-best">
                      <Link to="/">Aloqaga chiqish</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default TheBest;
