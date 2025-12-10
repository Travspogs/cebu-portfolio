import React, { useState } from "react";

const tour = {
  school: "Holy Cross of Davao College",
  studentName: "Travis John Vallega Villanueva",
  course: "BS Information Technology",
  grade: "A",
  days: [
    {
      dayNumber: 1,
      date: "2025-11-19",
      notes: "WORLDTECH INFORMATIONS SOLUTIONS - CEBU CITY",
      photos: [
        "/images/day1-1.jpg",
        "/images/day1-2.jpg",
        "/images/day1-3.jpg",
        "/images/day1-4.jpg",
      ],
    },
    {
      dayNumber: 2,
      date: "2025-11-20",
      notes: "RIVAN IT, CODECHUM - CEBU CITY",
      photos: [
        "/images/day2-1.jpg",
        "/images/day2-2.jpg",
        "/images/day2-3.jpg",
        "/images/day2-4.jpg",
      ],
    },
    {
      dayNumber: 3,
      date: "2025-12-03 - 04",
      notes: "MATA TECHNOLOGIES, TARSIER. 117 - CEBU CITY , BOHOL",
      photos: [
        "/images/day3-1.jpg",
        "/images/day3-2.jpg",
        "/images/day3-3.jpg",
        "/images/day3-4.jpg",
      ],
    },
  ],
};

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <style>{stylesCSS}</style>

      <header className="nav">
        <div className="brand">CEBU TOUR</div>
        <nav className="nav-links">
          <button
            onClick={() => setPage("home")}
            className={page === "home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => setPage("tour")}
            className={page === "tour" ? "active" : ""}
          >
            Tour
          </button>
          <button
            onClick={() => setPage("cert")}
            className={page === "cert" ? "active" : ""}
          >
            Certificate
          </button>
          <button
            onClick={() => setPage("about")}
            className={page === "about" ? "active" : ""}
          >
            About
          </button>
        </nav>
      </header>

      <main className="container">
        {page === "home" && <Home setPage={setPage} />}
        {page === "tour" && <Tour />}
        {page === "cert" && <Certificate setPage={setPage} />}
        {page === "about" && <About />}
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {tour.school} — Cebu Educational Tour Portfolio
      </footer>
    </div>
  );
}

