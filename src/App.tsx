import { useState } from "react";

function App() {
  function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  function Board() {
    const [square, setSquares] = useState(Array(9).fill(null));
    const [nextIsX, setNextIsX] = useState(true);
    const [status, setStatus] = useState("");
    function Reset() {
      setSquares(Array(9).fill(null));
    }
    function handleClick(i) {
      if (calculateWinner(square)) return;
      const nextSquare = square.slice();
      if (nextSquare[i]) return;
      if (nextIsX) {
        nextSquare[i] = "X";
      } else {
        nextSquare[i] = "O";
      }
      console.log(nextSquare);
      setSquares(nextSquare);
      setNextIsX(!nextIsX);
      const winner = calculateWinner(nextSquare);

      if (winner) {
        setStatus("Winner " + winner);
        return;
      } else {
        setStatus("Next player is " + (nextIsX ? "O" : "X"));
      }
    }
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button className="dtn" onClick={Reset}>
          Reset
        </button>
      </>
    );
  }
  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(square);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(square[a], square[b], square[c]);
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        console.log("hi");
        return square[a];
      }
    }
    return false;
  }
  return (
    <>
      <Board />
    </>
  );
}

export default App;
