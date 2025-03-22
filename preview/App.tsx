import React, { useState, useEffect } from 'react';
import { Layout, Menu, theme, Button } from 'antd';
import type { MenuProps } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Twelve } from '../src';

const { Content, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'twelve-palaces',
    label: 'Twelve Palaces',
  },
];

export const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Content
          style={{
            padding: 16,
            margin: 0,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Twelve />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Sider 
          width={200} 
          collapsed={collapsed}
          theme="light"
          collapsedWidth={48}
          style={{
            position: 'relative',
            transition: 'all 0.2s',
            overflow: 'hidden',
          }}
        >
          <div style={{ 
            position: 'relative', 
            height: '100%',
            display: collapsed ? 'none' : 'block'
          }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['twelve-palaces']}
              style={{ height: '100%', borderRight: 0 }}
              items={items}
            />
          </div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: colorBgContainer,
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 1,
            }}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Twelve />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}; 