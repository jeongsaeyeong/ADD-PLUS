import React, { useState } from 'react'

const CommSide = ({ setCate }) => {
    const [category, setCategory] = useState('일반게시판')

    const handlebutton = (cate) => {
        setCategory(cate)
    }

    return (
        <>
            <div className="nav">
                <h2>ADD COMM</h2>
                <ul>
                    <button
                        className={category === '일반게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('일반게시판')
                            handlebutton('일반게시판')
                        }}
                    >
                        <div className='smile'></div>
                        일반 게시판
                    </button>
                    <button
                        className={category === 'Hot게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('Hot게시판')
                            handlebutton('Hot게시판')
                        }}
                    >
                        <div className='hot'></div>
                        HOT게시판
                    </button>
                    <button
                        className={category === '입시결과게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('입시결과게시판')
                            handlebutton('입시결과게시판')
                        }}
                    >
                        <div className='medal'></div>
                        입시결과 게시판
                    </button>
                    <button
                        className={category === '대학생게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('대학생게시판')
                            handlebutton('대학생게시판')
                        }}
                    >
                        <div className='hat'></div>
                        대학생 게시판
                    </button>
                    <button
                        className={category === '수험생게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('수험생게시판')
                            handlebutton('수험생게시판')
                        }}
                    >
                        <div className='pencil'></div>
                        수험생 게시판
                    </button>

                    <button
                        className={category === '홍보게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('홍보게시판')
                            handlebutton('홍보게시판')
                        }}
                    >
                        <div className='eye'></div>
                        홍보 게시판
                    </button>
                    <button
                        className={category === '학부모게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('학부모게시판')
                            handlebutton('학부모게시판')
                        }}
                    >
                        <div className='ame'></div>
                        학부모 게시판
                    </button>
                    <button
                        className={category === '교사게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('교사게시판')
                            handlebutton('교사게시판')
                        }}
                    >
                        <div className='glass'></div>
                        교사 게시판
                    </button>
                    <button
                        className={category === '정보게시판' ? 'active' : ''}
                        onClick={() => {
                            setCate('정보게시판')
                            handlebutton('정보게시판')
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