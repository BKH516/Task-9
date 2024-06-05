import { useState, useEffect } from "react";
import "./Section.css";

export default function Section() {
  const [count, setCount] = useState(0);
  const [isIncrementVisible, setIsIncrementVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("lightblue");

  useEffect(() => {
    // Show welcome message when the component mounts
    setPopupMessage("Welcome!");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  }, []);

  useEffect(() => {
    // Show pop-up and change background color when count reaches 10, 100, or 1000
    if (count === 10 || count === 100 || count === 1000) {
      setPopupMessage(`Reached ${count}!`);
      setShowPopup(true);
      setBackgroundColor(
        count === 10 ? "yellow" : count === 100 ? "green" : "red"
      );
      setTimeout(() => setShowPopup(false), 3000);
    }
  }, [count]);

  useEffect(() => {
    if (count >= 1000) {
      setIsIncrementVisible(false);
    } else if (count <= 0) {
      setIsIncrementVisible(true);
    }
  }, [count]);

  const increment = () => {
    if (count < 1000) {
      if (count < 10) {
        setCount(count + 1);
      } else if (count < 100) {
        setCount(count + 10);
      } else {
        setCount(count + 100);
      }
    }
  };

  const decrement = () => {
    if (count <= 1000 && count > 100) {
      setCount(count - 100);
    } else if (count <= 100 && count > 10) {
      setCount(count - 10);
    } else if (count <= 10 && count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="content" style={{ backgroundColor }}>
        <p>Count: {count}</p>
        {isIncrementVisible ? (
          <button onClick={increment}>Increment</button>
        ) : (
          <button onClick={decrement}>Decrement</button>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </div>
  );
}
