import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faListCheck, faTrashAlt, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const navigation = [
    { 
      name: 'Vehicles',
      href: '/vehicles',
      icon: faCar
    },
    {
      name: 'Reserve',
      href: '/reserve',
      icon: faCheck
    },
    {
      name: 'My Reservations',
      href: '/my_reservations',
      icon: faListCheck
    },
    {
      name: 'Add New vehicle',
      href: '/new_vehicle',
      icon: faPlus
    },
    {
      name: 'Delete vehicles',
      href: '/delete_vehicle',
      icon: faTrashAlt
    },
  ]
  return (
    <div className="h-full lg:w-60">
      <nav className="lg:hidden h-full flex items-center justify-between p-8 bg-gray-700 mb-3">
        <div className="w-full h-full xl:w-auto px-2 xl:mr-12">
          <div className="flex items-center justify-between">
            <a className="inline-flex items-center h-8" href="#">
              <img src="trizzle-assets/logos/trizzle-logo.svg" alt="" />
            </a>
            <div className="xl:hidden">
              <button className="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="currentColor"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden lg:block navbar-menu relative z-50 h-full">
        <div className="lg:hidden navbar-backdrop top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
        <nav className="relative top-0 left-0 bottom-0 w-full max-w-xxs flex flex-col h-full py-8 px-4 bg-white overflow-auto">
          <div className="mb-6">
            <a className="inline-block mb-12" href="#">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none light:text-White md:text-5xl lg:text-6xl dark:text-white">Jeep</h1>
              {/* <img className="h-7" src="trizzle-assets/logos/trizzle-logo.svg" alt="" /> */}
            </a>
            <ul>
              {navigation.map((link, index) => (
              <li className="mb-2" key={index}>
                <NavLink className="flex items-center p-4 text-gray-900 current:bg-blue-500 current:text-white hover:bg-gray-300" to={link.href}>
                  <span className="text-gray-900">
                  <FontAwesomeIcon icon={link.icon} />
                  </span>
                  <span className="ml-4 text-sm font-semibold">{link.name}</span>
                </NavLink>
              </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <NavLink className="flex items-center p-4 text-gray-900 hover:bg-gray-300" to="/login">
              <span className="text-gray-400">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8333 7.33335V5.50002C12.8333 5.01379 12.6402 4.54747 12.2964 4.20366C11.9525 3.85984 11.4862 3.66669 11 3.66669H4.58333C4.0971 3.66669 3.63079 3.85984 3.28697 4.20366C2.94315 4.54747 2.75 5.01379 2.75 5.50002V16.5C2.75 16.9863 2.94315 17.4526 3.28697 17.7964C3.63079 18.1402 4.0971 18.3334 4.58333 18.3334H11C11.4862 18.3334 11.9525 18.1402 12.2964 17.7964C12.6402 17.4526 12.8333 16.9863 12.8333 16.5V14.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.41675 11H19.2501M19.2501 11L16.5001 8.25M19.2501 11L16.5001 13.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <span className="ml-4 text-sm font-semibold">Log Out</span>
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </div>
  )
}

export default Sidebar