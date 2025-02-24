import Logistique from '../themes/Logistique';
import Tracabilite from '../themes/Tracabilite';
import Production from '../themes/Production';
import Mediation from '../themes/Mediation';
import Sav from '../themes/Sav';
import Dons from '../themes/Dons';
import Stocks from '../themes/Stocks';
import Bilans from '../themes/Bilans';

export default function Home() {
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
