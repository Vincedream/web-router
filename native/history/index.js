// 当页面加载完后，给符合条件的 <a> 标签添加事件
window.addEventListener('DOMContentLoaded', initDom)

// 这里主要是监听浏览器前进、后退来触发替换 Dom
window.addEventListener('popstate', onPopStateChange)

// 两块内容 Dom
const homeDom = '<h1>home</h1>';
const userDom = '<h1>user</h1>';

// 初始化 <a> 标签事件
function initDom() {
    const linkList = document.querySelectorAll('.nav a[href]');
    linkList.forEach(el => el.addEventListener('click', function(e) {
        e.preventDefault()
        history.pushState(null, '', el.getAttribute('href'))
        onPopStateChange()
    }))
    onPopStateChange();
}

// 替换 dom 内容
function loadDom(domString) {
    document.querySelector('.container').innerHTML = domString
}

function onPopStateChange() {
    const urlHistory = location.pathname;
    switch(urlHistory) {
        case '/home':
            loadDom(homeDom);
            return;
        case '/user':
            loadDom(userDom);
            return;
        default:
            return;
    }
}
