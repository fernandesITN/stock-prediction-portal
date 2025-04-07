import { useState } from 'react'
import './assets/css/style.css'
import Main from './assets/components/Main'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './assets/components/Register'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Login from './assets/components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './assets/components/dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRouter from './PublicRouter'

function App() {

  return (
    <>
      <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/register' element={<PublicRouter><Register/></PublicRouter>}/>
          <Route path='/login' element={<PublicRouter><Login/></PublicRouter>}/>
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
