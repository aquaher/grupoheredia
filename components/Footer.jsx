import Aquaherw from '../public/assets/svg/aquaherw.svg';
import Plasticw from '../public/assets/svg/plastic-herw.svg';
import Herediatransw from '../public/assets/svg/herediatransw.svg';
import Galacticosw from '../public/assets/svg/galacticosw.svg';

export default function Footer() {
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
          <span>Desarrollado por el Area de Tics GRUPOHEREDIA ©2023</span>
        </div>
      </footer>
    </>
  );
}