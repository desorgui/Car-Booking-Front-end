import React from "react";
import jeep1 from "../images/jeep1.png";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const ShowVehicle = () => {

  const { id } = useParams();
	 const vehicle = useSelector((state) => state.vehicles.find((vehicle) => JSON.stringify(vehicle.id) === JSON.stringify(id)));

  return (
   <>
		<div  className="container mx-auto font-kumbh text-base">

			<main  className="w-full flex flex-col lg:flex-row">
				<section className="h-fit flex-col grow gap-8 mt-16 sm:flex sm:flex-row sm:gap-4 sm:h-full sm:mt-24 sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0 lg:mt-24">
					<picture className="relative flex items-center bg-orange sm:bg-transparent">
            <img
							src={jeep1}
							alt="sneaker" className="block sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer" id="hero"
						/>
					</picture>
				</section>
				<section className="w-full lg:w-1/4 p-6 lg:mt-24 lg:py-10 2xl:mt-40">
          <h1 className="text-very-dark mb-4 font-bold text-3xl lg:text-4xl">
						{vehicle.name}
					</h1>
          <p className="text-orange mb-2 text-xs">
						A $5000.00 Deposit is required to reserve this vehicle
					</p>
				  <div>            
            <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              <li className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4"> 
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Finance Fee
                        </p> 
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                  </div>
              </li>
              <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4"> 
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Month Fee
                        </p> 
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                  </div>
              </li>
              <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4"> 
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Day Fee
                        </p> 
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                  </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Total Fee
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                  </div>
              </li>
            </ul>
          </div>

					<div
						 className="flex items-center justify-between mb-6 sm:flex-col sm:items-start"
					>
						<div  className="flex items-center gap-4">
							<h3  className="text-very-dark font-bold text-3xl inline-block" >
								$125.00
							</h3>
							<span  className="inline-block h-fit py-0.5 px-2 font-bold bg-pale-orange text-orange rounded-lg text-sm"
								>50%</span >
						</div>
						<p className="text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto"
						>
							$250.00
						</p>
					</div>

					<div  className="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reserve</button>
					</div>
				</section>
			</main>
		</div>
  </>
  );
}

export default ShowVehicle;