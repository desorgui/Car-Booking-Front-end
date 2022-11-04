import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import ShowVehicle from './components/ShowVehicle';
import { getVehicles } from './redux/vehicles/vehicles';
import { getReservations } from './redux/reservations/reservations';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import PopupSuccess from './components/PopupSuccess';
import AddVehicles from './components/AddVehicles';
import Vehicles from './components/Vehicles';
import NewReservation from './components/NewReservation';
import MyReservations from './components/MyReservations';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => (
  <main className="flex">
    <div>
      <Sidebar />
    </div>
    <Outlet />
  </main>
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getReservations());
  }, [dispatch]);
  
  return (
    <Router>
      {/* <main className="flex">
        <div>
          <Sidebar />
        </div> */}
        <Routes>
          <Route  element={<SidebarLayout />}>
            <Route path="/new_vehicle" element={<AddVehicles />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<ShowVehicle />} />
            <Route path="/reserve" element={<NewReservation />} />
            <Route path="my_reservations" element={<MyReservations />} />
            <Route path="*" element={<h1>404</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* </main> */}
    </Router>
  );
}

export default App;
