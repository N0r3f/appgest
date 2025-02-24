import Link from 'next/link';

export default function Production() {
  return (
    <div className="production-container">
      <h2 className="production-title">Production</h2>
      <div className="production">
        <Link href="/themes/Production/fiches" legacyBehavior><a className="tile tile4">Fiches</a></Link>
        <Link href="/themes/Production/bilans" legacyBehavior><a className="tile tile5">Bilans</a></Link>
        <Link href="/themes/Production/calendrier" legacyBehavior><a className="tile tile1">Calendrier</a></Link>
      </div>
    </div>
  );
}
