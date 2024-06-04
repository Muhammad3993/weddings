import React from 'react'
// Css
import './servicess.css'

// Img
import img from '../../images/servicess/img.png'
import img1 from '../../images/servicess/img1.png'
import img2 from '../../images/servicess/img2.png'
import img3 from '../../images/servicess/img3.png'
import img4 from '../../images/servicess/img4.png'
// react-router-dom
import { Link } from 'react-router-dom'
// import img from '../../images/hero_img/img9.png'


const data = [
    {
        id: 1,
        nomi: 'To’yxona'
    },
    {
        id: 2,
        nomi: 'Taklifnomalar'
    },
    {
        id: 3,
        nomi: 'Gullar'
    },
    {
        id: 4,
        nomi: 'Uzuk'
    },
    {
        id: 5,
        nomi: 'Sahna bezagi'
    },
    {
        id: 6,
        nomi: 'San’atkorlar'
    },
    {
        id: 7,
        nomi: 'To’y liboslari'
    },
    {
        id: 8,
        nomi: 'Sartarosh/Stilistlar'
    },
    {
        id: 9,
        nomi: 'Sozandalar'
    },
    {
        id: 10,
        nomi: 'To’y avtomobili'
    },
    {
        id: 11,
        nomi: 'Shirinliklar'
    },
    {
        id: 12,
        nomi: 'Sovg’alar'
    },
    {
        id: 13,
        nomi: 'Foto Video operator'
    },
    {
        id: 14,
        nomi: 'Boshlovchilar'
    },
    {
        id: 15,
        nomi: 'Love Story'
    },
    {
        id: 16,
        nomi: 'Multi qahramonlar'
    },
    {
        id: 17,
        nomi: 'FotoStudio'
    },
    {
        id: 18,
        nomi: 'Fotosessiya'
    }
]

const Servicess = () => {
  return (
    <div className='servicess'>
        <div className="container">
            <div className="servicess_main">
                <div className="servicess_main_text">
                    <p className='servicess_main_text_p'>Xizmatlar</p>
                    <p className='servicess_main_text_p1'>Sizga qulay bo’lgan xizmatlar to’plamidan foydalanib vaqtingizni va pulingizni tejash imkoni</p>
                </div>
                <div className="servicess_main_bottom">
                    <div className="servicess_main_bottom_buttons">
                        {
                            data.map(item => (
                                <Link to='/' className="servicess_main_bottom_button" key={item.id}>
                                    <p className='servicess_main_bottom_button_p'>{item.nomi}</p>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="servicess_main_bottom_products">
                        <div className="servicess_main_bottom_products_left">
                            <div className="servicess_main_bottom_products_left_top">
                                <div className="servicess_main_bottom_products_img">
                                    <img src={img} alt="" />
                                    <div className='servicess_main_bottom_products_img_hover'>
                                        <p className='servicess_main_bottom_products_img_hover_p'>To’yxona</p>
                                        <p className='servicess_main_bottom_products_img_hover_p1'>500 kishilik</p>
                                        <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                    </div>
                                </div>
                                <div className="servicess_main_bottom_products_left_top_div">
                                    <div className="servicess_main_bottom_products_img">
                                        <img src={img1} alt="" />
                                        <div className='servicess_main_bottom_products_img_hover'>
                                            <p className='servicess_main_bottom_products_img_hover_p'>Boshlovchilar</p>
                                            <p className='servicess_main_bottom_products_img_hover_p1'>500 kishilik</p>
                                            <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                        </div>
                                    </div>
                                    <div className="servicess_main_bottom_products_img">
                                        <img src={img2} alt="" />   
                                        <div className='servicess_main_bottom_products_img_hover'>
                                            <p className='servicess_main_bottom_products_img_hover_p'>Stilist</p>
                                            <p className='servicess_main_bottom_products_img_hover_p1'>Soch turmagi va liboslar</p>
                                            <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                        </div>                 
                                    </div>
                                </div>
                            </div>
                            <div className="servicess_main_bottom_products_img">
                                <img src={img3} alt="" />
                                <div className='servicess_main_bottom_products_img_hover'>
                                    <p className='servicess_main_bottom_products_img_hover_p'>Fotostudio</p>
                                    <p className='servicess_main_bottom_products_img_hover_p1'>Sifatli foto va video mahsulotlar</p>
                                    <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                </div>
                            </div>
                        </div>
                        <div className="servicess_main_bottom_products_right">
                            <div className="servicess_main_bottom_products_img">
                                <img src={img3} alt="" />
                                <div className='servicess_main_bottom_products_img_hover'>
                                    <p className='servicess_main_bottom_products_img_hover_p'>Fotostudio</p>
                                    <p className='servicess_main_bottom_products_img_hover_p1'>Sifatli foto va video mahsulotlar</p>
                                    <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                </div>
                            </div>
                            <div className="servicess_main_bottom_products_right_top">
                                <div className="servicess_main_bottom_products_img">
                                    <img src={img4} alt="" />
                                    <div className='servicess_main_bottom_products_img_hover'>
                                        <p className='servicess_main_bottom_products_img_hover_p'>Uzuklar</p>
                                        <p className='servicess_main_bottom_products_img_hover_p1'>To’yxona va banketlarni bezash</p>
                                        <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                    </div>
                                </div>
                                <div className="servicess_main_bottom_products_img">
                                    <img src={img} alt="" />  
                                    <div className='servicess_main_bottom_products_img_hover'>
                                        <p className='servicess_main_bottom_products_img_hover_p'>Sahna bezagi</p>
                                        <p className='servicess_main_bottom_products_img_hover_p1'>To’yxona va banketlarni bezash</p>
                                        <Link to='/' className='servicess_main_bottom_products_img_hover_btn'>Ko`rish</Link>
                                    </div>             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/' className='servicess_main_btn'>Barchasini ko’rish</Link>
            </div>
        </div>
    </div>
  )
}

export default Servicess