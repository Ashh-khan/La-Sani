import { useEffect, useState } from 'react';
import './App.css';
import { Carousel } from 'bootstrap';

import img1 from './ImageFiles/115.1.jpg';
import Logo from './ImageFiles/Lasani logo White PNG.png';

import Boring from './ImageFiles/Machining Services/Boring.jpeg';

import honed1 from './ImageFiles/Honed/11.jpg';
import Suitabletoskive from './ImageFiles/SuitableToSkiveHone/Suitable-(Ready)-To-SkiveHone.jpg';
import HotFinished from './ImageFiles/HotFinishedSeamless/Hot-Finished-Seamless-Tubes-1-new.jpg';
import ChromePlateBar from './ImageFiles/ChromePlatedBar/Chrome-Plated-Steel-Rods-CK45.jpg';
import SmallTubePic from './ImageFiles/SmootBore/small tube pic.jpg';
import HydraulicLinePipe from './ImageFiles/Hydraulic-Line-Pipe/hydraulic-line-pipe-500x500.webp';

import CarbonSteelAlloy from './ImageFiles/CarbonSteel&AlloySteel/Carbon Steel & Alloy Steel.jpg';
import ERWWelded from './ImageFiles/ERW/ERW(Welded).jpg';
import HollowSections from './ImageFiles/HollowSections/HollowSection.webp';
import StainlessSteel from './ImageFiles/StainlessSteelPipes/StainlessSteelPipes.jpg';

import AbdulMannan from './ImageFiles/Partner/Abdul Mannan - Director.jpg';
import AbdulRehman from './ImageFiles/Partner/Abdul Rehman - Managing Director.jpg';
import EhsanKhan from './ImageFiles/Partner/Ehsan Ahmad Khan- Director.jpg';

import WhatApp from './ImageFiles/whatsapp (1).png';


import AboutUs from './ImageFiles/about.webp';
import AboutUs2 from './ImageFiles/about-us 2.png';
import AboutUs3 from './ImageFiles/about 3.jpg';

