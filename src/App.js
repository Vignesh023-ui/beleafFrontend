import "./App.css";
import image from "./assets/Image.png";
import vector from "./assets/Vector.png";
import vector1 from "./assets/Vector (1).png";
import vector2 from "./assets/Vector (2).png";

import IconicsLanding from "../src/contact.js"

import group2 from "./assets/Group 2.png";
import team from "./assets/Team Image.png";
import team1 from "./assets/HdryNw7v0khXLetmF5nsRgVkXI.jpg.png";
import team2 from "./assets/ugszmCAG6AaHT8uMJ1iIFZPP3aU.jpg.png";
import image1 from "./assets/Image (1).png";

import logo from "./assets/Group 3.png";

import container from "./assets/Container.png"
import container1 from "./assets/Container (1).png"
import container2 from "./assets/Container (2).png"
import container3 from "./assets/Container (3).png"


export default function IconicLanding() {
  return (
    <div className="page">
      <div className="page2">

        <header className="navbar">
          <div className="logo"><img src={logo}/></div>

          <nav className="menu">
            <a>Home</a>
            <a>About</a>
            <a>Features</a>
            <a>Roadmap</a>
            <a>FAQ</a>
            <a>Insights</a>
          </nav>

          <button className="btn primary">Try it now</button>
        </header>

        <section className="hero">
          <div className="hero-text">
            <p className="tag">A NEW SMART BLOCK CHAIN</p>

            <h1>
              Investing in <br />
              thing backed <br />
              by products
            </h1>

            <div className="hero-buttons">
              <button className="btn primary">Whitepaper</button>
              <button className="btn outline">Purchase Token</button>
            </div>
          </div>

    


          <div className="hero-image">
            <img
              src={image}
              alt="3D Token"
            />
          </div>
        
        </section>
</div>

        <section className="sales">
          <div className="sales-card">
            <h3>Token sales progress</h3>

            <div className="sale-row">
              <span>Total coin</span>
              <span>3,000,000</span>
            </div>

            <div className="sale-row">
              <span>Raised</span>
              <span>173,500</span>
            </div>

            <div className="sale-row small">
              <span>Soft cap</span>
              <span>120,000</span>
            </div>

            <div className="sale-row small">
              <span>Hard cap</span>
              <span>2,500,000</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div className="timer">48 : 15 : 57 : 30</div>

            <button className="btn primary full">
              Register & Buy Token
            </button>
          </div>


          <div className="sales-card">
            <h3>Sales information</h3>

            <div className="sale-row">
              <span>Public sale start</span>
              <span>January 01, 2025</span>
            </div>

            <div className="sale-row">
              <span>Sales end</span>
              <span>December 30, 2026</span>
            </div>

            <div className="sale-row">
              <span>Total supply</span>
              <span>4,000,000</span>
            </div>

            <div className="sale-row">
              <span>Accepted</span>
              <span className="highlight">ETH, BTC, USDT</span>
            </div>
          </div>

        </section>
        
        <section className="core-features">
          <p className="tag center">WHY CHOOSE US</p>
          <h2>Core features of Iconic</h2>

          <div className="feature-cards">
            <div className="feature-box">
              <img src={vector} alt="3D pic" />
              <h4>Lower transaction fee</h4>
              <p>
                A decentralized all-in-one platform accessible to consumers & brands
                with lower transaction fees & operational costs.
              </p>
            </div>

            <div className="feature-box">
              <img src={vector1} />
              <h4>C2C transactions</h4>
              <p>
                C2C transactions involve direct exchanges of goods or services between
                consumers, usually via online platforms.
              </p>
            </div>

            <div className="feature-box">
              <img src={vector2} />
              <h4>Secure & flexibility</h4>
              <p>
                Our site provides secure encryption and flexible, customizable options
                for a safe, personalized experience.
              </p>
            </div>
          </div>
        </section>

        <section className="brands">
          <p>SUPPORTED BY GLOBAL BRANDS</p>
          <div className="brand-logos">
            <span>Logopipsum</span>
            <span>Logopipsum</span>
            <span>LOGO IPSUM</span>
            <span>Logopipsum</span>
            <span>Logopipsum</span>
          </div>
        </section>


        <section className="roadmap">
          <div className="roadmap-left">
            <span className="roadmap-tag">ROADMAP</span>
            <h2>
              Timeline about details <br />
              funding & development <br />
              goals.
            </h2>

            <img
              src={group2}
              alt="3D Core"
            />
          </div>

          <div className="roadmap-right">
            <div className="timeline">
              <div className="event">
                <span>JANUARY 01, 2025</span>
                <p>Creation of the idea of iconic project</p>
              </div>

              <div className="event">
                <span>JANUARY 21, 2025</span>
                <p>Start of ICO project worldwide</p>
              </div>

              <div className="event">
                <span>JANUARY 21, 2025</span>
                <p>Launch of the tutorial and resource</p>
              </div>

              <div className="event">
                <span>JANUARY 21, 2025</span>
                <p>Launch of iconic mobile version (iOS)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Meet with our avengers</h2>

          <div className="team-grid">

            <div className="team-card">
              <img
                src={team}
                alt="Founder"
              />
              <span className="role">FOUNDER</span>
              <h4>Javier C. Emerson</h4>
              <div className="socials">
                <span>●</span>
                <span>●</span>
              </div>
            </div>

            <div className="team-card">
              <img
                src={team1}
                alt="CEO"
              />
              <span className="role">CEO</span>
              <h4>Diego H. Redmond</h4>
              <div className="socials">
                <span>●</span>
                <span>●</span>
              </div>
            </div>

            <div className="team-card">
              <img
                src={team2}
                alt="Advisor"
              />
              <span className="role">HEAD ADVISOR</span>
              <h4>Julian T. Beaumont</h4>
              <div className="socials">
                <span>●</span>
                <span>●</span>
              </div>
            </div>

          </div>
        </section>

        <section className="allocation">
          <div className="allocation-top">
            <div className="allocation-img">
              <img
                src={image1}
                alt="3D Object"
              />
            </div>

            <div className="allocation-info">
              <span className="tag">SUMMARY OF ICO</span>
              <h2>Token allocation summary</h2>

              <div className="alloc-row">
                <span>Token Offer</span>
                <span className="blue">46,000,000</span>
              </div>
              <div className="line"><span style={{ width: "60%" }}></span></div>

              <div className="alloc-row">
                <span>UTO Bounties</span>
                <span className="blue">11,500,000</span>
              </div>
              <div className="line"><span style={{ width: "35%" }}></span></div>

              <div className="alloc-row">
                <span>UTO Community Reserve</span>
                <span className="blue">423,000,000</span>
              </div>
              <div className="line"><span style={{ width: "80%" }}></span></div>

              <div className="alloc-row">
                <span>UTO Community Building</span>
                <span className="blue">23,000,000</span>
              </div>
              <div className="line"><span style={{ width: "40%" }}></span></div>
            </div>
          </div>

          <div className="bonus">
            <div className="bonus-card">
              <span>PRE-SALES</span>
              <h3>25%</h3>
              <p>EARLY-BONUS</p>
            </div>

            <div className="bonus-card">
              <span>ICO SALES-WEEK 1</span>
              <h3>15%</h3>
              <p>EARLY-BONUS</p>
            </div>

            <div className="bonus-card">
              <span>ICO SALES-WEEK 2</span>
              <h3>1%</h3>
              <p>EARLY-BONUS</p>
            </div>
          </div>

          <button className="btn primary center-btn">
            Purchase now
          </button>
        </section>

        <section className="platform-faq">
          <div className="platform">
            <span className="tag">AVAILABLE PLATFORM</span>
            <h2>Our Iconic is available in multi-device</h2>
            <p>
              Try it now for free on iOS, Android, PC, Web – whatever your
              flavor, we've got you covered.
            </p>

            <div className="platform-icons">
              <span><img src={container} height="40px" width="40px"></img></span>
              <span><img src={container1} height="40px" width="40px"></img></span>
              <span><img src={container2} height="40px" width="40px"></img></span>
              <span><img src={container3} height="40px" width="40px"></img></span>
            </div>
          </div>

          <div className="faq">
            <div className="faq-item active">
              <h4>How does blockchain ensure transaction security?</h4>
              <p>
                Once a transaction is recorded in a block and added to the
                blockchain, it cannot be altered without consensus.
              </p>
            </div>

            <div className="faq-item">
              <h4>How do you store cryptocurrencies securely?</h4>
            </div>

            <div className="faq-item">
              <h4>How does blockchain ensure transaction security?</h4>
            </div>

            <div className="faq-item">
              <h4>How does blockchain ensure transaction security?</h4>
            </div>
          </div>
        </section>

        <IconicsLanding />

        {/* <section className="contact">
        <div className="contact-3d left">
          <img src={image2} alt="PICS" />
        </div>
        <div className="contact-3d right">
          <img src={image3} alt="PICS" />
        </div>

        <div className="contact-box">
          <span className="tag center">GET IN TOUCH</span>
          <h2>Ask anything from anywhere!</h2>

          <form className="contact-form">
            <div className="row">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="E.g. Jhon" />
              </div>

              <div className="field">
                <label>Email address</label>
                <input type="email" placeholder="info@" />
              </div>
            </div>

            <div className="field full">
              <label>Message</label>
              <textarea placeholder="Let us know"></textarea>
            </div>

            <button className="submit-btn">
              <img src={vector3} height="15px" /> SUBMIT
            </button>
          </form>
        </div>
      </section> */}




      </div>

      );
}