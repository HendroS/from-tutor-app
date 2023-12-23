import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/products.jsx'
import ProfilePage from './pages/profile.jsx'
import DetailProductPage from './pages/detailProduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import DarkModeContextProvider from './components/context/DarkMode.jsx'
import { TotalPriceContexProvider } from './components/context/TotalPriceContex.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element:<RegisterPage/>
  }, {
    path: "/products",
    element:<ProductPage/>
  },
  {
    path: "/profile",
    element:<ProfilePage/>
  },
  {
    path: "/products/:id",
    element:<DetailProductPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceContexProvider>
        <RouterProvider router={router} />
        </TotalPriceContexProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
