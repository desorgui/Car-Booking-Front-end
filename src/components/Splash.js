import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../images/cover2.jpg';

const Splash = () => (
  <section className="bg-white min-h-screen dark:bg-gray-900 w-full h-full flex justify-center items-center content-center before:content-[''] before:fixed before:w-full before:min-h-screen before:bg-gray-900/50 before:z-2" style={{ background: `url(${cover}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="py-8 px-4 mx-auto h-fit max-w-screen-xl lg:py-16 lg:px-6 flex justify-center content-center z-10">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 className="mb-2 text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 text-white">Begin the Adventure</h2>
        <p className="text-xl text-white mb-4">Rent a Jeep and explore the world</p>
        <Link to="/login">
          <button type="button" className="py-4 px-8 shadow-md no-underline rounded-full bg-blue-400 text-white font-sans font-semibold text-md border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-4">Log In</button>
        </Link>
        <Link to="/registration">
          <button type="button" className="py-4 px-8 shadow-md no-underline rounded-full bg-white text-gray-900 font-sans font-semibold text-md border-orange btn-primary hover:text-white hover:bg-transparent horver:border-white focus:outline-none active:shadow-none">Sign Up</button>
        </Link>
      </div>
    </div>
  </section>
);

export default Splash;
