import React, { useState, useEffect } from "react";
import Quote from "../quote/Quote";


const Main = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://strangerthings-quotes.vercel.app/api/quotes/50")
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.log(error));
  }, []);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
  };

  const previousQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
  };

  return (
    <div className="container">
      <div id="quoteCarousel" className="carousel slide" >
        <div className="carousel-inner">
          {quotes.map((quote, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
              <Quote author={quote.author} text={quote.quote} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#quoteCarousel" data-bs-slide="prev" onClick={previousQuote}>
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#quoteCarousel" data-bs-slide="next" onClick={nextQuote}>
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Main;

