import { LuSearch } from "react-icons/lu";
import React from 'react'

const ScoreCheckSearch = ({ searchCollege, setSearchCollege }) => {
    return (
        <div className="college_wrap">
            <input
                type="text"
                placeholder='대학명을 입력해주세요'
                value={searchCollege}
                onChange={(e) => { setSearchCollege(e.currentTarget.value) }}
            />
            <LuSearch />
        </div>
    )
}

export default ScoreCheckSearch