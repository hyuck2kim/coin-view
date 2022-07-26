import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "@emotion/styled/macro";

import axiosInstance from "../apis";

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  & + & {
    margin-top: 18px;
  }
  cursor: pointer;
`;

const Name = styled.p`
  display: flex;
  margin: 5px;
  padding: 0 0 0 12px;
  color: #374151;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

const MarketCode = styled.p`
  display: flex;
  margin: 5px;
  color: #374151;
  font-size: 16px;
  font-weight: bold;
  margin-left: 5%;
`;

interface CoinInfo {
  market: string;
  korean_name: string;
  english_name: string;
}

export const CoinList: React.FC = () => {
  const [coinList, setCoinList] = useState<any>();
  const [loading, setLoading] = useState(false);

  const getCoinInfoList = async () => {
    setLoading(true);

    const response = await axiosInstance.get("/market/all");
    setCoinList(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getCoinInfoList();
  }, []);

  return (
    <div>
      {loading ? (
        <>Loading</>
      ) : (
        <List>
          {coinList &&
            coinList.map((coin: any, idx: any) => (
              <ListItem key={idx}>
                <Name>
                  {coin.korean_name}
                  <br />({coin.english_name})
                </Name>
                <MarketCode>{coin.market}</MarketCode>
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
};
