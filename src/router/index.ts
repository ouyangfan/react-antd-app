
import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route } from 'react-router'
import { BrowserRouter, Routes, Router, Link, Outlet } from 'react-router-dom'

import { LayoutPage } from '../components/Layout'
import { HomePage } from '../pages/home'

const routeConfig = [
  {
    path: '/',
    component: LayoutPage,
    // indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'home', component: HomePage },
      // {
      //   path: 'inbox',
      //   component: Inbox,
      //   childRoutes: [
      //     { path: '/messages/:id', component: Message },
      //     {
      //       path: 'messages/:id',
      //       onEnter: function (nextState, replaceState) {
      //         replaceState(null, '/messages/' + nextState.params.id)
      //       }
      //     }
      //   ]
      // }
    ]
  }
]

ReactDOM.render(routeConfig, document.body)