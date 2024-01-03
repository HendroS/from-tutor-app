import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorPage from './pages/404'
import ProductPage from './pages/products'
import ProfilePage from './pages/profile'
import DetailProductPage from './pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import DarkModeContextProvider from './context/DarkMode'
import { TotalPriceContexProvider } from './context/TotalPriceContex'
import Player from './pages/player'


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
  }, {
    path: "/player",
    element: <Player/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
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
