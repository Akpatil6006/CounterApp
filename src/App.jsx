import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const incrementValue = () => {
    //1.first approch
    /*
    counter = counter + 1;
    setCounter(counter);
    */
    //2.Second approch
    /*
    setCounter(counter + 1);
    */
    //3.Third approch if we have to increment and decrement in particular interval
    counter = counter + 1;
    if (counter > 20) {
      alert("Limit exist");
    } else {
      setCounter(counter);
    }
  };
  const decrementValue = () => {
    //1.first approch
    /*
    counter = counter - 1;
    setCounter(counter);
    */

    //2.second approch
    /*
    setCounter(counter - 1);
    */

    //3.Third approch if we have to increment and decrement in particular interval
    counter = counter - 1;
    if (counter < 0) {
      alert("Limit exist");
    } else {
      setCounter(counter);
    }
  };
  return (
    <>
      <div className="counterApp">
        <h1>Counter App</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={incrementValue}>Increment</button>
        <button onClick={decrementValue}>Decrement</button>
      </div>
    </>
  );
}

export default App;
