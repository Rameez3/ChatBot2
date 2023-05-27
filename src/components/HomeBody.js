import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import PurpleButton from './PurpleButton';

import ChatBotIcon from '../assets/chatbotIcon.jpg';
import FriendIcon from '../assets/friendicon.jpg';
import ProfessionalIcon from '../assets/professionalicon.jpg';

function HomeBody() {
  return (
    <Container>
      <Row className="">
        <Col className="bg-white rounded d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ChatBotIcon} />
            <Card.Body>
              <Card.Title>RiverBot</Card.Title>
              <Card.Text>
              A student-centered mental health chatbot designed to emulate Rogerian and person-centered therapy. It offers empathetic listening, encourages self-reflection, and promotes personal growth. With 24/7 availability and strict confidentiality, RiverBot provides a safe space for students to express themselves and seek support without receiving direct advice.
              </Card.Text>
              <PurpleButton link="#" title="Try RiverBot" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="bg-white rounded d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={FriendIcon} />
            <Card.Body>
              <Card.Title>Talk to a Friend</Card.Title>
              <Card.Text>
              Our website's innovative feature enables users to engage in anonymous, meaningful conversations with like-minded individuals based on shared emotions. By intelligently pairing users with similar feelings, we foster connections and provide a platform for genuine friendships to blossom, all while respecting privacy and user autonomy.
              </Card.Text>
              <PurpleButton link="#" title="Try talking to a friend" />
            </Card.Body>
          </Card>
        </Col>
        <Col className="bg-white rounded d-flex justify-content-center mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ProfessionalIcon} />
            <Card.Body>
              <Card.Title>Find a Professional</Card.Title>
              <Card.Text>
              Our website's comprehensive directory feature empowers users to effortlessly discover and connect with verified professionals in their area. Gain access to essential information such as contact details, websites, and addresses, enabling seamless communication and access to the expertise you need. Simplify your search for local services and make informed decisions with confidence.
              </Card.Text>
              <PurpleButton link="#" title="Find a professional" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeBody;