import request from './index'

// 验证码请求
export const captchaAPI = () => request.get('/prod-api/captchaImage')