import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPlayCircle,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaChevronCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

import Button from "../UI/Buttons/Button";

import "../styles/Inicio/MiniHeader.css";
import "../styles/Inicio/Navbar.css";
import "../styles/Inicio/MainBanner.css";
import "../styles/Inicio/EntrenamientosOnline.css";
import "../styles/Inicio/EntrenamientosPresenciales.css";
import "../styles/Inicio/RecursosVid.css";
import "../styles/Inicio/Testimonios.css";
import "../styles/Inicio/Cobime.css";
import "../styles/Inicio/Alianzas.css";
import "../styles/Inicio/ContactoWhats.css";
import "../styles/Inicio/Footer.css";
import "../styles/Inicio/DisclaimerDonar.css";
import "../styles/Inicio/MiniFooter.css";
import { HashLink } from "react-router-hash-link";

export function MiniHeader() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__item">+00000000000</li>
        <li className="header__item">info@predicafiel.com</li>
        <li className="header__item">
          <ul className="header__list-icons">
            <li>
              <div className="header__icon-circle">
                <a
                  target="_blank"
                  className="header__icon-link"
                  href="https://www.youtube.com/channel/UCUPxK7QD67w6nq4CZEwIrnQ"
                >
                  <FaYoutube />
                </a>
              </div>
            </li>
            <li>
              <div className="header__icon-circle">
                <a
                  target="_blank"
                  className="header__icon-link"
                  href="https://twitter.com/PredicaFiel"
                >
                  <FaTwitter />
                </a>
              </div>
            </li>
            <li>
              <div className="header__icon-circle">
                <a
                  target="_blank"
                  className="header__icon-link"
                  href="https://www.facebook.com/EntrenandoExpositores/"
                >
                  <FaFacebook />
                </a>
              </div>
            </li>
            <li>
              <div className="header__icon-circle">
                <a
                  target="_blank"
                  className="header__icon-link"
                  href="https://www.instagram.com/predicafiel/"
                >
                  <FaInstagram />
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div>
        <NavLink to="/" className="navbar__logo-link">
          <img
            className="navbar__logo"
            src="/images/inicio/logo-largo.png"
            alt="Fiel Logo"
          />
        </NavLink>
      </div>
      <div className="navbar__dropdown">
        <button
          className="navbar-toggler navbar__btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item navbar__list-item">
              <NavLink to="/" className="navbar__link" aria-current="page">
                INICIO
              </NavLink>
            </li>
            {/* //! No jala el dropdown --------------------- ya jalo quitando un import en App.js */}
            {/* //! El dropdown siempre aparece con la class active */}
            <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/nosotros">
                NOSOTROS
              </NavLink>
            </li>
            <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/entrenamientos">
                ENTRENAMIENTOS
              </NavLink>
            </li>
            {/* <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/eventos">
                EVENTOS
              </NavLink>
            </li> */}
            <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/recursos">
                RECURSOS
              </NavLink>
            </li>
            <a className="dropdown-item" to="/contacto" href="#contacto">
              <Button specificClass="btn__navbar">CONTACTO</Button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function MainBanner(props) {
  return (
    <section className="main-banner">
      <div className="main-banner__text">
        <h2 className="main-banner__subtitle">Entrenando a la próxima</h2>
        <h1 className="main-banner__title">
          Generación de <span>Expositores</span> <br></br> de{" "}
          <span>la Biblia.</span>
        </h1>
        <div className="main-banner__line"></div>
        <p className="main-banner__paragraph">
          Fielmente comprometidos con la predicación de evangelio de Jesucristo,
          entrenando a expositores bíblicos en el mundo hispano parlante.
        </p>
        <NavLink to="/entrenamientos">
          <Button specificClass="btn__main-banner">CONOCE MÁS</Button>
        </NavLink>
      </div>
    </section>
  );
}

