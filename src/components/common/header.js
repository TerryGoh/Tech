import React from 'react';
import { Menu } from 'antd';

const MenuItemLabel = ['home', 'about', 'features', 'howitworks', 'faq', 'pricing', 'contact'];
function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fas fa-bolt"></i>
                    <a href="http://wwww/google.com">Tech</a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    {MenuItemLabel.map((item) => {
                        const key = item;
                        return <Menu.Item key={key}>{`${key}`}</Menu.Item>;
                    })}
                </Menu>
            </div>
        </div >
    )
};

export default AppHeader