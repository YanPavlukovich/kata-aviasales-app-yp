import logo from './logo.svg';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <header className={s['App - header']}>
        <img src={logo} className={s['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={s['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
