import { useEffect, useState } from 'react';
import { useNavigate, Outlet, Link, Route, Routes, useLocation, useParams, useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinInfo, fetchCoinTickets } from './api';
import Chart from './Chart';
import Price from './Price';
import { useQuery } from '@tanstack/react-query';

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  a {
    display: block;
  }
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;

const Loader = styled.span`
  text-align: center;
  font-size: 30px;
  display: block;
`;

interface ITag {
  coin_counter: number;
  ico_counter: number;
  id: string;
  name: string;
}

interface InfoDatas {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  string: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface priceDatas {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface IPriceData {}

export default function Coin() {
  const navigate = useNavigate();

  const { coinId } = useParams();
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<priceData>();
  const location = useLocation();
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');
  console.log('___', priceMatch);
  // (async () => {
  //   const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //   const json = await response.json();
  //   setCoins(json.slice(0, 100));
  //   setLoading(false);
  // })();

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();

  //     const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();

  //     setInfo(infoData);
  //     setPriceInfo(priceData);

  //     setLoading(false);
  //   })();
  // }, [coinId]);

  const { data: InfoData, isLoading: infoLoading, error: infoError } = useQuery<InfoDatas>(['info', coinId], () => fetchCoinInfo(`${coinId}`));
  const { data: TicketData, isLoading: ticketLoading, error: ticketError } = useQuery<priceDatas>(['ticket', coinId], () => fetchCoinTickets(`${coinId}`));

  // const loading = infoLoading || ticketLoading;
  return (
    <Container>
      <button onClick={() => navigate(-1)}></button>
      <Header>
        <Title>
          {/* {location?.state || 'Loading'}  */}
          코인
        </Title>
      </Header>
      {/* {loading === true ? <Loader>Loading...</Loader> : priceInfo?.quotes.USD} */}
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{InfoData?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>{InfoData?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Open Source:</span>
          <span>{InfoData?.open_source ? 'Yes' : 'No'}</span>
        </OverviewItem>
      </Overview>
      <Description>{InfoData?.description}</Description>
      <Overview>
        <OverviewItem>
          <span>Total Suply:</span>
          <span>{TicketData?.total_supply}</span>
        </OverviewItem>
        <Overview>
          <span>Max Supply:</span>
          <span>{TicketData?.max_supply}</span>
        </Overview>
      </Overview>

      <Tabs>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${InfoData}/price`}>Price</Link>
        </Tab>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${InfoData}/chart`}>Chart</Link>
        </Tab>
      </Tabs>

      <Outlet />
    </Container>
  );
}
