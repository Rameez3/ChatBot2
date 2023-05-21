import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import PurpleButton from "./components/PurpleButton";



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
    <div className="container">
      <h1 className="title">Riverside Chat</h1>
    </div>
  );
}

export default App;