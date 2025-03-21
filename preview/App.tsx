import React from 'react';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Twelve } from '../src';

const { Header, Content, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'twelve-palaces',
    label: 'Twelve Palaces',
  },
];

export const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>React Twelve Components</h1>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['twelve-palaces']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
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