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

    const [activeTab, setActiveTab] = useState('tab1');

    const changeTab = (tabId) => {
        if (tabId === 'tab1' && activeTab !== 'tab1') {
            setActiveTab('tab1');
            getpostList();
        } else if (tabId === 'tab2' && activeTab !== 'tab2') {
            setActiveTab('tab2');
            getpostLikeList();
        }
    };


    const user = useSelector((state) => state.user)

    useEffect(() => {
        getpostList();
        console.log(user)
    }, [user]);

    const getpostList = () => {
        let body = {
            uid: user.uid
        };

        axios.post("/api/post/mylist", body)
            .then((res) => {
                if (res.data.success) {
                    setPostList([...res.data.postList]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getpostLikeList = () => {
        let body = {
            uid: user.uid
        };

        console.log(user.uid);

        axios.post("/api/post/likelist", body)
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

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + '...';
        }
    };


    return (
        <>
            <div className="comm__Wrap mypage_Wrap">
                <MypageSide />
                <div className='main'>
                    <div className="comm__top">
                        <div className="comm_tab">
                            <div>
                                <button
                                    className={`main-tab ${activeTab === 'tab1' ? 'active' : ''}`}
                                    onClick={() => changeTab('tab1')}
                                >작성한 글/댓글</button>
                                <button
                                    className={`main-tab ${activeTab === 'tab2' ? 'active' : ''}`}
                                    onClick={() => changeTab('tab2')}
                                > 좋아요 한 글</button>
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
                                        <h2><Link to={`/commdetail/${post.postNum}`}>{truncateText(post.title, 12)}</Link></h2>
                                    </div>
                                    <div className="comm__text">
                                        <p>{truncateText(post.content, 70)}</p>
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