import Link from 'next/link';
import styles from './Logistique.module.css';

export default function Logistique() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Logistique</h2>
      <div className={styles.logistique}>
        <Link href="/logistique/entrees" legacyBehavior><a className={styles.tile2}>Entrées</a></Link>
        <Link href="/logistique/sorties" legacyBehavior><a className={styles.tile3}>Sorties</a></Link>
        <Link href="/logistique/calendrier" legacyBehavior><a className={styles.tile1}>Agenda</a></Link>
        <Link href="/logistique/gestion" legacyBehavior><a className={styles.tile4}>Gestion</a></Link>
        <Link href="/logistique/statistiques" legacyBehavior><a className={styles.tile5}>Statistiques</a></Link>
      </div>
    </div>
  );
}
