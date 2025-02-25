import Link from 'next/link';
import styles from './Tracabilite.module.css';

export default function Tracabilite() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tracabilité</h2>
      <div className={styles.tracabilite}>
        <Link href="/tracabilite/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/tracabilite/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/tracabilite/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
        <Link href="/tracabilite/gestion" legacyBehavior><a className={styles.tile4}>Gestion</a></Link>
        <Link href="/tracabilite/statistiques" legacyBehavior><a className={styles.tile5}>Statistiques</a></Link>
      </div>
    </div>
  );
}
