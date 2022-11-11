import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom';
// import PopupSuccess from './components/PopupSuccess';
import Sidebar from './components/Sidebar';
import ShowVehicle from './components/vehicle/ShowVehicle';
import { getVehicles } from './redux/vehicles/vehicles';
import { getReservations } from './redux/reservations/reservations';
import AddVehicles from './components/vehicle/AddVehicles';
import Vehicles from './components/vehicle/Vehicles';
import DeleteVehicles from './components/vehicle/DeleteVehicles';
import NewReservation from './components/reservation/NewReservation';
import MyReservations from './components/reservation/MyReservations';
import Login from './components/Login';
import Registration from './components/Registration';
import Splash from './components/Splash';

const SidebarLayout = () => (
  <main className="flex">
    <div>
      <Sidebar />
    </div>
    <Outlet />
  </main>
);

const checkAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.role === 'admin';
};

const AdminRoutes = () => {
  const location = useLocation();
  const isAdmin = checkAdmin();
  return isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

const parseJwt = (token) => {
  try {
    return JSON.parse(window.atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

const LoggedInRoutes = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    const decodedJwt = parseJwt(user.token);
    const isLoggedIn = user && decodedJwt.exp * 1000 > Date.now();
    return isLoggedIn
      ? (
        <Outlet />
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      );
  }

  return <Navigate to="/login" replace state={{ from: location }} />;
};

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    if (token) {
      dispatch(getVehicles());
      dispatch(getReservations());
    }
  }, [dispatch, token]);

  // if (Date.new('2021-08-01') < new Date.now()) {

  // }

  return (
    <Router>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route element={<SidebarLayout />}>
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<ShowVehicle />} />
            <Route path="/reserve" element={<NewReservation />} />
            <Route path="my_reservations" element={<MyReservations />} />
            <Route element={<AdminRoutes />}>
              <Route path="/new_vehicle" element={<AddVehicles />} />
              <Route path="/delete_vehicles" element={<DeleteVehicles />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      {/* </main> */}
    </Router>
  );
}

export default App;
