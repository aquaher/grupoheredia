/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Index() {
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
                            <img className="slide-img" src="/assets/images/plast_2.png" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/plast_4.png" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/plast_6.png" />
                        </div>
                        <div className="slide">
                            <img className="slide-img" src="/assets/images/plast_1.png" />
                        </div>
                    </div>
                </div>
            </main>
            <section className="grupo">
                <h1 className="gh-title">SOMOS PLASTIC-HER</h1>
                <hr />
                <div className="space">
                    <p className="gh-subtitle">
                        Creamos soluciones ECO-RENOVABLES para las empresas dedicadas al sector del embotellamiento industrial.

                    </p>
                    <p className="gh-subtitle">
                        Contamos con personal especializado con asesoramiento en nuestras multiples líneas de producción y negocios.
                    </p>
                </div>
                <div className="gh-mivi">
                    <div className="f-mivi">
                        <div className="gh-cont">Misión</div>
                        <p>Somos una industria especializada en la inyección, soplado y envasado de bidones y botellas PET enfocadas
                            en crear soluciones ECO - RENOVABLES con los mas altos estándares de calidad.

                        </p>
                    </div>
                    <div className="f-mivi">
                        <div className="gh-cont">Visión</div>
                        <p>
                            Ser líderes nacionales en nuestra actividad, creando alianzas estratégica solidas que mantenga la calidad,
                            eficiencia y la innovación de nuestros procesos y productos, logrando mejorar los estándares del mercado.
                        </p>
                    </div>
                </div>
                <div className="pl-til-cat">
                    <div className="pl-til-text">
                        <h1>Catalogo de productos</h1>
                    </div>
                </div>


                <div className="w_full">
                    <div className="card-wrapper">

                        <div className="cardw-content">
                            <div className="bg-shape">
                                <img src="/assets/images/letras.png" alt="" />
                            </div>


                            <div className="product-img">

                                <div className="product-img__item" id="img1">
                                    <img src="/assets/images/pet1.png" alt="star wars" className="product-img__img" />
                                </div>

                                <div className="product-img__item" id="img2">
                                    <img src="/assets/images/botellas_g.png" alt="star wars" className="product-img__img" />
                                </div>

                                <div className="product-img__item" id="img3">
                                    <img src="/assets/images/maquina.png" alt="star wars" className="product-img__img" />
                                </div>

                                <div className="product-img__item" id="img4">
                                    <img src="/assets/images/bidon1.png" alt="star wars" className="product-img__img" />
                                </div>


                            </div>



                            <div className="product-slider">
                                <button className="prev-1 disabled">
                                    <span className="icon">
                                        <svg className="icon icon-arrow-right">
                                            <use xlinkHref="#icon-arrow-left"></use>
                                        </svg>
                                    </span>
                                </button>
                                <button className="next-1">
                                    <span className="icon">
                                        <svg className="icon icon-arrow-right">
                                            <use xlinkHref="#icon-arrow-right"></use>
                                        </svg>
                                    </span>
                                </button>

                                <div className="product-slider__wrp swiper-wrapper">
                                    <div className="product-slider__item swiper-slide" data-target="img4">
                                        <div className="product-slider__card">
                                            <img src="/assets/images/back_card.png" alt="star wars" className="product-slider__cover" />
                                            <div className="product-slider__content">
                                                <h1 className="product-slider__title">
                                                    Bidón PET <br />
                                                </h1>
                                                <span className="product-slider__price">20LT</span>
                                                <div className="product-ctr">
                                                    <div className="product-labels">
                                                        <div className="product-labels__title">TAMAÑO</div>

                                                        <div className="product-labels__group">
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type5" />
                                                                <span className="product-labels__txt">30CM</span>
                                                            </label>



                                                        </div>

                                                    </div>

                                                    <span className="hr-vertical"></span>

                                                    <div className="product-inf">
                                                        <div className="product-inf__percent">
                                                            <div className="product-inf__percent-circle">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                                                                    <defs>
                                                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                                            <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0" />
                                                                            <stop offset="100%" stopColor="#cb2240" stopOpacity="1" />
                                                                        </linearGradient>
                                                                    </defs>
                                                                    <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240"
                                                                        strokeWidth="4" fill="none" />
                                                                </svg>
                                                            </div>
                                                            <div className="product-inf__percent-txt">
                                                                99%
                                                            </div>
                                                        </div>

                                                        <span className="product-inf__title">Resistencia</span>
                                                    </div>

                                                </div>

                                                <div className="product-slider__bottom">
                                                    <button className="product-slider__cart">
                                                        Cotizar
                                                    </button>

                                                    <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-slider__item swiper-slide" data-target="img1">
                                        <div className="product-slider__card">
                                            <img src="/assets/images/back_card.png" alt="star wars" className="product-slider__cover" />
                                            <div className="product-slider__content">
                                                <h1 className="product-slider__title">
                                                    Preformas PET
                                                </h1>
                                                <div className="product-ctr">
                                                    <div className="product-labels">
                                                        <div className="product-labels__title">TAMAÑO</div>

                                                        <div className="product-labels__group">
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type1" checked />
                                                                <span className="product-labels__txt">20L</span>
                                                            </label>
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type1" />
                                                                <span className="product-labels__txt">1L</span>
                                                            </label>
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type1" />
                                                                <span className="product-labels__txt">500ml</span>
                                                            </label>
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type1" />
                                                                <span className="product-labels__txt">400ml</span>
                                                            </label>
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type1" />
                                                                <span className="product-labels__txt">350ml</span>
                                                            </label>
                                                        </div>

                                                    </div>





                                                </div>

                                                <div className="product-slider__bottom">
                                                    <button className="product-slider__cart">
                                                        Cotizar
                                                    </button>

                                                    <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-slider__item swiper-slide" data-target="img2">
                                        <div className="product-slider__card">
                                            <img src="/assets/images/back_card.png" alt="star wars" className="product-slider__cover" />
                                            <div className="product-slider__content">
                                                <h1 className="product-slider__title">
                                                    Botellas PET
                                                </h1>
                                                <div className="product-ctr">
                                                    <div className="product-labels">

                                                        <div className="product-labels__title">TAMAÑO</div>

                                                        <div className="product-labels__group">
                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type2" />
                                                                <span className="product-labels__txt">1L</span>
                                                            </label>

                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type2" checked />
                                                                <span className="product-labels__txt">500ml</span>
                                                            </label>

                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type2" checked />
                                                                <span className="product-labels__txt">400ml</span>
                                                            </label>

                                                            <label className="product-labels__item">
                                                                <input type="radio" className="product-labels__checkbox" name="type2" checked />
                                                                <span className="product-labels__txt">350ml</span>
                                                            </label>

                                                        </div>

                                                    </div>


                                                </div>

                                                <div className="product-slider__bottom">
                                                    <button className="product-slider__cart">
                                                        Cotizar
                                                    </button>

                                                    <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-slider__item swiper-slide" data-target="img3">
                                        <div className="product-slider__card">
                                            <img
                                                src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp"
                                                alt="star wars" className="product-slider__cover" />
                                            <div className="product-slider__content">
                                                <h1 className="product-slider__title">
                                                    Embotellamiento 360°
                                                </h1>
                                                <div className="product-ctr">
                                                    <div className="product-labels">
                                                        <div className="product-labels__title">Bidón Pet</div>
                                                        <div className="product-labels__title">Tapa Pet</div>
                                                        <div className="product-labels__title">Sellos de seguridad</div>
                                                        <div className="product-labels__title">Limpieza i/e con sanitizante no invasivo</div>
                                                        <div className="product-labels__title">Agua purificada con parametros superiores</div>
                                                    </div>

                                                </div>

                                                <div className="product-slider__bottom">
                                                    <button className="product-slider__cart">
                                                        Cotizar
                                                    </button>

                                                    <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>



                    </div>
                    <svg className="hidden" hidden>
                        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                            <path
                                d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z">
                            </path>
                        </symbol>
                        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                            <path
                                d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z">
                            </path>
                        </symbol>
                    </svg>
                </div>


                <div className="w_full">
                    <div className="back-w">
                        <div className="color-w">
                            <h1 className="gh-title2">Por qué utilizar envases de PET</h1>
                            <hr />
                            <div className="gh-mivi">
                                <div className="f-mivi">
                                    <div className="tit-gh">Factor Barrera </div>
                                    <ul>
                                        <li>El PET mantiene una resistencia natural a los agentes externos, evitando malos olores, gases
                                            ofensivos para el consumo humano, humedad, contaminación, etc.</li>
                                        <li>El PET se ha declarado excelente protector en el envasado de productos alimenticios, precisamente
                                            por su buen comportamiento de barrera.</li>
                                        <li>El PET es resistente a multitud de agentes químicos agresivos los cuales no son soportados por
                                            otros materiales.</li>
                                    </ul>
                                </div>
                                <div className="f-mivi">
                                    <div className="tit-gh">Conformidad sanitaria</div>
                                    <ul>
                                        <li>El PET supera a multitud de materiales en cuanto a calidad sanitaria por sus excelentes cualidades
                                            en la conservación del producto</li>
                                        <li>Los envases fabricados correctamente, acorde con experiencias realizadas son totalmente
                                            inofensivos en contacto con los productos de consumo humano.</li>
                                        <li>Fácil reciclado y recuperación</li>
                                        <li>Los gases de la combustión son esencialmente limpios, debido a que el PET no contiene halógenos,
                                            sulfuros, u otros materiales de difícil eliminación.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Footer></Footer>
        </>
    );
}
/*
<div className="w_full">
                <div className="card-wrapper">

<div className="cardw-content">
  <div className="bg-shape">
    <img src="/assets/images/letras.png" alt=""/>
  </div>


  <div className="product-img">

    <div className="product-img__item" id="img1">
      <img src="/assets/images/pet1.png" alt="star wars" className="product-img__img"/>
    </div>

    <div className="product-img__item" id="img2">
      <img src="/assets/images/botellas_g.png" alt="star wars" className="product-img__img"/>
    </div>

    <div className="product-img__item" id="img3">
      <img src="/assets/images/maquina.png" alt="star wars" className="product-img__img"/>
    </div>

    <div className="product-img__item active" id="img4">
      <img src="/assets/images/bidon1.png" alt="star wars" className="product-img__img"/>
    </div>


  </div>



  <div className="product-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
    <button className="prev-1 disabled swiper-button-disabled" disabled="" tabindex="-1" aria-label="Previous slide" aria-controls="swiper-wrapper-db0444104d1ce6401" aria-disabled="true">
      <span className="icon">
        <svg className="icon icon-arrow-right">
          <use xlinkHref="#icon-arrow-left" ></use>
        </svg>
      </span>
    </button>
    <button className="next-1" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-db0444104d1ce6401" aria-disabled="false">
      <span className="icon">
        <svg className="icon icon-arrow-right">
          <use xlinkHref="#icon-arrow-right"></use>
        </svg>
      </span>
    </button>

    <div className="product-slider__wrp swiper-wrapper" id="swiper-wrapper-db0444104d1ce6401" aria-live="polite">
      <div className="product-slider__item swiper-slide swiper-slide-visible swiper-slide-active propi" data-target="img4" role="group" aria-label="1 / 4" >
        <div className="product-slider__card">
          <img src="/assets/images/back_card.png" alt="star wars" className="product-slider__cover"/>
          <div className="product-slider__content">
            <h1 className="product-slider__title">
              Bidón PET <br/>
            </h1>
            <span className="product-slider__price">20LT</span>
            <div className="product-ctr">
              <div className="product-labels">
                <div className="product-labels__title">TAMAÑO</div>

                <div className="product-labels__group">
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type5"/>
                    <span className="product-labels__txt">30CM</span>
                  </label>



                </div>

              </div>

              <span className="hr-vertical"></span>

              <div className="product-inf">
                <div className="product-inf__percent">
                  <div className="product-inf__percent-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0c1e2c" stopOpacity="0"></stop>
                          <stop offset="100%" stopColor="#cb2240" stopOpacity="1"></stop>
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="47" strokeDasharray="240, 300" stroke="#cb2240" strokeWidth="4" fill="none"></circle>
                    </svg>
                  </div>
                  <div className="product-inf__percent-txt">
                    99%
                  </div>
                </div>

                <span className="product-inf__title">Resistencia</span>
              </div>

            </div>

            <div className="product-slider__bottom">
              <button className="product-slider__cart">
                Cotizar
              </button>

              <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-slider__item swiper-slide swiper-slide-next propi2" data-target="img1" role="group" aria-label="2 / 4" >
        <div className="product-slider__card">
          <img src="/assets/images/back_card.png" alt="star wars" className="product-slider__cover"/>
          <div className="product-slider__content">
            <h1 className="product-slider__title">
              Preformas PET
            </h1>
            <div className="product-ctr">
              <div className="product-labels">
                <div className="product-labels__title">TAMAÑO</div>

                <div className="product-labels__group">
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type1" checked=""/>
                    <span className="product-labels__txt">20L</span>
                  </label>
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type1"/>
                    <span className="product-labels__txt">1L</span>
                  </label>
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type1"/>
                    <span className="product-labels__txt">500ml</span>
                  </label>
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type1"/>
                    <span className="product-labels__txt">400ml</span>
                  </label>
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type1"/>
                    <span className="product-labels__txt">350ml</span>
                  </label>
                </div>

              </div>





            </div>

            <div className="product-slider__bottom">
              <button className="product-slider__cart">
                Cotizar
              </button>

              <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-slider__item swiper-slide propi3" data-target="img2" role="group" aria-label="3 / 4" >
        <div className="product-slider__card">
          <img src="/assets/images/back_card.png" alt="star wars" className="product-slider__cover"/>
          <div className="product-slider__content">
            <h1 className="product-slider__title">
              Botellas PET
            </h1>
            <div className="product-ctr">
              <div className="product-labels">

                <div className="product-labels__title">TAMAÑO</div>

                <div className="product-labels__group">
                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type2"/>
                    <span className="product-labels__txt">1L</span>
                  </label>

                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type2" checked=""/>
                    <span className="product-labels__txt">500ml</span>
                  </label>

                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type2" checked=""/>
                    <span className="product-labels__txt">400ml</span>
                  </label>

                  <label className="product-labels__item">
                    <input type="radio" className="product-labels__checkbox" name="type2" checked=""/>
                    <span className="product-labels__txt">350ml</span>
                  </label>

                </div>

              </div>


            </div>

            <div className="product-slider__bottom">
              <button className="product-slider__cart">
                Cotizar
              </button>

              <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-slider__item swiper-slide propi4" data-target="img3" role="group" aria-label="4 / 4">
        <div className="product-slider__card">
          <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405215/starwars/item-3-bg.webp" alt="star wars" className="product-slider__cover"/>
          <div className="product-slider__content">
            <h1 className="product-slider__title">
              Embotellamiento 360°
            </h1>
            <div className="product-ctr">
              <div className="product-labels">
                <div className="product-labels__title">Bidón Pet</div>
                <div className="product-labels__title">Tapa Pet</div>
                <div className="product-labels__title">Sellos de seguridad</div>
                <div className="product-labels__title">Limpieza i/e con sanitizante no invasivo</div>
                <div className="product-labels__title">Agua purificada con parametros superiores</div>
              </div>

            </div>

            <div className="product-slider__bottom">
              <button className="product-slider__cart">
                Cotizar
              </button>

              <button className="product-slider__fav js-fav"><span className="heart"></span> Mas información</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

</div>



</div>
                    <svg className="hidden" xmlnsXlink="http://www.w3.org/1999/xlink"  hidden>
                        <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                            <path
                                d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z">
                            </path>
                        </symbol>
                        <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                            <path
                                d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z">
                            </path>
                        </symbol>
                    </svg>
                </div
*/