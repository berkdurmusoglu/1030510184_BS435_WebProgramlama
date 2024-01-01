import React from "react";
import './app.css';
import {useState} from "react";

function App() {
  const [minNumber, setMinNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(100);
  const [randomNum, setRandomNumber] = useState();
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const startGame = () => {
    setRandomNumber(Math.floor(Math.random() * (maxNumber - minNumber) + minNumber));
    setAttempts(Math.floor(maxNumber/5+1));
    setMessage("Guess Number");
  }

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const compareNum = () => {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
      setMessage(`Lütfen ${minNumber} ile ${maxNumber} arasında bir sayı girin.`);
      return;
    }

    if (guess === randomNum) {
      setMessage(`Tebrikler! ${attempts} denemede doğru sayıyı buldunuz.`);
    } else if (guess < randomNum) {
      setMessage('Daha yüksek bir sayı deneyin.');
    } else {
      setMessage('Daha düşük bir sayı deneyin.');
    }
    setAttempts(attempts -1);

    if (attempts === 0 ){
      loseStart()
    }
  }
  const loseStart = () => {
    setMessage("Bilemediniz! Tekrar Deneyin..");
    setAttempts(10);
  }
  return (

      <div className={"hero"}>
        <h1>Guess Number</h1>
        <p>{message}</p>
        <div className={"container"}>
          <label>
            Tahmininiz ({minNumber} ile {maxNumber} arasında):
            <input type="number" value={userGuess} onChange={handleInputChange}/>
            Kalan Hak : {attempts}
          </label>
          <div className={"numContainer"}>
            <div>
              <p>Min:</p>
              <input type={"number"} value={minNumber} onChange={e => setMinNumber(e.target.value)}/>
            </div>
            <div>
              <p>Max:</p>
              <input type={"number"} value={maxNumber} onChange={e => setMaxNumber(e.target.value)}/>
            </div>
          </div>
          <button onClick={compareNum}>Tahmin Et</button>
          <button onClick={startGame}>Başla</button>
        </div>
      </div>

  )
      ;
}

export default App;