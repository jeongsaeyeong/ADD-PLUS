import React from 'react'

const MoigosaCont = ({ setYear, grade }) => {
    return (
        <div className="score_cont">
            <p className="score_choice_title">{grade} 모의고사</p>
            <div className="score_select">
                <select name="" id="">
                    <option value="2024" onClick={() => { setYear('2024') }}>2024 학년도 (현재 고3)</option>
                    <option value="2023" onClick={() => { setYear('2023') }}>2023 학년도 (현재 고3)</option>
                    <option value="2022" onClick={() => { setYear('2022') }}>2022 학년도 (현재 고3)</option>
                </select>
            </div>
        </div>
    )
}

export default MoigosaCont