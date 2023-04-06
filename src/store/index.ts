import { legacy_createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
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
// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store