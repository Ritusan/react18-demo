import handler from './index'
// 用来管理数据
const defaultState = {
  // num: handler.state.num
  ...handler.state
}

let reducer = (state = defaultState, action:{type:string,val:number}) => {
  console.log('执行了reducer。')
  let newState = JSON.parse(JSON.stringify(state))
  for(let key in handler.actionNames) {
    if(action.type === handler.actionNames[key]) {
      handler.actions[handler.actionNames[key]](newState, action)
      break
    }
  }
  return newState
}

export default reducer
