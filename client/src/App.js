// import RandomNum from'./randomNum/RandomNum';
import React,{useState} from 'react'

function App() {
const [status, setStatus] = useState(false);
const [answer, setAnswer] = useState(0);
const [righyAnswer, setRightAnser] = useState(Math.ceil(Math.random()*30));


function returnFunc(e){
  
  e.preventDefault();
  if(+answer === righyAnswer){
    console.log(answer)
    setStatus("정답입니당")
    setTimeout(function(){
      resetFunc();
    }, 2000)
    
  }else if(answer < righyAnswer){
    setStatus("업업업")
  }else{
    setStatus("다운")
  }
}

function resetFunc(){
  setRightAnser(Math.ceil(Math.random()*30))
  setStatus("정답을 맞추시오")
}






  return (
    <div className="App">
       <form onSubmit={returnFunc}>
      <h1>숫자를 맞춰 보세요!!!</h1>
      <p>{righyAnswer}</p>
      <input 
            type="number"  max="30" min="1"
            value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button>확인</button>
      <p>{status}</p>
      </form>
    </div>
  );
}

export default App;