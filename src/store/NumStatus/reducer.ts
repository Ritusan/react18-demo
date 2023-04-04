import handleNum from './index'
// 用来管理数据
const defaultState = {
  // num: handleNum.state.num
  ...handleNum.state
}

let reducer = (state = defaultState, action:{type:string,val:number}) => {
  console.log('执行了reducer。')
  let newState = JSON.parse(JSON.stringify(state))
  // switch(action.type) {
  //   case handleNum.add1: 
  //     handleNum.actions[handleNum.add1](newState, action)
  //     break
  //   case handleNum.add2: 
  //     handleNum.actions[handleNum.add2](newState, action)
  //     break
  //   default:
  //     break
  // }
  for(let key in handleNum.actionNames) {
    if(action.type === handleNum.actionNames[key]) {
      handleNum.actions[handleNum.actionNames[key]](newState, action)
      break
    }
  }
  return newState
}

export default reducer