import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Spinner from 'react-bootstrap/Spinner';
import ImageButton from "../../assets/send.png";
import axios from "axios";
import "../../componentsStyling/ChatComponentsStyling/chatwindow.css";

function ChatWindow() {
  const textareaRef = useRef(null);
  const [message, setMessage] = useState(""); // The message that the user will send to the bot.
  const [isLoading, setIsLoading] = useState(false); // Flag to track API request loading state

  // Function that will disable the button if the message is empty and enable it if the message is not empty.
  const handleButtonStatus = (buttonStatus) => {
    let button = document.  getElementById("send-button");
    buttonStatus ? (button.disabled = true) : (button.disabled = false);
  };

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
      // If the message is empty, disable the send button.
      handleButtonStatus(true);
    } else {
      // If the message is not empty, enable the send button.
      handleButtonStatus(false);
    }
  };

  const handleSendButton = () => {
    // Clear the textarea and reset the height.
    textareaRef.current.value = "";
  
    // Append the blue chat bubble onto the conversation div.
    let conversation = document.getElementById("conversation");
    let userMessage = document.createElement("p");
    let botMessage = document.createElement("p");
  
    userMessage.className = "user-message";
    userMessage.textContent = message;
    conversation.appendChild(userMessage);
  
    // Show the loading spinner
    setIsLoading(true);

    // Make API request to /api/chat
    axios.post('http://localhost:3000/api/chat', message)
    .then(response => {
      if (response.status === 200) {
        // Get the bot's response from the response data
        const botResponse = response.response;
        // Print the bot's response onto the chat bubble 
        botMessage.className = "bot-message";
        botMessage.textContent = botResponse;
        conversation.appendChild(botMessage);
      } else {
        alert('Failed to retrieve bot response');
      }
    })
    .catch(error => {
      console.error('Error retrieving bot response:', error);
      alert('Failed to retrieve bot response');
    });
  };
  

  return (
    <div className="chat-window">
      <h1>Riverbot</h1>
      <div className="conversation" id="conversation"></div>

      <Container className="send-area">
        <textarea
          ref={textareaRef}
          placeholder="Type your message..."
          className="input-box"
          cols="83"
          onChange={handleTextareaChange}
        ></textarea>
        <Button
          variant="primary"
          size="lg"
          id="send-button"
          onClick={handleSendButton}
          disabled={isLoading} // Disable the button when the API request is loading
        >
          <img src={ImageButton} alt="Send" height="25px" id="send-img" />

          {isLoading && (
            <Spinner
              animation="border"
              variant="light"
              size="sm"
              id="send-spinner"
            />
          )}
        </Button>
      </Container>
    </div>
  );
}

export default ChatWindow;
