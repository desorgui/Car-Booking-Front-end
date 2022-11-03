import React from 'react';

const NewReservation = () => {
  return (
  <section className="py-3 w-full">
  <div className="container w-full px-4 mx-auto">
    <div className="p-8 rounded-xl">
      <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
          <h4 className="text-2xl font-bold tracking-wide text-gray-900 mb-1">Reserve a car</h4>
          <p className="text-sm text-gray-900">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="w-full sm:w-auto px-4">
          <div><a className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-400 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200" href="#">Cancel</a><a className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200" href="#">Save</a></div>
        </div>
      </div>
      <form action="">
      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-900">Selected car</span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <div className="relative block px-3 w-full text-sm font-medium border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                <span className="absolute top-1/2 right-0 mr-5 transform -translate-y-1/2">
                  <svg width="12" height="8" viewbox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z" fill="#3D485B"></path>
                  </svg>
                </span>
                <select className="w-full py-4 text-gray-900 placeholder-gray-300 appearance-none bg-transparent outline-none" id="formInput1-7" name="">
                  <option className="bg-gray-500" value="Wrangler">Wrangler</option>
                  <option className="bg-gray-500" value="4 X 4">4 X 4</option>
                  <option className="bg-gray-500" value="Wrangler">Wrangler</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-900">Email address</span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <input className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg" id="formInput1-3" type="text" placeholder="johndoe@gmail.com" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-900">City</span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full sm:w-1-full px-3 mb-3 sm:mb-0">
                  <input className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg" id="formInput1-1" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-900">Reservation date</span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full sm:w-1-full px-3 mb-3 sm:mb-0">
                  <input className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg" id="formInput1-1" type="date" placeholder="YYYY/MM/DD" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-gray-900">Return date</span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full sm:w-1-full px-3 mb-3 sm:mb-0">
                  <input className="block py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg" id="formInput1-1" type="date" placeholder="YYYY/MM/DD" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
          <div className="w-full sm:w-1/3 px-4 mb-5 sm:mb-0">
            <span className="block mt-2 text-sm font-medium text-gray-900">Description</span>
            <span className="text-xs text-gray-400">Lorem ipsum dolor sit amet</span>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl"><textarea className="block h-48 py-4 px-3 w-full text-sm text-gray-900 placeholder-gray-300 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus:border-green-500 rounded-lg resize-none" id="formInput1-9" type="text" placeholder="Lorem ipsum dolor sit amet"></textarea></div>
          </div>
        </div> */}
      </form>
    </div>
  </div>
</section>
)
};

export default NewReservation;