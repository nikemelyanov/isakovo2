import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';

import ClipLoader from 'react-spinners/ClipLoader';

import PreLoad from './components/PreLoad';
import Header from './components/Header';
import ModalMenu from './components/ModalMenu';

import Home from './pages/Home';
import Description_classic from './pages/Description_classic';
import Plans from './pages/Plans';
import Isakovo from './pages/Isakovo';
import Maps from './pages/Maps';

import AppContext from './context';

function App() {
  const [menuOpened, setMenuOpened] = React.useState(false);

  // Preload
  const [loading, setLoading] = React.useState(true);

  const override: CSSProperties = {
    display: 'block',
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  //

  // Preload 2
  const [loading2, setLoading2] = React.useState(true);

  React.useEffect(() => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  }, []);
  //

  // Route scroll
  let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  //

  const onClickMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <AppContext.Provider value={{}}>
      <>
        {loading ? (
          <ClipLoader
            color={'#03A50E'}
            loading={loading}
            size={150}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            {loading2 && <PreLoad />}
            <Header onClickMenu={() => onClickMenu} />
            <ModalMenu opened={menuOpened} onClickMenu={() => onClickMenu} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/description_classic" element={<Description_classic />} />
              <Route path="/description_classic" element={<Description_classic />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/isakovo" element={<Isakovo />} />
              <Route path="/maps" element={<Maps />} />
            </Routes>
          </>
        )}
      </>
    </AppContext.Provider>
  );
}

export default App;
