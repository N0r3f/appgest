import Link from 'next/link';
import styles from './Production.module.css';

export default function Production() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Production</h2>
      <div className={styles.production}>
        <Link href="/production/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/production/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/production/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
        <Link href="/production/gestion" legacyBehavior><a className={styles.tile4}>Gestion</a></Link>
        <Link href="/production/statistiques" legacyBehavior><a className={styles.tile5}>Statistiques</a></Link>
      </div>
    </div>
  );
}
