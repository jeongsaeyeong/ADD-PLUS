import React, { useEffect, useState } from 'react'
import CommSide from './CommSide'
import axios from 'axios';
import { Link } from 'react-router-dom';

import moment from 'moment'
import "moment/locale/ko";

const Comm = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [postList, setPostList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sort, setSort] = useState("인기순");
    const [active, setActive] = useState('best');
    const [cate, setCate] = useState('일반게시판');

    useEffect(() => {
        getpostList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, sort, cate]);

    const getpostList = () => {
        let body = {
            sort: sort,
            searchTerm: searchTerm,
            cate: cate
        };

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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(postList.length / itemsPerPage);

    const SetTime = (a) => {
        return moment(a).format("YYYY MMM Do");
    }

    const SearchHandeler = () => {
        getpostList();
    }


    return (
        <>
            <div className="comm__Wrap">
                <CommSide setCate={setCate} />
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

export default Comm