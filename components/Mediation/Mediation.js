import Link from 'next/link';
import styles from './Mediation.module.css';

export default function Mediation() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Médiation</h2>
      <div className={styles.mediation}>
        <Link href="/mediation/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/mediation/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/mediation/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
        <Link href="/mediation/gestion" legacyBehavior><a className={styles.tile4}>Gestion</a></Link>
        <Link href="/mediation/statistiques" legacyBehavior><a className={styles.tile5}>Statistiques</a></Link>
      </div>
    </div>
  );
}
