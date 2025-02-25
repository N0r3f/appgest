import Link from 'next/link';
import styles from './Dons.module.css';

export default function Dons() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dons</h2>
      <div className={styles.dons}>
        <Link href="/dons/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/dons/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/dons/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
        <Link href="/dons/gestion" legacyBehavior><a className={styles.tile4}>Gestion</a></Link>
        <Link href="/dons/statistiques" legacyBehavior><a className={styles.tile5}>Statistiques</a></Link>
      </div>
    </div>
  );
}
