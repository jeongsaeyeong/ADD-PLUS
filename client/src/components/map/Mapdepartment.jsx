import React from 'react'

import { PiMagnifyingGlassBold } from "react-icons/pi";

const Mapdepartment = () => {
    return (
        <div className="department__wrap">
            <div className="depart__header">
                <h3 className="depart__title">
                    전국 학과 정보
                </h3>
                <div className="depart__search">
                    <div className="search__img"><PiMagnifyingGlassBold /></div>
                    <label htmlFor="DepartSearchKeyword" className='blind'>학과 검색 영역</label>
                    <input type="search" name="DepartSearchKeyword" id="DepartSearchKeyword" placeholder="학과명 검색" required />
                </div>
            </div>
        </div>
    )
}

export default Mapdepartment
