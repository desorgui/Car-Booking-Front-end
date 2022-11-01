import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Vehicle = ({ vehicle }) => {
  const { name, description, image, color } = vehicle;
  return (  
      <div className="w-full h-fit max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10 relative p-1">
            <div className="bg-opacity-20 rounded-full w-52 h-28" style={{background: "'#" + color + "'"}}>
              <img className="mb-3 w-52 h-28" src={image} alt="Jeep" />
            </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <p className="text-center text-xs line-clamp-2">
                  {description}
                </p>
              </div>
              <div class="flex flex-row gap-4 text-gray-800 my-auto text-2xl mx-auto md:mx-0 mt-4">
                <a class="hover:cursor-pointer hover:text-blue-500" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a class="hover:cursor-pointer hover:text-blue-500" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a class="hover:cursor-pointer hover:text-blue-500" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
          </div>
      </div>
  );
}

export default Vehicle;