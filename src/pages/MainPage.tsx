import React from "react";
import styled from "@emotion/styled/macro";

import { CoinList } from "../components/CoinList";

const Container = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0;
  color: #d34f49;
  font-weight: bold;
`;

const MainPage: React.FC = () => {
  return (
    <Container>
      <Title>Upbit List</Title>
      <CoinList />
    </Container>
  );
};

export default MainPage;
