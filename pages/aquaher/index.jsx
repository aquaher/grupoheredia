/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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

export default function Index() {
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
                <h1 className="gh-title">Somos la industria del agua</h1>
                <div className="space">
                    <p className="gh-subtitle">Somos una empresa dedicada a la purificación de agua a gran escala, ofreciendo un producto de calidad para uso industrial y consumo humano.
                    </p>
                </div>
                <div className="tit-aq">
                    <h1 className="gh-title">Nuestros productos</h1>
                </div>

                <Carousel showArrows={true} showStatus={false} showThumbs={false}
                    infiniteLoop={true} autoPlay={true} interval={2000}
                    useKeyboardArrows={true}>
                    <div>
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">Agua purificada</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <Image src="/assets/images/m3.png" alt="asd" width={450} height={300} />
                            </div>
                            <div className="car-text">
                                <p>
                                    Tratada mediante coagulación, filtros multimedia, ultrafiltración, membranas de ósmosis inversa y ozonificación.
                                    Reducimos sólidos totales disueltos, metales pesados y dureza. Eliminamos microorganismos patógenos perjudiciales para la salud,
                                    garantizando la inocuidad y seguridad de procesos y productos. Nuestra agua purificada disminuye mantenimientos y
                                    mejora la duración de la vida útil de maquinarias industriales.
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">Agua Ultrafiltrada</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <Image src="/assets/images/m2.png" alt="asd" width={450} height={300} />
                            </div>
                            <div className="car-text">
                                <p>
                                    Bajo un proceso de coagulación, filtros multimedia y ultrafiltración se elimina la turbiedad, bacterias,
                                    protozoos y otros microorganismos. Nuestra agua se caracteriza por tener una densidad de sedimentos baja.
                                    Nuestro proceso retiene partículas de hasta 0,01 µm y es ozonizada para garantizar una mayor calidad e inocuidad
                                    en el producto final.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">Agua Genérica</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <Image src="/assets/images/m1.png" alt="asd" width={450} height={300} />
                            </div>
                            <div className="car-text">
                                <p>
                                    Nuestra agua genérica se somete a un proceso de filtración inicial, mantiene los minerales naturales y
                                    es ideal para el uso en la agricultura, gnadería y limpieza en el hogar.
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
                                    <h2>Agricultura y ganaderia</h2>
                                    <p>Un agua ideal para el riego de plantas porque aporta nutrientes como el calcio, potasio,
                                        sodio, etc.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Ganaderia)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[1] = el} className="card gallery-item gallery-item-2" data-index="2">
                                <div className="card-image card10"></div>
                                <div className="card-text card3">
                                    <h2>Hogares y urbanizaciones</h2>
                                    <p>Actividades diarias del hogar como limpieza de superficies y lavado de ropa.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Hogares)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[2] = el} className="card gallery-item gallery-item-3" data-index="3">
                                <div className="card-image card3"></div>
                                <div className="card-text card2">
                                    <h2>Laboratorio de larvas</h2>
                                    <p>Incrementa la supervivencia de las larvas de camarón. El agua purificada
                                        cuenta con desinfección de ozono y se encuentra libre de microorganismos patógenos,
                                        volviéndose altamente beneficiosa para su desarrollo.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Larvas)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[3] = el} className="card gallery-item gallery-item-4" data-index="4">
                                <div className="card-image card10"></div>
                                <div className="card-text card3">
                                    <h2>Hoteles y cruceros</h2>
                                    <p>Actividades diarias del hogar como limpieza de superficies y lavado de ropa.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Hoteles)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>

                            <div ref={el => ref.current[4] = el} className="card gallery-item gallery-item-5" data-index="5">
                                <div className="card-image card4"></div>
                                <div className="card-text card2">
                                    <h2>Hospitales y clínicas</h2>
                                    <p>Nuestra agua purificada está libre de sustancias no deseadas como parásitos, cloro,
                                        flúor, dioxinas, alcanzando los altos estándares de calidad</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Hospitales)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[5] = el} className="card gallery-item gallery-item-6" data-index="6">
                                <div className="card-image card5"></div>
                                <div className="card-text card2">
                                    <h2>Embotelladoras</h2>
                                    <p>Agua lista para envasado y venta al consumo humano.
                                        Cumplimos con todos los requisitos fisicoquímicos y microbiológicos.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Embotelladoras)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[6] = el} className="card gallery-item gallery-item-7" data-index="7">
                                <div className="card-image card6"></div>
                                <div className="card-text card2">
                                    <h2>Avícolas</h2>
                                    <p>Agua ideal para las aves al estar libre de microorganismos patógenos gracias a la
                                        desinfección con ozono. Evita enfermedades gastrointestinales e incrementa el
                                        rendimiento en la producción al contar con aves más saludables.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Avicolas)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[7] = el} className="card gallery-item gallery-item-8" data-index="8">
                                <div className="card-image card7"></div>
                                <div className="card-text card2">
                                    <h2>Fábricas de hielo</h2>
                                    <p>Nuestra agua es desinfectada con ozono encontrandose libre de sustancias no deseadas
                                        como parásitos, cloro, flúor, dioxinas, siendo materia prima ideal para la obtención
                                        de marquetas de hielo.</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Larvas)}>
                                        Mas información
                                    </a>
                                </div>
                            </div>
                            <div ref={el => ref.current[8] = el} className="card gallery-item gallery-item-9" data-index="9">
                                <div className="card-image card2"></div>
                                <div className="card-text">
                                    <h2>Sector industrial</h2>
                                    <p>Agua ideal para procesos industriales, como sistemas de transferencia de calor
                                        (calderos, intercambiadores de calor, torres de enfriamiento, autoclaves, chillers,
                                        etc.)</p>
                                </div>
                                <div className="card-stats card2">
                                    <a onClick={(e) => onClickMasInformacion(e, Industria)}>
                                        Mas información
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
            </section>
            <div className="sec-bussines">
                <div className="sec-tit">
                    <h2>CLIENTES CORPORATIVOS DE AQUAHER</h2>
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
