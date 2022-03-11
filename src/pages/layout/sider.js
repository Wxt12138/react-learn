import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom"
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Siders extends Component {
    ss() {
        return (
            <Menu.Item key="1513" icon={<VideoCameraOutlined />}>
                nav 2564
            </Menu.Item>
        )
    }
    _handleclick = (e) => {
        console.log(e)
    }
    render() {
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
                trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['nav']}
                    onClick={this._handleclick}
                >
                    <Menu.Item key="nav" icon={<UserOutlined />}>
                        首页
                    </Menu.Item>
                    <Menu.Item key="22" icon={<VideoCameraOutlined />}>
                        <Link to="/img">img</Link>
                    </Menu.Item>
                    <Menu.Item key="home" icon={<UploadOutlined />}>
                        <Link to="/home">about</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<MailOutlined />} title="Navigation Two"></SubMenu>
                    {this.ss()}
                </Menu>
            </Sider>
        )
    }
}

export default Siders;
