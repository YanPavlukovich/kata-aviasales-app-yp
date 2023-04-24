import HeaderIcon from '../header-icon/HeaderIcon';
import SiteContent from '../site-content/SiteContent';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <HeaderIcon />
      <SiteContent />
    </div>
  );
}

export default App;
