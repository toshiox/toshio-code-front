import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './views/_layout/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './views/home/index'
import Footer from './views/_layout/footer';
import AboutMe from './views/aboutMe/index';
import NotFound from './views/notFound/index';
import Loading from './views/_layout/loading';
import ArticleContent from './views/articleContent/index';
import TextEditor from './views/textEditor/index';

function App() {
  const isLoading = useSelector((state) => state.Loading.isLoading);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [isLoading]);

  // useEffect(() => {
  //   if (window.location.protocol === 'http:') {
  //     window.location.href = window.location.href.replace('http:', 'https:');
  //   }
  // }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {isLoading ? <Loading /> : null}
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Navigate to="/Home" />} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />

          <Route path="/sxz" element={<TextEditor/>}/>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Article/:id?" element={<ArticleContent />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
