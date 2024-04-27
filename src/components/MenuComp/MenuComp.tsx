import { FC, useState } from "react"
import styles from "./Menu.module.scss"
import { Menu } from "antd"
import type { MenuProps } from 'antd'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()
    const [current, setCurrent] = useState('mail')

    const onSwichTab: MenuProps['onClick'] = (e) => {
        console.log('menu clicked ', e);
        const menuKey = e?.key || '/'
        setCurrent(menuKey);
        navigate('/'+menuKey)
    };

    return (
        <div className="menu-comp">
            <Menu onClick={onSwichTab} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    );
};

export default MenuComp;