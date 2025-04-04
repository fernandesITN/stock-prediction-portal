import { useState } from 'react'
import './assets/css/style.css'
import Main from './assets/components/Main'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './assets/components/Register'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'
import AuthProvider from './AuthProvider'

function App() {

  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
