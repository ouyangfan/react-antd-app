import { useState } from 'react'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from 'react-router-dom'
import { useSelector, useAppDispatch } from './redux/hooks'
import HomeLayoutPage from './layout/home'
import MineLayoutPage from './layout/mine'
import Vacations from './pages/vacations'
import MyInfo from './pages/my-info'
import Login from './pages/login'

const PrivateRoute = ({ children }) => {
  const token = useSelector((s) => s.user.token)
  return token ? children : <Navigate to="/login" />
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayoutPage />}>
          <Route index element={<Vacations />} />
          <Route path="vacations" element={<Vacations />} />
        </Route>
        <Route path="/my-info/:menu" element={<MineLayoutPage />}>
          <Route index element={<MyInfo />} />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <MyInfo />
              </PrivateRoute>
            }
          />
          {/* <Route path="all" element={<MyInfo />} />
          <Route path="message" element={<MyInfo />} /> */}
        </Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
