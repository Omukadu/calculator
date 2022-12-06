
import { useState } from 'react';
import './App.css';

function App() {
  const[result,setresult] =useState("")

  const clickhandler=(event)=>{
    setresult(result.concat(event.target.value))
  }
  const clear=()=>{
    setresult("")
  }
  const answer=()=>{
    setresult(eval(result))
    
  }
  return (
    <div className="calc">

     <input type="text" placeholder='0' id='answer' value={result} />
     <input type="button" value="9" className='button' onClick={clickhandler}/>
     <input type="button" value="8" className='button' onClick={clickhandler}/>
     <input type="button" value="7" className='button' onClick={clickhandler}/>
     <input type="button" value="*" className='button'onClick={clickhandler}/>
     <input type="button" value="6" className='button'onClick={clickhandler}/>
     <input type="button" value="5" className='button'onClick={clickhandler}/>
     <input type="button" value="4" className='button'onClick={clickhandler}/>
     <input type="button" value="-" className='button'onClick={clickhandler}/>
     <input type="button" value="3" className='button'onClick={clickhandler}/>
     <input type="button" value="2" className='button'onClick={clickhandler}/>
     <input type="button" value="1" className='button'onClick={clickhandler}/>
     <input type="button" value="+" className='button'onClick={clickhandler}/>
     <input type="button" value="0" className='button'onClick={clickhandler}/>
     <input type="button" value="." className='button'onClick={clickhandler}/>
     <input type="button" value="/" className='button'onClick={clickhandler}/>
     <input type="button" value="%" className='button'onClick={clickhandler}/>
     <input type="button" value="Clear" className='button button1' onClick={clear}/>
     <input type="button" value="=" className='button button1' onClick={answer}/>

     
    </div>
  );
}

export default App;