import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';
import Chart from './Chart';
import Price from './Price';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/:coinId' element={<Coin />}>
          <Route path='/:coinId/chart' element={<Chart />} />
          <Route path='/:coinId/price' element={<Price />} />
        </Route>
        <Route path='/' element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
