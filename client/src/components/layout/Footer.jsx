import React from 'react'
import { Link } from 'react-router-dom';

import logoFotterImg from '../../assets/img/footer_logo.png';

const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <div className="footer__wrap container">
                <div className="footer__logo">
                    <img src={logoFotterImg} alt="add logo" />
                </div>
                <div className="footer__info">
                    <div className="privacy__links">
                        <ul>
                            <li><Link to="/">개인정보처리방침</Link></li>
                            <li><Link to="/">정보 공개</Link></li>
                            <li><Link to="/">홈페이지 운영지침</Link></li>
                        </ul>
                    </div>
                    <div className="copyright__info">
                        <p>Copyrightⓒ 2023.ADD. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
