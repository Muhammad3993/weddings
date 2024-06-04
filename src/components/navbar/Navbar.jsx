import { Context } from './../../context/Context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

// import icons
import {TbWorld} from 'react-icons/tb';
import {FaAngleDown, FaUserAlt} from 'react-icons/fa';
import {FiShoppingCart} from 'react-icons/fi';
import {CgMenu} from 'react-icons/cg';
import {VscChromeClose} from 'react-icons/vsc';

const Navbar = () => {

    const {auth} = useContext(Context);
    const [navToggle, setNavToggle] = useState(false)

  return (
    <>
    <div className='navbar'>
      <div className="container_navbar nav-box">
        <Link className='logo-nav' to="/">
            Weddings
        </Link>
        <div className={navToggle ? "nav-links active": "nav-links" } >
            <Link to="/" className='nav-link'>
                Katalog
            </Link>
            <Link to="/manager" className='nav-link'>
                Manager
            </Link>
            <Link to="/" className='nav-link'>
                Kredit
            </Link>
            <Link to="/" className='nav-link'>
                Asal oyi
            </Link>
            <Link to="/" className='nav-link'>
                Portfolio
            </Link>
            <Link to="/" className='nav-link'>
                Aloqa
            </Link>
            <Link to='/login' className="nav-login nav-login-res">
                kirish
            </Link>
            <Link to='/register' className="nav-login nav-register nav-login-res">
                <div className="nav-register-icon">
                    <FaUserAlt/>
                </div>
                Registratsiya
            </Link>
        </div>
        <div className="nav-right-box">
            <div className="nav-lang">
                <div className="nav-current-lang">
                    <span className="lang-icon">
                        <TbWorld/>
                    </span>
                    <div className="nav-lang-text">
                        uz
                    </div>
                    <div className="nav-lang-down">
                        <FaAngleDown/>
                    </div>
                </div>
                <div className="choose-lang-box">
                    <div>uz</div>
                    <div>en</div>
                    <div>ru</div>
                </div>
            </div>
            <div className="nav-res-bar nav-login" onClick={()=>setNavToggle(!navToggle)}>
                { 
                    navToggle ?
                    <VscChromeClose/>:
                    <CgMenu/>
                }
            </div>
            <div className="nav-actions">
                {
                    auth ? <>
                        <Link to='/' className="nav-cart">
                            <FiShoppingCart/>
                            <div className="nav-cart-count">0</div>
                        </Link>
                        <Link to='/' className="nav-cart">
                            <FaUserAlt/>
                            <div className="nav-cart-count">0</div>
                        </Link>
                    </>:<>
                        <Link to='/login' className="nav-login">
                            kirish
                        </Link>
                        <Link to='/register' className="nav-login nav-register">
                            <div className="nav-register-icon">
                                <FaUserAlt/>
                            </div>
                            Registratsiya
                        </Link>
                    </>
                }
            </div>
        </div>
      </div>
    </div>
    <div className="navbar-free"></div>
    </>
  )
}

export default Navbar
