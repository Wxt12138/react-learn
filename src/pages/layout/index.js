import React, { Component } from 'react';
import { Layout } from 'antd';
import Siders from './sider'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import '@/style/layout.scss';

const { Header, Content } = Layout;


export default class Layouts extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout id="components-layout-demo-custom-trigger">
                <Layout>
                    <Siders collapsed={this.state.collapsed}></Siders>
                    <Layout className="site-layout"
                        style={{
                            flex: "1",
                        }}>
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
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


        );
    }
}

