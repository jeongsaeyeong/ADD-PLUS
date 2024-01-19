import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MypageSide from './MypageSide'
import { useSelector } from 'react-redux'
import moment from 'moment'
import axios from 'axios'

const MypageActive = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [postList, setPostList] = useState([]); // 먼저 초기화되도록 변경

    const user = useSelector((state) => state.user)

    useEffect(() => {
        getpostList();
    }, [user]);

    const getpostList = () => {
        let body = {
            uid: user._id
        };

        axios.post("/api/post/mylist", body)
            .then((res) => {
                if (res.data.success) {
                    setPostList([...res.data.postList]);
                    console.log(postList)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(postList.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const SetTime = (a) => {
        return moment(a).format("YYYY MMM Do");
    }

    return (
        <>
            <div className="comm__Wrap mypage_Wrap">
                <MypageSide />
                <div className='main'>
                    <div className="comm__top">
                        <div className="comm_tab">
                            <div>
                                <button className='main-tab active'>작성한 글/댓글</button>
                                <button className='main-tab'>좋아요 한 글</button>
                            </div>
                        </div>
                    </div>
                    <div className="comm__bottom">
                        {currentPosts.map((post, key) => {
                            return (<div className="comm__box" key={key}>
                                <div className='box'>
                                    <div className='emoji'>
                                        <div className='emoticon'></div>
                                        <button className="like__btn"
                                        // onClick={(e) => { setPostId(post._id); handleClick(e) }}
                                        >
                                        </button>
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
                                            <p>{post.likeNum}</p>
                                        </div>
                                    </div>
                                    <div className="date">{SetTime(post.createdAt)}</div>
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className='pagination'>
                        {currentPage > 1 && (
                            <div className='left' onClick={() => handlePageChange(currentPage - 1)}></div>
                        )}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <div className='right' onClick={() => handlePageChange(currentPage + 1)}></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MypageActive