import { legacy_createStore, combineReducers } from 'redux'
// import reducer from './reducer.ts'  // 数据文件 
import handleNum from './NumStatus/reducer'
import handleArr from './ArrStatus/reducer'

// 组合各个模块的reducer
const reducers = combineReducers({
  handleNum,
  handleArr
})

// 创建数据仓库
// 让浏览器redux-dev-tools能正常使用
const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store