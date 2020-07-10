import React from "react";
import "./home.css";

class home extends React.Component {
  render() {
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
                  <b>Hi,</b>
                </a>
                <br />
                <a className="text" href={() => false}>
                  <b>I'm Alok</b>
                </a>
                <br />
                <a className="text" href={() => false}>
                  <b>web developer.</b>
                </a>
              </div>
              <div className="contentText d-inline-block mb-2">
                <p className="card-text mb-auto">Full StacK Web Developer</p>
              </div>
              <div className="d-inline-block mb-2">
                <button
                  type="button"
                  onClick={() => this.props.tabs("5")}
                  className="btn btn-outline-success"
                >
                  Contact Me
                </button>
              </div>
              <strong className="d-inline-block mb-2">
                <span className="tags">&nbsp; &lt;/h1&gt;</span>
              </strong>
              <strong className="d-inline-block mb-2">
                <span className="tags">&lt;/body&gt;</span>
              </strong>
            </div>
            <div className="col-md-8 d-none d-lg-block">
              <div class="col-md-12">
                <iframe
                  title="logo"
                  src="https://alok-shete.github.io/logo/svg.html"
                  width="1000"
                  height="550"
                  frameborder="0"
                  scrolling="no"
                  style={{ overflow: "hidden", border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
