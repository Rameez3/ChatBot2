import React, { Container } from "react";
import IndexButtons from "../components/IndexButtons";
import NavBar from "../components/NavBar";
import AxiosTest from "../components/AxiosTest";

function Home() {
    return (
    <Container fluid>
      <NavBar />
      <h1 className="title"><marquee>Riverside Chat App</marquee></h1>
      <IndexButtons />
      <AxiosTest />
    </Container>
    )
}

export default Home;    