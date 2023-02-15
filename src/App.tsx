import { useState } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useSelector, useAppDispatch } from "./redux/hooks";
import HomeLayoutPage from "./layout/home";
import MineLayoutPage from "./layout/mine";

import Vacations from "./pages/vacations";
import Home from "./pages/my-info/home";
import Order from "./pages/my-info/order";
import Message from "./pages/my-info/message";
import Accountcenter from "./pages/my-info/accountcenter";
import Einvoice from "./pages/my-info/einvoice";
import Favorite from "./pages/my-info/favorite";
import Passenger from "./pages/my-info/passenger";
import Promocode from "./pages/my-info/promocode";
import Webwallet from "./pages/my-info/webwallet";

import Login from "./pages/login";
import NotFound from "./pages/error/not-found";

const PrivateRoute = ({ children }) => {
  const token = useSelector((s) => s.user.token);
  return token ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayoutPage />}>
          <Route index element={<Vacations />} />
          <Route path="vacations" element={<Vacations />} />
        </Route>
        <Route path="/my-info" element={<MineLayoutPage />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path='home'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='all'
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path='message'
            element={
              <PrivateRoute>
                <Message />
              </PrivateRoute>
            }
          />
          <Route
            path='accountcenter'
            element={
              <PrivateRoute>
                <Accountcenter />
              </PrivateRoute>
            }
          />
          <Route
            path='einvoice'
            element={
              <PrivateRoute>
                <Einvoice />
              </PrivateRoute>
            }
          />
          <Route
            path='favorite'
            element={
              <PrivateRoute>
                <Favorite />
              </PrivateRoute>
            }
          />
          <Route
            path='passenger'
            element={
              <PrivateRoute>
                <Passenger />
              </PrivateRoute>
            }
          />
          <Route
            path='promocode'
            element={
              <PrivateRoute>
                <Promocode />
              </PrivateRoute>
            }
          />
          <Route
            path='webwallet'
            element={
              <PrivateRoute>
                <Webwallet />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
