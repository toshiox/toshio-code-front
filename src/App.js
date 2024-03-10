import './App.css';
import NavBar from './views/_layout/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
    </div>
  );
}

export default App;
