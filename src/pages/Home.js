import React from "react";
import Container from "react-bootstrap/Container";
import IndexButtons from "../components/HomeComponents/IndexButtons";
import NavBar from "../components/HomeComponents/NavBar";
import AxiosTest from "../components/HomeComponents/axiostest";
import HomeBody from "../components/HomeComponents/HomeBody";
import Testimonials from "../components/HomeComponents/Testimonials";
import Footer from "../components/HomeComponents/Footer";

function Home() {
  return (
      <Container fluid className="p-0">
        <NavBar />
        <IndexButtons />
        {/* <AxiosTest /> */}
        <HomeBody />
        <Testimonials />
        <Footer />
      </Container>
  );
}

export default Home;
