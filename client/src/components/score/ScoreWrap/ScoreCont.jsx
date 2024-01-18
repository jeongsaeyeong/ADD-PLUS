import React from 'react'

const ScoreCont = ({ setYear, grade }) => {
    return (
        <div className="score_cont">
            <p className="score_choice_title">{grade}</p>
            <div className="score_select">
                <select name="year" id="year">
                    <option value="2024" onClick={() => { setYear('2024') }}>2024 학년도</option>
                    <option value="2023" onClick={() => { setYear('2023') }}>2023 학년도</option>
                    <option value="2022" onClick={() => { setYear('2022') }}>2022 학년도</option>
                </select>
            </div>
        </div>
    )
}

export default ScoreCont