import React from 'react';
import jeep3 from '../images/jeep3.png';
import jeep1 from '../images/jeep1.png';
import jeep2 from '../images/jeep2.png';
import Vehicle from './Vehicle';

const Vehicles = () => {
  // const vehicles = useSelector((state) => state.vehicles);
  const vehicles = [
    {
      id: 1,
      name: 'Jeep Wrangler',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      image: jeep1,
      reserved: false,
      color: 'ff0000',
    },
    {
      id: 2,
      name: 'Jeep Wrangler',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      image: jeep2,
      reserved: false,
      color: 'ff0000',
    },
    {
      id: 3,
      name: 'Jeep Wrangler',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      image: jeep3,
      reserved: false,
      color: 'ff0000',
    },
    {
      id: 4,
      name: 'Jeep Wrangler',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      image: jeep3,
      reserved: false,
      color: 'ff0000',
    },
  ];
  return (
  <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-2 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">LATEST MODELS</h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Please select a Jeep Model</p>
      </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <Vehicle key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
    </div>
  </section>
  );
};

export default Vehicles;