import './App.css';
// import PartOne from './components/PartOne';
// import Parametrs from './components/Parametrs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Num from './pages/Num';
import Bootstrp from './pages/Bootstrp';
import Events from './pages/Events';
import Effct from './pages/Effct';

function App() {

  return (
    <div className="App">

      {/* props */}

      {/* <PartOne />

      <Parametrs name="VJ" school="ACC"/>
      <Parametrs name="VRJ" school="CC" />
      <Parametrs name="Props">
      Children Props
      <button>childrn prp</button> </Parametrs> */}


{/* routes */}


<Router>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/about" element={<About />} />
  <Route path="/cal" element={<Num />} />
  <Route path="/bootstrp" element={<Bootstrp />} />
  <Route path="/evnt" element={<Events />} />
  <Route path="/effct" element={<Effct />} />
  </Routes>
</Router>

    </div>
  );
}

export default App;
