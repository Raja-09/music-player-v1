import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Search from './Components/Search';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Route>


    </Routes>

  );
}

export default App;
