import Stack from 'react-bootstrap/Stack';
import PurpleButton from "./PurpleButton";

function IndexButtons() {
  return (
    <>
    <Stack direction="horizontal" gap={3} className="justify-content-center d-flex mt-5">
        <PurpleButton link="#" title="Talk with RiverBot" />
        <PurpleButton link="#" title="Talk with a Friend" />
        <PurpleButton link="#" title="Find Local, Professional Help" />
    </Stack>
    </>
  );
};

export default IndexButtons;