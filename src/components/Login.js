import React from "react";
import styled from "styled-components";
export default function Login() {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images.pexels.com/photos/94825/pexels-photo-94825.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Wrapper = styled.div`
    width: 700px;
    padding: 20px;
    background-color: white;
    max-height: 880px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
  `;
  const Form = styled.form`
    width: 60%;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const Input = styled.input`
    flex: 1;
    padding: 15px;
    margin: 6px;
  `;

  const Button = styled.button`
    border: none;
    margin-top: 10px;
    padding: 15px 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
  `;
  const Link = styled.a`
    margin: 8px 3px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  `;

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username"></Input>

            <Input placeholder="password"></Input>

            <Button>LOG IN</Button>
            <Link>FORGOT THE PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
}
