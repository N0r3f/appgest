import Link from 'next/link';
import styles from './Sav.module.css';

export default function Sav() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SAV</h2>
      <div className={styles.sav}>
        <Link href="/themes/Sav/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/themes/Sav/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/themes/Sav/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
      </div>
    </div>
  );
}
