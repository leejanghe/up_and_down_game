import './App.css';
import RandomNum from'./randomNum/RandomNum';

function App() {


  return (
    <div className="App">
      <h1>숫자를 맞춰 보세요!!!</h1>
      <p>1부터 30사이의 숫자</p>
      <RandomNum />
    </div>
  );
}

export default App;
