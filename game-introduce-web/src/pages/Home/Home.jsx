import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import GamePrev from '../../components/GamePrev/GamePrev';
import './Home.css';

const Home = () => {
  const games = [
    {
      id: 1,
      image: 'https://via.placeholder.com/200x150?text=Game+1',
      name: 'Game 1',
      description: 'An amazing game with great graphics and gameplay'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/200x150?text=Game+2',
      name: 'Game 2',
      description: 'Experience the adventure like never before'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/200x150?text=Game+3',
      name: 'Game 3',
      description: 'Challenge yourself with this exciting game'
    }
  ];

  return (
    <div className="home-root">
      <header className="home-header">
        <NavBar />
      </header>
      <main className="home-content">
        <h1>Welcome to Game Introduce</h1>
        <p>Discover amazing games</p>
        
        <div className="games-container">
          {games.map((game) => (
            <Link key={game.id} to="/game" className="game-link">
              <GamePrev 
                image={game.image}
                name={game.name}
                description={game.description}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;