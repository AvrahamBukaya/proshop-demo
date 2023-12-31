import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import './index.css'
import NotFound from './components/NotFound.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<NotFound/>}>
      <Route index={true} path="/" element={<HomeScreen/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
