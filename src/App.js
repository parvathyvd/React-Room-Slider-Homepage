import "./App.css";
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";
import slider from "./slider";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <img
          className="img-fluid"
          src="./images/image-about-dark.jpg"
          alt="furniture"
        />
        <div className="about">
          <h2>About our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img
          className="img-fluid"
          src="./images/image-about-light.jpg"
          alt="furniture"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
