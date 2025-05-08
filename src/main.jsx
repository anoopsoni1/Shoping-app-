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
import { Provider } from 'react-redux'
import { store } from './Store/Store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from './Components/Login.jsx'
import Buy from './Components/Buy.jsx'
import { Analytics } from "@vercel/analytics/react"
import Register from './Components/Register.jsx'
import Profile from './Components/Profile.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children : [
      {
        path : '' ,
        element : <Home  /> ,
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
        element : <Products />,
       },
          {
            path : '/buy',
            element : <Buy />
            },
       {
        path : '/cart' ,
        element : <Cart />
       },
       {
        path : '/login',
        element :<LoginPage />
       },
       {
        path : '/register',
        element :<Register />
       },
       {
        path : '/profile' ,
        element : <Profile />
       },
         
  ]
  }
])



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <ToastContainer autoClose={1000} pauseOnHover={false}  /> 
  <RouterProvider router = {router} />
            <Analytics/>
  </Provider>
)
