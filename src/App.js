import { useEffect, useState } from 'react';
import './App.css';

import img1 from './ImageFiles/115.1.jpg';

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

import AboutUs from './ImageFiles/about.webp';

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
          <div className="container">
            <div className="row align-items-center">

              {/* LOGO */}
              <div className="col-6 col-md-3">
                <h3 className="logo">LA-SANI</h3>
              </div>

              {/* MENU */}
              <div className={`col-md-6 nav-menu ${open ? "active" : ""}`}>
                <ul className="menu-list">
                  <li className="nav-item"><a href="#home" className="nav-link active">HOME</a></li>
                  <li className="nav-item"><a href="#PRODUCTSANDSERVICES" className="nav-link">PRODUCTS▾</a></li>
                  <li className="nav-item"><a href="#MACHININGSERVICES" className="nav-link">SERVICE</a></li>
                  <li className="nav-item"><a href="#ABOUT" className="nav-link">ABOUT US</a></li>
                  <li className="nav-item"><a href="#project" className="nav-link">PROJECT</a></li>
                  <li><a href="#contact" className="nav-link">CONTACT</a></li>
                </ul>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-6 col-md-3 text-end">
                <button className="search-btn">🔍</button>
                <button className="support-btn ms-2">Free Support</button>

                {/* MOBILE TOGGLE */}
                <span
                  className="menu-toggle"
                  onClick={() => setOpen(!open)}
                >
                  ☰
                </span>
              </div>

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
                <p>At Lasani Fluid Power LLP, we are committed to delivering excellence.<br />
                  With over forty years of industry experience, we have become a leading supplier <br />
                  of specialty pipes and tubes, offering high-quality raw materials and components <br />
                  for the cylinder manufacturing industry</p>

                <p>
                  Lasani utilises its extensive experience to provide advanced pipe and tube engineering <br />
                  services, including sawing, boring, honing, trepanning, and more. With exceptional <br />
                  logistics capabilities, we ensure timely delivery of products anywhere, anytime. <br />
                  By collaborating with top manufacturers, Lasani brings world-class quality products to the local market.
                </p>
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

      <div>
        <div className="feature-section py-5">
          {/* Product 1 Section */}
          <div className="container">

            {/* Heading */}
            <div id='PRODUCTSANDSERVICES' className="text-center mb-5 Product-Heading">
              <h2 className="fw-bold">PRODUCTS AND SERVICES</h2>
              <div className="underline mx-auto"></div>
              <h4>PIPES AND TUBES</h4>
              <h5>CYLINDER TUBES AND ROD </h5>
              <div className="underline-Product-Points"></div>
              <div className='Product-Para'>
                <p>Lasani, the market leader in the supply of hydraulic tube and rod products in India.</p>
                <p>Our main product that suits Hydraulic and pneumatic cylinder industries are:</p>
              </div>

            </div>

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={honed1} className="img-fluid" alt="img1" />

                  <div className="card-content">
                    <h5>Honed/Skived Tube</h5>
                    <p>Honed tube or skived/roller burnished tube for are...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={Suitabletoskive} className="img-fluid" alt="img2" />

                  <div className="card-content">
                    <h5>Suitable (Ready) To Skive/Hone</h5>
                    <p>Precision Cold Drawn Seamless and DRAWN-ON MANDREL (DOM) welded... </p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={HotFinished} className="img-fluid" alt="img3" />

                  <div className="card-content">
                    <h5>Hot Finished Seamless Bored & Honed Tube</h5>
                    <p>Bored & Honed tube for hydraulic cylinders are obtained from...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Product 2 Section */}
          <div className="container">

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={ChromePlateBar} className="img-fluid" alt="img1" />

                  <div className="card-content">
                    <h5>Chrome Plated Bar</h5>
                    <p>Hard Chrome Plated Shafts are produced in state of art...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={SmallTubePic} className="img-fluid" alt="img2" />

                  <div className="card-content">
                    <h5>Smooth Bore</h5>
                    <p>Cold drawn welded tubes with H9 inner diameter tolerance from...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={HydraulicLinePipe} className="img-fluid" alt="img3" />

                  <div className="card-content">
                    <h5>Hydraulic Line Pipe</h5>
                    <p>HPL Tubes are seamless cold-drawn precision steel tubes primarily...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Product 3 Section */}
          <div className="container">

            {/* Heading */}
            <div className="text-center mb-5 Product-Heading">
              <h5>OTHER INDUSTRIAL TUBES</h5>
              <div className="underline-Product-Points"></div>
              <div className='Product-Para'>
                <p>We supply the conveyance and pressure, energy, automotive and engineering and precision tube markets.</p>
                <p>We make a difference for all our customers. Our customer orientated business structure allows us to offer
                  competitive market solutions and  ensures that our products and services will exceed your expectations.</p>
                <p>Our close working relationship with customers has helped with the most simple through to the most challenging of
                  solutions.  Whatever the specification, grade or service, we offer the best  solutions for you - making the difference.</p>
              </div>
            </div>

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={CarbonSteelAlloy} className="img-fluid" alt="img1" />

                  <div className="card-content">
                    <h5>Carbon Steel & Alloy Steel Grade Seamless Tube</h5>
                    <p>Our range of seamless tubes includes both Carbon Steel...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={ERWWelded} className="img-fluid" alt="img2" />

                  <div className="card-content">
                    <h5>ERW (Welded) - HFW / Longitudinally SAW Pipes (LSAW) / Helical SAW Pipes (Spiral / HSAW Pipes) </h5>
                    <p>Our range of Electric Resistance Welded (ERW), High-Frequency Welded...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={HollowSections} className="img-fluid" alt="img3" />

                  <div className="card-content">
                    <h5>Hollow Sections, Rectangular & Square</h5>
                    <p>Rectangular and Square Hollow Sections (RHS & SHS) are manufactured from...</p>
                    <button className="read-btn">Read More</button>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* Product 4 Section */}
          <div className="container">
            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <img src={StainlessSteel} className="img-fluid" alt="img1" />

                  <div className="card-content">
                    <h5>Stainless Steel Pipes & Tubes</h5>
                    <p>Our Stainless Steel Pipes and Tubes are manufactured from...</p>
                    <button className="read-btn">Read More</button>
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
          <div id='MACHININGSERVICES' class="container text-center">
            <h2 class="fw-bold">MACHINING SERVICES</h2>
            <div className="underline mx-auto"></div>
            <p class="text-muted mb-5">
              Lasani is an ISO 9001–2015 Certified facility specialising in precision deep hole drilling and machining services of long
              parts that require difficult internal features with tight positional tolerances. We guarantee exceptional quality with a
              focus on our customers' economic drivers, resulting in cost savings and shorter lead times. We are committed to providing
              the highest level of service and on-time delivery.
            </p>

            <div class="row g-4">
              <h4>Our services and areas of expertise include: </h4>

              {/* <!-- 1 Card --> */}
              <div class="col-lg-4 col-md-6 col-12">
                <div class="service-card">
                  <div class="card-inner">
                    {/* <div class="icon">⚙️</div> */}
                    <h5>Machining Services</h5>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    <ul>
                      <li>Deep Hole Drilling</li>
                      <li>Gun Drilling</li>
                      <li>BTA Drilling</li>
                      <li>Fine Boring</li>
                      <li>Trepanning</li>
                      <li>OD Turning</li>
                      <li>Boring</li>
                    </ul>
                    {/* <button className="read-btn">Read More</button> */}
                  </div>
                </div>
              </div>

              {/* <!-- 2 Card --> */}
              <div class="col-lg-4 col-md-6 col-12">
                <div class="service-card">
                  <div class="card-inner">
                    {/* <div class="icon">⚙️</div> */}
                    <h5>Super Finishing Operations</h5>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    <ul>
                      <li>Honing</li>
                      <li>Burnishing</li>
                      <li>Grinding</li>
                      <li>Straightening</li>
                    </ul>
                    {/* <button className="read-btn">Read More</button> */}
                  </div>
                </div>
              </div>

              {/* <!-- 3 Card --> */}
              <div class="col-lg-4 col-md-6 col-12">
                <div class="service-card">
                  <div class="card-inner">
                    {/* <div class="icon">⚙️</div> */}
                    <h5>Other Value-Added Services</h5>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                    <ul>
                      <li>Hard Chrome Plating</li>
                      <li>Welding and Cladding</li>
                    </ul>
                    {/* <button className="read-btn">Read More</button> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Tables Deep */}
      <div>
        <div className="feature-section py-5">
          {/* Product 1 Section */}
          <div className="container">

            {/* Cards */}
            <div className="row">

              {/* Card 1 */}
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <h3>1. Deep Hole Drilling</h3>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Minimum Bore Diameter</td>
                        <td>37.7 mm (1.48")</td>
                      </tr>
                      <tr>
                        <td>Maximum Bore Diameter</td>
                        <td>101.6 mm (4")</td>
                      </tr>
                      <tr>
                        <td>Maximum Overall Length (O.A.L)</td>
                        <td>5500 mm (216")</td>
                      </tr>
                      <tr>
                        <td>Bore Tolerance</td>
                        <td>± 0.2 mm</td>
                      </tr>
                      <tr>
                        <td>Surface Finish (Drilling Only)</td>
                        <td>0.7 Ra</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <h3>2. Deep Hole Boring</h3>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Minimum Bore Diameter</td>
                        <td>50 mm (2")</td>
                      </tr>
                      <tr>
                        <td>Maximum Bore Diameter</td>
                        <td>360 mm (14.17")</td>
                      </tr>
                      <tr>
                        <td>Maximum Overall Length (O.A.L)</td>
                        <td>5500 mm (216")</td>
                      </tr>
                      <tr>
                        <td>Bore Tolerance</td>
                        <td>± 0.05 mm</td>
                      </tr>
                      <tr>
                        <td>Surface Finish </td>
                        <td>1.2 Ra</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <h3>3.	Trepanning</h3>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Minimum Bore Diameter</td>
                        <td>80 mm (3.14")</td>
                      </tr>
                      <tr>
                        <td>Maximum Bore Diameter</td>
                        <td>230 mm (9")</td>
                      </tr>
                      <tr>
                        <td>Maximum Overall Length (O.A.L)</td>
                        <td>5500 mm (216")</td>
                      </tr>
                      <tr>
                        <td>Bore Tolerance</td>
                        <td>± 0.05 mm</td>
                      </tr>
                      <tr>
                        <td>Surface Finish </td>
                        <td>2.0 Ra</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <h3>4.	Deep Hole Honing</h3>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Minimum Bore Diameter</td>
                        <td>25 mm (1.0")</td>
                      </tr>
                      <tr>
                        <td>Maximum Bore Diameter</td>
                        <td>700 mm (27.55")</td>
                      </tr>
                      <tr>
                        <td>Maximum Overall Length (O.A.L)</td>
                        <td>14,000 mm (551")</td>
                      </tr>
                      <tr>
                        <td>Bore Tolerance</td>
                        <td>H8 / H9</td>
                      </tr>
                      <tr>
                        <td>Surface Finish </td>
                        <td> 0.4 Ra</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <h3>Industries Served</h3>
                  <ul>
                    <li>Oil & Gas</li>
                    <li>Hydraulic Cylinder</li>
                    <li>Military</li>
                    <li>Mining</li>
                    <li>Aerospace</li>
                    <li>Petro-chemical</li>
                    <li>And more!</li>
                  </ul>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-lg-6 col-md-6 col-12 mb-4">
                <div className="feature-card">
                  <p>Through internally developed processes and technology, Lasani can hold incredibly
                    tight positional requirements that far exceed industry standards</p>

                  <p>Our 10,000 sq. ft. facility, equipped with honing, boring, and warehouse capabilities, adapts
                    to meet customer demands with the latest machinery and infrastructure changes.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/*CYLINDER REPAIR SERVICES */}
      <div>
        <section class="services py-5">
          <div id='MACHININGSERVICES' class="container text-center">
            <h2 class="fw-bold">CYLINDER REPAIR SERVICES</h2>
            <div className="underline mx-auto"></div>
            <h4>All Cylinder Types — Quickly Restored to Full Functionality</h4>
            <p class="text-muted mb-5">
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
                  <li>Comprehensive Repairs: We service all types and brands of hydraulic cylinders.</li>
                  <li>Precision Workmanship: Component repair or full replacement using high-quality materials.</li>
                  <li>Precision Workmanship: Component repair or full replacement using high-quality materials.</li>
                  <li>Advanced Machining Capabilities:</li>
                  <ol>
                    <li>Honing of cylinder pipes with diameters ranging from 50 mm to 700 mm</li>
                    <li>Boring, cylindrical surface grinding, and chroming to OEM standards</li>
                  </ol>
                  <li>Rapid Turnaround: Fast, efficient service to keep your operations running with minimal disruption.</li>
                  <li>Cost Savings: Substantially lower repair costs compared to new cylinder procurement.
                    Lasani ensures restored performance, extended service life, and reliable operation — all with a short lead time and guaranteed quality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* ABOUT US  */}
      <div>
        <div id='ABOUT' className="feature-section ABOUTus-Section-Main py-5">
          <h2 class="fw-bold ">ABOUT US</h2>
          <div className="underline mx-auto"></div>

          {/*	ABOUT Section */}
          <div className="container">
            {/* About Info */}
            <div className="row">
              <div className='About-Info col-lg-6 col-md-6 col-12' >
                <p>Lasani has over 40 years of experience in tube trading, mainly catering to Hydraulic Cylinder
                  Industries, Lasani Fluid Power LLP was redefined as an independent company in 2017.</p>

                <p>Lasani has evolved as premier supplier of Hydraulic Tubes, (RTH) Pre honed Tubes, Honed Tubes,
                  Hard Chrome Plated Rods, Raw Material and Other Specialised Grade Tubes, support quick delivery from
                  500 metric tonnes stocks.Being part of trading activity and acumens for engineering activity we added
                  many values addition to meet customer requirements, such as boring, deep hole drilling, honing, etc.</p>

                <p>We take full advantage of the innovative machining techniques and equipment developed through our engineering
                  and carry on a tradition of high-quality, sophisticated manufacturing processes. Providing drilled holes with
                  tight positional tolerances facilitates the amount of subsequent machine work being performed by the customer.
                  This means that a part with a tightly placed drilled hole eliminates the requirement to purchase grossly oversized
                  material and the associated complex machining operations to machine the outer diameter's position relative to the bore.</p>
              </div>

              <div className='ABOUT-Img-Section col-lg-6 col-md-6 col-12 mb-4'>
                <img src={AboutUs} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;