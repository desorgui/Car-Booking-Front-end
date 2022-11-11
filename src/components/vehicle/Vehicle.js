import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Vehicle = ({ vehicle }) => {
  const {
    id, name, model, description, pict, color,
  } = vehicle;

  return (
    <div className="w-full h-fit max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 relative p-1">
        <div className="bg-opacity-20 rounded-full w-52 h-28" style={{ backgroundColor: `${color}` }}>
          <Link to={`/vehicles/${id}`}>
            <img className="mb-3 w-52 h-28" src={pict} alt="Jeep" />
          </Link>
        </div>
        <Link to={`/vehicles/${id}`}>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <span className="text-sm text-gray-500 dark:text-gray-400">{model}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <p className="text-center text-xs line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0 mt-4">
          <a className="hover:cursor-pointer hover:text-blue-500" aria-label="icon" href="facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a className="hover:cursor-pointer hover:text-blue-500" aria-label="icon" href="instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a className="hover:cursor-pointer hover:text-blue-500" aria-label="icon" href="twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    model: PropTypes.string,
    description: PropTypes.string,
    pict: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};
