import React, { useState } from "react";
import "./App.css";
import butcherPigImage from "./assets/butcherPig.jpeg";

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    "apple are great squeaky query equal"
  );
  const [inputTranslated, setInputTranslated] = useState("");

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ");
    console.log("arrayOfUserInput:", arrayOfUserInput);

    const words = userInput.split("");
    console.log("words", words);

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord);

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        );
      });
      console.log("vowelsArray:", vowelsArray);

      // // ACTION ITEM: your Pig Latin logic goes here!
          // eatgray
      // *** Words the start with a vowel ***
      if (
        eachWord[0] === "a" ||
        eachWord[0] === "e" ||
        eachWord[0] === "i" ||
        eachWord[0] === "o" ||
        eachWord[0] === "u" 
      ) 
      {
        eachWord = eachWord + "way";
    
      } else if (eachWord.includes("qu")) {
        const [start, rest] = eachWord.split("qu")
        console.log(start);
        console.log(rest)
        eachWord = rest + start + "quay";


      } else {
        const vOwels = eachWord.match(vowelsArray.map(vOwels => vOwels)) ;
        if (vOwels){
          eachWord=vOwels[2] + vOwels[1] + "ay"
       
        }
      }


        // squ.push("qu");
        // const squ2 = squ.join("") + "ay";
      
        // eachWord = squ2;
        // console.log(squ2); 

        
        // if (squ2[0] !== "q") {
        //   const zeroIndex = squ2.split("").slice(1).join("");

        //   const index = squ2[0];

        //   const qu = zeroIndex.split("quay").join(index) + "quay";

        //   console.log(qu);

        //   eachWord = qu;
        //  console.log(squ2, zeroIndex);



        // ueryqay

        // console.log(squ2.slice())

       

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord;
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ");
    console.log("translatedWords:", translatedWords);

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords);
  };

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent");
    setInputTranslated("");
  };

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault();
    myPigLatinCodeHere();
  };

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <h2>{inputTranslated}</h2>
      </div>
      <footer>&copy; 2023 | Coded by: Your Names Here!</footer>
    </div>
  );
};

export default App;
