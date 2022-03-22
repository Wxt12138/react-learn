import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useParams } from "react-router-dom"
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


function Siders(props) {
    let _handleclick = (e) => {
        console.log(e)
        changeKey(e.key)
    }
    const tt = useParams();
    console.log(tt, window.location.href.split('#/')[1], 66)
    const [SelectedKeys, changeKey] = useState(window.location.href.split('#/')[1])

    let ss = () => {
        return (
            <Menu.Item key="1513" icon={<VideoCameraOutlined />}>
                nav 2564
            </Menu.Item>
        )
    }
    return (
        <Sider
            style={{
                flex: '0 0 200px',
                overflow: 'auto',
                height: '100vh',
                // position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
            trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[SelectedKeys]}
                onClick={_handleclick}
            >
                <Menu.Item key="home" icon={<UserOutlined />}>
                    <Link to="/home">首页</Link>
                </Menu.Item>
                <Menu.Item key="img" icon={<VideoCameraOutlined />}>
                    <Link to="/img">瀑布流</Link>
                </Menu.Item>
                <Menu.Item key="about" icon={<UploadOutlined />}>
                    about
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation Two"></SubMenu>
                {ss()}
            </Menu>
        </Sider>
    )
}


export default Siders;
