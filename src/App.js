import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHandshake, faEyeSlash, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot, faUsers, faLaptopCode, faCogs, faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from 'bootstrap';

import img1 from './ImageFiles/115.1.jpg';
import Logo from './ImageFiles/Lasani logo White PNG.png';

import Boring from './ImageFiles/Machining Services/Boring.jpeg';
import DeepTurning from './ImageFiles/Machining Services/Deep Hole Drilling.jpg';
import ODTurning from './ImageFiles/Machining Services/OD Turning.jpg';
import Trepanning from './ImageFiles/Machining Services/Trepanning.jpg';
import DeepHoleHoning from './ImageFiles/Machining Services/Deep Hole Honing.jpg';
import CuttingMachine from './ImageFiles/Machining Services/Cutting Machine.jpg';
import Welding from './ImageFiles/Machining Services/port-end-cap-welding.jpg';
import HardChromePlating from './ImageFiles/Machining Services/hard-chrome-plating-service.jpg';

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

import whyus1 from './ImageFiles/WHYUS/IMG-20221217-WA0007.jpg';
import whyus2 from './ImageFiles/WHYUS/asa.jpg';
import whyus3 from './ImageFiles/WHYUS/1.jpg';
import whyus4 from './ImageFiles/WHYUS/why4.jpg';
import whyus5 from './ImageFiles/WHYUS/why5.jpg';

import WhatApp from './ImageFiles/SocialFont/whatsapp (1).png';


import AboutUs from './ImageFiles/about.webp';
import AboutUs2 from './ImageFiles/about-us 2.png';
import AboutUs3 from './ImageFiles/business-professional-using-laptop-digital-600nw-2729153227.webp';
import AboutUs4 from './ImageFiles/Aboutus 4.jpg';
import AboutUs5 from './ImageFiles/Aboutus5.jpg';

