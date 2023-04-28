import { Checkbox } from 'antd';
import { UniqueId } from '../../types/core';

type Props = {
  id: UniqueId;
  label: string;
  active: boolean;
  onFilterToggle: (value: string) => void;
};

export const FilterCheckbox = (props: Props) => {
  const { id, label, active, onFilterToggle } = props;
  return (
    <Checkbox checked={active} onChange={() => onFilterToggle(id)}>
      {label}
    </Checkbox>
  );
};
