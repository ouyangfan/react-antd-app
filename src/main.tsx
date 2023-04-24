import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import rootStore from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import router from './router'
import './styles/index.less'
import './assets/iconfont/iconfont.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={rootStore.store}>
    <PersistGate persistor={rootStore.persistor}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
)
