import Link from 'next/link';
import {useRouter} from 'next/router';
import { useEffect } from 'react';

import Logo from '../public/assets/svg/logo.svg';

export default function Header(){
    const router = useRouter();
    useEffect(()=>{
        console.log(router.pathname)
        console.log(router.pathname == '/')
    })
    function Comps(){
        if(router.pathname == '/blogs'|| router.pathname == '/contacto'){
            return (
                <>
                    <div className="head-for"></div>
                    <div className="head-w"></div>
                </>
            );
        }else{
            return null
        }
    }
    return(
        <>
            <header className={(router.pathname == '/blogs'|| router.pathname == '/contacto')? 'head-back':null}>
            <nav className="d-flex color-white">
                <div className="logo">
                  <a href="#">
                    <Logo></Logo>
                  </a>
                </div>
                <div className="navigate">
                    <ul className="nav-items">
                        <li className={(router.pathname == '/')? 'item active':'item'}>
                            <Link href='/'>
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li>|</li>
                        <li className={(router.pathname == '/aquaher')? 'item active':'item'}>
                          <Link href='/aquaher'>
                            <a>Aquaher</a>
                          </Link>
                        </li>
                        <li>|</li>
                        <li className="item">
                            <Link href='/plastic-her'>
                                <a>Plastic-her</a>
                            </Link> 
                        </li>
                        <li>|</li>
                        <li className={(router.pathname == '/blogs')? 'item active':'item'}>
                            <Link href="/blogs">
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li>|</li>
                        <li className={(router.pathname == '/contacto')? 'item active':'item'}>
                            <Link href="/contacto">
                                <a>Contactanos</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Comps></Comps>
          </header>
        </>
    );
}