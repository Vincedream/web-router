// 当页面初次加载完成后，需要根据当前hash来渲染指定dom
window.addEventListener('DOMContentLoaded', initDom)

// 当 url 的 hash 改变后，触发 dom 更新
window.addEventListener('hashchange', onHashChange);

// 两块内容 Dom
const homeDom = '<h1>home</h1>';
const userDom = '<h1>user</h1>';

function initDom() {
    console.log('initDom');
    onHashChange();
}

// 替换 dom 内容
function loadDom(domString) {
    document.querySelector('.container').innerHTML = domString
}

// hash 改变后替换 dom 内容
function onHashChange() {
    console.log('onHashChange');
    const urlHash = location.hash;
    switch (urlHash) {
        case '#/home':
            loadDom(homeDom);
            return;
        case '#/user':
            loadDom(userDom);
            return;
        default:
            return;
    }
}