/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import ModalC from '@/components/Modalc'


import ArrowLeft from '../../public/assets/svg/arrow_left.svg';
import ArrowRight from '../../public/assets/svg/arrow_right.svg';
import Uno from '../../public/assets/svg/corporativos/1.svg';
import Dos from '../../public/assets/svg/corporativos/2.svg';
import Tres from '../../public/assets/svg/corporativos/3.svg';
import Cuatro from '../../public/assets/svg/corporativos/4.svg';
import Cinco from '../../public/assets/svg/corporativos/5.svg';
import Seis from '../../public/assets/svg/corporativos/6.svg';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Modal from '../../components/Modal';

import Purificada from "../../components/aquaher/ver/Purificada";
import Ultrafiltrada from "../../components/aquaher/ver/Ultrafiltrada";
import Generica from "../../components/aquaher/ver/Generica";
import Script from "next/script";
import Larvas from "../../components/aquaher/informacion/larvas";
import Hogares from "../../components/aquaher/informacion/hogares";
import Avicolas from "../../components/aquaher/informacion/avicolas";
import Hoteles from "../../components/aquaher/informacion/hoteles";
import { useDisclosure } from "@chakra-ui/react";
import Hospitales from "@/components/aquaher/informacion/hostpclinic";
import Embotelladoras from "@/components/aquaher/informacion/embotelladoras";
import Industria from "@/components/aquaher/informacion/industria";
import Ganaderia from "@/components/aquaher/informacion/ganaderia";

import  en  from '../../public/locale/en'
import es from '../../public/locale/es'

