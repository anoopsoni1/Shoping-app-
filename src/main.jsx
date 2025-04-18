import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router ,RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'
import Products from './Components/Products.jsx'
import Cart from './Components/Cart.jsx'
import { Analytics } from "@vercel/analytics/react"
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout />,
    children : [
      {
        path : '' ,
        element : <Home /> ,
       } ,
       {
        path : '/about' ,
        element : <About />,
       } ,
       {
        path : '/services' ,
        element : <Services />,
       },
       {
        path : '/contact' , 
        element : <Contact />
       },
       {
        path : '/products' ,
        element : <Products />
       },
       {
        path : '/cart' ,
        element : <Cart />
       },
       {
        path : '/login',
        element :<LoginPage />
       }
  ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ToastContainer /> 
  <RouterProvider router = {router} />
  </Provider>
)
