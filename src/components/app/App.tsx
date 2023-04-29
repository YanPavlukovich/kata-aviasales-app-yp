import { useEffect } from 'react';
import HeaderIcon from '../header-icon/HeaderIcon';
import SiteContent from '../site-content/SiteContent';
import s from './App.module.scss';
import { searchInitiated } from '../../API/search-initiate';

function App() {
  useEffect(() => {
    searchInitiated();
  }, []);

  return (
    <div className={s.App}>
      <HeaderIcon />
      <SiteContent />
    </div>
  );
}

export default App;
