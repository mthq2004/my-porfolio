import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer } from 'react-bootstrap'

const App = () => {
  return (
    <div className='w-100 d-flex flex-column'>
      <ToastContainer />
      <Header />
      <div className="flex-grow-1 min-vh-100 d-flex align-items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}


export default App
