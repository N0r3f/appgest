import '../styles/globals.css';
import { useState } from 'react';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <h1>AppGest</h1>
        <button className="menu-hamburger" onClick={toggleMenu}>☰</button>
        {menuOpen && (
          <div className="menu">
            <div className="tile-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: 0 }}>
              <div className="tile tile1" style={{ gridColumn: 'span 2' }}>Se connecter</div>
              <div className="tile tile2" style={{ gridColumn: 'span 1' }}>Logistique</div>
              <div className="tile tile3" style={{ gridColumn: 'span 1' }}>Traçabilité</div>
              <div className="tile tile4" style={{ gridColumn: 'span 1' }}>Production</div>
              <div className="tile tile5" style={{ gridColumn: 'span 1' }}>Médiation</div>
              <div className="tile tile6" style={{ gridColumn: 'span 1' }}>SAV</div>
              <div className="tile tile7" style={{ gridColumn: 'span 1' }}>Dons</div>
              <div className="tile tile8" style={{ gridColumn: 'span 1' }}>Bilans</div>
              <div className="tile tile9" style={{ gridColumn: 'span 1' }}>Stocks</div>
              <div className="tile tile10" style={{ gridColumn: 'span 1' }}>Accès admin</div>
              <Link href="/" legacyBehavior>
                <a className="tile tile11" style={{ gridColumn: 'span 1' }}>Accueil</a>
              </Link>
            </div>
          </div>
        )}
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
