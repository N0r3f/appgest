import Link from 'next/link';

export default function Mediation() {
  return (
    <div className="mediation-container">
      <h2 className="mediation-title">Médiation</h2>
      <div className="mediation">
        <Link href="/themes/Mediation/entrees" legacyBehavior><a className="tile tile2">Entrées</a></Link>
        <Link href="/themes/Mediation/sorties" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        <Link href="/themes/Mediation/calendrier" legacyBehavior><a className="tile tile1">Agenda</a></Link>
      </div>
    </div>
  );
}
