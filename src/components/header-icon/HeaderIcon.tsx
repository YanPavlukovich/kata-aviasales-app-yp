import aviaLogo from './header-icon.svg';
import s from './/HeaderIcon.module.scss';

const HeaderIcon = () => {
  return (
    <div className={s['app-header']}>
      <img src={aviaLogo} alt="Логотип компании AviaSales" />
    </div>
  );
};

export default HeaderIcon;
