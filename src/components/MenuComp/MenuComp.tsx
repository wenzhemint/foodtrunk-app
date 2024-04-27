import { FC, useContext, useState } from "react"
import styles from "./Menu.module.scss"
import { Menu } from "antd"
import type { MenuProps } from 'antd'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { updateMenuTab } from "../../redux/menu/menuSlice"
import { Switch } from "antd"
import { ThemeContext } from "../../context/themeContext"
import { PAGE_THEME } from "../../config/constants"

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
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
  const selectedTab = useSelector((state: any) => state.menu.selectedTab)

  const onSwichTab: MenuProps['onClick'] = (e) => {
    console.log('menu clicked ', e);
    const menuKey = e?.key || '/'
    dispatch(updateMenuTab(menuKey))
    navigate('/'+menuKey)
  };

  const onChangeTheme = (checked: boolean) => {
    console.log(`switch to ${checked}`);
    const newTheme = checked?PAGE_THEME.DARK:PAGE_THEME.LIGHT
    setCurrentTheme(newTheme)
  };

  return (
    <div className={`${styles.menuComp}`}>
      <Menu onClick={onSwichTab} selectedKeys={[selectedTab]} mode="horizontal" items={items} theme={currentTheme==PAGE_THEME.DARK?'dark':'light'} />

      <div className={`${styles.swichMode}`}>
        <Switch onChange={onChangeTheme} defaultChecked={false} />
      </div>
    </div>
  );
};

export default MenuComp;