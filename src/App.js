import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import ChatBot from "./pages/ChatBot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function generateRandomUsername() {
  let adjectives = ["Diligent", "Cheerful", "Sunny", "Supreme", "Magnificent"];
  let nouns = ["Daisy", "Sunflower", "Platypus", "Butterfly", "Comet"];
  
  let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
  let username = randomAdjective + " " + randomNoun;
  return username;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;