import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <p className="title">CASIO</p>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button
          className="operator"
          style={{ backgroundColor: "#4CAF50" }}
          onClick={() => handleClick("+")}
        >
          +
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button
          className="operator"
          style={{ backgroundColor: "#FFEB3B" }}
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button
          className="operator"
          style={{ backgroundColor: "#2196F3" }}
          onClick={() => handleClick("*")}
        >
          *
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleClear}>C</button>
        <button
          className="operator"
          style={{ backgroundColor: "#607D8B" }}
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button className="operator equal" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
