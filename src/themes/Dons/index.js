import Link from 'next/link';

export default function Dons() {
  return (
    <div className="dons-container">
      <h2 className="dons-title">Dons</h2>
      <div className="dons">
        <Link href="/themes/Dons/entrees" legacyBehavior><a className="tile tile2">Entrées</a></Link>
        <Link href="/themes/Dons/sorties" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        <Link href="/themes/Dons/calendrier" legacyBehavior><a className="tile tile1">Agenda</a></Link>
      </div>
    </div>
  );
}
