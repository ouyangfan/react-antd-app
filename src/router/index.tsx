import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useSelector, useAppDispatch } from '@/redux/hooks'

import HomeLayoutPage from '@/layout/home'
import MineLayoutPage from '@/layout/mine'

import Vacations from '@/pages/vacations'

import Home from '@/pages/my-info/home'
import Order from '@/pages/my-info/order'
import OrderDetail from '@/pages/order-detail'
import Message from '@/pages/my-info/message'
import Accountcenter from '@/pages/my-info/accountcenter'
import Einvoice from '@/pages/my-info/einvoice'
import Favorite from '@/pages/my-info/favorite'
import Passenger from '@/pages/my-info/passenger'
import Promocode from '@/pages/my-info/promocode'
import Webwallet from '@/pages/my-info/webwallet'

import Login from '@/pages/login'
import NotFound from '@/pages/error/not-found'

const PrivateRoute = ({ children }) => {
  const token = useSelector((s) => s.user.token)
  return token ? children : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage />,
    children: [
      {
        index: true,
        element: <Vacations />,
      },
      {
        path: 'vacations',
        element: <Vacations />,
      },
      {
        path: 'order/detail',
        element: (
          <PrivateRoute>
            <OrderDetail />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/my-info',
    element: (
      <PrivateRoute>
        <MineLayoutPage />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Order />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'all',
        element: <Order />,
      },
      {
        path: 'message',
        element: <Message />,
      },
      {
        path: 'accountcenter',
        element: <Accountcenter />,
      },
      {
        path: 'einvoice',
        element: <Einvoice />,
      },
      {
        path: 'favorite',
        element: <Favorite />,
      },
      {
        path: 'passenger',
        element: <Passenger />,
      },
      {
        path: 'promocode',
        element: <Promocode />,
      },
      {
        path: 'webwallet',
        element: <Webwallet />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
