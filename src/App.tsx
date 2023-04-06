import React,{ useState, useEffect } from 'react'
import Comp1 from '@/components/Comp1'
import Comp2 from '@/components/Comp2'
import { Button, message } from 'antd'
import { VerticalRightOutlined } from '@ant-design/icons'
import { Outlet, Link, useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from './router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function ToPage1() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/page1')
  },[])
  return <div></div>
}

function ToLogin() {
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  useEffect(() => {
    // 加载完组件之后执行
    navigateTo('/login')
    message.warning('您还没有登陆，请登陆后再访问！')
  },[])
  return <div></div>
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation()
  let token = localStorage.getItem('token')
  if(location.pathname === '/login' && token) {
    // 这里不能直接用useNavigate,因为BeforeRouterEnter是JSX组件
    return <ToPage1 />
  }
  if(location.pathname  !== '/login' && !token) {
    return <ToLogin />
  }
  return outlet
}

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* 顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Button type="primary">我们的按钮</Button>
      <VerticalRightOutlined style={{ fontSize:'40px',color:'red' }} /> */}
      {/* <Link to='/home'>Home</Link>  |
      <Link to='/about '>About</Link>  |
      <Link to='/user '>User</Link>   */}
      {/* 占位符组件，类似于窗口，用来展示组件的，有点像vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {/* {outlet} */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
