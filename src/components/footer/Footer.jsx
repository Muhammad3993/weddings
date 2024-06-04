import { Link } from 'react-router-dom';
import './footer.css';

// import icons
import {RiPhoneLine} from 'react-icons/ri';
import {GoMailRead} from 'react-icons/go';
import {FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane, FaAngleUp} from 'react-icons/fa';

const Footer = () => {

 const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
 }

  return (
    <>
    <div className='footer'>
        <div className="container footer-box">
            <div className="footer-element footer-first">
                <Link to='/' className='foot-logo'>Weddings</Link>
                <Link to='/register' className='foot-register'>Register</Link>
            </div>
            <div className="footer-element">
                <h3 className="footer-header">
                    Aloqa
                </h3>
                <a href="tel:+998999999999" className="footer-link">
                    <div className="footer-link-icon">
                        <RiPhoneLine/>
                    </div>
                    <div className="footer-link-text">
                        +99899 999 99 99 
                    </div>
                </a>
                <a href="tel:+998999999999" className="footer-link">
                    <div className="footer-link-icon">
                        <RiPhoneLine/>
                    </div>
                    <div className="footer-link-text">
                        +99899 999 99 99 
                    </div>
                </a>
                <a href="https://info@tantana.uz" className="footer-link">
                    <div className="footer-link-icon">
                        <GoMailRead/>
                    </div>
                    <div className="footer-link-text">
                        info@tantana.uz
                    </div>
                </a>
                <a href="https://info@tantana.uz" className="footer-link">
                    <div className="footer-link-icon">
                        <GoMailRead/>
                    </div>
                    <div className="footer-link-text">
                        info@tantana.uz
                    </div>
                </a>
                <div className="footer-icons-box footer-link">
                    <a href="https://www.facebook.com/" className="footer-icon-link">
                        <FaFacebookF/>
                    </a>
                    <a href="https://www.instagram.com/" className="footer-icon-link">
                        <FaInstagram/>
                    </a>
                    <a href="https://www.youtube.com/" className="footer-icon-link">
                        <FaYoutube/>
                    </a>
                    <a href="https://t.me/" className="footer-icon-link">
                        <FaTelegramPlane/>
                    </a>
                </div>
            </div>
            <div className="footer-element">
                <h3 className="footer-header">
                    Xizmatlar
                </h3>
                <Link to={'/'} className="footer-link">
                    To’y liboslari
                </Link>
                <Link to={'/'} className="footer-link">
                    Taklifnomalar
                </Link>
                <Link to={'/'} className="footer-link">
                    Foto va video
                </Link>
                <Link to={'/'} className="footer-link">
                    San’atkolar
                </Link>
                <Link to={'/'} className="footer-link">
                    Love Story
                </Link>
            </div>
            <div className="footer-element">
                <h3 className="footer-header">
                    Bo'limlar
                </h3>
                <Link to={'/'} className="footer-link">
                    Asal oyi
                </Link>
                <Link to={'/'} className="footer-link">
                    Fotolar
                </Link>
                <Link to={'/'} className="footer-link">
                    Takliflar
                </Link>
                <Link to={'/'} className="footer-link">
                    Biz haqimizda
                </Link>
                <Link to={'/'} className="footer-link">
                    Kredit turlari
                </Link>
            </div>
        </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            Smart Group tomonidan ishlab chiqilgan. 2022-yil. version: 1.0.2
        </div>
    </div>
    <div className="footer-for-top" onClick={toTop}>
        <FaAngleUp/>
    </div>
    </>
  )
}

export default Footer