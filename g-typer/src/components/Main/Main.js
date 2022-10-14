import React, { useState } from "react";
import "./Main.css";
import randomwords from "random-words";

const Main = () => {
  const [moveSlide, setMoveSlide] = useState({
    transform: "translate(5px, 20px)",
  });
  var words = [];
  const generateWords = () => {
    for (let i = 0; i < 400; i++) {
      var word = randomwords();
      if (!words.includes(word)) {
        words.push(word);
      }
    }
  };
  generateWords();
  console.log(words);
  var totalWords = words.join(" ");
  //   console.log(totalWords);
  const handleTyping = (e) => {
    e.preventDefault();

    var value = e.target.value;
    var valueLength = value.length;
    // console.log("value", value);
    var wordByWord = totalWords.slice(0, valueLength);
    if (value === wordByWord) {
      console.log("MATCH");
    }
  };

  return (
    <div className="main-container">
      <div>
        <h2>
          Do you have what it takes to be a{" "}
          <span className="G-title ">G-Typer?</span>
        </h2>
      </div>
      <div className="card-container">
        <div className="card2 ">
          {/* <p className="totalWords">{totalWords}</p> */}
          {words.map((word) => (
            <p className="words" key={word}>
              {word}
            </p>
          ))}
        </div>
        <input className="card input" id="card" onChange={handleTyping} />
        Keep on typing
      </div>
      <div className="flex flex-row m-2 flex-wrap" id="buttonsContainer"></div>
    </div>
  );
};
export default Main;
