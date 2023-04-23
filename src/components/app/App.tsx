import HeaderIcon from '../header-icon/HeaderIcon';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <HeaderIcon />
      <aside>Site Content</aside>
    </div>
  );
}

export default App;
