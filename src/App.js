import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';



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
    <h1>{generateRandomUsername()}</h1>
  );
}

export default App;