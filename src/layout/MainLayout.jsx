import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NewsLetter from './NewsLetter'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
      <>
          <Header />
          <Outlet/>
          <NewsLetter/>
          <Footer/>
      </>
  )
}

export default MainLayout