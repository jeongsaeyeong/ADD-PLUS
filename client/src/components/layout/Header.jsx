import React from 'react'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/img/header_logo.png';

const Header = () => {
    return (
        <header id="header" role='banner'>
            <div className="header__left">
                <div className="ham__menu">
                    <span></span>
                </div>

                <h1 className="logo">
                    <Link to="/"><img src={logoImg} alt="add logo" /></Link>
                </h1>

                <nav className="nav">
                    <ul>
                        <li><Link to="/" className='active'>ADD MAP</Link></li>
                        <li><Link to="/comm">ADD COMM</Link></li>
                        <li><Link to="/score">ADD SCORE</Link></li>
                        <li><Link to="/mypage">MYPAGE</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="header__right">
                <Link to="/">홈</Link>
                <Link to="/">로그인</Link>
            </div>
        </header>
    )
}

export default Header
