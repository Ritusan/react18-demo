const store = {
  state: {
    num: 20
  },
  // 放同步的方法
  actions: {
    add1(newState:{num:number}, action:{type:string}) {
      newState.num++
    },
    add2(newState:{num:number}, action:{type:string,val:number}) {
      newState.num+=action.val
    }
  },
  // 放异步方法
  asyncActions: {
    asyncAdd1(dispatch: Function) {
      setTimeout(() => {
        dispatch({ type: 'add1', val: 10 }) 
      }, 1000)
    }
  },
  // 名字统一管理
  // add1: 'add1',
  // add2: 'add2',
  // actionNames: {
  //   add1: 'add1',
  //   add2: 'add2',
  // }
  actionNames: {}
}
let actionNames = {}
for(let key in store.actions) {
  actionNames[key] = key
}
store.actionNames = actionNames

export default store