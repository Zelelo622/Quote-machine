import React from "react";
import Button from "./Button";

const QuoteAndAuthor = ({quote, onClick}) => {
  return (
      <section className="quote">
        <div className="container">
          <div className="quote__inner">
            <h1 className="quote__title">Random Quotes!</h1>
            <div className="quote__wrapper">
              <p className="quote__text">{quote.quoteText}</p>
              <p className="quote__author">{!quote.quoteAuthor ? "" : "- "}{quote.quoteAuthor}</p>
            </div>
            <Button onClick={onClick} />
          </div>
        </div>
      </section>
  );
};

export default QuoteAndAuthor;
