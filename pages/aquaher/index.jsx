import { useState } from "react";
import Header from "../../components/Header";
import Modal from '../../components/Modal';
import Image from 'next/image';

import ArrowLeft from '../../public/assets/svg/arrow_left.svg';
import ArrowRight from '../../public/assets/svg/arrow_right.svg';
import Uno from '../../public/assets/svg/corporativos/1.svg';
import Dos from '../../public/assets/svg/corporativos/2.svg';
import Tres from '../../public/assets/svg/corporativos/3.svg';
import Cuatro from '../../public/assets/svg/corporativos/4.svg';
import Cinco from '../../public/assets/svg/corporativos/5.svg';
import Seis from '../../public/assets/svg/corporativos/6.svg';
import Footer from "../../components/Footer";

export default function Index() {
  const [showModal, setShowModal] = useState(false);

  function onClickModal(){
    setShowModal(true)
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
              <img className="slide-img" src="/assets/images/aqua_4.jpg"/>
            </div>
            <div className="slide">
              <img className="slide-img" src="/assets/images/aqua_1.jpg"/>
            </div>
            <div className="slide">
              <img className="slide-img" src="/assets/images/aqua_3.jpg"/>
            </div>
            <div className="slide">
              <img className="slide-img" src="/assets/images/aqua_2.jpg"/>
            </div>
          </div>
        </div>  
        </main>

        <section className="grupo">
          <h1 className="gh-title">Somos la industria del agua</h1>
          <div className="space">
            <p className="gh-subtitle">Somos una empresa encargada de la purificación de agua a gran escala, ofreciendo un producto de calidad para uso industrial, comercial y consumo humano.
                En el campo industrial optimizamos sus recursos mejorando sus procesos y alargando la vida útil de sus equipos.
            </p>
          </div>
          <div className="tit-aq">
            <h1 className="gh-title">Nuestros productos</h1>
          </div>

          <div className="carousel">
                <div className="carousel-inner">
                    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true"
                        hidden="" checked="checked"/>
                    <div className="carousel-item">
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">Agua purificada</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <img src="/assets/images/m3.png" alt="asd"/>
                            </div>
                            <div className="car-text">
                                <p>
                                    Tratada mediante membranas de ósmosis inversa, que permite la eliminación de sólidos
                                    totales disueltos, metales pesados, microorganismos patógenos perjudiciales para la
                                    salud, garantizando la inocuidad y seguridad de procesos y productos. Nuestra agua
                                    purificada disminuye mantenimientos y mejora la duración de la vida útil de
                                    maquinarias industriales.
                                </p>
                                <a href="#">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true"
                        hidden=""/>
                    <div className="carousel-item">
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">Agua Ultrafiltrada</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <img src="/assets/images/m2.png" alt="asd"/>
                            </div>
                            <div className="car-text">
                                <p>
                                    Tratada bajo un proceso de membrana de ultrafiltración se logra la eliminación de
                                    turbiedad, bacterias, protozoos y otros microorganismos, lo cual la vuelve un agua
                                    baja en densidad de sedimentos, nuestro proceso retiene partículas de hasta 0,01 µm
                                    y es ozonizada para garantizar una mayor calidad e inocuidad en el producto final.
                                </p>
                                <a href="#">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true"
                        hidden=""/>
                    <div className="carousel-item">
                        <div className="tit-aq-2">
                            <h1 className="gh-title-2">Agua Genérica</h1>
                        </div>
                        <div className="car-cont">
                            <div className="car-img">
                                <img src="/assets/images/m1.png" alt="asd"/>
                            </div>
                            <div className="car-text">
                                <p>
                                    Nuestra agua genérica, es realizada bajo un proceso de filtración inicial, logrando
                                    mantener los minerales naturales, permitiendo ser ideal para el uso cotidiano en el
                                    hogar al tener un proceso de filtración.
                                </p>
                                <a href="#">Ver mas...</a>
                            </div>
                        </div>
                    </div>
                    <label for="carousel-3" className="carousel-control prev control-1">‹</label>
                    <label for="carousel-2" className="carousel-control next control-1">›</label>
                    <label for="carousel-1" className="carousel-control prev control-2">‹</label>
                    <label for="carousel-3" className="carousel-control next control-2">›</label>
                    <label for="carousel-2" className="carousel-control prev control-3">‹</label>
                    <label for="carousel-1" className="carousel-control next control-3">›</label>
                    <ol className="carousel-indicators">
                        <li>
                            <label for="carousel-1" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-2" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label for="carousel-3" className="carousel-bullet">•</label>
                        </li>
                    </ol>
                </div>  
          </div>
          <div className="sec-refer">
                <div className="gallery">
                    <div className="gallery-container">
                        <div className="card gallery-item gallery-item-1" data-index="1">
                            <div className="card-image"></div>
                            <div className="card-text card2">
                                <h2>Agrícola</h2>
                                <p>un agua ideal para el riego de plantas al aportar nutrientes como el calcio, potasio,
                                    sodio, etc.)</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="card gallery-item gallery-item-2" data-index="2">
                            <div className="card-image card10"></div>
                            <div className="card-text card3">
                                <h2>Hogares</h2>
                                <p>actividades diarias del hogar, como limpieza de superficies, y lavado de ropa.</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>

                        </div>
                        <div className="card gallery-item gallery-item-3" data-index="3">
                            <div className="card-image card2"></div>
                            <div className="card-text">
                                <h2>Sector industrial</h2>
                                <p>agua ideal para procesos industriales, como sistemas de transferencia de calor
                                    (calderos, intercambiadores de calor, torres de enfriamiento, autoclave, chillers,
                                    etc.)</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="card gallery-item gallery-item-4" data-index="4">
                            <div className="card-image card3"></div>
                            <div className="card-text card2">
                                <h2>Laboratorio de larvas</h2>
                                <p>95% de supervivencia en la crianza de tus larvas de camarón, nuestra agua purificada
                                    cuenta con desinfección de ozono y se encuentra libre de microorganismos patógenos,
                                    volviéndose altamente beneficioso para el desarrollo de tus larvas.</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="card gallery-item gallery-item-5" data-index="5">
                            <div className="card-image card4"></div>
                            <div className="card-text card2">
                                <h2>Hospitales y clínicas</h2>
                                <p>Nuestra agua purificada está libre de sustancias no deseadas como parásitos, cloro,
                                    flúor, dioxidas, alcanzando los altos estándares de calidad</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="gallery-item gallery-item-6" data-index="6">
                            <div className="card-image card5"></div>
                            <div className="card-text card2">
                                <h2>Embotelladoras</h2>
                                <p>Desarrollamos todos los procesos de purificación del agua lista para su envasado y la
                                    venta al consumo humano a un menor costo, logrando incrementar sus ganancias.
                                    Cumplimos con todos los requisitos fisicoquímicos y microbiológicos</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="card gallery-item gallery-item-7" data-index="7">
                            <div className="card-image card6"></div>
                            <div className="card-text card2">
                                <h2>Avícolas</h2>
                                <p>agua ideal para las aves al estar libre de microorganismos patógenos gracias a la
                                    desinfección con ozono, evita enfermedades gastrointestinales e incrementa el
                                    rendimiento en la producción al contar con aves más saludables.</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="card gallery-item gallery-item-8" data-index="8">
                            <div className="card-image card7"></div>
                            <div className="card-text card2">
                                <h2>Fábricas de hielo</h2>
                                <p>Nuestra agua es desinfectada con ozono encontrandose libre de sustancias no deseadas
                                    como parásitos, cloro, flúor, dioxidas, siendo materia prima ideal para la obtención
                                    de marquetas de hielo.</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                        <div className="card gallery-item gallery-item-9" data-index="9">
                            <div className="card-image card8"></div>
                            <div className="card-text card2">
                                <h2>Sector Piscinas</h2>
                                <p>agua ozonizada con un pH entre 7 y 8, que, al no tener microorganismos patógenos, no
                                    desarrolla coloración con químicos y no crea enfermedades cutáneas, volviéndola
                                    ideal para piscinas..</p>
                            </div>
                            <div className="card-stats card2">
                                <a href="#">
                                    Mas información
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-controls">
                        <button className="btn-next"> <ArrowLeft></ArrowLeft> </button>
                        <button className="btn-next">
                          <ArrowRight/>
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
                  <Uno/>
                </div>
                <div className="sec-bu-c">
                  <Dos/>
                </div>
                <div className="sec-bu-c">
                  <Tres/>
                </div>
                <div className="sec-bu-c">
                  <Cuatro/>
                </div>
                <div className="sec-bu-c">
                  <Cinco/>
                </div>
                <div className="sec-bu-c">
                  <Seis/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
