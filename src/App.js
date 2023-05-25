import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import IndexButtons from "./components/IndexButtons";
import AxiosTest from "./components/axiostest";

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
    <Container fluid>
      <NavBar />
      <h1 className="title"><marquee>Riverside Chat</marquee> </h1>
      <IndexButtons />
      <AxiosTest />
    </Container>
  );
}


export default App;