export function EntrenamientosOnline(props) {
  return (
    <div className="entrenamiento">
      <div className="entrenamiento-online">
        <div className="entrenamiento-online__container">
          <div className="entrenamiento-online__box-text">
            <p className="entrnamiento-online__text--normal">
              Creemos que la salud de la Iglesia está ligada a la fiel
              exposición de la Biblia, estamos enfocados a formar, capacitar y
              entrenar a predicadores y maestros de la Palabra de Dios,
              preparándolos para el ministerio.
            </p>
            <p className="entrenamiento-online__text--bold">
              Somos un ministerio cuya intención principal es contribuir a la
              expansión del evangelio de Jesucristo.
            </p>
          </div>
          <div className="entrenamiento-online__box-logo">
            <img
              className="entrenamiento-online__image"
              src="/images/inicio/logo-largo-blanco.png"
              alt="Fiel Logo"
            />
            <div className="entrenamiento__button-container-box">
              <HashLink to="/nosotros#nuestro-equipo">
                <Button specificClass="btn__entrenamientos-online--gris">
                  EQUIPO
                </Button>
              </HashLink>
              <NavLink to="/nosotros">
                <Button specificClass="btn__entrenamientos-online--rojo">
                  SOBRE NOSOTROS
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="entrenamiento__card">
          <img
            className="entrenamiento__card-image"
            src="/images/inicio/medium-shot-man-with-laptop.png"
            alt="Men on laptop"
          />
          <div className="entrenamiento__card-text">
            <h1 className="entrenamiento__card-title">Entrenamientos</h1>
            <div className="entrenamiento__modalidad">
              Modalidad:{" "}
              <span className="entrenamiento__card-text-bold"> En Línea</span>
              <span className="online-dot">.</span>
            </div>
            <p className="entrenamiento__card-text-bold">
              Debido a las limitaciones de movilidad y el distanciamiento social
              que hemos estado experimentando en el mundo en los últimos meses,
              Prédica Fiel ha diseñado un entrenamiento online para predicadores
              con el objetivo de desarrollar las habilidades de los mismos
              semana tras semana.
            </p>
            <p className="entrenamiento__card-text-normal">
              Hemos escogido el género literario de Evangelios para este primer
              tiempo, especificamente el evangelio de Marcos. Los participantes
              estarán recibiendo instrucciones en el manejo adecuado de las
              Escrituras, así como en la exposición de estas. Trabajarán pasajes
              específicos del libro de Marcos, así como también harán una
              exposición de veinte minutos, para las cuáles recibirán
              retroalimentación.
            </p>
            <div className="entrenamiento__button-container-box">
              <NavLink to="/entrenamientos">
                <Button specificClass="btn__entrenamientos-online-card--rojo">
                  CONOCER MÁS
                </Button>
              </NavLink>
              <a href="#contacto">
                <Button specificClass="btn__entrenamientos-online--gris">
                  APLICAR
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EntrenamientosPresenciales(props) {
  return (
    <div className="entrenamiento-presencial">
      <div className="entrenamiento-presencial__text">
        <h1>ENTRENAMIENTOS PRESENCIALES</h1>
        <p className="entrenamieto-presencial__paragraph">Plan Habana, Cuba.</p>
        <p className="entrenamieto-presencial__paragraph">
          Plan Habana nace de la pasión de transformar La Habana con el
          Evangelio de Jesucristo
        </p>
        <p className="entrenamieto-presencial__text--small-text">
          <span className="entrenamieto-presencial__text--light-text">
            {" "}
            pero como dicen Las Escrituras: "¿Cómo, pues, invocarán a aquel en
            quien no han creído? ¿Y cómo creerán en aquel de quien no han oído?
            ¿Y cómo oirán sin haber quien les predique? (Ro- manos 10:14).
          </span>{" "}
          A través de Plan Habana, capacitamos a pastores, maestros y líderes en
          cómo predicar el evangelio fielmente.
        </p>
        <div className="entrenamiento__button-container-banner">
          {/* //!Cambiarlo a blanco------------------- */}
          <NavLink to="/entrenamientos">
            <Button specificClass="btn__entrenamiento-presencial">
              CONOCER MÁS
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export function RecursosVid(props) {
  return (
    <div className="recursos">
      <div className="recursos__header">
        <div className="recursos__header-logo">
          <h1 className="recursos__header-title">
            DISFRUTA DE TODOS LOS RECURSOS
            <span>QUE TENEMOS PARA TI.</span>
          </h1>
          <div>
            <img
              className="recursos__logo"
              src="/images/inicio/logo-corto.png"
              alt="Fiel logo"
            />
          </div>
        </div>
        <div className="line--gray"></div>
        <p className="recursos__text">
          Disponemos de una gran variedad de recursos en video, audio y
          articulos preparados para tu formación como expositor biblico
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col thumbnail">
            <div className="recursos__vid">
              <img
                src="/images/inicio/capa-3.png"
                className="recursos__vid-image"
                alt="Vid 1"
              />
              <FaPlayCircle className="recursos__play-button"></FaPlayCircle>
            </div>
          </div>
          <div className="col thumbnail">
            <div className="recursos__vid">
              <img
                src="/images/inicio/capa-4.png"
                className="recursos__vid-image"
                alt="Vid 2"
              />
              <FaPlayCircle className="recursos__play-button"></FaPlayCircle>
            </div>
          </div>
          <div className="col thumbnail">
            <div className="recursos__vid">
              <img
                src="/images/inicio/capa-5.png"
                className="recursos__vid-image"
                alt="Vid 3"
              />
              <FaPlayCircle className="recursos__play-button"></FaPlayCircle>
            </div>
          </div>
        </div>
      </div>
      <div className="recursos__button-container">
        <NavLink to="/recursos">
          <Button specificClass="btn__recursosvid">
            VER TODOS LOS RECURSOS
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export function Testimonios(props) {
  return (
    <div className="carousel-full">
      <h1 className="testimonios__header">TESTIMONIOS</h1>
      <div className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonios">
                <div className="gray-line"></div>
                <div className="testimonios__testimonio">
                  <img
                    className="testimonios__avatar"
                    src="/images/inicio/miguel.jpg"
                    alt="Miguel Núñez"
                  />
                  <div className="testimonios__text-container">
                    <div className="testimonios__paragraph">
                      Aprecio enormemente la labor de Prédica Fiel de entrenar
                      pastores y líderes en la predicación expositiva de la
                      Palabra de Dios. Si queremos ver la transformación de
                      nuestras iglesias, esta tendrá que comenzar por el
                      púlpito. La idea de este tipo de predicación es que el
                      mensaje controle al mensajero de manera que el expositor
                      entregue lo que Dios haya inspirado por medio de Su
                      Espíritu. Y esta es precisamente la visión de Prédica Fiel
                      para nuestro continente Latinoamericano.
                    </div>
                    <div className="testimonios__footer">
                      <div className="testimonios__footer-name">
                        {" "}
                        Miguel Núñez
                      </div>
                      <div className="testimonios__footer-from">
                        Pastor, Iglesia Bautista Internacional, República
                        Dominicana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonios">
                <div className="gray-line"></div>
                <div className="testimonios__testimonio">
                  <img
                    className="testimonios__avatar"
                    src="/images/inicio/usiel.jpg"
                    alt="Usiel Abreu"
                  />
                  <div className="testimonios__text-container">
                    <div className="testimonios__paragraph testimonios__paragraph-usiel ">
                      Prédica Fiel ha significado mucho, no solo por el
                      entrenamiento personal, sino por el descanso que otorga al
                      predicador sabiendo que está dando de manera sana un
                      correcto uso de la Escritura para con la congregación que
                      atiende. En el ámbito ministerial no hay mayor bendición
                      para el pastor.
                    </div>
                    <div className="testimonios__footer">
                      <div className="testimonios__footer-name">
                        Usiel Abreu
                      </div>
                      <div className="testimonios__footer-from">
                        Pastor, Iglesia Pinos Nuevos, La Habana, Cuba
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonios">
                <div className="gray-line"></div>
                <div className="testimonios__testimonio">
                  <img
                    className="testimonios__avatar"
                    src="/images/inicio/juan.jpg"
                    alt="Juan Sánchez"
                  />
                  <div className="testimonios__text-container">
                    <div className="testimonios__paragraph">
                      Ha sido un gozo y un privilegio dirigir varios talleres de
                      exposición bíblica en Cuba a través del ministerio de
                      Predica Fiel. Cada vez me anima el entusiasmo de los
                      pastores y obreros de la iglesia. La mayor necesidad de la
                      iglesia en Cuba es capacitarse para manejar correctamente
                      la palabra de Dios. Con tanta hambre de aprender, Predica
                      Fiel equipa a la próxima generación de pastores, maestros
                      y misioneros en la iglesia en Cuba.
                    </div>
                    <div className="testimonios__footer">
                      <div className="testimonios__footer-name">
                        Juan Sánchez
                      </div>
                      <div className="testimonios__footer-from">
                        Pastor, High Pointe Baptist Church
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function Cobime(props) {
  return (
    <div className="cobime">
      <h5 className="cobime__header">
        Conferencia Bíblica para Minustros Evangelicos
      </h5>
      <h1 className="cobime__main">
        PREPARADOS PARA <span className="cobime__main--bold">COBIME 2024</span>
      </h1>
      <h4 className="cobime__paragraph">
        preparate para este tiempo de aprendizaje
      </h4>
      <div className="cobime__button-container">
        <a href="#contacto">
          <Button>ANOTARME</Button>
        </a>
      </div>
    </div>
  );
}

export function Alianzas(props) {
  return (
    <div className="alianzas" id="alianzas">
      <div className="alianzas__text">ALIANZAS</div>
      <ul className="alianzas__icons-list">
        <div className="list-items1">
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://simeontrust.org/es"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/simeon-trust.jpg"
                alt="Simeon Trust Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://es.9marks.org/"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/9marks.jpg"
                alt="9 Marks Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.sbts.edu/"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/sbts.jpg"
                alt="Southern Baptist Theological Seminary Logo"
              />
            </a>
          </li>
        </div>
        <div className="list-items2">
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.crosslinks.org/"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/crosslinks.jpg"
                alt="Crosslinks Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.coalicionporelevangelio.org/"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/coalicion.jpg"
                alt="Coalición por el Evangelio Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.proctrust.org.uk/"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/pt.jpg"
                alt="Proclamation Trust Logo"
              />
            </a>
          </li>
        </div>
        <div className="list-items3">
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.crossconnections.org.uk/"
              target="_blank"
            >
              <img
                className="alianzas__image"
                src="/images/inicio/crossconnections.jpg"
                alt="Crossconections Logo"
              />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export function ContactoWhats(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="contacto" className="contacto">
      <div className="contacto__container">
        <div className="contacto__text">
          <div className="contacto__logo">
            <img
              className="contacto__image"
              src="/images/inicio/logo-largo-blanco.png"
              alt="Fiel Logo"
            />
          </div>
          <h1 className="contacto__header">CONTÁCTANOS</h1>
          <p className="contacto__paragraph">
            <span className="contacto__paragraph--bold">Entrenando</span> a la
            próxima generación de{" "}
            <span className="contacto__paragraph--bold">Expositores</span> de la{" "}
            <span className="contacto__paragraph--bold">Biblia.</span>
          </p>
          <button className="contacto__whatsapp">
            <a
              className="whatsapp-link"
              href="https://www.whatsapp.com"
              target="_blank"
            >
              <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                <div>
                  <FaWhatsapp />
                </div>
              </IconContext.Provider>
              <div className="whatsapp-text">WhatsApp</div>
            </a>
          </button>
        </div>
        <div className="contacto__form-container">
          <p className="contacto__form-paragraph">
            Para brindarte atención personaliza compartenos tus datos y pronto
            nos pondremos en contacto contigo
          </p>

          {/*----------------------------------------FORMULARIO */}
          <form onSubmit={handleSubmit(onSubmit)} className="contacto__form">
            <div className="contacto__inputs-container">
              <input
                {...register("nombre", {
                  required: true,
                })}
                className="contacto__input"
                type="text"
                placeholder="Nombre"
              />
              {errors.nombre?.type === "required" && (
                <p className="input-errors">Este campo es requerido</p>
              )}
              <input
                {...register("apellido", {
                  required: true,
                })}
                className="contacto__input"
                type="text"
                placeholder="Apellido"
              />
              {errors.apellido?.type === "required" && (
                <p className="input-errors">Este campo es requerido</p>
              )}
              <input
                {...register("teléfono", {
                  required: true,
                })}
                className="contacto__input"
                type="tel"
                placeholder="Teléfono"
              />
              {errors.teléfono?.type === "required" && (
                <p className="input-errors">Este campo es requerido</p>
              )}
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="contacto__input"
                type="email"
                placeholder="E-mail"
              />
              {errors.email?.type === "required" && (
                <p className="input-errors">Este campo es requerido</p>
              )}
            </div>
            <textarea
              {...register("mensaje", {
                required: true,
                maxLength: 140,
              })}
              className="contacto__input-large"
              type="text"
              placeholder="Mensaje"
            ></textarea>
            {errors.mensaje?.type === "required" && (
              <p className="input-errors">Este campo es requerido</p>
            )}
            {errors.Mensaje?.type === "maxLength" && (
              <p className="input-errors">Maximo 140 caracteres</p>
            )}
            <div className="contacto__button-container form_button">
              <input
                className="button-component"
                type="submit"
                value="ENVIAR"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__summary">
        <div className="footer__contactanos">
          <p className="footer__header-contactanos">Contáctanos</p>
          <ul className="footer__contactanos-list">
            <li className="footer__contactanos-list-item">
              <div className="footer__contactanos-icon">
                <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                  <div>
                    <FaWhatsapp />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="footer__contactanos-text">00 0000 0000</div>
            </li>
            <li className="footer__contactanos-list-item">
              <div className="footer__contactanos-icon">
                <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                  <div>
                    <FaWhatsapp />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="footer__contactanos-text">00 0000 0000</div>
            </li>
            <li className="footer__contactanos-list-item">
              <div className="footer__contactanos-icon">
                <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                  <div>
                    <GrMail />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="footer__contactanos-text">info@predicafiel</div>
            </li>
            <li className="footer__contactanos-list-item">
              <ul className="footer__list-icons">
                <li>
                  <div className="footer__icon-circle">
                    <a
                      target="_blank"
                      className="footer__icon-link"
                      href="https://www.youtube.com/channel/UCUPxK7QD67w6nq4CZEwIrnQ"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer__icon-circle">
                    <a
                      target="_blank"
                      className="footer__icon-link"
                      href="https://twitter.com/PredicaFiel"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer__icon-circle">
                    <a
                      target="_blank"
                      className="footer__icon-link"
                      href="https://www.facebook.com/EntrenandoExpositores/"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer__icon-circle">
                    <a
                      target="_blank"
                      className="footer__icon-link"
                      href="https://www.instagram.com/predicafiel/"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__accesos-directos">
          <p className="footer__header-accesos-directos">Accesos Directos</p>
          <div className="footer__accesos-directos-container">
            <div className="footer__accesos-directos1">
              <ul className="footer__accesos-directos-list">
                <li className="footer__accesos-directos-list-item">
                  <NavLink to="/" className="footer__accesos-directos-link">
                    Inicio
                  </NavLink>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <NavLink
                    to="/nosotros"
                    className="footer__accesos-directos-link"
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <NavLink
                    to="/entrenamientos"
                    className="footer__accesos-directos-link"
                  >
                    Entrenamientos
                  </NavLink>
                </li>
                {/* <li className="footer__accesos-directos-list-item">
                  <NavLink
                    to="/eventos"
                    className="footer__accesos-directos-link"
                  >
                    Eventos
                  </NavLink>
                </li> */}
                <li className="footer__accesos-directos-list-item">
                  <NavLink
                    to="/recursos"
                    className="footer__accesos-directos-link"
                  >
                    Recursos
                  </NavLink>
                </li>
                {/* <li className="footer__accesos-directos-list-item">
                  <NavLink
                    to="/cobime"
                    className="footer__accesos-directos-link"
                  >
                    COBIME
                  </NavLink>
                </li> */}
                <li className="footer__accesos-directos-list-item">
                  <HashLink
                    smooth
                    to="/nosotros#declaracion-doctrinal"
                    href="#declaracion-doctrinal"
                    className="footer__accesos-directos-link"
                  >
                    Declaración Doctrinal
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="footer__accesos-directos2">
              <ul className="footer__accesos-directos-list">
                <li className="footer__accesos-directos-list-item">
                  <HashLink
                    to="/nosotros#nuestro-equipo"
                    className="footer__accesos-directos-link"
                  >
                    Equipo
                  </HashLink>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="#alianzas" className="footer__accesos-directos-link">
                    Alianzas
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <HashLink
                    to="/entrenamientos#talleres"
                    href=""
                    className="footer__accesos-directos-link"
                  >
                    Talleres
                  </HashLink>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <HashLink
                    to="/entrenamientos#plan-habana"
                    href=""
                    className="footer__accesos-directos-link"
                  >
                    Plan Habana
                  </HashLink>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Residentes (SEND)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__button-up">
          <a href="#">
            <FaChevronCircleUp className="footer__button-up-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerDonar(props) {
  return (
    <div className="disclaimer-donar">
      <div className="disclaimer-donar__gray-line"></div>
      <div className="disclaimer-donar__container">
        <div className="disclaimer">
          <p className="disclaimer-donar__text">
            Prédica Fiel es una organización sin fines de lucro, adecuadamente
            registrada en el estado de Texas. Desarrollamos nuestro ministerio a
            través de las contribuciones de cristianos y organi- zaciones que
            dan con generosidad para que los siervos de Dios puedan ser
            entrenados en el fiel manejo de las Escrituras. Si estima a bien
            contribuir a nuestro ministerio, en el siguiente enlace encontrará
            una manera sencilla para hacerlo. También puede contactarnos si así
            lo desea. El Señor le bendiga.
          </p>
        </div>
        <div className="donar">
          <img
            className="donar__image"
            src="/images/inicio/donar.png"
            alt="Donar Logo"
          />
        </div>
      </div>
    </div>
  );
}

export function MiniFooter(props) {
  return (
    <div className="mini-footer">
      <div className="mini-footer__text">
        Predica Fiel 2023 |{" "}
        <span className="mini-footer__text--light">
          Todos los derechos reservados
        </span>
      </div>
    </div>
  );
}

//?  <-------------------------------------

function Inicio(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Inicio</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <MainBanner />
      <EntrenamientosOnline />
      <EntrenamientosPresenciales />
      <RecursosVid />
      <Testimonios />
      {/* <Cobime /> */}
      <Alianzas />
      <ContactoWhats />
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </div>
  );
}

export default Inicio;
