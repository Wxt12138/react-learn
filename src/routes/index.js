import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import login from '@/page/layout/login'

export default () => (
    <Router history={hashHistory}>
        <Route path="/" component={base.app} onEnter={isLogin}>
            <IndexRoute component={base.welcome} />
            <Route path="/desk$/index" component={base.example} />
            {/** *菜单 开始 */}
            <Route path="/echarts" getComponent={echarts} />
            <Route path="/editor" getComponent={editor} />
            <Route path="/chat" getComponent={chat} />
            {/** *菜单 结束 */}
            {/** *系统设置 开始 */}
            <Route path={`/${set}/userManage`} component={sysSet.userManage} />
            <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
            <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
            {/** *系统设置 结束 */}
        </Route>
        <Route path="/login" component={login} />
        {/* <Route path="*" component={base.notfound} /> */}
    </Router>
)
