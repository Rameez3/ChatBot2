import Stack from 'react-bootstrap/Stack';
import PurpleButton from "./PurpleButton";
import backgroundImage from '../assets/background.jpg';

function IndexButtons() {
  const bodyDivStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };

  return (
    <div style={bodyDivStyle}>
      <Stack direction="horizontal" gap={3} style={buttonContainerStyle}>
        <PurpleButton link="#" title="Talk with RiverBot" />
        <PurpleButton link="#" title="Talk with a Friend" />
        <PurpleButton link="#" title="Find Local, Professional Help" />
      </Stack>
    </div>
  );
};

export default IndexButtons;
