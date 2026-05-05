import { useEffect, useState } from 'react';
import './App.css';

function App() {
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

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

      {/* TOP HEADER */}
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
              <h3 className="logo">LE-SANI</h3>
            </div>

            {/* MENU */}
            <div className={`col-md-6 nav-menu ${open ? "active" : ""}`}>
              <ul className="menu-list">
                <li className="nav-item"><a href="#home" className="nav-link active">HOME</a></li>
                <li><a href="#about" className="nav-link">ABOUT ▾</a></li>
                <li><a href="#service" className="nav-link">SERVICE ▾</a></li>
                <li><a href="#team" className="nav-link">TEAM</a></li>
                <li><a href="#project" className="nav-link">PROJECT ▾</a></li>
                <li><a href="#blog" className="nav-link">BLOG ▾</a></li>
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
  );
}

export default App;