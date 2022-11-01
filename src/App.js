import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PopupSuccess from './components/PopupSuccess';
import AddVehicles from './components/AddVehicles';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <Router>
      <main className="flex">
        <div>
          <Sidebar />
        </div>
        <Routes>
          <Route path="/new_vehicle" element={<AddVehicles />} />
          <Route path="/success" element={<PopupSuccess />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
