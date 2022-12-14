import { useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

import "./index.css";
import "animate.css";

export function CardPost() {
  const icongrupopost = require("../../assets/img/icongrupopost.png");
  const iconusuariopost = require("../../assets/img/iconusuariopost.png");
  const imgpost = require("../../assets/img/imgpost.png");
  const likeicon = require("../../assets/img/likeicon.png");
  const hearticon = require("../../assets/img/hearticon.png");
  const hearticonmd = require("../../assets/img/Icon_curtir.png");
  const iconcomentar = require("../../assets/img/Icon_comentar.png");
  const icondm = require("../../assets/img/dmicon.png");

  const [open, setOpen] = useState(false);
  const [namebutton, setNameButton] = useState("Continuar Lendo");
  const [openSubtitle, setOpenSubtitle] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [like, setLike] = useState(false);
  const [animationLike, setAnimationLike] = useState("");

  function likeFunction() {
    if (like === false) {
      setLikeCount(likeCount + 1);
      setLike(true);
      setAnimationLike("animate__heartBeat");
      setTimeout(() => {
        setAnimationLike("");
      }, 1500);
    } else {
      setLikeCount(likeCount - 1);
      setLike(false);
      setAnimationLike("animate__heartBeat");
      setTimeout(() => {
        setAnimationLike("");
      }, 1500);
    }
  }

  return (
    <Container>
      <Card className="cardposts mt-3 rounded-5 align-items-center w-100">
        <div className="containerposts mt-4">
          <div className="mb-4 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid icongrupopost"
                src={icongrupopost}
                alt=""
              />
              <img
                className="img-fluid iconusuariopost"
                src={iconusuariopost}
                alt=""
              />
              <div className="flex-column mx-3">
                <div role="button" className="cardpost-titulogrupo">
                  TAVERNA DO DRAG??O
                </div>{" "}
                <div role="button" className="cardpost-txtheader">
                  Thiago Moreira
                </div>
              </div>
            </div>
            <div className="cardpost-txtheader text-end align-items-start">
              <div role="button">...</div>
              <div>FANTASIA</div>
              <div>Eragon (cap 03)</div>
            </div>
          </div>
          <div className=" mt-5 mb-5 text-center">
            <h1 className="mb-3 text-start cardpost-titulopost">
              O despertar do drag??o de fogo
            </h1>
            <h3 className="text-start cardpost-subtitulopost">
              Como os primeiros cap??tulos do livro criam o setting perfeito para
              a hist??ria
            </h3>
          </div>
          <div className="d-flex align-items-center mb-3 flex-column">
            <img
              className="imgpost img-fluid align-self-center"
              src={imgpost}
              alt=""
            />{" "}
            <figcaption className="figure-caption mt-1">
              Drag??o cospe fogo, Font: Google, No link
            </figcaption>
          </div>
          <div>
            <div className={`mb-2 d-flex d-${openSubtitle}`}>
              <div className="vr"></div>
              <div>
                <p className="cardpost-textintro px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Praesent auctor purus luctus
                  enim egestas, ac scelerisque ante pulvinar.
                </p>
              </div>
            </div>

            <Collapse in={open}>
              <div className="cardpost-text" id="example-collapse-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
                fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus. Maecenas eget condimentum velit, sit amet
                feugiat lectus. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Praesent auctor
                purus luctus enim egestas, ac scelerisque ante pulvinar.
              </div>
            </Collapse>

            <div className="w-100 text-center mt-3 mb-3">
              <button
                className="botao-expand text-center rounded-5 px-3"
                onClick={() => {
                  if (open === false) {
                    setOpen(true);
                    setNameButton("Minimizar");
                    setOpenSubtitle("none");
                  } else {
                    setOpen(false);
                    setNameButton("Continuar Lendo");
                    setOpenSubtitle("flex");
                  }
                }}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {namebutton}
              </button>
            </div>
          </div>
          <div className="footercardpost d-flex justify-content-between mx-2">
            <div>
              <img className="mx-1" src={hearticon} alt="" />
              <img src={likeicon} alt="" /> {likeCount}
            </div>
            <div>
              <p>## coment??rios</p>
            </div>
          </div>
          <hr></hr>
          <div className="no-select footercardpost mt-2 mb-2 d-flex justify-content-around">
            <div role="button" onClick={likeFunction} className="">
              <img
                className={`mx-1 animate__animated ${animationLike}`}
                src={hearticonmd}
                alt=""
              />
              Curtir
            </div>
            <div role="button">
              <img src={iconcomentar} alt="" /> Comentar
            </div>
            <div role="button">
              <img src={icondm} alt="" /> Enviar Mensagem
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
}
