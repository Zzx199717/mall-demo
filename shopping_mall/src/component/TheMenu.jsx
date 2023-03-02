import React from 'react'
import { useState } from 'react';
import { HomeFilled, UserOutlined, CodepenCircleFilled, AppstoreFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useHistory } from 'react-router-dom';
export default function TheMenu() {
    const getItem = (label, key, icon, children) => {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const [menu, setmenu] = useState([
        getItem('首页', '/shopping_mall/home', <HomeFilled />),
        getItem('用户管理', '/shopping_mall/user', <UserOutlined />),
        getItem('角色管理', '/shopping_mall/role', <UserOutlined />),
        getItem('商品管理', 'sub4', <AppstoreFilled />, [
            getItem('品种管理', '/shopping_mall/varieties'),
            getItem('商品列表', '/shopping_mall/commodity'),
        ]),
        getItem('财务信息', 'sub5', <CodepenCircleFilled />, [
            getItem('交易流水', '/shopping_mall/information'),
            getItem('销售业绩', '/shopping_mall/transactionFlow')
        ]),
    ])
    const [openKeys,setopenKeys]=useState([])
    const history = useHistory()
    const location = useLocation()
    // 点击菜单触发跳转
    const MenuClick = (res) => {
        console.log(res, 'res');
        history.push(res.key)
    }
    // 菜单展开或关闭的回调
    const onOpenChange = (res) => {
        
        setopenKeys([res[res.length-1]])
        console.log(openKeys);
    }
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={['sub4', 'sub5']}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{
                height: '100%',
                borderRight: 0,
            }}
            items={menu}
            onClick={MenuClick}
        />
    )
}
