import { Radio } from 'antd';
import { SortTypes } from '../../../utils/ticket-sort-criteria';
import s from './SortTabItem.module.scss';
type Props = {
  label: string;
  name: SortTypes;
  onSortChange: (sortType: SortTypes) => void;
  isActive: boolean;
};

export const SortTabItem = (props: Props) => {
  const { label, onSortChange, name, isActive } = props;

  return (
    <div className={s['sort-element__container']}>
      <Radio.Button
        className={isActive ? 'active' : ''}
        onClick={() => onSortChange(name)}
        value={name}
        style={{ width: 168, fontSize: 12 }}
      >
        {label}
      </Radio.Button>
    </div>
  );
};
