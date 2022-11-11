import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addReservation } from '../../redux/reservations/reservations';

const NewReservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id_vehicle = new URLSearchParams(location.search).get('vehicle_id');
  const vehicles = useSelector((state) => state.vehicles);
  const [selectedOption, setSelectedOption] = useState(id_vehicle);

  const dispatch = useDispatch();

  const [city, setCity] = useState('');
  const [reservation_date, setReservation_date] = useState('');
  const [return_date, setReturn_date] = useState('');
  // const [total_fee, setTotal_fee] = useState(40);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationInfo = {
      city,
      reservation_date,
      return_date,
      total_fee: 40,
      vehicle_id: selectedOption,
    };
    dispatch(addReservation(reservationInfo));
    navigate('/my_reservations');
  };

  const dropdown = (vehicles) => (
    <select
      name="vehicle"
      className="w-full py-4 text-gray-900 placeholder-gray-300 appearance-none bg-transparent outline-none"
      id="formInput1-7"
      required
      value={selectedOption}
      onChange={(e) => setSelectedOption(e.target.value)}
    >
      <option value="">Select a vehicle</option>
      {vehicles.map((v) => (
        <option key={v.id} value={v.id}>
          Jeep -
          {v.model}
        </option>
      ))}
    </select>
  );

  return (
    <section className="py-3 w-full">
      <div className="container w-full px-4 mx-auto">
        <div className="p-8 rounded-xl">
          <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
            <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
              <h4 className="text-2xl font-bold tracking-wide text-gray-900 mb-1">Reserve a car</h4>
              <p className="text-sm text-gray-900">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="w-full sm:w-auto px-4">
              <div>
                {/* <a className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-400 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200" href="#">Cancel</a>
                <a className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200" href="#">Save</a> */}
              </div>
            </div>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
              <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-900">Selected car</span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <div className="relative block px-3 w-full text-sm font-medium border border-gray-400 hover:border-gray-300 focus-within:border-green-500 rounded-lg">
                    <span className="absolute top-1/2 right-0 mr-5 transform -translate-y-1/2">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z" fill="#3D485B" />
                      </svg>
                    </span>
                    {dropdown(vehicles)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
              <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-900">City</span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1-full px-3 mb-3 sm:mb-0">
                      <input required onChange={(e) => setCity(e.target.value)} value={city} className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-gray-300 focus:border-green-500 rounded-lg" id="formInput1-1" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
              <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-900">Reservation date</span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1-full px-3 mb-3 sm:mb-0">
                      <input required onChange={(e) => setReservation_date(e.target.value)} value={reservation_date} className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-gray-300 focus:border-green-500 rounded-lg" id="formInput1-1" type="date" placeholder="YYYY/MM/DD" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
              <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                <span className="text-sm font-medium text-gray-900">Return date</span>
              </div>
              <div className="w-full sm:w-2/3 px-4">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full sm:w-1-full px-3 mb-3 sm:mb-0">
                      <input required onChange={(e) => setReturn_date(e.target.value)} value={return_date} className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-gray-300 focus:border-green-500 rounded-lg" id="formInput1-1" type="date" placeholder="YYYY/MM/DD" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="block py-3 px-6 text-sm text-white font-medium bg-green-500 hover:bg-green-600 focus:bg-green-600 rounded-lg">Add reservation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewReservation;
