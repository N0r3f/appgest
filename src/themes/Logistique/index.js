import Link from 'next/link';

export default function Logistique() {
  return (
    <div className="logistique-container">
      <h2 className="logistique-title">Logistique</h2>
      <div className="logistique">
        <Link href="/themes/Logistique/entrees" legacyBehavior><a className="tile tile2">Entrées</a></Link>
        <Link href="/themes/Logistique/sorties" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        <Link href="/themes/Logistique/calendrier" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
      </div>
    </div>
  );
}
