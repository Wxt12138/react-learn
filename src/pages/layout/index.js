import React, { useState } from 'react';
import { Layout } from 'antd';
import Siders from './sider'
// import Head from './header'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LoginOutlined
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import store from '@/store/mainStore'
import { logOut } from '@/store/action/loginAction'
import '@/style/layout.scss';
// import { useNavigate } from 'react-router'

const { Header, Content } = Layout;

function Layouts() {

    let [collapsed, setcollapsed] = useState(false);
    const navigate = useNavigate();

    let toggle = () => {
        setcollapsed(!collapsed)
    };

    let quit = () => {
        console.log(store)
        store.dispatch(logOut())
        navigate('/login')
    }

    return (
        <Layout id="components-layout-demo-custom-trigger">
            <Layout>
                <Siders collapsed={collapsed}></Siders>
                <Layout className="site-layout"
                    style={{
                        flex: "1",
                    }}>
                    <Header className="site-layout-background head-flex" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                        {React.createElement(LoginOutlined, {
                            className: 'logout',
                            onClick: quit,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            height: "100vh",
                            overflow: "auto"
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )

}
export default Layouts;

