import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useAppDispatch } from '../../hooks/hooks';
import { nanoid } from '@reduxjs/toolkit';
import { changeAllFilters, changeFilter } from '../../store/slices/filter-slice';
import { useDefaultFilters } from '../../hooks/use-default-filters';
import { FilterCheckbox } from '../filter-checkbox/FilterCheckbox';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const filters = useDefaultFilters();
  const [allFilterActive, setAllFiltersStatus] = useState<boolean>(false);

  useEffect(() => {
    const allActive = filters.every((filter) => filter.active);
    setAllFiltersStatus(allActive);
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
      <Sider className={s['filters-container']} theme="light">
        <h3 className={s['filters-title']}>Количество пересадок</h3>
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
