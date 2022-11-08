import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jeep3 from '../../images/jeep3.png';

const deleteVehicle = (id) => {
  const user = JSON.parse(localStorage.getItem('user'));
  fetch(`http://localhost:3000/api/v1/vehicles/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      Authorization: user.token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};


const DeleteVehicles = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);

  return (
  <section className="bg-white dark:bg-gray-900 w-full">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-2 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Delete Vehicles</h2>
      </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {vehicles.map((vehicle) => (
          <div class=" bg-gray-100 flex items-center">
            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <img class="rounded-xl" src={jeep3} alt="" />
              <div class="flex justify-between items-center">
                <div>
                  <h1 class="mt-5 text-2xl font-semibold">{vehicle.model}</h1>
                  <p class="mt-2">{vehicle.name}</p>
                </div>
                <div>
                  <button onClick={() => dispatch(deleteVehicle(vehicle.id))} class="text-white text-md font-semibold bg-red-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Delete</button>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
    </div>
  </section>
  );
};

export default DeleteVehicles;