import { Checkbox } from 'antd';

import s from './FilterCheckbox.module.scss';
import { FilterTypes } from '../../store/slices/filter-slice';

type Props = {
  id: FilterTypes;
  label: string;
  active: boolean;
  onFilterToggle: (value: FilterTypes) => void;
};

export const FilterCheckbox = (props: Props) => {
  const { id, label, active, onFilterToggle } = props;
  return (
    <Checkbox className={s.filter} checked={active} onChange={() => onFilterToggle(id)}>
      {label}
    </Checkbox>
  );
};
