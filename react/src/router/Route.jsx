import React from 'react';
import RouteContext from './RouteContext';

// 匹配当前路由，为 true 则渲染对应的组件
export default ({ path, render }) => (
    <RouteContext.Consumer>
        {({currentPath}) => currentPath === path && render() }
    </RouteContext.Consumer>
)