function App() {

  const [open, setOpen] = useState(false);

  // Smooth scroll (React way)
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

  // aboutCarousel
  useEffect(() => {
    const carouselItems = document.querySelectorAll(".carousel_item_custom");
    let i = 1;

    const interval = setInterval(() => {
      Array.from(carouselItems).forEach((item) => {
        if (i < carouselItems.length) {
          item.style.transform = `translateX(-${i * 100}%)`;
        }
      });

      if (i < carouselItems.length) {
        i++;
      } else {
        // Reset to start
        i = 0;
        Array.from(carouselItems).forEach((item) => {
          item.style.transform = `translateX(0%)`;
        });
      }
    }, 3000); // 3 seconds per move

    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);


  const teamData = [
    {
      name: "Abdul Mannan",
      role: "Director",
      img: AbdulMannan,
    },
    {
      name: "Abdul Rehman",
      role: "Managing Director",
      img: AbdulRehman,
    },
    {
      name: "Ehsan Khan",
      role: "Director",
      img: EhsanKhan,
    },
  ];

  return (
    <div className="App">

      {/* Header and Navbar */}
      <div>
        {/* HEADER */}
        <div className="top-header py-2">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
                <span>🏠 2nd Floor New World.</span>
                <span className="ms-3">📞 98556778345</span>
                <span className="ms-3">✉ demo@example.com</span>
              </div>

              <div className="col-lg-6 col-md-6 col-12 text-center text-md-end">
                <span>Open: 9am–6pm Mon–Sat</span>
                <span className="ms-3">f</span>
                <span className="ms-2">X</span>
                <span className="ms-2">🎵</span>
              </div>

            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="custom-navbar">
          <div className="row navbar-row-main align-items-center">
            {/* LOGO */}
            <div className="col-6 col-md-3">
              <h3 className="logo"><img src={Logo} alt="" /></h3>
            </div>

            {/* MENU */}
            <div className={`col-md-6 nav-menu ${open ? "active" : ""}`}>
              <ul className="menu-list">
                <li className="nav-item"><a href="#home" className="nav-link active">HOME</a></li>
                <li className="nav-item"><a href="#ABOUT" className="nav-link">ABOUT US</a></li>
                <li className="nav-item"><a href="#PRODUCTSANDSERVICES" className="nav-link">PRODUCTS▾</a></li>
                <li className="nav-item"><a href="#MACHININGSERVICES" className="nav-link">SERVICE</a></li>
                <li className="nav-item"><a href="#project" className="nav-link">PROJECT</a></li>
                <li><a href="#contact" className="nav-link">CONTACT</a></li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-6 col-md-3 text-end">
              <button className="search-btn">🔍</button>
              <button className="support-btn ms-2"><a
                href="https://wa.me/918976337049?text=Hello%20I%20am%20interested"
                target="_blank"
                rel="noopener noreferrer"
                className="support-btn"
              >
                {/* WhatsApp */}
                <img className='Whatapp-image' src={WhatApp} alt="" />
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

      {/* Carousel */}
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          {/* <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div> */}
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100" alt="..." />
              <div class="carousel-caption carousel-caption-div">
              </div>
            </div>
            {/* <div class="carousel-item">
              <img src={img2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={img3} class="d-block w-100" alt="..." />
            </div> */}
          </div>
          {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button> */}
          {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>

      {/* ABOUT US  */}
      <div>
        <div id='ABOUT' className="feature-section ABOUTus-Section-Main py-5">
          {/*	ABOUT Section */}
          <div className="container">
            <h2 class="fw-bold">ABOUT US</h2>
            <div className="underline  underline-ABOUT"></div>
            {/* About Info */}
            <div className="row">
              <div className='About-Info col-lg-6 col-md-6 col-12' >
                <p className='para-content'>Lasani has over 40 years of experience in tube trading, mainly catering to Hydraulic Cylinder
                  Industries, Lasani Fluid Power LLP was redefined as an independent company in 2017.</p>

                <p className='para-content'>Lasani has evolved as premier supplier of Hydraulic Tubes, (RTH) Pre honed Tubes, Honed Tubes,
                  Hard Chrome Plated Rods, Raw Material and Other Specialised Grade Tubes, support quick delivery from
                  500 metric tonnes stocks.Being part of trading activity and acumens for engineering activity we added
                  many values addition to meet customer requirements, such as boring, deep hole drilling, honing, etc.</p>

                <p className='para-content'>We take full advantage of the innovative machining techniques and equipment developed through our engineering
                  and carry on a tradition of high-quality, sophisticated manufacturing processes. Providing drilled holes with
                  tight positional tolerances facilitates the amount of subsequent machine work being performed by the customer.
                  This means that a part with a tightly placed drilled hole eliminates the requirement to purchase grossly oversized
                  material and the associated complex machining operations to machine the outer diameter's position relative to the bore.</p>
              </div>

              {/* <div className='ABOUT-Img-Section col-lg-6 col-md-6 col-12 mb-4'>
                <img src={AboutUs} alt="" />
              </div> */}
              {/* Carousel Section */}
              <div className='ABOUT-Img-Section col-lg-6 col-md-6 col-12 mb-4'>
                {/* Wrapper with overflow hidden is crucial */}
                <div className="custom-carousel-wrapper" style={{ overflow: 'hidden', display: 'flex', marginLeft: "70px" }}>
                  <div className="carousel_item_custom" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={AboutUs} className="d-block w-100 rounded" alt="1" />
                  </div>
                  <div className="carousel_item_custom" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={AboutUs2} className="d-block w-100 rounded" alt="2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div>
        <div className="feature-section py-5">
          {/* Product 1 Section */}
          <div className="container">

            {/* Heading */}
            <div id='PRODUCTSANDSERVICES' className="mb-5 Product-Heading">
              <h2 className="fw-bold">PRODUCTS AND SERVICES</h2>
              <div className="underline underline-PRODUCTS"></div>
              <h4 className='mt-3'>PIPES AND TUBES</h4>
              {/* <div className="underline-Product-Points underline-TUBES-ROD"></div> */}
              <div className='Product-Para'>
                <p className='para-content mt-2'><span><h6>CYLINDER TUBES AND ROD</h6> </span> Lasani, the market leader in the supply of hydraulic tube and rod products in India.</p>
                <p className='para-content'>Our main product that suits Hydraulic and pneumatic cylinder industries are:</p>
              </div>

            </div>

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={honed1}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content">
                    <h3>Honed/Skived Tube</h3>

                    <p>
                      Honed tube or skived/roller burnished tube for are obtained from high quality precision cold dra....
                    </p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={Suitabletoskive}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content">
                    <h3>Suitable (Ready) To Skive/Hone</h3>

                    <p>
                      Precision Cold Drawn Seamless and DRAWN-ON MANDREL (DOM) welded...
                    </p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Card 3 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={HotFinished}
                      alt=""
                    />
                  </div>

                  <div class="report-content">
                    <h3>Hot Finished Seamless Bored & Honed Tube</h3>

                    <p>
                      Bored & Honed tube for hydraulic cylinders are...
                    </p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Cards 4*/}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={ChromePlateBar}
                      alt=""
                    />
                  </div>

                  <div class="report-content">
                    <h3>Chrome Plated Bar</h3>

                    <p>
                      Hard Chrome Plated Shafts are produced in state of art manufacturing facility
                      by world renowned manufacturers....
                    </p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Product 2 Section */}
          <div className="container">

            {/* Cards */}
            <div className="row Product-row-Two">

              {/* Card 1 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={SmallTubePic}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content">
                    <h3>Smooth Bore</h3>

                    <p>
                      Cold drawn welded tubes with H9 inner diameter tolerance from...
                    </p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={HydraulicLinePipe}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content">
                    <h3>Hydraulic Line Pipe</h3>

                    <p>HPL Tubes are seamless cold-drawn precision steel tubes primarily...</p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Product 3 Section */}
          <div className="container Product-row-Two">

            {/* Heading */}
            <div className=" mb-5 Product-Heading">
              <h6>OTHER INDUSTRIAL TUBES</h6>
              <div className="underline-Product-Points INDUSTRIAL-TUBES"></div>
              <div className='Product-Para'>
                <p className='para-content mt-2'>We supply the conveyance and pressure, energy, automotive and engineering and precision tube markets.</p>
                <p className='para-content'>We make a difference for all our customers. Our customer orientated business structure allows us to offer
                  competitive market solutions and  ensures that our products and services will exceed your expectations.</p>
                <p className='para-content'>Our close working relationship with customers has helped with the most simple through to the most challenging of
                  solutions.  Whatever the specification, grade or service, we offer the best  solutions for you - making the difference.</p>
              </div>
            </div>

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={CarbonSteelAlloy}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content report-content-INDUSTRIAL-Tubes">
                    <h3>Carbon Steel & Alloy Steel Grade Seamless Tube</h3>

                    <p> Our range of seamless tubes includes both Carbon Steel grades designed
                      for high performance under demanding operating conditions These tubes are widely....</p>
                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={StainlessSteel}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content report-content-INDUSTRIAL-Tubes">
                    <h3>Stainless Steel Pipes & Tubes</h3>

                    <p>Our Stainless Steel Pipes and Tubes are manufactured from
                      premium-grade stainless steels to deliver exceptional corrosion resistance, strength
                      , and durability under a wide range of operating conditions...</p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Card 3 */}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={HollowSections}
                      alt=""
                    />

                    {/* <div class="overlay-content">
                      <h2>SUSTAINABILITY</h2>
                      <p>SUSTAINABILITY <br />REPORT 2024</p>
                    </div>

                    <div class="vertical-text">
                      BURV
                    </div> */}
                  </div>

                  <div class="report-content report-content-INDUSTRIAL-Tubes">
                    <h3>Hollow Sections, Rectangular & Square</h3>

                    <p>Rectangular and Square Hollow Sections (RHS & SHS) are manufactured from
                      high-quality hot rolled or cold formed steel, offering excellent strength-to-weight
                      ratio, dimensional...</p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

              {/* Card 4*/}
              <div class="col-lg-3 col-md-6 col-12">
                <div class="report-card ">
                  <div class="report-image">
                    <img
                      src={ERWWelded}
                      alt=""
                    />
                  </div>

                  <div class="report-content report-content-INDUSTRIAL-Tubes">
                    <h3>ERW (Welded) - HFW / Longitudinally SAW Pipes (LSAW) / Helical SAW Pipes (Spiral / HSAW Pipes)</h3>

                    <p>Our range of Electric Resistance Welded (ERW), High-...</p>

                    <a href="#" class="read-btn">
                      Read more →
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* MACHINING SERVICE */}
      <div>
        <section class="services py-5">
          <div className="feature-section py-5">
            {/* Product 1 Section */}
            <div className="container">

              {/* Heading */}
              <div id='PRODUCTSANDSERVICES' className="mb-5 Product-Heading">
                <h2 className="fw-bold">MACHINING SERVICES</h2>
                <div className="underline underline-MACHINING"></div>
                <p className='para-content mt-2'> Lasani is an ISO 9001–2015 Certified facility specialising in precision deep hole drilling and machining services of long
                  parts that require difficult internal features with tight positional tolerances. We guarantee exceptional quality with a
                  focus on our customers' economic drivers, resulting in cost savings and shorter lead times. We are committed to providing
                  the highest level of service and on-time delivery.</p>
                <h5>Our services and areas of expertise include: </h5>
                <h5>Machining Services</h5>
                <div className="underline-Machining underline"></div>
                <div className='Product-Para'>
                </div>
              </div>

              {/* Cards */}
              <div className="row">

                {/* Card 1 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={honed1}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>Deep Hole Drilling</h3>

                      {/* <p>
                        Honed tube or skived/roller burnished tube for are...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>

                {/* Card 2 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={Suitabletoskive}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>Gun Drilling</h3>

                      {/* <p>
                        Precision Cold Drawn Seamless and DRAWN-ON MANDREL (DOM) welded...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>

                {/* Card 3 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={HotFinished}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>BTA Drilling</h3>

                      {/* <p>
                        Bored & Honed tube for hydraulic cylinders are obtained from...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>

                {/* Card 4 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={honed1}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>Fine Boring</h3>

                      {/* <p>
                        Honed tube or skived/roller burnished tube for are...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="row mt-4">

                {/* Card 1 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={Suitabletoskive}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>Trepanning</h3>

                      {/* <p>
                        Precision Cold Drawn Seamless and DRAWN-ON MANDREL (DOM) welded...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>

                {/* Card 2 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={HotFinished}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>OD Turning</h3>

                      {/* <p>
                        Bored & Honed tube for hydraulic cylinders are obtained from...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>

                {/* Card 3 */}
                <div class="col-lg-3 col-md-6 col-12">
                  <div class="report-card ">
                    <div class="report-image">
                      <img
                        src={Boring}
                        alt=""
                      />
                    </div>

                    <div class="report-content">
                      <h3>Boring</h3>

                      {/* <p>
                        Honed tube or skived/roller burnished tube for are...
                      </p> */}

                      <a href="#" class="read-btn">
                        Read more →
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/*CYLINDER REPAIR SERVICES */}
      <div>
        <section class="services py-5">
          <div id='MACHININGSERVICES' class="container">
            <h2 class="fw-bold">CYLINDER REPAIR SERVICES</h2>
            <div className="underline underline-CYLINDER"></div>
            <h5 className='mt-2'>All Cylinder Types — Quickly Restored to Full Functionality</h5>
            <p className='para-content mb-5'>
              The Lasani Cylinder Repair Service provides a cost-effective alternative to purchasing new hydraulic cylinders.
              Hydraulic cylinders operate under extreme pressure and continuous use, which can cause wear, leaks, or performance
              issues over time. Instead of replacing damaged units, our repair solutions restore your cylinders to as-new
              condition — minimizing downtime and reducing costs
            </p>

            {/* CYLINDER SERVICES Points */}
            <div className='CYLINDER-Child2-Div col-lg-12 col-md-12 col-12 mb-4'>
              <div>
                <h5>Why Choose Lasani Repair Services</h5>
                <ul>
                  <li className='List-content'>Comprehensive Repairs: We service all types and brands of hydraulic cylinders.</li>
                  <li className='List-content'>Precision Workmanship: Component repair or full replacement using high-quality materials.</li>
                  <li className='List-content'>Precision Workmanship: Component repair or full replacement using high-quality materials.</li>
                  <li className='List-content'>Advanced Machining Capabilities:</li>
                  <ol>
                    <li className='List-content'>Honing of cylinder pipes with diameters ranging from 50 mm to 700 mm</li>
                    <li className='List-content'>Boring, cylindrical surface grinding, and chroming to OEM standards</li>
                  </ol>
                  <li className='List-content'>Rapid Turnaround: Fast, efficient service to keep your operations running with minimal disruption.</li>
                  <li className='List-content'>Cost Savings: Substantially lower repair costs compared to new cylinder procurement.
                    Lasani ensures restored performance, extended service life, and reliable operation — all with a short lead time and guaranteed quality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* PARTNERS SECTION  */}
      <section class="services services-content py-5">
        <div id='MACHININGSERVICES' class="container">
          <h2 class="fw-bold">Our Partners</h2>
          <div className="underline underline-Partners"></div>
          <p className='para-content mt-2'>
            At Lasani, our senior team comprises seasoned professionals who bring a wealth of experience, innovative thinking,
            and a commitment to excellence. Their leadership drives our mission and vision, ensuring we deliver exceptional value
            to our clients and stakeholders.
          </p>
        </div>
        <div className="team-wrapper">

          <div className="slider-container">
            <div
              className="slider-track"
            >
              {teamData.map((member, i) => (
                <div
                  className="team-slide"
                  key={i}  >
                  <div className="team-card">

                    <img src={member.img} alt="" />

                    <div className="team-info">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="team-overlay">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>

                      <div className="socials">
                        <span>X</span>
                        <span>F</span>
                        <span>I</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* HISTORY SECTION */}
      <section className="history-section py-5 bg-light">
        <div id="HISTORY" className="container">
          <h2 className="fw-bold">HISTORY</h2>
          <div className="underline underline-HISTORY"></div>

          <div className="row mt-2">
            <div className="col-12">
              <p className="para-content mb-5">
                Lasani Fluid Power LLP is a family-owned business having 5 decades of experience in
                trading of pipes and fittings in Mumbai, India. Now the fourth-generation siblings
                of the family are involved with 20-25 small & medium enterprises.
              </p>

              {/* Timeline Desktop/Mobile Wrapper */}
              <div className="history-timeline-wrapper">
                <div className="history-line"></div>

                <div className="row justify-content-between text-center g-4">
                  {/* 1970 */}
                  <div className="col-md-2 col-6 history-item">
                    <div className="history-dot"></div>
                    <div className='history-sub-item'>
                      <h6 className="fw-bold">1970</h6>
                      <p className="small">Aman Tube Company incorporated</p>
                    </div>
                  </div>

                  {/* 1984 */}
                  <div className="col-md-2 col-6 history-item">
                    <div className="history-dot"></div>
                    <div className='history-sub-item'>
                      <h6 className="fw-bold">1984</h6>
                      <p className="small">Associated Tube Company incorporated</p>
                    </div>
                  </div>

                  {/* 1996 */}
                  <div className="col-md-2 col-6 history-item">
                    <div className="history-dot"></div>
                    <div className='history-sub-item'>
                      <h6 className="fw-bold">1996</h6>
                      <p className="small">GK Fluid Power Corporation incorporated</p>
                    </div>
                  </div>

                  {/* 2009 */}
                  <div className="col-md-2 col-6 history-item">
                    <div className="history-dot"></div>
                    <div className='history-sub-item'>
                      <h6 className="fw-bold">2009</h6>
                      <p className="small">Lasani Enterprises incorporated</p>
                    </div>
                  </div>

                  {/* 2017 */}
                  <div className="col-md-2 col-6 history-item">
                    <div className="history-dot"></div>
                    <div className='history-sub-item'>
                      <h6 className="fw-bold">2017</h6>
                      <p className="small">Lasani Fluid Power LLP incorporated</p>
                    </div>
                  </div>

                  {/* 2019 */}
                  <div className="col-md-2 col-6 history-item">
                    <div className="history-dot"></div>
                    <div className='history-sub-item'>
                      <h6 className="fw-bold">2019</h6>
                      <p className="small">Lasani Engineering Works incorporated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="lasani-footer pt-5 pb-3 text-white">
        <div className="container">
          <div className="row g-4">

            {/* Column 1: Logo */}
            <div className="col-lg-4 col-md-12 footer-column text-center text-lg-start">
              <img src={Logo} alt="Lasani Logo" className="footer-logo mb-3" />
              <p className="footer-description small">
                Lasani Fluid Power LLP – Delivering excellence in hydraulic tubes and engineering services for over 5 decades.
              </p>
            </div>

            {/* Column 2: Contact Info */}
            <div className="col-lg-4 col-md-6 footer-column">
              <h5 className="footer-header">Contact Us</h5>
              <ul className="list-unstyled footer-list">
                <li><span className="icon">📍</span> 1219-T, Kalamboli Steel Market, Panvel, Maharashtra – 410218</li>
                <li><span className="icon">📞</span> +91 99000 19885 | +91 89763 37049</li>
                <li><span className="icon">📧</span> info@la-sani.com</li>
              </ul>
            </div>

            {/* Column 3: Business Details */}
            <div className="col-lg-4 col-md-6 footer-column">
              <h5 className="footer-header">Business Details</h5>
              <div className="business-info small">
                <p><strong>GST:</strong> 27AAGFL8451Q1ZJ</p>
                <p><strong>MSME:</strong> UDYAM-MH-27-0002276</p>
                <div className="bank-card mt-3">
                  <strong>Axis Bank Ltd.</strong><br />
                  A/C: 920030066350101 <br />
                  IFSC: UTIB0000489
                </div>
              </div>
            </div>

          </div>

          <div className="footer-bottom mt-5 pt-3 border-top text-center">
            <p className="small opacity-50">&copy; {new Date().getFullYear()} Lasani Fluid Power LLP.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;