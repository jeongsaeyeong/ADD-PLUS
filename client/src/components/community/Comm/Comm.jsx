import React, { useEffect, useState } from 'react'
import CommSide from './CommSide'
import axios from 'axios';
import { Link } from 'react-router-dom';

import moment from 'moment'
import "moment/locale/ko";

const Comm = () => {
    const [postList, setPostList] = useState([]);
    console.log(postList)

    useEffect(() => {
        axios.post("/api/post/list")
            .then((res) => {
                if (res.data.success) {
                    setPostList([...res.data.postList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY MMM Do") + "(수정됨)";
        } else {
            return moment(b).format("YYYY MMM Do")
        }
    }

    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
                <div className='main'>
                    <div className="comm__top">
                        <div className="comm_tab">
                            <ul>
                                <li className='main-tab active'>인기</li>
                                <li className='main-tab'>최신</li>
                            </ul>
                        </div>
                        <div className="comm__search">
                            <input type="text" className='search' />
                            <ul>
                                <Link to="/commwrite"><li>글쓰기</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="comm__bottom">
                        {postList.map((post, key) => {
                            return (<div className="comm__box" key={key}>
                                <div className='box'>
                                    <div className='emoji'>
                                        <div className='emoticon'></div>
                                        <div className="like__btn"></div>
                                    </div>
                                    <div className="comm__header">
                                        <div className="cate">{post.cate}</div>
                                        <h2><Link to={`/commdetail/${post.postNum}`}>{post.title}</Link></h2>
                                    </div>
                                    <div className="comm__text">
                                        <p>{post.content}</p>
                                        <p className='anothor'>{post.author.userCate}</p>
                                    </div>
                                </div>
                                <div className="comm__info">
                                    <div>
                                        <div className="watch">
                                            <div></div>
                                            <p>54</p>
                                        </div>
                                        <div className="like">
                                            <div></div>
                                            <p>987</p>
                                        </div>
                                    </div>
                                    <div className="date">{SetTime(post.createdAt, post.updatedAt)}</div>
                                </div>
                            </div>)
                        })}
                    </div>
                    <ul className="pagination">
                        <li className='left'><Link to="/"></Link></li>
                        <li><Link to="/" className='active'>1</Link></li>
                        <li><Link to="/">2</Link></li>
                        <li><Link to="/">3</Link></li>
                        <li><Link to="/">4</Link></li>
                        <li><Link to="/">5</Link></li>
                        <li className='right'><Link to="/"></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Comm