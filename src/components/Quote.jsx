import React, { useEffect, useState } from 'react';
import facade from '../apiFacade.js';

const Quote = ({ user }) => {
  const [data, setData] = useState('Loading...');
  const isLoggedIn = user && user.roles;

  useEffect(() => {
    if (isLoggedIn) {
      const fetchQuote = async () => {
        try {
          const response = await fetch('http://localhost:8080/groupstartcode/api/quote');
          const quoteData = await response.json();
          const randomIndex = Math.floor(Math.random() * quoteData.quotes.length);
          setData(quoteData.quotes[randomIndex]);
        } catch (error) {
          console.error('Error fetching random quote:', error);
        }
      };

      fetchQuote();
    }
  }, [isLoggedIn, user]);

  return (
    <div>
      {isLoggedIn ? (
        <h1>{data}</h1>
      ) : (
        <p>Please login in order to see the quote page</p>
      )}
    </div>
  );
};

export default Quote;