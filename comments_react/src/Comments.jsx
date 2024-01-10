import React, { useState } from "react";
import UseColourGenerator from "./UseColourGenerator";

export default function Comments() {
  const [input, setInput] = useState("");
  const [messages, postMessage] = useState([]);
  const { colours, generateColours } = UseColourGenerator();

  function onChange(evt) {
    checkValidation(evt.target.value);
  }

  const checkValidation = (userInput) => {
    setInput(userInput);
  };

  const handlePost = (event) => {
    event.preventDefault();
    if (input !== "") {
      let inputReplace = input.replace(/viagra|XXX/gi, "***");
      setInput(inputReplace);
      postMessage((current) => [inputReplace, ...current]);
    } else {
      return null;
    }
    setInput("");
    generateColours();
  };

  return (
    <>
      <div className="result">
        {messages.map((message, index) => {
          return (
            <p key={index} style={{ color: "#" + colours[index] }}>
              {message}
            </p>
          );
        })}
      </div>
      <form onSubmit={handlePost}>
        <label for="messages">
          <input
            onChange={onChange}
            className="messages"
            type="text"
            id="messages"
            placeholder="Введите сообщение"
            value={input}
          />
        </label>
        <button>Отправить</button>
      </form>
    </>
  );
}
