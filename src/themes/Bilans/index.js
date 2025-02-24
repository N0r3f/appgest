import Link from 'next/link';

export default function Bilans() {
  return (
    <div className="bilans-container">
      <h2 className="bilans-title">Bilans</h2>
      <div className="bilans">
        <Link href="/themes/Bilans/entrees" legacyBehavior><a className="tile tile2">Entrées</a></Link>
        <Link href="/themes/Bilans/sorties" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        <Link href="/themes/Bilans/calendrier" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
      </div>
    </div>
  );
}