import Person1 from './ImageFiles/DemoPerson/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg';
import Person2 from './ImageFiles/DemoPerson/360_F_376478182_yPuPo2qi6rYcu9ilwGWR6gQ7QBBC8Isw.jpg';

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
    const carouselItems = document.querySelectorAll(".about-carousel-item");
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


  // WHYUS Carousel
  // part-1
  useEffect(() => {

    const carouselItems = document.querySelectorAll(".whyus-carousel-item");

    let index = 0;

    const interval = setInterval(() => {

      index = (index + 1) % carouselItems.length;

      carouselItems.forEach((item) => {
        item.style.transform = `translateX(-${index * 100}%)`;
      });

    }, 3000);

    return () => clearInterval(interval);

  }, []);


  const teamData = [
    {
      name: "Abdul Mannan",
      role: "Director",
      details: "MD (Radiologist) a medical practitioner but his business approach and thinking are of immense helpful in directing of the company",
      img: AbdulMannan,
    },
    {
      name: "Abdul Rehman",
      role: "Managing Director",
      details: "B.E (Mechanical Engineering) having 12 years’ experience in the software industry. He has joined the family business in year 2012 and is responsible for execution of strategy and expansion of business.",
      img: AbdulRehman,
    },
    {
      name: "Ehsan Khan",
      role: "Director",
      details: "B.Sc. (Mechanical Engineering) working as Chief Strategy Officer for company manufacturing wellhead Equipment. He is having 25 years of experience of supply Chain and Manufacturing.",
      img: EhsanKhan,
    },
  ];

  // COMPNAY MOVE 
  useEffect(() => {
    const track = document.querySelector(".logo-track");
    track.innerHTML += track.innerHTML; // duplicate automatically
  }, []);

  return (
    <div className="App">

      {/* Header and Navbar */}
      <div>
        {/* HEADER */}
        <div className="top-header py-2">
          <div className="Header-container">
            <div className="row align-items-center">

              <div className="col-lg-10 col-md-10 col-12 text-center Header-Details text-md-start">
                <span>1219-T, Kalamboli Steel Market, Panvel, Maharashtra – 410218.</span>
                <span className="ms-3">📞 +91 99000 19885 | +91 89763 37049</span>
                <span className="ms-3">✉ info@la-sani.com</span>
              </div>

              <div className="col-lg-2 col-md-3 col-12 text-center text-md-end Header-Time">
                <span>Open: 9am–6pm Mon–Sat</span>
                {/* <span className="ms-3">f</span>
                <span className="ms-2">X</span> */}
              </div>

            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="custom-navbar">
          <div className="row navbar-row-main align-items-center">
            {/* LOGO */}
            <div className="col-md-3">
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
            <div className=" col-md-3 text-end">
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
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
              <div className="carousel-caption carousel-caption-div">
              </div>
            </div>
            {/* <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
            </div> */}
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button> */}
          {/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>

      {/* ABOUT US  */}
      <div>
        <div id='ABOUT' className="feature-section ABOUTus-Section-Main py-5">
          {/*	ABOUT Section */}
          <div className="container">
            <h2 className="fw-bold">ABOUT US</h2>
            <div className="underline  underline-ABOUT"></div>
            {/* About Info */}
            <div className="row">
              <div className='About-Info col-lg-6 col-md-6 col-12' >
                <h4>Manufacturer and Supplier of Hydraulic Cylinder Tubes</h4>
                <p className='para-content Manufacturer-paraone'>Lasani has over 40 years of experience in tube trading, mainly catering to Hydraulic Cylinder
                  Industries, Lasani Fluid Power LLP was redefined as an independent company in 2017.</p>

                <p className='para-content'>Lasani has evolved as premier supplier of Hydraulic Tubes, (RTH) Pre honed Tubes, Honed Tubes,
                  Hard Chrome Plated Rods, Raw Material and Other Specialised Grade Tubes, support quick delivery from
                  500 metric tonnes stocks.Being part of trading activity and acumens for engineering activity we added
                  many values addition to meet customer requirements, such as boring, deep hole drilling, honing, etc.</p>

              </div>

              {/* Carousel Section */}
              <div className='ABOUT-Img-Section col-lg-6 col-md-6 col-12 mb-4'>
                {/* Wrapper with overflow hidden is crucial */}
                <div className="custom-carousel-wrapper about-custom-carousel-wrapper">
                  <div className="about-carousel-item" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={AboutUs} className="d-block w-100 rounded" alt="1" />
                  </div>
                  <div className="about-carousel-item" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={AboutUs5} className="d-block w-100 rounded" alt="2" />
                  </div>
                  <div className="about-carousel-item" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={AboutUs3} className="d-block w-100 rounded" alt="2" />
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
              <h2 className="fw-bold">PRODUCTS</h2>
              <div className="underline underline-PRODUCTS"></div>
              {/* <h4 className='mt-3'>PIPES AND TUBES</h4> */}
              {/* <div className="underline-Product-Points underline-TUBES-ROD"></div> */}
              <div className='Product-Para'>
                <p className='para-content mt-2'><span>
                  <h6>PIPES AND TUBES</h6>
                </span> Lasani, the market leader in the supply of hydraulic tube and rod products in India.</p>
                <p className='para-content'>Our main product that suits Hydraulic and pneumatic cylinder industries are:</p>
              </div>

            </div>

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={honed1}
                      alt=""
                    />
                  </div>

                  <div className="report-content">
                    <div>
                      <h3>Honed/Skived Tube</h3>
                    </div>

                    <div>
                      <p>
                        Honed tube or skived/roller burnished tube for are obtained from high
                        quality precision cold drawn drawn or DOM tubes Material can be arranged...
                      </p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={Suitabletoskive}
                      alt=""
                    />
                  </div>

                  <div className="report-content">
                    <div>
                      <h3>Suitable (Ready) To Skive/Hone</h3>
                    </div>

                    <div>
                      <p>
                        Precision Cold Drawn Seamless and DRAWN-ON MANDREL (DOM) welded tubes are ready to
                        skive/ Hone to make hydraulic cylinders pipe...
                      </p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={HotFinished}
                      alt=""
                    />
                  </div>

                  <div className="report-content">
                    <div>
                      <h3>Hot Finished Seamless Bored & Honed Tube</h3>
                    </div>

                    <div>
                      <p>
                        Bored & Honed tube for hydraulic cylinders are obtained from high quality
                        hot finished raw materialOur In house processing facility ...
                      </p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Cards 4*/}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={ChromePlateBar}
                      alt=""
                    />
                  </div>

                  <div className="report-content">
                    <div>
                      <h3>Chrome Plated Bar</h3>
                    </div>

                    <div>
                      <p>
                        Hard Chrome Plated Shafts are produced in state of art manufacturing facility
                        by world renowned manufacturers Stringent Quality Control....
                      </p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
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
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={SmallTubePic}
                      alt=""
                    />

                  </div>

                  <div className="report-content">
                    <div>
                      <h3>Smooth Bore</h3>
                    </div>

                    <div>
                      <p>
                        Cold drawn welded tubes with H9 inner diameter tolerance from from
                        offer precise dimensional accuracy, high concentricity...
                      </p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={HydraulicLinePipe}
                      alt=""
                    />
                  </div>

                  <div className="report-content">
                    <div>
                      <h3>Hydraulic Line Pipe</h3>
                    </div>

                    <div>
                      <p>HPL Tubes are seamless cold-drawn precision steel tubes primarily used
                        as pressure lines in hydraulic or pneumatic systems...</p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Product 3 Section */}
          <div className="container Product-row-Two">

            {/* Heading */}
            <div className=" mb-5 Product-Heading">
              <div className='Product-Para'>
                <h6>OTHER INDUSTRIAL TUBES</h6>
                {/* <div className="underline-Product-Points INDUSTRIAL-TUBES"></div> */}
              </div>

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
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={CarbonSteelAlloy}
                      alt=""
                    />
                  </div>

                  <div className="report-content report-content-INDUSTRIAL-Tubes">
                    <div>
                      <h3>Carbon Steel & Alloy Steel Grade Seamless Tube</h3>
                    </div>

                    <div>
                      <p> Our range of seamless tubes includes both Carbon Steel grades designed
                        for high performance under demanding operating conditions The....</p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={StainlessSteel}
                      alt=""
                    />
                  </div>

                  <div className="report-content report-content-INDUSTRIAL-Tubes">
                    <div>
                      <h3>Stainless Steel Pipes & Tubes</h3>
                    </div>

                    <div>
                      <p>Our Stainless Steel Pipes and Tubes are manufactured from
                        premium-grade stainless steels to deliver exceptional corrosion resistance,...</p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={HollowSections}
                      alt=""
                    />
                  </div>
                  <div className="report-content report-content-INDUSTRIAL-Tubes">
                    <div>
                      <h3>Hollow Sections, Rectangular & Square</h3>
                    </div>

                    <div>
                      <p>Rectangular and Square Hollow Sections (RHS & SHS) are manufactured from
                        high-quality hot rolled or cold formed steel, offering excellent...</p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4*/}
              <div className="col-lg-3 col-md-6 col-12">
                <div className="report-card ">
                  <div className="report-image">
                    <img
                      src={ERWWelded}
                      alt=""
                    />
                  </div>

                  <div className="report-content report-content-INDUSTRIAL-Tubes">
                    <div>
                      <h3>ERW (Welded)</h3>
                    </div>

                    <div>
                      <p>Our range of Electric Resistance Welded (ERW), High-Frequency Welded
                        (HFW), Longitudinally Submerged Arc Welded (LSAW), and Helical...</p>

                      <a href="#" className="read-btn">
                        Read more →
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* MACHINING SERVICE */}
      <div>
        <section className="services">
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
                {/* <h5>Our services and areas of expertise include: </h5>
                <h5>Machining Services</h5>
                <div className="underline-Machining underline"></div> */}
                <div className='Product-Para'>
                </div>
              </div>

              {/* Cards */}
              <div className="row">

                {/* Card 1 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={DeepTurning}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Deep Hole Drilling</h3>
                      </div>

                      <div>
                        <p>
                          Deep hole drilling ensures accurate, straight holes with high depth-to-diameter
                          ratios, suitable for complex components in the oil...
                        </p>

                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={Boring}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Deep Hole Boring</h3>
                      </div>

                      <div>
                        <p>
                          Our gun drilling capabilities are ideal for creating small, deep holes with exceptional
                          straightness and finish, often required in hydraulic...
                        </p>

                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={DeepHoleHoning}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Deep Hole Honing</h3>
                      </div>

                      <div>
                        <p>Honing refines the surface finish of bores, improving dimensional accuracy,
                          roundness, and surface texture. This process is particularly beneficial...</p>

                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 4 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={Trepanning}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Trepanning</h3>
                      </div>

                      <div>
                        <p>
                          Trepanning efficiently removes a solid core from the centre of a workpiece,
                          reducing material waste and lowering production costs. This process is...
                        </p>

                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className='row Product-row-Two'>
                {/* Card 5 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={ODTurning}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>OD Turning</h3>
                      </div>

                      <div>
                        <p>
                          OD turning services provide precision shaping and finishing of cylindrical parts,
                          ensuring tight concentricity and roundness tolerances...
                        </p>

                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 6 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={CuttingMachine}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Cutting Machine</h3>
                      </div>

                      <div>
                        <p>
                          OD turning services provide precision shaping and finishing of cylindrical parts,
                          ensuring tight concentricity and roundness tolerances...
                        </p>
                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 7 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={HardChromePlating}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Hard Chrome Plating</h3>
                      </div>

                      <div>
                        <p>
                          OD turning services provide precision shaping and finishing of cylindrical parts,
                          ensuring tight concentricity and roundness tolerances...
                        </p>
                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card 8 */}
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="report-card ">
                    <div className="report-image">
                      <img
                        src={Welding}
                        alt=""
                      />
                    </div>

                    <div className="report-content">
                      <div>
                        <h3>Welding and Cladding</h3>
                      </div>

                      <div>
                        <p>
                          OD turning services provide precision shaping and finishing of cylindrical parts,
                          ensuring tight concentricity and roundness tolerances...
                        </p>
                        <a href="#" className="read-btn">
                          Read more →
                        </a>
                      </div>
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
        <section className="services py-5">
          <div id='MACHININGSERVICES' className="container">
            <h2 className="fw-bold">CYLINDER REPAIR SERVICES</h2>
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
      <section className="services services-content py-5">
        <div id='MACHININGSERVICES' className="container">
          <h2 className="fw-bold">Our Partners</h2>
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

                    <div>
                      <img src={member.img} alt="" />
                    </div>

                    <div className="team-info">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="team-overlay">
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>

                      <div className='Partners-details'>
                        <p>{member.details}</p>
                      </div>

                      <div className="socials">
                        <span><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className='soical-icons' icon={faXTwitter} />
                        </a></span>
                        <span><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className='soical-icons' icon={faFacebook} />
                        </a></span>
                        <span><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className='soical-icons' icon={faLinkedin} />
                        </a></span>
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

      {/* WHY US SECTION */}
      <div>
        <div id='WHYUS' className="feature-section WhyUs-Section-Main py-5">

          <div className="container">

            {/* Section Heading */}
            <h2 className="fw-bold">WHY US?</h2>
            <div className="underline underline-WhyUs"></div>

            {/* First-Card Why Us */}
            <div className="row mt-3">

              {/* Left Content */}
              <div className='WhyUs-Info col-lg-8 col-md-6 col-12'>
                <div>
                  <div className="row text-center col-lg-12 section-one">

                    {/* ================================================= */}
                    {/* TECHNICAL CARD */}
                    {/* ================================================= */}
                    <div className="col-lg-4 col-md-3 col-12">

                      <div className="mission-card techinical-card text-center">

                        <div className="techinical-icon">
                          {/* <i className="fa-solid fa-handshake"></i> */}
                          <FontAwesomeIcon
                            className="techinical-main-icon"
                            icon={faCogs}
                          />
                        </div>

                        <h3>TECHNICAL</h3>

                        <p>
                          "Our mission is to deliver innovative,
                          high-quality storage solutions that meet
                          the diverse needs of our clients."
                        </p>

                      </div>

                    </div>

                    {/* ================================================= */}
                    {/* EXPERIENCE CARD */}
                    {/* ================================================= */}
                    <div className="col-lg-4 col-md-3 col-12">

                      <div className="mission-card text-center techinical-card">

                        <div className="techinical-icon">
                          {/* <i className="fa-solid fa-eye-slash"></i> */}
                          <FontAwesomeIcon
                            className="techinical-main-icon"
                            icon={faBriefcase}
                          />
                        </div>

                        <h3>EXPERIENCE</h3>

                        <p>
                          "Our vision is to be the leading provider
                          of cutting-edge storage solutions, driving
                          industry innovation and exceeding customer
                          expectations."
                        </p>

                      </div>

                    </div>

                    {/* ================================================= */}
                    {/* INFRASTRUCTURE CARD */}
                    {/* ================================================= */}
                    <div className="col-lg-4 col-md-3 col-12">

                      <div className="mission-card text-center techinical-card">

                        <div className="techinical-icon">
                          {/* <i className="fa-solid fa-thumbs-up"></i> */}
                          <FontAwesomeIcon
                            className="techinical-main-icon"
                            icon={faBuilding}
                          />
                        </div>

                        <h3>INFRASTRUCTURE</h3>

                        <p>
                          "We are dedicated to delivering exceptional
                          quality, ensuring every product meets the
                          highest standards of durability and
                          performance."
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="row text-center col-lg-12 section-two">

                    {/* ================================================= */}
                    {/* LOCATION CARD */}
                    {/* ================================================= */}
                    <div className="col-lg-4 col-md-3 col-12">

                      <div className="mission-card techinical-card text-center">

                        <div className="techinical-icon">
                          {/* <i className="fa-solid fa-handshake"></i> */}
                          <FontAwesomeIcon
                            className="techinical-main-icon"
                            icon={faLocationDot}
                          />
                        </div>

                        <h3>LOCATION</h3>

                        <p>
                          "Our mission is to deliver innovative,
                          high-quality storage solutions that meet
                          the diverse needs of our clients."
                        </p>

                      </div>

                    </div>

                    {/* ================================================= */}
                    {/* TEAM CARD */}
                    {/* ================================================= */}
                    <div className="col-lg-4 col-md-3 col-12">

                      <div className="mission-card text-center techinical-card">

                        <div className="techinical-icon">
                          {/* <i className="fa-solid fa-eye-slash"></i> */}
                          <FontAwesomeIcon
                            className="techinical-main-icon"
                            icon={faUsers}
                          />
                        </div>

                        <h3>TEAM</h3>

                        <p>
                          "Our vision is to be the leading provider
                          of cutting-edge storage solutions, driving
                          industry innovation and exceeding customer
                          expectations."
                        </p>

                      </div>

                    </div>

                    {/* ================================================= */}
                    {/* TECHNOLOGY CARD */}
                    {/* ================================================= */}
                    <div className="col-lg-4 col-md-3 col-12">

                      <div className="mission-card text-center techinical-card">

                        <div className="techinical-icon">
                          {/* <i className="fa-solid fa-thumbs-up"></i> */}
                          <FontAwesomeIcon
                            className="techinical-main-icon"
                            icon={faLaptopCode}
                          />
                        </div>

                        <h3>TECHNOLOGY</h3>

                        <p>
                          "We are dedicated to delivering exceptional
                          quality, ensuring every product meets the
                          highest standards of durability and
                          performance."
                        </p>

                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Right Image Section (kept structure same, only class renamed) */}
              <div className='WHYUS-Img-Section col-lg-4 col-md-6 col-12 mb-4'>

                {/* Carousel Wrapper */}
                <div className="custom-carousel-wrapper" style={{ overflow: 'hidden', display: 'flex' }} >

                  <div className="whyus-carousel-item" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={whyus2} className="d-block w-100 rounded" alt="1" />
                  </div>

                  <div className="whyus-carousel-item" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={whyus3} className="d-block w-100 rounded" alt="2" />
                  </div>

                  <div className="whyus-carousel-item" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                    <img src={whyus4} className="d-block w-100 rounded" alt="3" />
                  </div>

                </div>
              </div>

            </div>

            {/* Second-Card Why Us */}
            <div className="row mt-3">

              {/* Left Content */}
              <div className='WhyUs-Info col-lg-8 col-md-6 col-12'>


              </div>

            </div>

          </div>
        </div>
      </div>


      {/* Case Studies Section  */}
      <section className="mission-vision-section py-5">

        <div className="container">

          {/* HEADING */}
          <div className=" mb-5">
            <h2 className="fw-bold">Case Studies</h2>
            <div className="underline underline-CaseStudies"></div>
          </div>

          <div className="row g-4 text-center">

            <div className='CaseStudies-Main-Section'>
              {/* CaseStudies P1 */}
              <div className='CaseStudies-frist-part'>
                <div className='col-lg-4'>
                  <h2>Precision Systems Enhancing La-Sani Performance Standards</h2>
                </div>
                <div className='col-lg-8'>
                  <p>La-Sani represents a benchmark in modern industrial execution, where engineering precision meets
                    operational efficiency. Through the integration of advanced mechanical systems and optimized process
                    frameworks, the organization has successfully enhanced productivity while maintaining superior quality
                    standards. The structured approach toward resource management and system design ensures minimal
                    downtime and maximum output reliability. Furthermore, La-Sani’s commitment to continuous innovation
                    and performance optimization has enabled scalable growth and long-term sustainability.
                  </p>
                </div>
              </div>

              {/* CaseStudies P2 */}
              <div className='CaseStudies-second-part col-lg-12'>
                <div className='CS-Sec-POne col-lg-6'>
                  <p>
                    This case study highlights how strategic engineering methodologies and disciplined execution can transform operational
                    challenges into measurable success outcomes, positioning La-Sani as a leader in its domain.
                    La-Sani demonstrates strong industrial performance through well-planned engineering and efficient system execution.
                    By using advanced mechanical processes and structured workflows, the company has improved productivity and maintained
                    high-quality standards. Its focus on innovation, reliability, and continuous improvement helps ensure smooth operations
                    and long-term growth. This case study reflects how effective planning and modern engineering can deliver consistent
                    and scalable success.
                  </p>
                  <p>
                    La-Sani demonstrates strong industrial performance through well-planned engineering and efficient system execution.
                    By using advanced mechanical processes and structured workflows, the company has improved productivity and maintained
                    high-quality standards. Its focus on innovation, reliability, and continuous improvement helps ensure smooth operations
                    and long-term growth. This case study reflects how effective planning and modern engineering can deliver consistent
                    and scalable success.
                  </p>
                </div>

                <div className='CS-Sec-PTwo col-lg-6'>
                  <div className='WHYUS-Img-Section col-lg-12 col-md-12 col-12 mb-4'>

                    {/* Carousel Wrapper */}
                    <div className="custom-carousel-wrapper" style={{ overflow: 'hidden', display: 'flex' }} >

                      <div className="whyus-" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                        <img src={whyus2} className="d-block w-100 rounded" alt="1" />
                      </div>

                      <div className="whyus-" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                        <img src={whyus3} className="d-block w-100 rounded" alt="2" />
                      </div>

                      <div className="whyus-" style={{ minWidth: '100%', transition: 'transform 0.5s ease-in-out' }}>
                        <img src={whyus4} className="d-block w-100 rounded" alt="3" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* <!-- ===================================================== --> */}
      {/* <!-- Compnay LOGO --> */}
      {/* <!-- ===================================================== --> */}
      <section class="certification-section">

        <div class="container">
          <div class="text-center section-header">
            {/* <h2>Certifications</h2>

            <p>
              Certified excellence, ensuring compliance,
              quality, and global logistics reliability.
            </p> */}
          </div>

          {/* <!-- Carousel Wrapper --> */}
          <div class="logo-slider">

            <div class="logo-track">

              {/* <!-- Card 1 --> */}
              <div class="logo-card">
                <img src={Logo} alt="AEO" />
              </div>

              {/* <!-- Card 2 --> */}
              <div class="logo-card">
                <img src={Logo} alt="FIATA" />
              </div>

              {/* <!-- Card 3 --> */}
              <div class="logo-card">
                <img src={Logo} alt="ISO" />
              </div>

              {/* <!-- Card 4 --> */}
              <div class="logo-card">
                <img src={Logo} alt="India" />
              </div>

              {/* <!-- Card 5 --> */}
              <div class="logo-card">
                <img src={Logo} alt="IATA" />
              </div>

              {/* <!-- Duplicate for Infinite Loop --> */}
              <div class="logo-card">
                <img src={Logo} alt="AEO" />
              </div>

              <div class="logo-card">
                <img src={Logo} alt="FIATA" />
              </div>

              <div class="logo-card">
                <img src={Logo} alt="ISO" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CARDS */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="fw-bold">Testimonials</h2>
          <div className="underline underline-testimonials"></div>

          <div className="row mt-4">

            {/* Card 1 */}
            <div className="col-md-3">
              <div className="testimonial-card d-flex">

                {/* LEFT */}
                <div className="testimonial-left">
                  <p className="testimonial-text">
                    "Lasani delivers exceptional engineering precision and reliability in every project."
                  </p>

                  <h6 className="testimonial-name">— Ahmed Khan</h6>

                  <div className="testimonial-stars">
                    ⭐⭐⭐⭐
                  </div>
                </div>

                {/* RIGHT */}
                <div className="testimonial-right">
                  <img src={Person1} alt="user" />
                </div>

              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3">
              <div className="testimonial-card d-flex">
                <div className="testimonial-left">
                  <p className="testimonial-text">"Outstanding service quality and highly professional team execution."</p>
                  <h6 className="testimonial-name">— Sara Ali</h6>
                  <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                </div>
                <div className="testimonial-right">
                  <img src={Person2} alt="user" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3">
              <div className="testimonial-card d-flex">
                <div className="testimonial-left">
                  <p className="testimonial-text">"Innovative solutions with strong technical expertise and support."</p>
                  <h6 className="testimonial-name">— Imran Sheikh</h6>
                  <div className="testimonial-stars">⭐⭐⭐⭐</div>
                </div>
                <div className="testimonial-right">
                  <img src={Person1} alt="user" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3">
              <div className="testimonial-card d-flex">
                <div className="testimonial-left">
                  <p className="testimonial-text">"Highly efficient processes with excellent customer satisfaction."</p>
                  <h6 className="testimonial-name">— Fatima Noor</h6>
                  <div className="testimonial-stars">⭐⭐⭐</div>
                </div>
                <div className="testimonial-right">
                  <img src={Person2} alt="user" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* MISSION VISION QUALITY SECTION  */}
      {/* ========================================================= */}
      <section className="mission-vision-section py-5">

        <div className="container">

          {/* HEADING */}
          <div className=" mb-5">
            <h2 className="fw-bold">Our Core Values</h2>
            <div className="underline underline-CoreValues"></div>
          </div>

          <div className="row g-4 text-center">

            {/* ================================================= */}
            {/* MISSION CARD */}
            {/* ================================================= */}
            <div className="col-lg-4 col-md-6 col-12">

              <div className="mission-card text-center">

                <div className="mission-icon">
                  {/* <i className="fa-solid fa-handshake"></i> */}
                  <FontAwesomeIcon
                    className="mission-main-icon"
                    icon={faHandshake}
                  />
                </div>

                <h3>Mission</h3>

                <p>
                  "Our mission is to deliver innovative,
                  high-quality storage solutions that meet
                  the diverse needs of our clients."
                </p>

              </div>

            </div>

            {/* ================================================= */}
            {/* VISION CARD */}
            {/* ================================================= */}
            <div className="col-lg-4 col-md-6 col-12">

              <div className="mission-card text-center">

                <div className="mission-icon">
                  {/* <i className="fa-solid fa-eye-slash"></i> */}
                  <FontAwesomeIcon
                    className="mission-main-icon"
                    icon={faEyeSlash}
                  />
                </div>

                <h3>Vision</h3>

                <p>
                  "Our vision is to be the leading provider
                  of cutting-edge storage solutions, driving
                  industry innovation and exceeding customer
                  expectations."
                </p>

              </div>

            </div>

            {/* ================================================= */}
            {/* QUALITY CARD */}
            {/* ================================================= */}
            <div className="col-lg-4 col-md-6 col-12">

              <div className="mission-card text-center">

                <div className="mission-icon">
                  {/* <i className="fa-solid fa-thumbs-up"></i> */}
                  <FontAwesomeIcon
                    className="mission-main-icon"
                    icon={faThumbsUp}
                  />
                </div>

                <h3>Quality</h3>

                <p>
                  "We are dedicated to delivering exceptional
                  quality, ensuring every product meets the
                  highest standards of durability and
                  performance."
                </p>

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