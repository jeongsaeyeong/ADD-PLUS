import React from 'react'
import MypageSide from './MypageSide'

const MypageInput = () => {
    return (
        <>
            <div className='score__Wrap mypage_Wrap'>
                <MypageSide />

                <div className='main'>
                    <div className="score_title">
                        <h3>성적 입력하기</h3>
                    </div>
                    <div className="score_cont">
                        <table>
                            <tr>
                                <td>학기별</td>
                                <th>
                                    <table className='score_wrap'>
                                        <tr>
                                            <td colSpan={2}>1학년</td>
                                            <td colSpan={2}>2학년</td>
                                            <td colSpan={2}>3학년</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    1학기<button className='active'>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    2학기<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    1학기<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    2학기<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    1학기<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    2학기<button>입력</button>
                                                </div>
                                            </th>
                                        </tr>
                                    </table>

                                    <div className="score_cont">
                                        <p className="score_choice_title">1학년 1학기</p>
                                        <div className="score_select">
                                            <select name="" id="">
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <table className="score_list">
                                        <tr>
                                            <td style={{ width: "7%" }}>번호</td>
                                            <td>교과종류 구분</td>
                                            <td>교과</td>
                                            <td colSpan="2">과목</td>
                                            <td>단위수</td>
                                            <td>석차등급</td>
                                            <td></td>
                                        </tr>
                                        <tr className='score_mobile_list'>
                                            <th className='no'>1</th>
                                            <th>
                                                <div className='score_select'>
                                                    <select name="" id="">
                                                        <option value="">국어1</option>
                                                        <option value="">수학1</option>
                                                        <option value="">영어1</option>
                                                        <option value="">사회1</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='score_select'>
                                                    <select name="" id="">
                                                        <option value="">국어1</option>
                                                        <option value="">수학1</option>
                                                        <option value="">영어1</option>
                                                        <option value="">사회1</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='score_select'>
                                                    <select name="" id="">
                                                        <option value="">국어1</option>
                                                        <option value="">수학1</option>
                                                        <option value="">영어1</option>
                                                        <option value="">사회1</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th className='width100'>
                                                <div>
                                                    <input type='text' placeholder='년도' />
                                                </div>
                                            </th>
                                            <th className='width100 m_w50'>
                                                <div>
                                                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='단위수' />
                                                </div>
                                            </th>
                                            <th className='width100 m_w50'>
                                                <div>
                                                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='석차등급' />
                                                </div>
                                            </th>
                                            <th className='width100 m_delete'>
                                                <button>삭제하기</button>
                                            </th>
                                        </tr>
                                    </table>

                                    <button className='scorePlus_btn'>추가하기 +</button>
                                </th>
                            </tr>
                            <tr>
                                <td>모의고사</td>
                                <th>
                                    <table className='score_wrap'>
                                        <tr>
                                            <td colSpan={2}>1학년</td>
                                            <td colSpan={2}>2학년</td>
                                            <td colSpan={2}>3학년</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div>
                                                    6월<button className='active'>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    9월<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    6월<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    9월<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    6월<button>입력</button>
                                                </div>
                                            </th>
                                            <th>
                                                <div>
                                                    9월<button>입력</button>
                                                </div>
                                            </th>
                                        </tr>
                                    </table>

                                    <div className="score_cont">
                                        <p className="score_choice_title">1학년 6월 모의고사</p>
                                        <div className="score_select">
                                            <select name="" id="">
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                                <option value="">2024 학년도 (현재 고3)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <table className="score_list">
                                        <tr>
                                            <td style={{ width: "5%" }}>번호</td>
                                            <td>과목</td>
                                            <td>선택과목</td>
                                            <td>표준 점수</td>
                                            <td>백분위</td>
                                            <td>등급</td>
                                            <td></td>
                                        </tr>
                                        <tr className='score_mobile_list'>
                                            <th className='no'>1</th>
                                            <th>
                                                <div className='score_select mypage_select'>
                                                    <select name="" id="">
                                                        <option value="">국어1</option>
                                                        <option value="">수학1</option>
                                                        <option value="">영어1</option>
                                                        <option value="">사회1</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th>
                                                <div className='score_select mypage_select'>
                                                    <select name="" id="">
                                                        <option value="">국어1</option>
                                                        <option value="">수학1</option>
                                                        <option value="">영어1</option>
                                                        <option value="">사회1</option>
                                                    </select>
                                                </div>
                                            </th>
                                            <th className='width100 m_w50'>
                                                <div>
                                                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='단위수' />
                                                </div>
                                            </th>
                                            <th className='width100 m_w50'>
                                                <div>
                                                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='단위수' />
                                                </div>
                                            </th>
                                            <th className='width100 m_w50'>
                                                <div>
                                                    <input className='input_num' style={{ width: "100%" }} type='text' placeholder='석차등급' />
                                                </div>
                                            </th>
                                            <th className='width100 m_delete'>
                                                <button>삭제하기</button>
                                            </th>
                                        </tr>
                                    </table>

                                    <button className='scorePlus_btn'>추가하기 +</button>
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MypageInput