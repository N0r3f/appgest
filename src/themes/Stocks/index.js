import Link from 'next/link';

export default function Stocks() {
  return (
    <div className="stocks-container">
      <h2 className="stocks-title">Stocks</h2>
      <div className="stocks">
        <Link href="/themes/Stocks/securite" legacyBehavior><a className="tile tile6">Sécurité</a></Link>
        <Link href="/themes/Stocks/alerte" legacyBehavior><a className="tile tile7">Alerte</a></Link>
        <Link href="/themes/Stocks/saisonnier" legacyBehavior><a className="tile tile8">Saisonnier</a></Link>
        <Link href="/themes/Stocks/transit" legacyBehavior><a className="tile tile9">Transit</a></Link>
        <Link href="/themes/Stocks/speculatif" legacyBehavior><a className="tile tile10">Spéculatif</a></Link>
        <Link href="/themes/Stocks/cyclique" legacyBehavior><a className="tile tile11">Cyclique</a></Link>
        <Link href="/themes/Stocks/actif" legacyBehavior><a className="tile tile12">Actif</a></Link>
        <Link href="/themes/Stocks/dormant" legacyBehavior><a className="tile tile13">Dormant</a></Link>
        <Link href="/themes/Stocks/recup" legacyBehavior><a className="tile tile14">Récup</a></Link>
      </div>
    </div>
  );
}
