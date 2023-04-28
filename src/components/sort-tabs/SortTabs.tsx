import { Radio } from 'antd';
import { SortTypes } from '../../utils/ticket-sort-criteria';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectSortType, setSortType } from '../../store/slices/sort-slice';
import { SortTabItem } from './sort-tabs-item/SortTabItem';

const sorts: { label: string; name: SortTypes }[] = [
  { label: 'Самый дешевый', name: 'cheap' },
  { label: 'Самый быстрый', name: 'fast' },
  { label: 'Оптимальный', name: 'optimum' },
];

export const SortTabs = () => {
  const activeSort = useAppSelector(selectSortType);
  const dispatch = useAppDispatch();

  const sortChangeHandler = (sortType: SortTypes) => dispatch(setSortType(sortType));

  const tabsElements = sorts.map((el) => {
    const isActive = activeSort === el.name;
    return (
      <SortTabItem
        key={`tab_${el.name}`}
        {...el}
        onSortChange={sortChangeHandler}
        isActive={isActive}
      />
    );
  });
  return (
    <Radio.Group value={activeSort} defaultValue="cheap" size="large">
      {tabsElements}
    </Radio.Group>
  );
};
