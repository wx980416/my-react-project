import React, { memo, useEffect } from 'react';
import { useState } from 'react';
import services from '@/services';

const Home = memo(() => {
  const [highScore, setHighScore] = useState({});

  useEffect(() => {
    services
      .get({
        url: '/home/highscore',
      })
      .then((res) => {
        console.log(res);
        setHighScore(res);
      });
  }, []);

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {highScore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
