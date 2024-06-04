import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation'; 
// import required modules
import {Navigation } from "swiper";
// Css
import './managerhero.css'
// Img
import img from '../../images/manager_hero_img/img1.png'
// Icon
import {MdOutlineWatchLater} from 'react-icons/md'

const data = [
  {
    id: 1,
    nomi: 'To`y',
  },
  {
    id: 2,
    nomi: 'Banket',
  },
  {
    id: 3,
    nomi: 'Tug’ilgan kun',
  },
  {
    id: 4,
    nomi: 'Bayram',
  },
  {
    id: 5,
    nomi: 'Tug’ilgan kun',
  },
  {
    id: 6,
    nomi: 'Koorparativ',
  }
]

const ManagerHero = () => {
  return (
    <div className='manager_hero'>
      <div className="manager_hero_main">
          <div className="container manager_hero_main_container">
              <p className='manager_hero_main_p'>Menenjer xizmati</p>
              <p className='manager_hero_main_p1'>Barcha xizmatlarni kredit orqali yopish imkoni</p>
              <Link to='/' className='manager_hero_main_btn'>Biz haqimizda</Link>
              <div className='manager_hero_main_div'>
                <div className="manager_hero_main_div_img">
                  <img src={img} alt="" />
                </div>
                <div className="manager_hero_main_div_bottom">
                  <p className='manager_hero_main_div_bottom_p'>Ish rejamiz aniq tartibda ketadi</p>
                </div>
              </div>
              <div className="manager_hero_main_div1">
                <div className="manager_hero_main_div_img1"></div>
                <div className="manager_hero_main_div_bottom1">
                  <p className='manager_hero_main_div_bottom1_p'>Tashvishlanmang</p>
                  <div className="manager_hero_main_div_bottom1_div">
                    <MdOutlineWatchLater className='manager_hero_main_div_bottom1_div_icon'/>
                    <p className='manager_hero_main_div_bottom1_div_p1'>Soat: 9.00 da, Yakshanba</p>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className="manager_hero_carusel container">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            920: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          rewind={true}
          navigation={true}
          modules={[ Navigation]}
          className="mySwiper"
        >
          {
            data.map(item => (
            <SwiperSlide key={item.id}>
              <Link to='/' className='manager_hero_carusel_div'>
                <p className='manager_hero_carusel_div_p'>{item.nomi}</p>
              </Link>
            </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default ManagerHero