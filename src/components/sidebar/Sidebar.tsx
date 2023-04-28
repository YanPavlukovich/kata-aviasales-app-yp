import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

export const Sidebar = () => {
  return (
    <Layout>
      <Sider trigger={null}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: <h3 className={'filters-title'}>Количество пересадок</h3>,
            },
            {
              key: '2',
              label: <div>Все</div>,
            },
          ]}
        />
      </Sider>
    </Layout>
  );
};
