import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import jeep1 from "../images/jeep1.png";

const Vehicle = ({ vehicle }) => {
  const [bgColor, setBgColor] = useState({});

  const { name, description, image, color } = vehicle;

  // useEffect(() => {
  //   setBgColor(color);
  // }, [color]);

  // setBgColor(color)
  // const colora = '#ff0000'
  return (  
      <div className="w-full h-fit max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10 relative p-1">
            <div className="bg-opacity-20 rounded-full w-52 h-28" style={{backgroundColor: `${bgColor}`}}>
              <img className="mb-3 w-52 h-28" src={jeep1} alt="Jeep" />
            </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <p className="text-center text-xs line-clamp-2">
                  {description}
                </p>
              </div>
              <div className="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0 mt-4">
                <a className="hover:cursor-pointer hover:text-blue-500" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="hover:cursor-pointer hover:text-blue-500" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a className="hover:cursor-pointer hover:text-blue-500" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
          </div>
      </div>
  );
}

export default Vehicle;