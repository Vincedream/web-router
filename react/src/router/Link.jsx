import React from 'react';
// 仅仅只做为一个 <a> 标签，用来做路由跳转
export default ({ to, ...props }) => <a href={"#" + to} {...props} />;