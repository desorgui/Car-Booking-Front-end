import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './components/Sidebar';
import ShowVehicle from './components/ShowVehicle';
import { getVehicles } from './redux/vehicles/vehicles';
import { getReservations } from './redux/reservations/reservations';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  useLocation
} from "react-router-dom";
// import PopupSuccess from './components/PopupSuccess';
import AddVehicles from './components/AddVehicles';
import Vehicles from './components/Vehicles';
import NewReservation from './components/NewReservation';
import MyReservations from './components/MyReservations';
import Login from './components/Login';
import Registration from './components/Registration';

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
     return isLoggedIn ?
      (
        <Outlet />
      ) : (
        <Navigate to="/login" replace state={{ from: location }} />
      );
    }
    else {
      return <Navigate to="/login" replace state={{ from: location }} />
    }
  }
//   const isLoggedIn = user && (new Date(user.exp) < new Date());
//   console.log(new Date(user.exp));
//   return isLoggedIn ? (
//     <Outlet />
//   ) : (
//     <Navigate to="/login" replace state={{ from: location }} />
//   );
// };

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getReservations());
  }, [dispatch]);

  // if (Date.new('2021-08-01') < new Date.now()) {

  // }
  
  return (
    <Router>
        <Routes>
          <Route element={<LoggedInRoutes />}>
            <Route  element={<SidebarLayout />}>
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<ShowVehicle />} />
            <Route path="/reserve" element={<NewReservation />} />
            <Route path="my_reservations" element={<MyReservations />} />
            <Route element={<AdminRoutes />}>
              <Route path="/new_vehicle" element={<AddVehicles />} />
              <Route path="/delete_vehicles" element={<h1>Delete Vehicles</h1>} />
            </Route>
            </Route>
          </Route>
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      {/* </main> */}
    </Router>
  );
}

export default App;