export default function Index() {
    const router = useRouter();
    
    const {locale}= router;
    const t = locale==='en' ? en :es;
    const [showModal, setShowModal] = useState(false);
    const [content, setContent] = useState(null);
    const ref = useRef([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [purified, setPurified] = useState(null);
    const [ultrafiltered, setUltrafiltered] = useState(null);
    const [generic, setGeneric] = useState(null);
    const [water, setWater] = useState(null);


    function onClickVerMas(e, contenido, type_water) {
        e.preventDefault();
        setWater(type_water)
        onOpen()
    }

    function onClickMasInformacion(e, contenido) {
        e.preventDefault();
        setContent(contenido);
        setShowModal(true);
    }

    /* useEffect(() => {
       (() => {
           instance.get('/water/active_open?type_water=generic').then(data => {
               setGeneric( data.data)
           })
           instance.get('/water/active_open?type_water=ultrafiltered').then(data => {
               setUltrafiltered(data.data)
           })
           instance.get('/water/active_open?type_water=purified').then(data => {
               setPurified(data.data)
               setWater(data.data)
           })
   
   
       })();
   }, []);*/

    function onNext(e) {
        e.preventDefault();
        ref.current.push(ref.current.shift())
        updateGallery()
    }
    function onPrevius(e) {
        e.preventDefault();
        ref.current.unshift(ref.current.pop())
        updateGallery()
    }
    function updateGallery() {
        ref.current.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        })
        ref.current.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    return (
        <>
            <Header></Header>
            <main className="home">
                <div className="slideshow">
                    <button className="slide-btn slide-btn-1"></button>
                    <button className="slide-btn slide-btn-2"></button>
                    <button className="slide-btn slide-btn-3"></button>
                    <button className="slide-btn slide-btn-4"></button>
                    <div className="slideshow-wrapper">
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/aqua_4.jpg" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/aqua_1.jpg" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/aqua_3.jpg" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/aqua_2.jpg" />
                        </div>
                    </div>
                </div>
            </main>

            <section className="grupo">
                <h1 className="gh-title">{t.description14}</h1>
                <div className="space">
                    <p className="gh-subtitle">{t.description15}
                    </p>
                </div>
                <div className="tit-aq">
                    <h1 className="gh-title">{t.description16}</h1>
                </div>

                <Carousel showArrows={true} showStatus={false} showThumbs={false}
                    infiniteLoop={true} autoPlay={true} interval={2000}
                    useKeyboardArrows={true}>
                    <div>
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">{t.description17}</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <Image src="/assets/images/m3.png" alt="asd" width={450} height={300} />
                            </div>
                            <div className="car-text">
                                <p>
                                    {t.description18}
                                </p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">{t.description19}</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <Image src="/assets/images/m2.png" alt="asd" width={450} height={300} />
                            </div>
                            <div className="car-text">
                                <p>
                                    {t.description20}
                                </p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">{t.description21}</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <Image src="/assets/images/m1.png" alt="asd" width={450} height={300} />
                            </div>
                            <div className="car-text">
                                <p>
                                    {t.description22}
                                </p>

                            </div>
                        </div>
                    </div>
                </Carousel>

                <div className="sec-refer">
                    <div className="gallery">
                        <div className="gallery-container">
                            <div ref={el => ref.current[0] = el} className="card gallery-item gallery-item-1" data-index="1">
                                <div className="card-image"></div>
                                <div className="card-text card2">
                                    <h2>{t.description23}</h2>
                                    <p>{t.description24}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Ganaderia)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[1] = el} className="card gallery-item gallery-item-2" data-index="2">
                                <div className="card-image card10"></div>
                                <div className="card-text card3">
                                    <h2>{t.description26}</h2>
                                    <p>{t.description27}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Hogares)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[2] = el} className="card gallery-item gallery-item-3" data-index="3">
                                <div className="card-image card3"></div>
                                <div className="card-text card2">
                                    <h2>{t.description28}</h2>
                                    <p>{t.description29}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Larvas)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[3] = el} className="card gallery-item gallery-item-4" data-index="4">
                                <div className="card-image card10"></div>
                                <div className="card-text card3">
                                    <h2>{t.description30}</h2>
                                    <p>{t.description31}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Hoteles)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>

                            <div ref={el => ref.current[4] = el} className="card gallery-item gallery-item-5" data-index="5">
                                <div className="card-image card4"></div>
                                <div className="card-text card2">
                                    <h2>{t.description32}</h2>
                                    <p>{t.description33}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Hospitales)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[5] = el} className="card gallery-item gallery-item-6" data-index="6">
                                <div className="card-image card5"></div>
                                <div className="card-text card2">
                                    <h2>{t.description34}</h2>
                                    <p>{t.description35}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Embotelladoras)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[6] = el} className="card gallery-item gallery-item-7" data-index="7">
                                <div className="card-image card6"></div>
                                <div className="card-text card2">
                                    <h2>{t.description36}</h2>
                                    <p>{t.description37}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Avicolas)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[7] = el} className="card gallery-item gallery-item-8" data-index="8">
                                <div className="card-image card7"></div>
                                <div className="card-text card2">
                                    <h2>{t.description38}</h2>
                                    <p>{t.description39}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Larvas)}>
                                       {t.description25}
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[8] = el} className="card gallery-item gallery-item-9" data-index="9">
                                <div className="card-image card2"></div>
                                <div className="card-text">
                                    <h2>{t.description40}</h2>
                                    <p>{t.description41}</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Industria)}>
                                        {t.description25}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gallery-controls">
                            <button className="btn-next" onClick={onPrevius}>
                                <ArrowLeft></ArrowLeft>
                            </button>
                            <button className="btn-next" onClick={onNext}>
                                <ArrowRight />
                            </button>
                        </div>

                    </div>
                </div>
                <h1 className="gh-title">{t.description42}</h1>
                <hr />
                <h2 className="gh-sub">{t.description43}</h2>
                <h2 className="gh-sub">
                    <b>»</b> {t.description44}
                    <br /> <b>»</b>{t.description45}
                    <br /> <b>»</b>{t.description46}
                    <br /> <b>»</b> {t.description47}
                    <br /> <b>»</b>{t.description48}
                    <br /> <b>»</b>{t.description49}
                    <br /> <b>»</b>{t.description50}


                </h2>
                <h2 className="gh-sub">
                    {t.description51}
                </h2>
                <div className="tit-aq-2">

                    <a className="colore" href="/assets/archivos/POLITICA DE CALIDAD.pdf">{t.description52}</a>
                </div>
            </section>

            <div className="sec-bussines">
                <div className="sec-tit">
                    <h2>{t.description53}</h2>
                </div>
                <div className="sec-bu">
                    <div className="sec-bu-c">
                        <Uno />
                    </div>
                    <div className="sec-bu-c">
                        <Dos />
                    </div>
                    <div className="sec-bu-c">
                        <Tres />
                    </div>
                    <div className="sec-bu-c">
                        <Cuatro />
                    </div>
                    <div className="sec-bu-c">
                        <Cinco />
                    </div>
                    <div className="sec-bu-c">
                        <Seis />
                    </div>
                </div>
            </div>
            <Footer />
            <a href="https://api.whatsapp.com/send?phone=593986709356&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20productos."
                className="float-w">
                <i className="fa fa-whatsapp whats"></i>
            </a>
            {water ? <ModalC isOpen={isOpen} onClose={onClose} water={water}></ModalC> : null}

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                {content}
            </Modal>
        </>
    )
}
