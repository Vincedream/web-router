import React from 'react';
import RouteContect from './RouteContext';

// 取第 1 项是取到捕获项，即 /xxxx
const extractHashPath = url => (/#(.*)$/g.exec(url) || ["", ""])[1];

export default class BrowserRouter extends React.Component {
    state = {
        // currentPath 为当前路由的路径，该状态被 Context 传到下层组件
        currentPath: extractHashPath(window.location.href)
    };

    onHashChange = e => {
        const currentPath = extractHashPath(e.newURL);
        this.setState({
            currentPath
        })
    }

    componentDidMount() {
        // 添加 hash 变化监听事件
        window.addEventListener("hashchange", this.onHashChange);
    }
    
    componentWillUnmount() {
        // 移除 hash 变化监听事件
        window.removeEventListener("hashchange", this.onHashChange);
    }

    render() {
        return(
            <RouteContect.Provider value={{ currentPath: this.state.currentPath }}>
                {this.props.children}
            </RouteContect.Provider>
        )
    }
}