import React,{ useState } from 'react'
import Comp1 from '@/components/Comp1'
import Comp2 from '@/components/Comp2'
import { Button } from 'antd'
import { VerticalRightOutlined } from '@ant-design/icons'
import { Outlet, Link, useRoutes } from 'react-router-dom'
import router from './router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
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
      {outlet}
    </div>
  )
}

export default App
