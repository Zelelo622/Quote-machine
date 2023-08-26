import React, { useEffect, useState } from "react";
import QuoteAndAuthor from "../components/QuoteAndAuthor";
import fetchQuote from "../api/quoteApi";

const HomePage = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    fetchQuote().then((data) => setQuote(data));
  };

  return (
    <main className="main">
      <QuoteAndAuthor quote={quote} onClick={fetchRandomQuote} />
    </main>
  );
};

export default HomePage;
