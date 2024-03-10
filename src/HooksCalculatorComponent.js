import React from 'react';

const HooksCalculatorComponent = () => {
  const [state, setState] = React.useState({
    num1: 0,
    num2: 0,
    result: 0
  });

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setState({
      ...state,
      [key]: parseInt(value)
    });
  };

  const handleOperation = (operation) => {
    const { num1, num2 } = state;
    let newResult = 0;

    switch (operation) {
      case 'add':
        newResult = num1 + num2;
        break;
      case 'subtract':
        newResult = num1 - num2;
        break;
      case 'multiply':
        newResult = num1 * num2;
        break;
      case 'divide':
        newResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        break;
    }

    setState({ ...state, result: newResult });
  };

  return (
    <>
    <h1>Hooks Calculator</h1>
      <input type="number" value={state.num1} onChange={(e) => handleInputChange(e, 'num1')} /><br />
      <input type="number" value={state.num2} onChange={(e) => handleInputChange(e, 'num2')} /><br />
      
      <button onClick={() => handleOperation('add')}>Add</button>
      <button onClick={() => handleOperation('subtract')}>Subt</button>
      <button onClick={() => handleOperation('multiply')}>Mul</button>
      <button onClick={() => handleOperation('divide')}>Div</button>

      <p>Result: {state.result}</p>
    </>
  );
};

export default HooksCalculatorComponent;