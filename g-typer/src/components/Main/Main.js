import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Main.css";
import randomwords from "random-words";

const Main = () => {
  console.log(window.innerWidth);
  var windowWidth = window.innerWidth;
  if (windowWidth < 450) {
  }
  const [words, setWords] = useState([]);
  var errorRef = useRef(null);
  var wordsRef = useRef(null);
  const [slide, setSlide] = useState({ transform: "translate(100px)" });
  const [errorCount, setErrorCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [distance, setDistance] = useState(100);
  const [styleComponent, setStyleComponent] = useState({ display: "none" });
  const [styleReadyComponent, setStyleReadyComponent] = useState({
    display: "block",
  });

  const generateWords = () => {
    for (let i = 0; i < 400; i++) {
      var word = randomwords();
      if (!words.includes(word)) {
        words.push(word);
      }
    }
  };
  generateWords();
  //   generateWords();

  useEffect(() => {
    const errorP = errorRef;
    const rateWords = wordsRef;
    errorP.current.innerHTML = "Error Count: " + errorCount;
    rateWords.current.innerHTML = "Correct Letters:" + correctCount;
  }, [errorCount, correctCount]);

  var totalWords = words.join(" ");

  const handleTyping = (e) => {
    e.preventDefault();
    var value = e.target.value;
    var valueLength = value.length;
    var wordByWord = totalWords.slice(0, valueLength);

    if (value === wordByWord) {
      console.log("MATCH");
      console.log(wordByWord);
      console.log(value);
      setSlide({ transform: `translateX(${distance}px)` });
      setDistance(distance - 15.5);
      setCorrectCount(correctCount + 1);
    } else {
      console.log("ERROR, WRONG KEY: " + errorCount);
      setErrorCount(errorCount + 1);
    }
  };

  const handleShowComponent = (e) => {
    e.preventDefault();
    setStyleComponent({ display: "block" });
    setStyleReadyComponent({ display: "none" });
    const countDown = (i) => {
      var int = setInterval(function () {
        const bar = document.querySelector(".bar");
        console.log("hello", i);
        console.log(Math.floor((i / 120) * 100));
        i-- || clearInterval(int);

        bar.style.width = `${Math.floor((i / 120) * 100)}%`;
      }, 1000);
    };
    // 120 seconds, so 2 minutes of typing
    countDown(120);
  };
  return (
    <div className="main-container">
      <div>
        <h2>
          Do you have what it takes to be a{" "}
          <span className="G-title ">G-Typer?</span>
        </h2>
        <div className="progress">
          <div className="bar shadow floor"></div>
        </div>
      </div>
      <div className="card" style={styleReadyComponent}>
        <button className="ready-btn" onClick={handleShowComponent}>
          Ready
        </button>
      </div>
      <div className="card-container" style={styleComponent}>
        <div className="card2">
          {/* <p className="totalWords">{totalWords}</p> */}
          {words.map((word) => (
            <p className="words " style={slide} key={word}>
              <span>{word}</span>
            </p>
          ))}
        </div>
        <input className="card input" id="input" onChange={handleTyping} />
        <div className="rate-error">
          <p className="errorCount" ref={errorRef}></p>
          <p className="rate" ref={wordsRef}></p>
        </div>
        Keep on typing...
      </div>
      <div className="flex flex-row m-2 flex-wrap" id="buttonsContainer"></div>
    </div>
  );
};
export default Main;
