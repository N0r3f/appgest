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
              <Link href="/seconnecter" legacyBehavior>
                <a className="tile tile1" style={{ gridColumn: 'span 2' }}>Se connecter</a>
              </Link>
              <Link href="/logistique" legacyBehavior>
                <a className="tile tile2" style={{ gridColumn: 'span 1' }}>Logistique</a>
              </Link>
              <Link href="/tracabilite" legacyBehavior>
                <a className="tile tile3" style={{ gridColumn: 'span 1' }}>Traçabilité</a>
              </Link>
              <Link href="/production" legacyBehavior>
                <a className="tile tile4" style={{ gridColumn: 'span 1' }}>Production</a>
              </Link>
              <Link href="/mediation" legacyBehavior>
                <a className="tile tile5" style={{ gridColumn: 'span 1' }}>Médiation</a>
              </Link>
              <Link href="/sav" legacyBehavior>
                <a className="tile tile6" style={{ gridColumn: 'span 1' }}>SAV</a>
              </Link>
              <Link href="/dons" legacyBehavior>
                <a className="tile tile7" style={{ gridColumn: 'span 1' }}>Dons</a>
              </Link>
              <Link href="/bilans" legacyBehavior>
                <a className="tile tile8" style={{ gridColumn: 'span 1' }}>Bilans</a>
              </Link>
              <Link href="/stocks" legacyBehavior>
                <a className="tile tile9" style={{ gridColumn: 'span 1' }}>Stocks</a>
              </Link>
              <Link href="/admin" legacyBehavior>
                <a className="tile tile10" style={{ gridColumn: 'span 1' }}>Accès admin</a>
              </Link>
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
