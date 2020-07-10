import React from "react";
import html from "./image/html.png";
import css from "./image/css.png";
import bs from "./image/bootstrap.png";
import react from "./image/react.png";
import "./about.css";

const about = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-12">
        <div className="row no-gutters col-md-12 overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2">
              <span className="tags">&lt;body&gt;</span>
            </strong>
            <strong className="d-inline-block mb-2">
              <span className="tags">&nbsp; &lt;h1&gt;</span>
            </strong>
            <div className="content d-inline-block mb-2">
              <a className="text" href={() => false}>
                <b>About us</b>
              </a>
              <br />
            </div>
            <div className="contentText d-inline-block mb-2">
              <p>
                Professionally connected with the web development industry and
                information technology for many years.
              </p>
              <p className="card-text mb-auto">
                Well-organised person, problem solver, independent employee with
                high attention to detail. Fan of MMA, outdoor activities, TV
                series and, recently, English literature. A family person,
                father of two fractious boys, therefore remote employment is
                preferred.
              </p>
              <p className="card-text mb-auto">
                Interested in the entire frontend spectrum and working on
                ambitious projects with positive people.
              </p>
            </div>
            <strong className="d-inline-block mb-2">
              <span className="tags">&nbsp; &lt;/h1&gt;</span>
            </strong>
            <strong className="d-inline-block mb-2">
              <span className="tags">&lt;/body&gt;</span>
            </strong>
          </div>
          <div className="col-md-7 d-none d-lg-block">
            <div className="cube">
              <div className="face front">
                <img src={html} className="img-fluid" alt="" />
              </div>
              <div className="face back">
                <img src={css} className="img-fluid" alt="" />
              </div>
              <div className="face left">
                <img src={bs} className="img-fluid" alt="" />
              </div>
              <div className="face right">
                <img src={react} className="img-fluid" alt="" />
              </div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
