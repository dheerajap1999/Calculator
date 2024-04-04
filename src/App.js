import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  

  function handleChange(value) {
      if (value === "=") {
        // Calculate the result based on the previous value, current value, and operator
        let result;
        switch (previousValue.slice(-1)) {
          case '+':
            result = parseFloat(previousValue) + parseFloat(number);
            break;
          case '-':
            result = parseFloat(previousValue) - parseFloat(number);
            break;
          case '*':
            result = parseFloat(previousValue) * parseFloat(number);
            break;
          case '/':
            result = parseFloat(previousValue) / parseFloat(number);
            break;
          default:
            result = parseFloat(number);
        }
        setNumber(result.toString());
        setPreviousValue('');
      } else if (['+', '-', '*', '/','%'].includes(value)) {
        // If the clicked button is an operand, update the previous value
        if (previousValue === '') {
          // If previousValue is empty, set it to the current number and operand
          setPreviousValue(number + ' ' + value);
          setNumber('');
        } else {
          // If previousValue is not empty, append the operand to it
          setPreviousValue(previousValue + ' ' + number + ' ' + value);
          setNumber('');
        }
      } else if (value === "Clear") {
        // If the clicked button is "C", clear the current number
        setNumber('');
      } else {
        // For numeric values and ".", append them to the current number
        setNumber(number + value);
      }
    
  }


  return (
    <>
      <h1 className='text-center'>Calculator</h1>
      <div className="container d-flex justify-content-center">
        <div className='card shadow w-50'>
          <div className="row row-cols-4">
            <div className='col-12 border border-2 p-0 border-dark'>
              <label className='w-100 text-end fw-bold bg-light'>{previousValue && number ? `${previousValue} ${number}` : number}</label>
            </div>
            <div className="col-9 btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange("Clear")} >Clear</div>
            <div className="col btn btn-warning border border-1 fw-bold text-center border-dark" onClick={()=>handleChange("/")}>/</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(7)}>7</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(8)}>8</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(9)}>9</div>
            <div className="col btn btn-warning border border-1 fw-bold text-center border-dark" onClick={()=>handleChange("*")}>*</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(4)}>4</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(5)}>5</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(6)}>6</div>
            <div className="col btn btn-warning border border-1 fw-bold text-center border-dark" onClick={()=>handleChange("-")}>-</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(1)}>1</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(2)}>2</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(3)}>3</div>
            <div className="col btn btn-warning border border-1 fw-bold text-center border-dark" onClick={()=>handleChange("+")}>+</div>
            <div className="col-6 btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(0)}>0</div>
            <div className="col btn btn-info border border-1 fw-bold text-center border-dark" onClick={()=>handleChange(".")}>.</div>
            <div className="col btn btn-warning border border-1 fw-bold text-center border-dark" onClick={()=>handleChange("=")}>=</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
