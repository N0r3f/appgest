import Link from 'next/link';

export default function Home() {
  return (
    <div className="tiles">
      {/* Logistique */}
      <div className="logistique-container">
        <h2 className="logistique-title">Logistique</h2>
        <div className="logistique">
          <Link href="/logistique1" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
          <Link href="/logistique2" legacyBehavior><a className="tile tile2">Entrées</a></Link>
          <Link href="/logistique3" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        </div>
      </div>
      {/* Traçabilité */}
      <div className="tracabilite-container">
        <h2 className="tracabilite-title">Traçabilité</h2>
        <div className="tracabilite">
          <Link href="/tracabilite1" legacyBehavior><a className="tile tile2">Entrées</a></Link>
          <Link href="/tracabilite2" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        </div>
      </div>
      {/* Production */}
      <div className="production-container">
        <h2 className="production-title">Production</h2>
        <div className="production">
          <Link href="/production1" legacyBehavior><a className="tile tile4">Fiches</a></Link>
          <Link href="/production2" legacyBehavior><a className="tile tile5">Bilans</a></Link>
        </div>
      </div>
      {/* Médiation */}
      <div className="mediation-container">
        <h2 className="mediation-title">Médiation</h2>
        <div className="mediation">
          <Link href="/mediation1" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
          <Link href="/mediation2" legacyBehavior><a className="tile tile2">Entrées</a></Link>
          <Link href="/mediation3" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        </div>
      </div>
      {/* SAV */}
      <div className="sav-container">
        <h2 className="sav-title">SAV</h2>
        <div className="sav">
          <Link href="/sav1" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
          <Link href="/sav2" legacyBehavior><a className="tile tile2">Entrées</a></Link>
          <Link href="/sav3" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        </div>
      </div>
      {/* Dons */}
      <div className="dons-container">
        <h2 className="dons-title">Dons</h2>
        <div className="dons">
          <Link href="/dons1" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
          <Link href="/dons2" legacyBehavior><a className="tile tile2">Entrées</a></Link>
          <Link href="/dons3" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        </div>
      </div>
      {/* Stocks */}
      <div className="stocks-container">
        <h2 className="stocks-title">Stocks</h2>
        <div className="stocks">
          <Link href="/stocks1" legacyBehavior><a className="tile tile6">Sécurité</a></Link>
          <Link href="/stocks2" legacyBehavior><a className="tile tile7">Alerte</a></Link>
          <Link href="/stocks3" legacyBehavior><a className="tile tile8">Saisonnier</a></Link>
          <Link href="/stocks4" legacyBehavior><a className="tile tile9">Transit</a></Link>
          <Link href="/stocks5" legacyBehavior><a className="tile tile10">Spéculatif</a></Link>
          <Link href="/stocks6" legacyBehavior><a className="tile tile11">Cyclique</a></Link>
          <Link href="/stocks7" legacyBehavior><a className="tile tile12">Actif</a></Link>
          <Link href="/stocks8" legacyBehavior><a className="tile tile13">Dormant</a></Link>
          <Link href="/stocks9" legacyBehavior><a className="tile tile14">Récupération</a></Link>
        </div>
      </div>
      {/* Bilans */}
      <div className="bilans-container">
        <h2 className="bilans-title">Bilans</h2>
        <div className="bilans">
          <Link href="/bilans1" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
          <Link href="/bilans2" legacyBehavior><a className="tile tile2">Entrées</a></Link>
          <Link href="/bilans3" legacyBehavior><a className="tile tile3">Sorties</a></Link>
        </div>
      </div>
    </div>
  );
}
