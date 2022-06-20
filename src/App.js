import './App.css';
import Homepage from './pages/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Match from './pages/Match';

function App() {
    return (  
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
          <Route exact path="/match/:matchId" element={<Match />}/>
          <Route element={<Homepage />}/>
      </Routes>
    </BrowserRouter>
      );
}

export default App;
