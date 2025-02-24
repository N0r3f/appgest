import Link from 'next/link';

export default function Sav() {
  return (
    <div className="sav-container">
      <h2 className="sav-title">SAV</h2>
      <div className="sav">
        <Link href="/themes/Sav/entrees" legacyBehavior><a className="tile tile2">Entrées</a></Link>
        <Link href="/themes/Sav/sorties" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        <Link href="/themes/Sav/calendrier" legacyBehavior><a className="tile tile1">Agenda</a></Link>
      </div>
    </div>
  );
}
