import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-12">
        <div className="row no-gutters col-md-12 overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2">
              <span className="tags">&lt;body&gt;</span>
            </strong>
            <strong className="d-inline-block mb-2">
              <span className="tags">&nbsp;&lt;h1&gt;</span>
            </strong>
            <div className="content d-inline-block mb-2">
              <a className="text" href={() => false}>
                <b>Contact Us</b>
              </a>
            </div>
            <strong className="d-inline-block mb-2">
              <span className="tags">&nbsp; &lt;/h1&gt;</span>
            </strong>
            <div className="content d-inline-block mb-2">
              <div className="col-md-12">
                <form action="">
                  <div className="form-row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="input col-md-12"
                        id="name"
                        placeholder="Name"
                        autocomplete="off"
                      />
                      <span className="input_border"></span>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="input col-md-12"
                        id="email"
                        placeholder="Email"
                        autocomplete="off"
                      />

                      <span className="input_border"></span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="input col-md-12"
                        id="subject"
                        placeholder="Subject"
                        autocomplete="off"
                      />
                      <span className="input_border"></span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-12">
                      <textarea
                        type="text"
                        className="input col-md-12"
                        rows="5"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                      <span className="input_border"></span>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-12 text-right">
                      <button
                        type="button"
                        className="btn btn-outline-success btn-sm"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <strong className="d-inline-block mb-2">
              <span className="tags">&lt;/body&gt;</span>
            </strong>
          </div>
          <div className="col-md-6 text-center">
            <iframe
              title="map"
              className="col-md-12"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68101911605!2d73.72287918093194!3d18.524890421119082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1593696381479!5m2!1sen!2sin"
              height="550"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
