import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useAppDispatch } from '../../hooks/hooks';
import { nanoid } from '@reduxjs/toolkit';
import { changeAllFilters, changeFilter } from '../../store/slices/filter-slice';
import { useEffect, useState } from 'react';
import { useDefaultFilters } from '../../hooks/use-default-filters';
import { FilterCheckbox } from '../filter-checkbox/FilterCheckbox';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const [allFilterActive, setAllFilterStatus] = useState<boolean>(false);
  const filters = useDefaultFilters();

  useEffect(() => {
    const allActive = filters.every((filter) => filter.active);
    setAllFilterStatus(allActive);
  }, [filters]);

  const filterToggle = (id: ReturnType<typeof nanoid>) => {
    dispatch(changeFilter(id));
  };

  const toggleAllFilters = () => {
    dispatch(changeAllFilters(!allFilterActive));
  };

  const filtersElements = filters.map((el) => (
    <FilterCheckbox
      key={el.id}
      label={el.label}
      active={el.active}
      onFilterToggle={filterToggle}
      id={el.id}
    />
  ));

  return (
    <Layout>
      <Sider theme="light" style={{ width: 232, height: 252 }}>
        <h3 className={'filters-title'}>Количество пересадок</h3>
        <FilterCheckbox
          label={'Все'}
          active={allFilterActive}
          onFilterToggle={toggleAllFilters}
          id={nanoid()}
        />
        {filtersElements}
      </Sider>
    </Layout>
  );
};
