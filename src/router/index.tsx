// 对象形式的写法
import React, { lazy } from 'react'
import Home from '@/views/Home'
import Login from '@/views/Login'
// import About from '@/views/About'
// import User from '@/views/User'
import { Navigate } from 'react-router-dom'

// 懒加载的方式需要我们给它添加一个Loading组件
const About = lazy(() => import('@/views/About'))
const User = lazy(() => import('@/views/User'))
const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))
const Page301 = lazy(() => import('@/views/Page301'))

const withLoadingComponent = (comp:JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to='/page1' />
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />)
      },
      {
        path: '/page3/page301',
        element: withLoadingComponent(<Page301 />)
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',  // 重定向，访问其余路径时直接跳到首页
    element: <Navigate to='/page1' />
  }
  // {
  //   path: '/home',
  //   element: <Home />
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About />)
  // },
  // {
  //   path: '/user',
  //   element: withLoadingComponent(<User />)
  // },
]

export default routes