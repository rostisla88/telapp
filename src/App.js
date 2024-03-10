import './App.css';
import GameStart from './views/GameStart';

function App() {

  const tg =  window.Telegram.WebApp;

const onClose = () =>{
  tg.close()
}


  return (
    <div className="App">
      <span>{tg.initDataUnsafe?.user?.username}</span>
      <button onClick={onClose}>Close app</button>
      <GameStart/>
    </div>
  );
}

export default App;
