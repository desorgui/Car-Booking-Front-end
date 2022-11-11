import React from 'react';
import cover from '../../images/cover2.jpg';

const Splash = () => {

  return (
    <section className="bg-white dark:bg-gray-900 w-full h-full" style={{background: `url(${cover})`}}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-2 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Delete Vehicles</h2>
        </div>
      </div>
    </section>
  );
};

export default Splash;