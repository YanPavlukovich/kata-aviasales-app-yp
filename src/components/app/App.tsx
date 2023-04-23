import s from './App.module.scss';
import aviaLogo from '..//header-icon/header-icon.svg';

function App() {
  return (
    <div className={s.App}>
      <header className={s['app-header']}>
        <img src={aviaLogo} alt="Логотип компании AviaSales" />
      </header>
      <aside></aside>
    </div>
  );
}

export default App;
