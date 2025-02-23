import Link from 'next/link';

export default function Home() {
  return (
    <div className="tiles">
      <Link href="/page1" legacyBehavior><a className="tile">Page 1</a></Link>
      <Link href="/page2" legacyBehavior><a className="tile">Page 2</a></Link>
      <Link href="/page3" legacyBehavior><a className="tile">Page 3</a></Link>
      <Link href="/page4" legacyBehavior><a className="tile">Page 4</a></Link>
      <Link href="/page5" legacyBehavior><a className="tile">Page 5</a></Link>
      <Link href="/page6" legacyBehavior><a className="tile">Page 6</a></Link>
    </div>
  );
}
