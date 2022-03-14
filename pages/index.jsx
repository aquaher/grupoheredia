import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {useEffect,useState, useRef} from 'react'
import Script from 'next/script'
import Plyr from 'plyr'

import Aquaher from '../public/assets/svg/aquaher.svg';
import Plastic from '../public/assets/svg/plastic-her.svg';
import Herediatrans from '../public/assets/svg/herediatrans.svg';
import Galacticos from '../public/assets/svg/galacticos.svg';

import Aquaherw from '../public/assets/svg/aquaherw.svg';
import Plasticw from '../public/assets/svg/plastic-herw.svg';
import Herediatransw from '../public/assets/svg/herediatransw.svg';
import Galacticosw from '../public/assets/svg/galacticosw.svg';

import ButtonPlay from '../public/assets/svg/play.svg'

export default function Index() {
  const route = useRouter();
  const ref = useRef();
  const [stop,setStop] = useState('plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported plyr__poster-enabled')
  const [play, setPlay] = useState('plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--pip-supported plyr__poster-enabled plyr--playing plyr--hide-controls');
  const [pause, setPause] = useState(true);
  const [hidden, setHidden] = useState('');
  

  
  function onPause(){
    setHidden('');
    setPause(true);
    ref.current.pause();
  }

  return (
    <>
        <header>
            <nav className="d-flex color-white">
                <div className="logo">
                  <a href="#">
                    <Image src='/assets/svg/logo.svg' width={170} height={122}></Image>
                  </a>
                </div>
                <div className="navigate">
                    <ul className="nav-items">
                        <li className="item active">Inicio</li>
                        <li>|</li>
                        <li className="item">
                            <a onClick={async()=>{
                               //var elem = document.querySelector('div.plyr');
                               //elem.parentNode.removeChild(elem);
                              route.push('/aquaher')
                              
                              }}>Aquaher</a>
                        </li>
                        <li>|</li>
                        <li className="item">
                            <a href="/plastic-her">Plastic-her</a>
                        </li>
                        <li>|</li>
                        <li className="item">
                            <a href="/blogs">Blogs</a>
                        </li>
                    </ul>
                </div>
            </nav>
          </header>
          <main className="home">
            <div className={"preload " + hidden}>
              <div className="content-preload">
                <div className="content-play">
                  <a className="btn-player" onClick={()=>{
                    setPause(false)
                    setHidden('hidden')
                    ref.current.play()
                  }}>
                    <ButtonPlay></ButtonPlay>
                  </a>
                </div>
              </div>
            </div>
            <div tabIndex={0} className={pause?stop:play}>
            <div className="plyr__controls"></div>
            <div className="plyr__video-wrapper">
              <video className="video-js video-home" id="video-wt" ref={ref} data-poster="/assets/images/background_video.png">
                <source src="/assets/video/video.mp4" type="video/mp4"/>
              </video>
              <div className="plyr__poster" onClick={onPause}></div>
            </div>
            <div className="plyr__captions"></div>
          </div>  
          </main>
        <section className="grupo">
          <h1 className="gh-title">Somos un Holding Corporativo.</h1>
          <hr/>
          <h2 className="gh-subtitle">Creemos firmemente que nuestros valores como holding corporativo, son los que nos han permitido crecer y consolidar cada una de nuestras empresas </h2>
          <div className="gh-mivi">
              <div className="f-mivi">
                  <div className="gh-cont">Misión</div>
                  <p>Somos un grupo empresarial pioneros en desarrollar nuevas líneas de productos y servicios vanguardistas orientados al sector comercial a través de innovaciones eco-amigables.
                  </p>
              </div>
              <div className="f-mivi">
                  <div className="gh-cont">Visión</div>
                  <p>Ser líderes en desarrollo industrial de productos y servicios enfocado a la innovación tecnológica, 
                      generando cambios exponenciales en sectores estrategicos dentro de nuestro país.
                  </p>
              </div>
          </div>
          <h1 className="gh-title sub">Nuestras empresas</h1>
          <div className="content-bussines">
            <div className="box">
              <div className="content">
                <Aquaher/>
              </div>
              <div className="content-hover green">
                <p>Especialistas en purificación de agua a gran escala
                </p>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <Plastic/>
              </div>
              <div className="content-hover orange">
                <p>Innovadores en productos plásticos eco-amigables: inyección y soplado de bidones y botellas PET</p>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <Herediatrans/>
              </div>
              <div className="content-hover here">
                <p>Flota de tanqueros enfocada a la prestación de servicio de transporte terrestre</p>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <Galacticos/>
              </div>
              <div className="content-hover blue">
                <p>Alquiler de campos deportivos de fútbol para entrenamientos y pretemporadas de equipos profesionales y semiprofesionales</p>
              </div>
            </div>
          </div>
        </section> 
        <footer>
          <div className="empresas">
            <ul className="nav-itemsvg">
              <li className="itsvg">
                <Aquaherw/>
              </li>
              <li className="itsvg">
                <Plasticw/>
              </li>
              <li className="itsvg">
                <Herediatransw/>
              </li>
              <li className="itsvg">
                <Galacticosw/>
              </li>
            </ul>
          </div>
          <div className="foot-info">
            <span>Desarrollado por el Area de Tics GRUPOHEREDIA ©2022</span>
          </div>
        </footer>   
    </>
  )
}