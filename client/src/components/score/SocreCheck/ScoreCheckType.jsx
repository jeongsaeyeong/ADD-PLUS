import React from 'react'

const ScoreCheckType = ({ setSelectedType, selectedType }) => {

    const Type = [
        "학생부교과전형", "학생부종합전형", "논술고사", "실기고사", "특기자 전형", "사회자배려전형"
    ]

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div className='type_wrap'>
            <p className='depart_title'>전형 선택</p>
            <ul>
                {Type.map((type, index) => (
                    <li
                        key={index}
                        className={selectedType === type ? 'active' : ''}
                        onClick={() => handleTypeClick(type)}
                    >
                        {type}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ScoreCheckType