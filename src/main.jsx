import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home, Search,Trash} from './Components/index.js'



// let's set up router
const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="trash" element={<Trash/>}/>
     </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