function Home({ setPage }) {
  return (
    <div className="home-page">
      <div className="hero-modern">
        <div className="hero-content">
          <h4 className="intro-tag">HEY! I'M {tour.studentName.split(" ")[0].toUpperCase()}</h4>
          <h1 className="main-title">
            MY EDUCATIONAL <span className="highlight">TOUR</span>
          </h1>
          <p className="hero-desc">
           A three-day educational tour in Cebu that provided immersive learning experiences through 
           visits to various companies and institutions.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => setPage("tour")}>
              View Tour
            </button>
            <button className="btn ghost" onClick={() => setPage("cert")}>
              View Certificate
            </button>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/images/profile.jpeg" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

function Tour() {
  return (
    <div className="tour-page">
      <h1 className="page-title">Tour Highlights — 3 Days</h1>
      {tour.days.map((d) => (
        <section className="day-card" key={d.dayNumber}>
          <div className="day-header">
            <h2>Day {d.dayNumber}</h2>
            <span className="day-date">{d.date}</span>
          </div>
          <p className="day-notes">{d.notes}</p>
          <div className="day-photos">
            {d.photos.map((src, idx) => (
              <div className="photo-wrapper" key={idx}>
                <img src={src} alt={`Day ${d.dayNumber} - ${idx + 1}`} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function Certificate({ setPage }) {
  return (
    <div className="certificate-page">
      <div className="certificate-container">
        <h1 className="cert-title">Certificate</h1>
        <div className="cert-body">
          <h2 className="cert-of">Certificate of Completion</h2>
          <p className="cert-intro">This certifies that</p>
          <p className="cert-name">{tour.studentName}</p>
          <p className="cert-details">
            {tour.course} • Grade: {tour.grade}
          </p>
          <div className="cert-footer">
            <div className="cert-issuer">
              <p>Issued by</p>
              <p className="issuer-school">{tour.school}</p>
            </div>
            <div className="cert-date">
              <p>Date: {new Date().toLocaleDateString()}</p>
            </div>
            <div className="cert-signature-area">
              <div className="signature-line"></div>
              <p className="signature-title">Sir Owen Pilongo</p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn primary print-button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => window.print(), 350);
        }}
      >
        Print Certificate
      </button>
    </div>
  );
}

function About() {
  return (
    <div className="about-page">
      <h1 className="page-title">About This Portfolio</h1>
      <p className="about-intro">
        This portfolio documents the 3-day educational tour in Cebu, highlighting cultural,
        historical, and natural experiences. All images are visible only when viewing the Tour
        section.
      </p>
    </div>
  );
}

const stylesCSS = `
:root{
--bg-dark:#0a122a;
--accent:#38bdf8;
--text-light:#eef6ff;
--card-bg:rgba(255,255,255,0.05);
--shadow:0 12px 40px rgba(0,0,0,0.55);
}
body, html, #root{
margin:0;padding:0;
font-family:'Poppins',sans-serif;
background:var(--bg-dark);
color:var(--text-light);
}
.app{min-height:100vh;display:flex;flex-direction:column;}
.nav{
display:flex;justify-content:space-between;align-items:center;
padding:15px 6%;
position:sticky;top:0;
background:rgba(10,18,42,0.85);
backdrop-filter:blur(10px);
z-index:50;
}
.brand{color:var(--accent);font-weight:900;font-size:1.3rem;}
.nav-links button{
background:transparent;border:none;color:var(--text-light);
padding:8px 14px;margin-left:10px;cursor:pointer;font-weight:700;
border-radius:8px;transition:.3s;
}
.nav-links button:hover,.nav-links button.active{
background:var(--accent);color:#0a122a;
}
.container{flex:1;padding:40px 6%;max-width:1200px;margin:0 auto;}
.footer{text-align:center;padding:20px;border-top:1px solid rgba(255,255,255,0.1);color:var(--text-light);}

/* Modern Hero */
.hero-modern{
display:flex;justify-content:space-between;align-items:center;
gap:40px;min-height:80vh;
}
.hero-content{flex:1;}
.intro-tag{
color:var(--accent);font-weight:700;font-size:1.2rem;margin-bottom:10px;
}
.main-title{
font-size:2.8rem;font-weight:800;color:white;line-height:1.2;
}
.highlight{color:var(--accent);}
.hero-desc{
margin-top:15px;max-width:480px;line-height:1.6;
color:rgba(255,255,255,0.8);
}
.hero-buttons{margin-top:30px;}
.btn{
padding:12px 24px;border-radius:8px;font-weight:600;cursor:pointer;
margin-right:10px;transition:all .3s;
}
.btn.primary{background:var(--accent);color:#0a122a;border:none;}
.btn.primary:hover{transform:scale(1.05);}
.btn.ghost{background:transparent;color:var(--accent);border:2px solid var(--accent);}
.btn.ghost:hover{background:rgba(56,189,248,0.1);}
.hero-photo img{
width:380px;border-radius:20px;box-shadow:var(--shadow);object-fit:cover;
}

/* Tour Page */
.tour-page .page-title{
font-size:2.5rem;text-align:center;margin-bottom:40px;color:var(--accent);
}
.day-card{
background:var(--card-bg);border-radius:15px;
padding:30px;margin-bottom:30px;box-shadow:var(--shadow);
}
.day-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:10px;}
.day-header h2{color:var(--accent);}
.day-date{color:rgba(255,255,255,0.7);}
.day-notes{color:white;font-size:1.1rem;margin-bottom:25px;}
.day-photos{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:15px;}
.photo-wrapper img{width:100%;height:150px;object-fit:cover;border-radius:8px;transition:.3s;}
.photo-wrapper:hover img{transform:scale(1.05);}

/* Certificate */
.certificate-page{display:flex;flex-direction:column;align-items:center;}
.certificate-container{background:white;color:#0a122a;padding:40px;border-radius:15px;width:100%;max-width:850px;box-shadow:var(--shadow);}
.cert-title{text-align:center;font-size:2rem;color:var(--accent);border-bottom:3px double var(--accent);padding-bottom:10px;margin-bottom:30px;}
.cert-name{font-size:3rem;font-weight:900;color:var(--accent);margin:15px 0;}
.cert-details{font-size:1.3rem;margin-bottom:50px;}
.cert-footer{display:flex;justify-content:space-around;align-items:flex-end;margin-top:50px;}
.signature-line{border-top:2px solid #333;width:200px;margin:0 auto 5px auto;}
.signature-title{font-size:0.9rem;}

/* About */
.about-page{text-align:center;}
.about-intro{font-size:1.1rem;line-height:1.6;color:rgba(255,255,255,0.8);margin-bottom:40px;}

/* Responsive */
@media (max-width: 768px){
.hero-modern{flex-direction:column;text-align:center;}
.hero-photo img{width:250px;}
.day-photos{grid-template-columns:1fr 1fr;}
.cert-footer{flex-direction:column;gap:30px;margin-top:30px;}
}
`;

export default App;
