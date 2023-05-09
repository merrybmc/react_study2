import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCoins } from './api';

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

// const coins = [
//   {
//     id: 'btc-bitcoin',
//     name: 'Bitcoin',
//     symbol: 'BTC',
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: 'coin',
//   },
//   {
//     id: 'eth-ethereum',
//     name: 'Ethereum',
//     symbol: 'ETH',
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: 'coin',
//   },
//   {
//     id: 'hex-hex',
//     name: 'HEX',
//     symbol: 'HEX',
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: 'token',
//   },
// ];

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Loader = styled.span`
  text-align: center;
  font-size: 30px;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export default function Coins() {
  let navigate = useNavigate();
  const { data, isLoading } = useQuery<ICoin[]>(['allCoins'], fetchCoins);

  // console.log('___l', Coins.isLoading);
  // console.log('___d', Coins.data);

  console.log(data);
  console.log(isLoading);

  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('https://api.coinpaprika.com/v1/coins');
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {isLoading === true ? (
          <Loader>Loading...</Loader>
        ) : (
          data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin.name}>
                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                {coin.name} &rarr;{' '}
              </Link>
            </Coin>
          ))
        )}
      </CoinsList>
    </Container>
  );
}
