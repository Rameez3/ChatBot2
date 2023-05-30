import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';

const chatWindowStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '80%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  messagesContainer: {
    flex: '1',
    width: '100%',
    marginBottom: '10px',
    overflowY: 'auto',
    paddingRight: '10px', // Adjust for the scrollbar
  },
  message: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    maxWidth: '80%',
  },
  userMessage: {
    background: '#2196f3',
    color: '#fff',
    alignSelf: 'flex-start',
  },
  botMessage: {
    background: '#f8f9fa',
    color: '#000',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  input: {
    marginRight: '10px',
    flex: '1',
  },
};

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newUserMessage = {
        id: new Date().getTime(),
        text: inputValue,
        isUser: true,
      };
      setMessages([...messages, newUserMessage]);
      setInputValue('');

      // Simulate bot response after 1 second
      setTimeout(() => {
        const newBotMessage = {
          id: new Date().getTime(),
          text: `Bot's reply to "${inputValue}"`,
          isUser: false,
        };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      }, 1000);
    }
  };

  return (
    <Container style={chatWindowStyles.container}>
      <div style={chatWindowStyles.messagesContainer} className="scrollbar">
        <div className="scrollbar-inner">
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                ...chatWindowStyles.message,
                ...(message.isUser ? chatWindowStyles.userMessage : chatWindowStyles.botMessage),
              }}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <Form style={chatWindowStyles.inputContainer} onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Type your message..."
          style={chatWindowStyles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="primary" onClick={sendMessage}>
          Send
        </Button>
      </Form>
    </Container>
  );
}

export default ChatWindow;
