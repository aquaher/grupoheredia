import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Logo from '../public/assets/svg/logo.svg';
import Aquaher from '../public/assets/svg/aquaherw.svg'

export default function Header() {
    const router = useRouter();
    useEffect(() => {
        console.log(router.pathname)
        console.log(router.pathname == '/')
    })
    function Comps() {
        if (router.pathname == '/blogs' || router.pathname == '/contacto') {
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
        if (router.pathname == '/aquaher') {
            return <Aquaher></Aquaher>;
        }
        return <Logo></Logo>;
    }
    return (
        <>
            <div className={(router.pathname == '/blogs' || router.pathname == '/contacto') ? 'header head-back' : 'header'}>
                <nav className="d-flex color-white">
                    <div className="logo">
                        <a href="#">
                            <Logos></Logos>
                        </a>
                    </div>
                    <div className="navigate">
                        <ul className="nav-items">
                            <li className={(router.pathname == '/') ? 'item active' : 'item'}>
                                <Link href='/'>
                                    <a>Inicio</a>
                                </Link>
                            </li>
                            <li>|</li>
                            <li className={(router.pathname == '/aquaher') ? 'item active' : 'item'}>
                                <Link href='/aquaher'>
                                    <a>Aquaher</a>
                                </Link>
                            </li>
                            <li>|</li>
                            <li className={(router.pathname == '/plastic-her') ? 'item active' : 'item'}>
                                <Link href='/plastic-her'>
                                    <a>Plastic-her</a>
                                </Link>
                            </li>
                            <li>|</li>

                            <li className={(router.pathname == '/blogs') ? 'item active' : 'item'}>
                                <Link href="/blogs">
                                    <a>Blogs</a>
                                </Link>
                            </li>
                            <li>|</li>
                            <li className={(router.pathname == '/contacto') ? 'item active' : 'item'}>
                                <Link href="/contacto">
                                    <a>Contactanos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Comps></Comps>
            </div>
        </>
    );
}
/*
<li className={(router.pathname == '/plastic-her') ? 'item active' : 'item'}>
                                <Link href='/plastic-her'>
                                    <a>Plastic-her</a>
                                </Link>
                            </li>
                            <li>|</li>
*/