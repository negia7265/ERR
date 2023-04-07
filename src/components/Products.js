import React from "react";
import styled from "styled-components";
import { popularProducts } from "./data";
import ProductItems from "./ProductItems";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products({ cat, filter, sort }) {
  return (
    <div>
      <Container>
        {popularProducts.map((item) => (
          <ProductItems item={item} />
        ))}
      </Container>
    </div>
  );
}
