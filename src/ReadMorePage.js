import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useEffect, useState } from 'react';
import Logo from './ImageFiles/Lasani logo White PNG.png';
import WhatApp from './ImageFiles/SocialFont/whatsapp (1).png';
import { Helmet } from "react-helmet";

function ReadMorePage() {
  const [open, setOpen] = useState(false);

  // Navbar Toogle
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setOpen(false); // close menu after click (mobile)
      }
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Lasani</title>
        <meta
          name="description"
          content="Professional hydraulic cylinder repair services with precision machining and fast turnaround in India."
        />
      </Helmet>

      <div className="App">

        {/* Header and Navbar */}
        <div>
          {/* HEADER */}
          <div className="top-header py-2">
            <div className="Header-container">
              <div className="row align-items-center">

                <div className="col-lg-10 col-md-10 col-12 text-center Header-Details text-md-start">
                  {/* <span>1219-T, Kalamboli Steel Market, Panvel, Maharashtra – 410218.</span>
                <span className="ms-3">📞 +91 99000 19885 | +91 89763 37049</span>
                <span className="ms-3">✉ info@la-sani.com</span> */}
                </div>

                <div className="col-lg-2 col-md-3 col-12 text-center text-md-end Header-Time">
                  {/* <span>Open: 9am–6pm Mon–Sat</span> */}
                </div>

              </div>
            </div>
          </div>

          {/* NAVBAR */}
          <nav className="custom-navbar">
            <div className="row navbar-row-main align-items-center">
              {/* LOGO */}
              <div className="col-md-3 col-sm-6">
                <h3 className="logo"><img src={Logo} alt="LaSani-Logo" /></h3>
              </div>

              {/* MENU */}
              <div className={`col-md-7 nav-menu ${open ? "active" : ""}`}>
                <div className="close-btn close-navbar-btn" onClick={() => setOpen(false)}>
                  ✖
                </div>
                <ul className="menu-list">
                  <li className="nav-item"><a href="#home" className="nav-link active">HOME</a></li>
                  <li className="nav-item"><a href="#ABOUT" className="nav-link">ABOUT US</a></li>
                  <li className="nav-item"><a href="#PRODUCTSANDSERVICES" className="nav-link">PRODUCTS</a></li>
                  <li className="nav-item"><a href="#MACHININGSERVICES" className="nav-link">SERVICE</a></li>
                  {/* <li className="nav-item"><a href="#HISTORY" className="nav-link">HISTORY</a></li> */}
                  <li><a href="#ContactUs" className="nav-link">CONTACT</a></li>
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className=" col-md-2 col-sm-6 text-end">
                <button className="search-btn">🔍</button>

                <button className="support-btn ms-2"><a
                  href="https://wa.me/918976337049?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="support-btn"
                >
                  {/* WhatsApp */}
                  <img className='Whatapp-image' src={WhatApp} alt="WhatApp-Icon" />
                </a></button>

                {/* MOBILE TOGGLE */}
                <span
                  className="menu-toggle"
                  onClick={() => setOpen(!open)}
                >
                  ☰
                </span>
              </div>
            </div>
          </nav>
        </div>

        <div className="container-fluid py-5" style={{ background: "#f8f9fa", minHeight: "100vh" }}>
          <div className="container">
            <div className="row justify-content-center align-items-center text-center">

              <div className="col-lg-6 col-md-8 col-sm-12">

                <div className="card shadow p-4 border-0">

                  <h2 className="mb-3">🚧 Page Under Development</h2>

                  <p className="text-muted">
                    This section is currently under progress. We are working hard to bring
                    you detailed information about our products and services.
                  </p>

                  <p className="fw-semibold">
                    For immediate assistance or inquiries, feel free to contact us on WhatsApp.
                  </p>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/918976337049?text=Hello I want more details"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center justify-content-center mt-3"
                    style={{ gap: "10px" }}
                  >
                    {/* <img src={WhatApp} alt="whatsapp" style={{ width: "25px" }} /> */}
                    Chat on WhatsApp
                  </a>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default ReadMorePage;