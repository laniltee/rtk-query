import { Layout, Menu, PageHeader, Switch } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import SiteCardWrapper from './menuItems/siteCardWrapper'
import NotFound from './menuItems/notFound'
import OrganizationSelector from './components/organizationSelector'
import LocaleContext from './contexts/localeContext'
import './locales/i18n'
import i18n from 'i18next'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const getMenuSwitch = (selectedMenu) => {
  switch (selectedMenu) {
    case '1':
      return <SiteCardWrapper />
    default:
      return <NotFound />
  }
}

const BillLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('1')
  const [locale, setLocale] = useState('en')

  const onSelect = ({ key }) => {
    setSelectedMenu(key.toString())
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={() => setIsCollapsed(!isCollapsed)}
        theme="dark"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          onSelect={onSelect}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <OrganizationSelector />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <PageHeader
            className="site-page-header"
            onBack={() => null}
            title={`Page ${selectedMenu}`}
            subTitle="This is a subtitle?"
          >
            <Switch
              checkedChildren="English"
              unCheckedChildren="සිංහල"
              checked={locale === 'en'}
              onChange={() => {
                const newLocale = locale === 'en' ? 'si' : 'en'
                setLocale(newLocale)
                i18n.changeLanguage(newLocale)
              }}
            />
          </PageHeader>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <LocaleContext.Provider value={locale}>
              {getMenuSwitch(selectedMenu)}
            </LocaleContext.Provider>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default BillLayout
