import Link from 'next/link';

export default function Tracabilite() {
  return (
    <div className="tracabilite-container">
      <h2 className="tracabilite-title">Traçabilité</h2>
      <div className="tracabilite">
        <Link href="/themes/Tracabilite/entrees" legacyBehavior><a className="tile tile2">Entrées</a></Link>
        <Link href="/themes/Tracabilite/sorties" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        <Link href="/themes/Tracabilite/calendrier" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
      </div>
    </div>
  );
}
