import React from 'react'
import { Outlet } from 'react-router-dom'
import {Footer, Header} from "../../components/"

const PublicLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default PublicLayout