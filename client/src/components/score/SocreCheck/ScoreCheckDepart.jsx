import React from 'react'

const ScoreCheckDepart = ({ selectedDepartment, setSelectedDepartment }) => {
    const departments = [
        '심리학', '사회학', '정치외교과', '국제학', '아동 가족학',
        '정치외교과', '유아교육과', '패션디자인과', '경제학과'
    ];

    const handleDepartmentClick = (department) => {
        setSelectedDepartment(department);
    };

    return (
        <div className='depart_wrap'>
            <p className='depart_title'>학과 선택</p>
            <ul>
                {departments.map((department, index) => (
                    <li
                        key={index}
                        className={selectedDepartment === department ? 'active' : ''}
                        onClick={() => handleDepartmentClick(department)}
                    >
                        {department}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ScoreCheckDepart