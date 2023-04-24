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
<<<<<<< HEAD
  <Provider store={rootStore.store}>
    <PersistGate persistor={rootStore.persistor}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
=======
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
>>>>>>> 0e392ebf7ef388bfcc1f87e2f9eb1e31fdbce4b5
  // </React.StrictMode>,
)
