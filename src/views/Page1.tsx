import { useSelector, useDispatch } from 'react-redux'

const View = () => {
  // 修改仓库数据
  const dispatch = useDispatch()
  // 通过 useSelector 这个hook获取仓库数据
  const { num, sarr } = useSelector((state:RootState) => ({
    num: state.handleNum.num,
    sarr: state.handleArr.sarr
  }))
  
  const changeNum = () => {
    dispatch({ type: 'add2', val: 10 })
  }
  // const { sarr } = useSelector((state:RootState) => {
  //   sarr: state.handleArr.sarr
  // })
  const changeArr = () => {
    dispatch({ type: 'sarrpush', val: 100 })
  }
  return (
    <div className='about'>
      <p>这是Page1页面内容</p>
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
      <p>{sarr}</p>
      <button onClick={changeArr}>按钮2</button>
    </div>
  )
}

export default View