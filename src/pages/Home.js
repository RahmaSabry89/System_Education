import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../component/Home.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

function Home (args)  {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      imageSrc: "../images/chemistry.jpg",
      title: "Chemistry",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/physics.jpg",
      title: "Physics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/computer.jpg",
      title: "Computers",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/geology.jpg",
      title: "Geology",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/biophysics.jpg",
      title: "BioPhysics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/geophysics.jpg",
      title: "GeoPhysics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/astronomy.jpg",
      title: "Astronomy",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/mathematics.png",
      title: "Mathematics",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/botany.jpg",
      title: "Botany",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/entomology.png",
      title: "Entomology",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      imageSrc: "../images/zology.jpg",
      title: "Zoology",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
  ];
  const items = [
    {
      src: "../images/كليه-العلوم.jpg",
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: '../images/2021_11_22_14_1_3_810.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
    {
      src: '../images/faculty.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt="" />
        <CarouselCaption
        />
      </CarouselItem>
    );
  });

  return (
    <div className="divrooth">
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand  fs-5" to="#">
              Faculty Of Science
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="navbar-brand badge rounded-pill btn btn-outline-black fs-5 active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Login"
                    id="login-link"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    Log in As Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/AdminLogin"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    Log in As Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/GetID"
                    className="navbar-brand badge rounded-pill btn btn-outline-black  fs-5"
                  >
                    Get ID
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <main>
 
        <h1 className="visually-hidden">Heroes examples</h1>
        <div
          className="px-4 py-5 my-5 text-center"
          style={{ position: "relative", height: "400px" }}
        >
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    
        </div>

        <div className="b-example-divider"></div>

        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">Information about Faculty</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>

        <div className="b-example-divider"></div>

        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">College departments</h1>
          <div className="slideshow">
            <div className="controls">
              <button onClick={handlePrevious}>{"<"}</button>
            </div>
            <div className="card-container">
              {cards
                .slice(currentIndex, currentIndex + 3)
                .map((card, index) => (
                  <div className="card" key={index}>
                    <img
                      src={card.imageSrc}
                      className="card-img-top "
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="controls">
              <button onClick={handleNext}>{">"}</button>
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>

        <div className="containerH col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">
                For inquiries or complaints
              </h1>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="complaint">Complaint or Inquiries</label>
                  <textarea
                    className="form-control"
                    id="complaint"
                    rows="6"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="b-example-divider"></div>
        
      </main>
      <footer className="text-muted py-5">
        <div className="container9">
          <p className="float-end mb-1">
            <a href="#top" className="btnbtn-dark">
              <img className="img" src="../images/up-arrow.png" alt=""/>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
