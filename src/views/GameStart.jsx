import React from 'react';

const GameStart = () => {
  const startGame = () => {
    // Логика начала игры
    alert('Игра началась!');
  };

  return (
    <div>
      <h1>Добро пожаловать в нашу игру!!!!</h1>
      <button onClick={startGame}>Начать игру</button>
    </div>
  );
}

export default GameStart;