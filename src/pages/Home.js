import React from "react";
import Container from "react-bootstrap/Container";
import IndexButtons from "../components/IndexButtons";
import NavBar from "../components/NavBar";
import AxiosTest from "../components/axiostest";
import HomeBody from "../components/HomeBody";

function Home() {
  return (
    <>
      <Container fluid className="p-0">
        <NavBar />
        <h1 className="title"></h1>
        <IndexButtons />
        <AxiosTest />
        <HomeBody />
      </Container>
    </>
  );
}

export default Home;
