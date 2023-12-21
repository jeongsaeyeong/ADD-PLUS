import React, { useState } from 'react'

import { FaRegMap } from "react-icons/fa";
import { FiTable } from "react-icons/fi";

const MapSide = ({ onTabClick }) => {
    const [active, setActive] = useState("전체 지도");

    const handleClick = (e) => {
        onTabClick(e)
        setActive(e)
    }
    return (
        <>
            <div className="nav">
                <h2>ADD MAP</h2>
                <ul>
                    <li className={active === '전체 지도' ? 'active' : ''} onClick={() => handleClick('전체 지도')}>
                        <div className='menu__img'><FaRegMap /></div>
                        <button type='button'>전체 지도</button>
                    </li>
                    <li className={active === '학과 정보' ? 'active' : 'department'} onClick={() => handleClick('학과 정보')}>
                        <div className='menu__img'><FiTable /></div>
                        <button type='button'>학과 정보</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MapSide
