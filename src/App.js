import './App.css';

function App() {
  const bKing = '\u265A',
    bQueen = '\u265B',
    bBishop ='\u265D',
    bKnight = '\u265E',
    bRook = '\u265C',
    bPawn = '\u265F',
    wKing = '\u2654',
    wQueen = '\u2655',
    wBishop ='\u2657',
    wKnight = '\u2658',
    wRook = '\u2656',
    wPawn = '\u2659'
  return (
    <div className="App">
      <div class="chessboard">
        <div class="white">{bRook}</div>
        <div class="black">{bKnight}</div>
        <div class="white">{bBishop}</div>
        <div class="black">{bQueen}</div>
        <div class="white">{bKing}</div>
        <div class="black">{bBishop}</div>
        <div class="white">{bKnight}</div>
        <div class="black">{bRook}</div>

        <div class="black">{bPawn}</div>
        <div class="white">{bPawn}</div>
        <div class="black">{bPawn}</div>
        <div class="white">{bPawn}</div>
        <div class="black">{bPawn}</div>
        <div class="white">{bPawn}</div>
        <div class="black">{bPawn}</div>
        <div class="white">{bPawn}</div>

        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>

        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>

        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>

        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>
        <div class="black"></div>
        <div class="white"></div>

        <div class="white">{wPawn}</div>
        <div class="black">{wPawn}</div>
        <div class="white">{wPawn}</div>
        <div class="black">{wPawn}</div>
        <div class="white">{wPawn}</div>
        <div class="black">{wPawn}</div>
        <div class="white">{wPawn}</div>
        <div class="black">{wPawn}</div>

        <div class="black">{wRook}</div>
        <div class="white">{wKnight}</div>
        <div class="black">{wBishop}</div>
        <div class="white">{wQueen}</div>
        <div class="black">{wKing}</div>
        <div class="white">{wBishop}</div>
        <div class="black">{wKnight}</div>
        <div class="white">{wRook}</div>
        </div>
    </div>
  );
}

export default App;
