import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import AddButtonSection from "./components/Section/AddButtonSection";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Inner>
          <Container>
            <AddButtonSection />
            <section></section>
          </Container>
        </Inner>
      </main>
    </>
  );
}

export default App;

const Inner = styled.div`
  margin: 0 auto;
  width: 700px;
`;

const Container = styled.div`
  display: flex;
`;
