import React, { useEffect } from 'react';
import './App.css';
import Square from './components/Square';
const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function App() {
  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = React.useState(initialState)
  const [player, setPlayer] = React.useState("O")
  const [result, setResult] = React.useState({ winner: 'none', state: 'none' })
  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state != "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);

    }
    restart();
    
  }, [result]);
  const chooseSquare = (square) => {
    // logic  to print x or o
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        return player
      }
      else {
        return val
      }
    })
    )

  };

  const checkWin = () => {
    Patterns.forEach(currPattern => {
      let firstPlayer = board[currPattern[0]]
      if (firstPlayer == "") return;
      let foundWinningPlayer = true
      currPattern.forEach((item) => {
        if (board[item] !== firstPlayer) {
          foundWinningPlayer = false
        }
      })
      if (foundWinningPlayer) {
        setResult({ winner: firstPlayer, state: 'Win' })
      }
    })
  }
  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };
  const restart = () => {
    setBoard(initialState);
  }
  // rendered func
  return <div className="App">
    <div className="board">
      <div className="row">
        <Square val={board[0]} chooseSquare={() => chooseSquare(0)}></Square>
        <Square val={board[1]} chooseSquare={() => chooseSquare(1)}></Square>
        <Square val={board[2]} chooseSquare={() => chooseSquare(2)}></Square>
      </div>
      <div className="row">
        <Square val={board[3]} chooseSquare={() => chooseSquare(3)}></Square>
        <Square val={board[4]} chooseSquare={() => chooseSquare(4)}></Square>
        <Square val={board[5]} chooseSquare={() => chooseSquare(5)}></Square>
      </div>
      <div className="row">
        <Square val={board[6]} chooseSquare={() => chooseSquare(6)}></Square>
        <Square val={board[7]} chooseSquare={() => chooseSquare(7)}></Square>
        <Square val={board[8]} chooseSquare={() => chooseSquare(8)}></Square>
      </div>

    </div>
    <button type="button" onClick={restart} className='btn'>Restart</button>
  </div>;
}

export default App;
