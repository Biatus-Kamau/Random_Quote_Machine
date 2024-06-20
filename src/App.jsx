import React, { useState, useEffect } from 'react';
import './App.css';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchNewQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">
        "{quote}"
      </div>
      <div id="author" className="quote-author">
        - {author}
      </div>
      <div className="buttons">
        <button id="new-quote" onClick={fetchNewQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
