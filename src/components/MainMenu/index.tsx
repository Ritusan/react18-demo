import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// const items: MenuItem[] = [
//   getItem('栏目 1', '/page1', <PieChartOutlined />),
//   getItem('栏目 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'page3', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

const items: MenuItem[] = [
  {
    label: '栏目 1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: '栏目 2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: '栏目 3',
    key: '/page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目 301',
        key: '/page3/page301',
      },
      {
        label: '栏目 302',
        key: '/page3/page302',
      },
      {
        label: '栏目 303',
        key: '/page3/page303',
      },
    ]
  },
  {
    label: '栏目 4',
    key: '/page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏目 401',
        key: '/page4/page401',
      },
      {
        label: '栏目 402',
        key: '/page4/page402',
      }
    ]
  },
  {
    label: '栏目 5',
    key: '/page5',
    icon: <FileOutlined />
  },
]

const Comp: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  console.log(currentRoute.pathname)
  const menuClick = (e:{key:string}) => {
    // 点击后跳转对应路由  编程式导航跳转，利用到一个hook
    // console.log(e.key)
    navigateTo(e.key )
  }
  let firstOpenKey:string = ''
  items.map((obj: any) => {
    if(obj['children']) {
      if(obj['children'].find((child: any) => child.key === currentRoute.pathname)) {
        firstOpenKey = obj.key
      }
    }
  })
  // 设置展开项的初始值
  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  const handleOpenChange = (keys:string[]) => {
    console.log(keys)  // keys是数组，记录当前的展开项
    // 把数组修改设置成最后一项,因为只需要一项展开
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu 
      theme="dark" 
      defaultSelectedKeys={[currentRoute.pathname]} 
      mode="inline" 
      // 菜单项的数据
      items={items} 
      onClick={menuClick} 
      // 某项菜单展开和回收的事件
      onOpenChange={handleOpenChange}
      // 当前菜单展开项的key数组
      openKeys={openKeys}
    />
  )
}

export default Comp