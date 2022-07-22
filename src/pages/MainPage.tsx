import React from "react";
import styled from "@emotion/styled/macro";

import { CoinList } from "../components/CoinList";

const Container = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 40px;
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  color: #5f22bb;
  font-weight: bold;
  margin-left: 40%;
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
