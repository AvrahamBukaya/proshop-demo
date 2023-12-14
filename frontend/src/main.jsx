import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import './index.css'
import NotFound from './components/NotFound.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<NotFound/>}>
      <Route index={true} path="/" element={<HomeScreen/>}/>
      <Route  path="/products/:id" element={<ProductScreen/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
