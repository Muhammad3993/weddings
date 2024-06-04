import React from 'react'
// Css
import './manager.css'
// Icon
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
// Img
import img from '../../images/manager-img/img.png'
import img1 from '../../images/manager-img/img1.png'
// react-router-dom
import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    nomi: 'Yubiley to’ylar / Sunnat to’ylari',
    btn: 'Taklifnomalar',
  },
  {
    id: 2,
    nomi: 'Tug’ilgan kun / banketlar',
    btn: 'Taklifnomalar',
  },
  {
    id: 3,
    nomi: 'Yubiley to’ylar / Sunnat to’ylari',
    btn: 'Taklifnomalar',
  }
]


const Manager = () => {
  return (
    <div className='manager'>
        <div className="container">
          <div className="manager_main">
            <div className="manager_main_div">
              <p className="manager_main_div_p"><span className='manager_main_div_p_span'></span>Menenjerlar</p>
              <p className='manager_main_div_p1'>Menejerlar xizmatlari</p>
            </div>
            <div className="manager_main_products">
              <div className="manage_main_product">
                <div className="manager_main_product_big">
                  <img src={img} alt="" />
                </div>
                <p className='manage_main_product_p'>O’zbekona to’ylar</p>
                <Link to='/' className='manage_main_product_btn'>Batafsil <MdOutlineKeyboardArrowRight className='manage_main_product_btn_icon'/></Link>
              </div>
              <div className="manager_main_products_div">
                {
                  data.map(item => (
                    <div className="manager_main_products_div_product" key={item.id}>
                      <div className="manager_main_products_div_product_text">
                        <p className='manager_main_products_div_product_text_p'>Yubiley to’ylar / Sunnat to’ylari</p>
                        <Link to='/' className='manager_main_products_div_product_text_btn'>Taklifnomalar</Link>
                        <Link to='/' className='manager_main_products_div_product_text_btn1'>Batafsil <MdOutlineKeyboardArrowRight className='manager_main_products_div_product_text_btn1_icon'/></Link>
                      </div>
                      <div className="manager_main_products_div_product_img">
                        <img src={img1} alt="" />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Manager