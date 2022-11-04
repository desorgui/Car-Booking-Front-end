import React from 'react';

const PopupSuccess = ({ message, closePopup }) => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block mx-auto mb-6">
            <svg width="54" height="54" viewbox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.9999 0.333374C12.3066 0.333374 0.333252 12.3067 0.333252 27C0.333252 41.6934 12.3066 53.6667 26.9999 53.6667C41.6933 53.6667 53.6666 41.6934 53.6666 27C53.6666 12.3067 41.6933 0.333374 26.9999 0.333374ZM39.7466 20.8667L24.6266 35.9867C24.2532 36.36 23.7466 36.5734 23.2133 36.5734C22.6799 36.5734 22.1733 36.36 21.7999 35.9867L14.2533 28.44C13.4799 27.6667 13.4799 26.3867 14.2533 25.6134C15.0266 24.84 16.3066 24.84 17.0799 25.6134L23.2133 31.7467L36.9199 18.04C37.6933 17.2667 38.9733 17.2667 39.7466 18.04C40.5199 18.8134 40.5199 20.0667 39.7466 20.8667Z" fill="#AFFF0F"></path>
            </svg>
          </span>
          <span className="block mb-1 text-sm font-bold text-indigo-500">SUCCESS</span>
          <h3 className="text-2xl font-black mb-5">Your order has been placed</h3>
          <p className="text-lg font-bold mb-12">Build a well-presented brand that everyone will love. Take care to develop resources continually and integrity them with previous projects.</p>
          <a className="group relative inline-block h-12 w-full xs:w-60 bg-blueGray-900 rounded-md" href="#">
            <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div className="flex h-full w-full items-center justify-center bg-green-600 border-2 border-black rounded-md">
                <span className="text-base font-black text-black">Continue Shopping</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
);
};

export default PopupSuccess;