import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

import ImageButton from "../../assets/send.png";
import "./chatwindow.css"

function ChatWindow() {
  const textareaRef = useRef(null);
  const [message, setMessage] = useState(""); // The message that the user will send to the bot.
  
  // Function that will disable the button if the message is empty and enable it if the message is not empty.
  const handleButtonStatus = (buttonStatus) => {
    let button = document.getElementById("send-button");
    buttonStatus ? button.disabled = true : button.disabled = false;
  }

  // The function that will change the height of the textarea as the user enters more of their message.
  // Also keeps track of the message and disables the send button if the message is empty.
  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    // Using the react state hook to keep track of the user's message.
    setMessage(textarea.value);

    // Changing the textarea height based on the user's size of their message.
    textarea.style.height = "auto"; // Reset the height to auto
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to match the content

    if (textarea.value === "") {
      //If the message is empty, disable the send button.
      handleButtonStatus(true);
    } else {
      // If the message is not empty, enable the send button.
      handleButtonStatus(false);
    }
  };

  const handleSendButton = () => {
    // Clear the textarea and reset the height.
    textareaRef.current.value = "";

    // Append the blue chat bubbble onto the conversation div.
    let conversation = document.getElementById("conversation");
    let userMessage = document.createElement("p");

    userMessage.className = "user-message";
    userMessage.textContent = message;
    conversation.appendChild(userMessage);

    // Simulate the bot's response to the user's message
    let botMessage = document.createElement("p");

    botMessage.className = "bot-message";
    botMessage.textContent = "This is the bot's response!";
    conversation.appendChild(botMessage);


  }

  return (
    <div className="chat-window">
      <h1>Riverbot</h1>
      <div className="conversation" id="conversation">
        <p className="user-message">This is the user's message!</p>
      </div>

      <Container className="send-area">
        <textarea
          ref={textareaRef}
          placeholder="Type your message..."
          className="input-box"
          cols="83"
          onChange={handleTextareaChange}
        ></textarea>
        <Button variant="primary" size="lg" id="send-button">
          <img src={ImageButton} alt="Send" height="25px" onClick={handleSendButton}/>
        </Button>
      </Container>
    </div>
  );
}

export default ChatWindow;
