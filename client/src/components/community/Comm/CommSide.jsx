import React, { useState } from 'react'

const CommSide = ({ setCate }) => {
    const [category, setCategory] = useState('일반')

    const handlebutton = (cate) => {
        setCategory(cate)
    }

    return (
        <>
            <div className="nav">
                <h2>ADD COMM</h2>
                <ul>
                    <button
                        className={category === '일반' ? 'active' : ''}
                        onClick={() => {
                            setCate('일반')
                            handlebutton('일반')
                        }}
                    >
                        <div className='smile'></div>
                        일반 게시판
                    </button>
                    <button
                        className={category === 'Hot' ? 'active' : ''}
                        onClick={() => {
                            setCate('Hot')
                            handlebutton('Hot')
                        }}
                    >
                        <div className='hot'></div>
                        HOT게시판
                    </button>
                    <button
                        className={category === '입시결과' ? 'active' : ''}
                        onClick={() => {
                            setCate('입시결과')
                            handlebutton('입시결과')
                        }}
                    >
                        <div className='medal'></div>
                        입시결과 게시판
                    </button>
                    <button
                        className={category === '대학생' ? 'active' : ''}
                        onClick={() => {
                            setCate('대학생')
                            handlebutton('대학생')
                        }}
                    >
                        <div className='hat'></div>
                        대학생 게시판
                    </button>
                    <button
                        className={category === '수험생' ? 'active' : ''}
                        onClick={() => {
                            setCate('수험생')
                            handlebutton('수험생')
                        }}
                    >
                        <div className='pencil'></div>
                        수험생 게시판
                    </button>

                    <button
                        className={category === '홍보' ? 'active' : ''}
                        onClick={() => {
                            setCate('홍보')
                            handlebutton('홍보')
                        }}
                    >
                        <div className='eye'></div>
                        홍보 게시판
                    </button>
                    <button
                        className={category === '학부모' ? 'active' : ''}
                        onClick={() => {
                            setCate('학부모')
                            handlebutton('학부모')
                        }}
                    >
                        <div className='ame'></div>
                        학부모 게시판
                    </button>
                    <button
                        className={category === '교사' ? 'active' : ''}
                        onClick={() => {
                            setCate('교사')
                            handlebutton('교사')
                        }}
                    >
                        <div className='glass'></div>
                        교사 게시판
                    </button>
                    <button
                        className={category === '정보' ? 'active' : ''}
                        onClick={() => {
                            setCate('정보')
                            handlebutton('정보')
                        }}
                    >
                        <div className='forder'></div>
                        정보 게시판
                    </button>
                </ul>
            </div>
        </>
    )
}

export default CommSide