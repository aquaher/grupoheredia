import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Logo from '../public/assets/svg/logo.svg';
import Aquaher from '../public/assets/svg/aquaherw.svg'
import Plastic from '../public/assets/svg/plastic-her.svg'

import  en  from '../locale/en'
import es from '../locale/es'

export default function Header() {
    const router = useRouter();
    


  const {locale}= router;
  const t = locale==='en' ? en :es;


  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.route, router.asPath, {locale});
  };


  

   
    function Comps() {
        if (router.asPath == '/blogs' || router.asPath == '/contacto') {
            return (
                <>
                    <div className="head-for"></div>
                    <div className="head-w"></div>
                </>
            );
        } else {
            return null
        }
    }
    function Logos() {
        if (router.asPath == '/aquaher') {
            return <Aquaher></Aquaher>;
        }
        if(router.asPath == '/plastic-her'){
            return <Plastic></Plastic>;
        }
        return <Logo></Logo>;
    }
    
    return (
        <>
            <div className={(router.asPath == '/blogs' || router.asPath == '/contacto') ? 'header head-back' : 'header'}>
                <nav className="d-flex color-white">
                    <div className="logo">
                        <a href="#">
                            <Logos></Logos>
                        </a>
                    </div>

                   
                    <div className="navigate">
                        <ul className="nav-items">
                            <li className={(router.asPath == '/') ? 'item active' : 'item'}>
                                <Link href='/'>
                                    <a>{t.description11}</a>
                                </Link>
                            </li>
                            <li>|</li>
                            <li className={(router.asPath == '/aquaher') ? 'item active' : 'item'}>
                                <Link href='/aquaher'>
                                    <a>Aquaher</a>
                                </Link>
                            </li>
                            <li>|</li>
                            <li className={(router.asPath == '/plastic-her') ? 'item active' : 'item'}>
                                <Link href='/plastic-her'>
                                    <a>Plastic-her</a>
                                </Link>
                            </li>
                            <li>|</li>

                            <li className={(router.asPath == '/blogs') ? 'item active' : 'item'}>
                                <Link href="/blogs">
                                    <a>{t.description13}</a>
                                </Link>
                            </li>
                            <li>|</li>
                            <li className={(router.asPath == '/contacto') ? 'item active' : 'item'}>
                                <Link href="/contacto">
                                    <a>{t.description12}</a>
                                </Link>
                                
                            </li>
                            <li>|   </li>
                            <li>

                            <select
            onChange={changeLanguage}
            defaultValue={router.locale}
            className={'item'}>
            <option  value="en">EN</option>
            <option  value="es">ES</option>
          </select>
                            </li>
                           
                        </ul>
                        
                    </div>
                </nav>
                <Comps></Comps>
                
            </div>
        </>
    );
}
export const getStaticProps = async (context) => {
    return {
      props: { context },
    };
  };
/*
<li className={(router.pathname == '/plastic-her') ? 'item active' : 'item'}>
                                <Link href='/plastic-her'>
                                    <a>Plastic-her</a>
                                </Link>
                            </li>
                            <li>|</li>
*/