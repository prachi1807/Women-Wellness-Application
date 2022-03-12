import React from "react";
import BodyCard from "./BodyCard";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #f9f9f9;
  h1 {
    font-size: 150%;
    font-weight: bold;
  }

  // media quries
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 100%;
    }
  }
`;

function HomePageBody() {
  return (
    <Container>
      <h1>Why prioritize women wellness?</h1>
      <BodyCard
        img="https://i.pinimg.com/564x/27/6d/3f/276d3ff62069923972e8c43e712be287.jpg"
        para="Women have a tendency to always put their families first. This often comes at the cost of their own health. A woman who is mentally or physically unwell finds it very difficult to cope with the expectations that society has of her. It is okay for women to put their own health first if it means potentially saving their lives."
        id={1}
      />
      <BodyCard
        img="https://image.freepik.com/free-vector/girls-is-engaged-gym-vector-illustration_65141-232.jpg"
        heading="Stay Healthy"
        para="Using this web application, women can easily keep track of their health."
        id={2}
      />
    </Container>
  );
}

export default HomePageBody;
