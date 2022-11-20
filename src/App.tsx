import { useState } from 'react'
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom'

import { LayoutPage } from './layout/index'
import { Vacations } from './pages/vacations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Vacations />} />
          <Route path="vacations" element={<Vacations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
