import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './views/_layout/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/home/index'
import NotFound from './views/notFound/index';
import Footer from './views/_layout/footer';
import Loading from './views/_layout/loading';

function App() {
  const isLoading = useSelector((state) => state.Loading.isLoading);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [isLoading]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {isLoading ? <Loading /> : null}
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />

          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
