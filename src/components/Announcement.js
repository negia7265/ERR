import React from "react";
import styled from "styled-components";

export default function Announcement() {
  const Container = styled.div`
    height: 50px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
  `;

  return (
    <div>
      <Container>New bestsellers in the stock!!! Hurrry Up</Container>
    </div>
  );
}
