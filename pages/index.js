import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Logistique from '../components/Logistique/Logistique';
import Tracabilite from '../components/Tracabilite/Tracabilite';
import Production from '../components/Production/Production';
import Mediation from '../components/Mediation/Mediation';
import Sav from '../components/Sav/Sav';
import Dons from '../components/Dons/Dons';
import Stocks from '../components/Stocks/Stocks';
import Bilans from '../components/Bilans/Bilans';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/auth/signin');
    }
  }, [session, loading, router]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="tiles">
      <Logistique />
      <Tracabilite />
      <Production />
      <Mediation />
      <Sav />
      <Dons />
      <Bilans />
      <Stocks />
    </div>
  );
}

