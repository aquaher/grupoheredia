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
    
    return(
        <>
            <header>
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
                        <li className="item">
                            <Link href="/blogs">
                                <a>Blogs</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
          </header>
        </>
    );
}