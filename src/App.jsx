import { useState } from 'react';
import './App.css';
import HostSetup from './components/HostSetup';
import GameBoard from './components/GameBoard';
import FinalSummary from './components/FinalSummary';
import { DEFAULT_WHEEL_CONFIG } from './utils/wheelLogic';

function App() {
  const [gameState, setGameState] = useState('setup'); // setup, playing, finished
  const [secretPhrase, setSecretPhrase] = useState('');
  const [score, setScore] = useState(0);
  const [vowelPrice, setVowelPrice] = useState(5000);
  const [bonusPerLetter, setBonusPerLetter] = useState(5000);
  const [bonusDetails, setBonusDetails] = useState(null);
  const [wheelConfig, setWheelConfig] = useState(DEFAULT_WHEEL_CONFIG);

  const startGame = (phrase, vowelPriceConfig, bonusPerLetterConfig, wheelConfigParam) => {
    setSecretPhrase(phrase.toUpperCase());
    setScore(0);
    setVowelPrice(vowelPriceConfig || 5000);
    setBonusPerLetter(bonusPerLetterConfig || 5000);
    setWheelConfig(wheelConfigParam || DEFAULT_WHEEL_CONFIG);
    setBonusDetails(null);
    setGameState('playing');
  };

  const endGame = (finalScore, bonusInfo) => {
    setScore(finalScore);
    setBonusDetails(bonusInfo);
    setGameState('finished');
  };

  const resetGame = () => {
    setGameState('setup');
    setSecretPhrase('');
    setScore(0);
    setVowelPrice(5000);
    setBonusPerLetter(5000);
    setBonusDetails(null);
    setWheelConfig(DEFAULT_WHEEL_CONFIG);
  };

  return (
    <div className="App">
      {gameState === 'setup' && <HostSetup onStart={startGame} />}
      {gameState === 'playing' && (
        <GameBoard 
          secretPhrase={secretPhrase} 
          onGameEnd={endGame}
          vowelPrice={vowelPrice}
          bonusPerLetter={bonusPerLetter}
          wheelConfig={wheelConfig}
        />
      )}
      {gameState === 'finished' && (
        <FinalSummary 
          score={score} 
          onRestart={resetGame}
          bonusDetails={bonusDetails}
        />
      )}
    </div>
  );
}

export default App;
