import React from 'react';
import { useSelector } from 'react-redux';
import Vehicle from './Vehicle';
import { Link } from 'react-router-dom';

const Vehicles = () => {
  const vehicles = useSelector((state) => state.vehicles);

  return (
  <section className="bg-white dark:bg-gray-900 w-full">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-2 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">LATEST MODELS</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Please select a Jeep Model</p>
      </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {vehicles.map((vehicle) => (
        <Link to={'/vehicles/'+vehicle.id} key={vehicle.id}>
          <Vehicle key={vehicle.id} vehicle={vehicle} />
        </Link>
      ))}
    </div>
    </div>
  </section>
  );
};

export default Vehicles;