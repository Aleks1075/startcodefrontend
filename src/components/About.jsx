import React, { useEffect, useState } from 'react';
import facade from '../apiFacade';

function About({ user }) {
  const [dataFromServer, setDataFromServer] = useState('Loading...');
  const isLoggedIn = user && user.roles;

  useEffect(() => {
    if (isLoggedIn) {
      const url = user.roles.split(',').includes('user') ? '/api/info/user' : '/api/qoute';
      facade.fetchData(url).then((res) => {
        console.log(res);
        setDataFromServer(res.msg);
      });
    }
  }, [isLoggedIn, user]);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>About</h1>
        </>
      ) : (
        <p>Please login in order to see the about page</p>
      )}
    </div>
  );
}

export default About;