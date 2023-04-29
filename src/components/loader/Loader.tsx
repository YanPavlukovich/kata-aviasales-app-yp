import { Spin } from 'antd';
import s from './Loader.module.scss';

// className={s.loader}

export const Loader = () => {
  return (
    <div className={s.loader}>
      <Spin tip="Загружаем билеты..." size="large"></Spin>
    </div>
  );
};
