import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}> 
      <Route index path='' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider  router={router}/>
)
