import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'

import Header from '../components/Header'

import Aquaher from '../public/assets/svg/aquaher.svg';
import Plastic from '../public/assets/svg/plastic-her.svg';
import Herediatrans from '../public/assets/svg/herediatrans.svg';
import Galacticos from '../public/assets/svg/galacticos.svg';

import ButtonPlay from '../public/assets/svg/play.svg'
import Footer from '../components/Footer'
import  en  from '../locale/en'
import es from '../locale/es'

export default function Index() {
  const route = useRouter();
  const {locale}= route;
  const t = locale==='en' ? en :es;

  const ref = useRef();
  const [stop, setStop] = useState('plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported plyr__poster-enabled')
  const [play, setPlay] = useState('plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--pip-supported plyr__poster-enabled plyr--playing plyr--hide-controls');
  const [pause, setPause] = useState(true);
  const [hidden, setHidden] = useState('');



  function onPause(e) {
    setHidden('');
    setPause(true);
    ref.current.pause();
  }


  function onClickPlay(e) {
    setPause(false)
    setHidden('hidden')
    ref.current.play()
  }
  return (
    <>
    <Header></Header>
      <main className="home">
        <div className={"preload " + hidden}>
          <div className="content-preload">
            <div className="content-play">
              <a className="btn-player" onClick={onClickPlay}>
                <ButtonPlay></ButtonPlay>
              </a>
            </div>
          </div>
        </div>
        <div tabIndex={0} className={pause ? stop : play}>
          <div className="plyr__controls"></div>
          <div className="plyr__video-wrapper">
            <video className="video-js video-home" id="video-wt" ref={ref} data-poster="/assets/images/background_video.png">
              <source src="/assets/video/video.mp4" type="video/mp4" />
            </video>
            <div className="plyr__poster" onClick={onPause}></div>
          </div>
          <div className="plyr__captions"></div>
        </div>
      </main>
      <section className="grupo">
       
        <h1 className="gh-title">{t.title}</h1>
        <hr />

        <h2 className="gh-subtitle">{t.description}</h2>
        <div className="gh-mivi">
          <div className="f-mivi">
            <br />
            <div className="gh-cont">{t.description2}</div>
            
            <p>{t.description4}
            </p>
          </div>
          <div className="f-mivi">
            <div className="gh-cont">{t.description1}</div>
            <p>
            </p>{t.description3}
          </div>
        </div>
        <h1 className="gh-title sub">{t.description5}</h1>
        <div className="content-bussines">
          <div className="box" onClick={() => route.push('/aquaher')}>
            <div className="content">
              <Aquaher />
            </div>
            <div className="content-hover green">
              <p>{t.description6}
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <Plastic />
            </div>
            <div className="content-hover orange">
              <p>{t.description7}</p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <Herediatrans />
            </div>
            <div className="content-hover here">
              <p>{t.description8}</p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <Galacticos />
            </div>
            <div className="content-hover blue">
              <p>{t.description9}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
