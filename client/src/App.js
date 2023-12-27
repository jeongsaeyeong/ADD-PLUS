import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

import Join01 from './components/user/Join01.jsx'
import Join02 from './components/user/Join02.jsx'
import Join03 from './components/user/Join03.jsx'
import Join04 from './components/user/Join04.jsx'
import Login from './components/user/Login.jsx'
import Find from './components/user/Find.jsx'
import Find02 from './components/user/Find02.jsx'
import Find03 from './components/user/Find03.jsx'
import Comm from './components/community/Comm.jsx'
import CommWrite from './components/community/CommWrite.jsx'
import Header from './components/layout/Header.jsx'
import Home from './page/Home.jsx'
import CommDetail from './components/community/CommDetail.jsx'
import CommModify from './components/community/CommModify.jsx'
import FindId from './components/user/FindId.jsx'
import FindId02 from './components/user/FindId02.jsx'
import FindId03 from './components/user/FindId03.jsx'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        console.log("유저 정보입니다.", userInfo.multiFactor.user)
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser())
      }
    })
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/comm' element={<Comm />}></Route>
        <Route path='/commwrite' element={<CommWrite />}></Route>
        <Route path='/commdetail' element={<CommDetail />}></Route>
        <Route path='/commmodify' element={<CommModify />}></Route>

        <Route path='/join01' element={<Join01 />}></Route>
        <Route path='/join02/:cate' element={<Join02 />}></Route>
        <Route path='/join03/:cate' element={<Join03 />}></Route>
        <Route path='/join04' element={<Join04 />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/find02/:userId' element={<Find02 />}></Route>
        <Route path='/find03' element={<Find03 />}></Route>

        <Route path='/findId' element={<FindId />}></Route>
        <Route path='/findId02/:userEmail' element={<FindId02 />}></Route>
        <Route path='/findId03' element={<FindId03 />}></Route>
      </Routes>
    </>
  )
}

export default App