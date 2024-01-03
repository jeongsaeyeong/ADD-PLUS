import React, { useEffect, useState } from 'react'
import CommSide from './CommSide'
import axios from 'axios';
import { Link } from 'react-router-dom';

import moment from 'moment'
import "moment/locale/ko";
import { useSelector } from 'react-redux';

const Comm = () => {
    const [postList, setPostList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [sort, setSort] = useState("인기순")
    const [active, setActive] = useState('best')
    const [check, setCheck] = useState(false)
    const [postId, setPostId] = useState('')

    const user = useSelector((state) => state.user)

    useEffect(() => {
        getpostList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort])

    const getpostList = () => {
        let body = {
            sort: sort,
            searchTerm: searchTerm,
        }

        axios.post("/api/post/list", body)
            .then((res) => {
                if (res.data.success) {
                    setPostList([...res.data.postList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY MMM Do") + "(수정됨)";
        } else {
            return moment(b).format("YYYY MMM Do")
        }
    }

    const SearchHandeler = () => {
        getpostList();
    }

    const onLike = (e) => {
        e.preventDefault()
        setCheck(!(check))

        let body = {
            uid: user.uid,
            check: check,
            postId: postId
        }

        axios.post('/api/post/like', body)
            .then((res) => {
                if (res.data.success) {
                    alert("좋아요 완료되었습니다.");
                } else {
                    alert("좋아요 실패하였습니다.");
                }
            })
    }

    return (
        <>
            <div className="comm__Wrap">
                <CommSide />
                <div className='main'>
                    <div className="comm__top">
                        <div className="comm_tab">
                            <div>
                                <button
                                    className={`main-tab ${active === 'best' ? 'active' : ''} `}
                                    onClick={() => { setSort('인기순'); setActive('best') }}
                                >인기</button>
                                <button
                                    className={`main-tab ${active === 'latest' ? 'active' : ''} `}
                                    onClick={() => { setSort('최신순'); setActive('latest') }}
                                >최신</button>
                            </div>
                        </div>
                        <div className="comm__search">
                            <input
                                type="text"
                                className='search'
                                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) SearchHandeler();
                                }}
                            />
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
                                        <button
                                            className="like__btn"
                                            onClick={(e) => { onLike(e); setPostId(post._id) }}
                                        ></button>
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
                                            <p>{post.veiwNum}</p>
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