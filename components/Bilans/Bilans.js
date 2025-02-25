import Link from 'next/link';
import styles from './Bilans.module.css';

export default function Bilans() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bilans</h2>
      <div className={styles.bilans}>
        <Link href="/bilans/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/bilans/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/bilans/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
        <Link href="/bilans/gestion" legacyBehavior><a className={styles.tile4}>Gestion</a></Link>
        <Link href="/bilans/statistiques" legacyBehavior><a className={styles.tile5}>Statistiques</a></Link>
      </div>
    </div>
  );
}
