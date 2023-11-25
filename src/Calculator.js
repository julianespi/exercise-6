import { useState } from 'react';


// function CalcButton({value, onButtonClicked}){
//   return (<button 
//     data-value = {value} 
//     onClick={onButtonClicked}
//     >
//       {value}
//     </button>);
// }
// function OpButton({value, onButtonClicked}){
//   return (<button 
//     data-value = {value} 
//     class = "operation" 
//      onClick={onButtonClicked}
//     >
//       {value}
//     </button>);
// }
// function ClearButton({value, onButtonClicked}){
//   return (<button 
//     data-value = {value} 
//     class = "clear" 
//     onClick={onButtonClicked}
//     >C
//     </button>);
// }



export default function Calculator(){
  const [value, setValue] = useState(null)

  function ButtonClicked(e){
    if(value == null){
    setValue(e.target.innerHTML)}
    else {
    setValue(value + e.target.innerHTML)}
  }

  function Clear()
  {
    setValue("")
  }

  function Solve()
  {
    setValue(eval(value))
  }
    return (
      <>
      <div className = "container">
        <>
          <input type = "text" className = "display" Value="0" value={value} />
        
        </> 
          <div class = "buttons">
            <>
                <button onClick={ButtonClicked}>7</button>
                <button onClick={ButtonClicked}>8</button>
                <button onClick={ButtonClicked}>9</button>
                <button onClick={ButtonClicked} class = "operation">+</button>

                <button onClick={ButtonClicked}>4</button>
                <button onClick={ButtonClicked}>5</button>
                <button onClick={ButtonClicked}>6</button>
                <button onClick={ButtonClicked} class = "operation">-</button>

                <button onClick={ButtonClicked}>1</button>
                <button onClick={ButtonClicked}>2</button>
                <button onClick={ButtonClicked}>3</button>
                <button onClick={ButtonClicked} class = "operation">*</button>

                <button onClick={Clear} class = "clear">C</button>
                <button onClick={ButtonClicked} >0</button>
                <button onClick={Solve} class = "operation">=</button>
                <button onClick={ButtonClicked} class = "operation">/</button>
            </>
            </div>
               
           
        

      </div>
      </>
    );
  }