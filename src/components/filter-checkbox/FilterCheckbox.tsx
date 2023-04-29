import { Checkbox } from 'antd';
import { UniqueId } from '../../types/core';
import s from './FilterCheckbox.module.scss';

type Props = {
  id: UniqueId;
  label: string;
  active: boolean;
  onFilterToggle: (value: string) => void;
};

export const FilterCheckbox = (props: Props) => {
  const { id, label, active, onFilterToggle } = props;
  return (
    <Checkbox className={s.filter} checked={active} onChange={() => onFilterToggle(id)}>
      {label}
    </Checkbox>
  );
};
