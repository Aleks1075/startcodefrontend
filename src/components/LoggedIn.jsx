import React, { useState, useEffect } from 'react';
import facade from '../apiFacade';

function LoggedIn({ user }) {
  const [dataFromServer, setDataFromServer] = useState('Loading...');
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const url = user.roles.split(',').includes('user') ? '/api/info/user' : '/api/info/admin';
    facade.fetchData(url).then((res) => {
      console.log(res);
      setDataFromServer(res.msg);
    });
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const fetchedData = await facade.fetchData('/api/quote');
      const quotes = fetchedData.quotes;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  return (
    <div>
      <h2>Greetings, {user.username}!</h2>
      <h3>Your role is: {user.roles}</h3>
      <button onClick={fetchRandomQuote}>Get Random Quote</button>
      {randomQuote && (
        <div>
          <h4>Random Quote:</h4>
          <p>{randomQuote}</p>
        </div>
      )}
    </div>
  );
}

export default LoggedIn;