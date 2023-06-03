import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../components/HomeComponents/NavBar";
import PurpleButton from "../components/HomeComponents/PurpleButton";
import ChatWindow from "../components/ChatComponents/ChatWindow";

function ChatBot() {
    return (
        <Container fluid className="p-0">
            <NavBar />
            <ChatWindow />

            <footer className="mt-5 d-flex justify-content-between">
                <PurpleButton link="/" title="< Home"></PurpleButton>
                <div className="ml-auto">
                    <PurpleButton link="#" title="Professional Help >" style={{ marginRight: '10px' }}></PurpleButton>
                    <PurpleButton link="#" title="Talk with a Friend >"></PurpleButton>
                </div>
            </footer>
        </Container>
    )
};

export default ChatBot;