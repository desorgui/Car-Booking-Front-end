import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../images/cover2.jpg';

const Splash = () => {

  return (
    <section className="bg-white min-h-screen dark:bg-gray-900 w-full h-full flex justify-center content-center before:content-[''] before:fixed before:w-full before:min-h-screen before:bg-gray-900/50 before:z-2" style={{background: `url(${cover}) no-repeat`, backgroundSize: '100% 100%'}}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex justify-center content-center z-10">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-2 text-3xl lg:text-3xl tracking-tight font-extrabold text-gray-900 text-white">Welcome Page</h2>
            <Link to="/login">
              <button className="py-4 px-8 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-md border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-4">Sign In</button>
            </Link>
            <Link to="/registration">
              <button className="py-4 px-8 shadow-md no-underline rounded-full bg-orange text-white font-sans font-semibold text-md border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none">Sign Up</button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Splash;