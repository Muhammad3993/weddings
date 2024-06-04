import React from 'react'
// Css
import './hero.css'
// import Swiper core and required modules
import{ Pagination, Thumbs, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
// Img
import img1 from '../../images/hero_img/img7.png'
import img2 from '../../images/hero_img/img8.png'
import img3 from '../../images/hero_img/img12.png'
import img4 from '../../images/hero_img/img1.png'
import img5 from '../../images/hero_img/img2.png'
import img6 from '../../images/hero_img/img3.png'
// react-router-dom
import { Link } from 'react-router-dom';


const data = [
    {
        id: 1,
        img: img3,
        nomi: 'Kredit to’y',
    },
    {
        id: 2,
        img: img4,
        nomi: 'Menenjer',
    },
    {
        id: 3,
        img: img5,
        nomi: 'Xizmatlar',
    },
    {
        id: 4,
        img: img6,
        nomi: 'Aloqa'
    }
]

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero_main">
                <div className="hero_main_carusel">
                    <Swiper className="hero_main_carusel_div"
                        modules={[Pagination, Autoplay, Thumbs]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{
                            delay: 2500,
                          }}
                    >
                        <img src={img1} alt="" className='hero_main_carusel_div_div_thumb_img'/>
                        <SwiperSlide className="hero_main_carusel_div_div" >
                            <div className="hero_main_carusel_div_div_thumb bir">
                                <p className='hero_main_carusel_div_div_thumb_p'>QULAY KREDIT </p>
                                <p className='hero_main_carusel_div_div_thumb_p1'>Barcha xizmatlarni kredit orqali yopish imkoni</p>
                                <Link to='/' className='hero_main_carusel_div_div_thumb_button'>Batafsil ma’lumot</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero_main_carusel_div_div" >
                            <div className="hero_main_carusel_div_div_thumb ikki">
                                <p className='hero_main_carusel_div_div_thumb_p'>HASHAMATLI ORZULAR RO’YOBI</p>
                                <p className='hero_main_carusel_div_div_thumb_p1'>Orzularingizni birga ro’yobga chiqaramiz</p>
                                <Link to='/' className='hero_main_carusel_div_div_thumb_button'>Batafsil ma’lumot</Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero_main_carusel_div_div" >
                            <div className="hero_main_carusel_div_div_thumb uch">
                                <p className='hero_main_carusel_div_div_thumb_p'>Mo’jaz to’yxona</p>
                                <p className='hero_main_carusel_div_div_thumb_p1'>Barcha xizmatlarni kredit orqali yopish imkoni</p>
                                <Link to='/' className='hero_main_carusel_div_div_thumb_button'>Batafsil ma’lumot</Link>
                            </div>
                        </SwiperSlide>
                        <img src={img2} alt="" className='hero_main_carusel_div_div_thumb_img1'/>
                    </Swiper>
                </div>
                <div className="hero_main_bottom">
                    {
                        data.map( item => {
                            return (
                                <Link to='/' className="hero_main_bottom_div" key={item.id}>
                                    <div className="hero_main_bottom_div_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <p className='hero_main_bottom_div_p'>{item.nomi}</p>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
