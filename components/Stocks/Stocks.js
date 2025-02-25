import Link from 'next/link';
import styles from './Stocks.module.css';

export default function Stocks() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Stocks</h2>
      <div className={styles.stocks}>
        <Link href="/stocks/actif" legacyBehavior><a className={styles.tile1}>Actif</a></Link>
        <Link href="/stocks/alerte" legacyBehavior><a className={styles.tile2}>Alerte</a></Link>
        <Link href="/stocks/cyclique" legacyBehavior><a className={styles.tile3}>Cyclique</a></Link>
        <Link href="/stocks/dormant" legacyBehavior><a className={styles.tile4}>Dormant</a></Link>
        <Link href="/stocks/recup" legacyBehavior><a className={styles.tile5}>Récup</a></Link>
        <Link href="/stocks/saisonnier" legacyBehavior><a className={styles.tile6}>Saisonnier</a></Link>
        <Link href="/stocks/securite" legacyBehavior><a className={styles.tile7}>Sécurité</a></Link>
        <Link href="/stocks/speculatif" legacyBehavior><a className={styles.tile8}>Spéculatif</a></Link>
        <Link href="/stocks/transit" legacyBehavior><a className={styles.tile9}>Transit</a></Link>
      </div>
    </div>
  );
}
