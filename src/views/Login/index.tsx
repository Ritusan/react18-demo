import { ChangeEvent, useEffect, useState } from 'react'
import { Input, Space, Button } from 'antd'
import styles from './login.module.scss'
import initLoginBg from './init'
import './login.less'

const view = () => {
  // 加载完这个组件之后，加载背景
  useEffect(() => {
    initLoginBg()
    window.onresize = function() {
      initLoginBg()
    }
  }, [])
  // 获取用户输入的信息
  const [usernameVal, setUsernameVal] = useState('')  // 定义用户输入信息
  const [passwordVal, setPasswordVal] = useState('')
  const [captchaVal, setCaptchaVal] = useState('')
  const usernameChange = (e:ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setUsernameVal(e.target.value)  // 修改usernameVal这个变量
  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }
  const captchaChange = (e:ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value)
  }
  const gotoLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal)
  }
  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id='canvas' style={{display:'block'}}></canvas>
      <div className={styles.loginBox + ' loginBox'}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>前端通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg">
                <img src=" " alt="" />
              </div>
            </div>
            <Button className='loginBtn' type="primary" block onClick={gotoLogin}>
              Primary
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default view