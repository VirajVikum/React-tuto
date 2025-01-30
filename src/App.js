import './App.css';
import PartOne from './components/PartOne';
import Parametrs from './components/Parametrs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Num from './pages/Num';
import Bootstrp from './pages/Bootstrp';
import Events from './pages/Events';
import Effct from './pages/Effct';
import Conditions from './pages/Conditions';
import Contxt from './pages/Contxt';
import Reducr from './pages/Reducr';
import Ref from './pages/Ref';

function App() {

  const handleOnupdate = (message, age) => {
    console.log(age);
  }

  return (
    <div className="App">

      {/* props */}

      {/* <PartOne /> */}

      <Parametrs name="VJ" school="ACC" onUpdateClicked={handleOnupdate} />

      <Parametrs name="VRJ" school='4' />
      <Parametrs name="Props">
      Children Props
      <button>childrn prp</button> </Parametrs>

<hr />

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
  <Route path="/cond" element={<Conditions />} />
  <Route path="/contxt" element={<Contxt />} />
  <Route path="/reducr" element={<Reducr />} />
  <Route path="/ref" element={<Ref />} />
  </Routes>
</Router>

    </div>
  );
}

export default App;
