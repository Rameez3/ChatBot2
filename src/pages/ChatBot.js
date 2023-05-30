import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../components/HomeComponents/NavBar";
import ChatWindow from "../components/ChatComponents/ChatWindow";
function ChatBot() {
    return(
        <Container fluid className="p-0">
            <NavBar />
            <ChatWindow />
        </Container>
    )
};

export default ChatBot;