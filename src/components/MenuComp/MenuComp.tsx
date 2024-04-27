import { FC, useState } from "react"
import styles from "./Menu.module.scss"
import { Menu } from "antd"
import type { MenuProps } from 'antd'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateMenuTab } from "../../redux/menu/menuSlice"

const items: MenuProps['items'] = [
    {
      label: 'Main Page',
      key: 'main',
      icon: <HomeOutlined />,
    },
    {
      label: 'About Page',
      key: 'about',
      icon: <InfoCircleOutlined />
    }
  ];

const MenuComp: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [current, setCurrent] = useState('mail')
  const selectedTab = useSelector((state: any) => state.menu.selectedTab)

  const onSwichTab: MenuProps['onClick'] = (e) => {
      console.log('menu clicked ', e);
      const menuKey = e?.key || '/'
      setCurrent(menuKey);
      dispatch(updateMenuTab(menuKey))
      navigate('/'+menuKey)
  };

  return (
      <div className="menu-comp">
          <Menu onClick={onSwichTab} selectedKeys={[selectedTab]} mode="horizontal" items={items} />
      </div>
  );
};

export default MenuComp;