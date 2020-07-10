import React, { useState } from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Work from "./components/work/work";
import Skills from "./components/skills/skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import cx from "classnames";

const App = () => {
  const [tab, setTab] = useState("1");
  const tabs = (no) => {
    setTab(no);
  };
  return (
    <>
      <div className="container-fluid">
        <div className={cx("nav-bar", "mb-2")}>
          <nav className={cx("nav", "d-flex", "justify-content-between")}>
            <a href={() => false} onClick={() => tabs("1")}>
              <div className="logo">A</div>
            </a>
            <div className="iconDiv">
              <a
                id="homeA"
                className="hide"
                href={() => false}
                onClick={() => tabs("1")}
              >
                <span className={tab === "1" ? "icons a" : "icons"}>
                  <i className={cx("fa", "fa-home")}></i>
                </span>
              </a>
            </div>
            <div className="iconDiv">
              <a
                id="aboutA"
                className="hide"
                href={() => false}
                onClick={() => tabs("2")}
              >
                <span className={tab === "2" ? "icons a" : "icons"}>
                  <i className="fa fa-user"></i>
                </span>
              </a>
            </div>
            <div className="iconDiv">
              <a
                id="skillsA"
                className="hide"
                href={() => false}
                onClick={() => tabs("3")}
              >
                <span className={tab === "3" ? "icons a" : "icons"}>
                  <i className="fa fa-tv"></i>
                </span>
              </a>
            </div>

            <div className="iconDiv">
              <a
                id="workA"
                className="hide"
                href={() => false}
                onClick={() => tabs("4")}
              >
                <span className={tab === "4" ? "icons a" : "icons"}>
                  <i className="fa fa-eye"></i>
                </span>
              </a>
            </div>
            <div className="iconDiv">
              <a
                id="contactA"
                className="hide"
                href={() => false}
                onClick={() => tabs("5")}
              >
                <span className={tab === "5" ? "icons a" : "icons"}>
                  <i className="fa fa-comment-alt"></i>
                </span>
              </a>
            </div>
            <a id="menuA" className="p-2" href={() => false}>
              <span className="iconsMenu">
                <i className="fa fa-bars"></i>
              </span>
            </a>
          </nav>
        </div>
        {tab === "1" ? <Home tabs={tabs} /> : null}
        {tab === "2" ? <About /> : null}
        {tab === "3" ? <Skills /> : null}
        {tab === "4" ? <Work /> : null}
        {tab === "5" ? <Contact /> : null}
      </div>
    </>
  );
};

export default App;
