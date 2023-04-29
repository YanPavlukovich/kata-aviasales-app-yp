import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import {
  setFilter,
  selectFilters,
  setAllActive,
  FilterTypes,
} from '../../store/slices/filter-slice';
import { useActualFilters } from '../../hooks/use-actual-filters';
import { FilterCheckbox } from '../filter-checkbox/FilterCheckbox';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const checkboxes = useActualFilters();
  const { isAllActive } = useAppSelector(selectFilters);

  const filterToggle = (id: FilterTypes) => {
    dispatch(setFilter(id));
  };

  const toggleAllFilters = () => {
    dispatch(setAllActive());
  };

  const filtersElements = checkboxes.map((el) => (
    <FilterCheckbox
      key={el.filterType}
      label={el.label}
      active={el.active}
      onFilterToggle={filterToggle}
      id={el.filterType}
    />
  ));

  return (
    <Layout>
      <Sider className={s['filters-container']} theme="light">
        <h3 className={s['filters-title']}>Количество пересадок</h3>
        <FilterCheckbox
          label={'Все'}
          active={isAllActive}
          onFilterToggle={toggleAllFilters}
          id="isAllActive"
        />
        {filtersElements}
      </Sider>
    </Layout>
  );
};
