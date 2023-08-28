import React, { useEffect, useRef, useState } from "react";
import "../styles/Recursos/Filtros.css";
import { useNavigate, useParams } from "react-router-dom";
import { recursosObj } from "./Recursos";
import { MiniHeader, Navbar } from "./Inicio";

import Player from "../Components/Player";

export const tracks = recursosObj.filter((recurso) => recurso.type === "audio");

// console.log(tracks);

export function AudioFiltro() {
  const [songs, setSongs] = useState(tracks);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(tracks[0]);

  const audioElem = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  let { audioId } = useParams();
  let recursoSeleccionado = recursosObj.find(
    (recurso) => recurso.id === audioId
  );

  // console.log("currentSong", currentSong);

  // console.log(recursoSeleccionado.url);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="barra-direccion">
        Inicio / Audios / {recursoSeleccionado.title}
      </div>
      <div className="audio-filtro__container">
        <div className="audio-frame">
          {" "}
          <img
            className="audio-filtro__imagen"
            src="/images/recursos/FILTROS/RECURSOS_AUDIOS/Barra-de-Audio-con-logo.jpg"
            alt=""
          />
          <audio
            src={recursoSeleccionado.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          />
          <Player
            songs={songs}
            setSongs={setSongs}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            audioElem={audioElem}
            recursoSeleccionado={recursoSeleccionado}
          />
        </div>
        <div className="audio-info">
          <div className="audio-info__title">
            <div className="audio-filtro__title">
              <h3>{recursoSeleccionado.title}</h3>
              <p>{recursoSeleccionado.fuente}</p>
            </div>
            <div className="audio-filtro__length">
              {recursoSeleccionado.length}
            </div>
          </div>
          <hr className="audio-filtro__hr" />
          <div className="audio-info__subtitle">
            <div className="audio-filtro__genero">
              <span className="bold">Género/Tema:</span>{" "}
              {recursoSeleccionado.genero}
            </div>
            <div className="audio-filtro__fecha">
              <span className="bold">Fecha:</span>23-10-2012
            </div>
          </div>
        </div>
        <div className="audio-filtro__footer">
          <div className="">
            <img
              className="recursos__footer-logo"
              src="/images/recursos/logo-gris-inferior.png"
              alt="Logo Predica Fiel"
            />
          </div>
          <div className=" recursos__footer-btn">
            <button onClick={goBack}>Regresar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginaAudio() {
  return (
    <>
      <MiniHeader />
      <Navbar />
      <AudioFiltro />
    </>
  );
}

export default PaginaAudio;
