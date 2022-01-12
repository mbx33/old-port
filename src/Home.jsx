import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Projects from "./Projects";
import Section from "./Section";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";

function Home() {
  return (
    <Container>
      <h1>Hello this is Home page</h1>
      {/* <Section />
      <Skills />
      <SoftSkills />
      <Projects />
      <Footer /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  /* height: 100vh; */
`;
