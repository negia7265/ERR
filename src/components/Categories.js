import React from "react";
import styled from "styled-components";
import { categories } from "./data";
import Categoryitem from "./Categoryitem";
export default function Categories() {
  const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
  `;
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <Categoryitem item={item} />
        ))}
      </Container>
    </div>
  );
}
