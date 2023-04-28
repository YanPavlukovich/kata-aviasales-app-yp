import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useAppDispatch } from '../../hooks/hooks';
import { nanoid } from '@reduxjs/toolkit';
import { changeAllFilters, changeFilter } from '../../store/slices/filter-slice';
import { useEffect, useState } from 'react';
import { useDefaultFilters } from '../../hooks/use-default-filters';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const [allFilterActive, setAllFilterActive] = useState<boolean>(false);
  const filters = useDefaultFilters();

  useEffect(() => {
    const allActive = filters.every((filter) => filter.active);
    setAllFilterActive(allActive);
  }, [filters]);

  const filterToggle = (id: ReturnType<typeof nanoid>) => {
    dispatch(changeFilter(id));
  };

  const toggleAllFilters = () => {
    dispatch(changeAllFilters(!allFilterActive));
  };

  const filterElements = filters.map((el) => <FilterCheckBox />);

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
              label: <FilterCheckBox />,
            },
          ]}
        />
        {filterElements}
      </Sider>
    </Layout>
  );
};
