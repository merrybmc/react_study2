import axios from 'axios';
const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return axios(`${BASE_URL}/coins`).then((response) => response.data);
}
export function fetchCoinInfo(coinId: string) {
  return axios(`${BASE_URL}/coins/${coinId}`).then((Response) => Response.data);
}

export function fetchCoinTickets(coinId: string) {
  return axios(`${BASE_URL}/tickets/${coinId}`).then((Response) => Response.data);
}
