import React from 'react'
import Nav from '@/components/Nav'
import { Outlet } from 'react-router-dom'

const mainlayout = () => {
  return (
    <div className="container mx-auto flex
    justify-center flex-col items-center">    
      <Nav />
      <Slot />
    </div>

  )
}

export default Mainlayout