
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, useRoutes, Navigate } from 'react-router-dom'

import { ConfigProvider } from 'antd'

import 'antd/dist/antd.css'
import zhCN from 'antd/es/locale/zh_CN'
// 组件
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import IndexBox from '@/layout/IndexLayout'

const RouterDom = () => {
  let routes = useRoutes([
    { path: '/login', element: <Login /> },
    {
      path: '/index',
      element: <IndexBox />,
      children: [
        { path: '/index', element: <Navigate to="complex" /> },
        { path: 'complex', element: <Home /> },
      ]

    },
    { path: '/', element: <Navigate to="/login" /> },
  ]);
  return routes;
};

const RouterBox = () => (
  <Router>
    <RouterDom />
  </Router>
)

const App = () =>
  <ConfigProvider locale={zhCN}>
    <RouterBox />
  </ConfigProvider>


ReactDOM.render(<App />, document.getElementById('root'))
