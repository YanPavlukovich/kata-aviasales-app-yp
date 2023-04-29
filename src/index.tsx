import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './components/app/App';
import s from './index.module.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <div className={s.body}>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
