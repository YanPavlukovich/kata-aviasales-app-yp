import { Radio } from 'antd';
import { SortTypes } from '../../../utils/ticket-sort-criteria';

type Props = {
  label: string;
  name: SortTypes;
  onSortChange: (sortType: SortTypes) => void;
  isActive: boolean;
};

export const SortTabItem = (props: Props) => {
  const { label, onSortChange, name, isActive } = props;

  return (
    <Radio.Button
      className={isActive ? 'active' : ''}
      onClick={() => onSortChange(name)}
      value={name}
      style={{ width: 168 }}
    >
      {label}
    </Radio.Button>
  );
};
