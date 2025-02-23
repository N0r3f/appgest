import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <h1>AppGest</h1>
        <button className="menu-hamburger">☰</button>
      </header>
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <footer>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <span>@n0r3f</span>
      </footer>
    </div>
  );
}

export default MyApp;
