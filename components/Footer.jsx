
import { useRouter } from 'next/router'
import Aquaherw from '../public/assets/svg/aquaherw.svg';
import Plasticw from '../public/assets/svg/plastic-herw.svg';
import Herediatransw from '../public/assets/svg/herediatransw.svg';
import Galacticosw from '../public/assets/svg/galacticosw.svg';

import  en  from '../locale/en'
import es from '../locale/es'
export default function Footer() {
  const router = useRouter();
    
  const {locale}= router;
  const t = locale==='en' ? en :es;
  return (
    <>
      <footer>
        <div className="empresas">
          <ul className="nav-itemsvg">
            <li className="itsvg">
              <Aquaherw />
            </li>
            <li className="itsvg">
              <Plasticw />
            </li>
            <li className="itsvg">
              <Herediatransw />
            </li>
            <li className="itsvg">
              <Galacticosw />
            </li>
          </ul>
        </div>
        <div className="foot-info">
          <span>{t.description10}</span>
        </div>
      </footer>
    </>
  );
}