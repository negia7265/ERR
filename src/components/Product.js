import { style } from "@mui/system";
import styled from "styled-components";
import React from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function Product() {
  const Container = styled.div``;
  const ImgContainer = styled.div`
    flex: 1;
  `;
  const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
  `;
  const Wrapper = styled.div`
    padding: 50px;
    display: flex;
  `;
  const Title = styled.h1`
    font-weight: 100;
  `;
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
  `;
  const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
  `;
  const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Filter = styled.div`
    display: flex;
    align-items: center;
  `;
  const FilterTitle = styled.h1`
    margin-right: 8px;
    margin-left: 14px;
  `;
  const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-right: 5px;
    margin-left: 8px;
    margin-top: 8px;
    cursor: pointer;
  `;
  const FilterSize = styled.select`
    height: 30px;
    margin-top: 10px;
  `;
  const AddContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  `;
  const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
  `;
  const Amount = styled.span`
    width: 20px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    border-radius: 20%;
  `;
  const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    &:hover {
      background-color: #f8f4f4;
    }
  `;
  const FilterSizeOption = styled.option``;
  return (
    <div>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src="https://www.kohinoorworld.com/wp-content/uploads/2021/11/Carrot_Pink_Kanjivaram_Silk_Saree_1.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Kanjivaram Saree</Title>
            <Desc>
              Kanjivaram saree, also known as Kanchipuram saree, is a
              traditional silk saree that originates from the town of
              Kanchipuram in the state of Tamil Nadu, India. These sarees are
              known for their exquisite and intricate designs, vibrant colors,
              and fine quality silk. Kanjivaram sarees are handwoven using pure
              mulberry silk and zari, which is a fine thread made of gold or
              silver. The process of weaving a Kanjivaram saree is intricate and
              time-consuming, and it can take several days or even weeks to
              complete one saree. The motifs and designs on a Kanjivaram saree
              are usually inspired by nature, mythology, and temple
              architecture. Kanjivaram sarees are popular among Indian women for
              weddings, festivals, and other special occasions. They are
              considered to be one of the most expensive and luxurious sarees in
              India due to their high-quality silk, intricate designs, and
              traditional craftsmanship.
            </Desc>
            <Price>$100</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="blue" />
                <FilterColor color="green" />

                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <AddIcon />
                <Amount>1</Amount>
                <RemoveIcon />
              </AmountContainer>
              <Button>Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
}
