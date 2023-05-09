import { useEffect } from 'react';
import { getMovies } from '../redux/actions/movieAction';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return <div>dd</div>;
}

export default App;
