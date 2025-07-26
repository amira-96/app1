import { useState } from 'react'
//import reactLogo from './assets'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
//import { createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Protfolio from './Components/Protfolio/Protfolio'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Contact from './Components/Contact/Contact'

function App() {
  const router=createBrowserRouter([
{path:"",element:<Layout/>,children:[
  
  {path:"",element:<Home/>},
  {path:"home",element:<Navigate to={"/"}/>},
  {path:"about",element:<About/>},
  {path:"protfolio",element:<Protfolio/>},
  {path:"contact",element:<Contact/>}
]}

  ])

  return (
    <>
     {<RouterProvider router={router}></RouterProvider> }
    </>
  )
}

export default App
