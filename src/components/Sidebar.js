import icon1 from '../images/1.svg';

const Sidebar = () => {
  const navigation = [
    { 
      name: 'Vehicles',
      href: '/vehicles',
      icon: icon1
    },
    {
      name: 'Reserve',
      href: '/reserve',
      icon: './images/2.svg'
    },
    {
      name: 'My Reservations',
      href: '/my_reservations',
      icon: './images/3.svg'
    },
    {
      name: 'Add New vehicle',
      href: '/new_vehicle',
      icon: './images/4.svg'
    },
    {
      name: 'Delete vehicles',
      href: '/delete_vehicle',
      icon: './images/5.svg'
    },
  ]
  return (
    <div>
      <nav className="lg:hidden flex items-center justify-between p-8 bg-gray-700 mb-3">
        <div className="w-full xl:w-auto px-2 xl:mr-12">
          <div className="flex items-center justify-between">
            <a className="inline-flex items-center h-8" href="#">
              <img src="trizzle-assets/logos/trizzle-logo.svg" alt="" />
            </a>
            <div className="xl:hidden">
              <button className="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                <svg width="20" height="12" viewbox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="currentColor"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden lg:block navbar-menu relative z-50">
        <div className="lg:hidden navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
        <nav className="fixed top-0 left-0 bottom-0 w-[1/2] max-w-xxs flex flex-col h-full py-8 px-4 bg-gray-700 overflow-auto">
          <div className="mb-6">
            <a className="inline-block mb-12" href="#">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none light:text-White md:text-5xl lg:text-6xl dark:text-white">Jeep</h1>
              {/* <img className="h-7" src="trizzle-assets/logos/trizzle-logo.svg" alt="" /> */}
            </a>
            <ul>
              <li className="mb-4">
                <a className="flex items-center p-4 text-white bg-blue-500 rounded-xl" href={navigation[0].href}>
                  .
                  <span className="ml-4 text-sm font-semibold">{navigation[0].name}</span>
                </a>
              </li>
              {navigation.map((link, index) => (
              <li className="mb-4" key={index}>
                <a className="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href={link.href}>
                  <span className="text-gray-400">
                  <img src={link.icon}/>
                  </span>
                  <span className="ml-4 text-sm font-semibold">{link.name}</span>
                </a>
              </li>
              ))};
            </ul>
          </div>
          <div className="mt-auto">
            <a className="flex items-center p-4 text-gray-300 hover:bg-gray-800 rounded-xl" href="#">
              <span className="text-gray-400">
                <svg width="22" height="22" viewbox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8333 7.33335V5.50002C12.8333 5.01379 12.6402 4.54747 12.2964 4.20366C11.9525 3.85984 11.4862 3.66669 11 3.66669H4.58333C4.0971 3.66669 3.63079 3.85984 3.28697 4.20366C2.94315 4.54747 2.75 5.01379 2.75 5.50002V16.5C2.75 16.9863 2.94315 17.4526 3.28697 17.7964C3.63079 18.1402 4.0971 18.3334 4.58333 18.3334H11C11.4862 18.3334 11.9525 18.1402 12.2964 17.7964C12.6402 17.4526 12.8333 16.9863 12.8333 16.5V14.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.41675 11H19.2501M19.2501 11L16.5001 8.25M19.2501 11L16.5001 13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
              <span className="ml-4 text-sm font-semibold">Log Out</span>
            </a>
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:ml-80"></div>
    </div>
  )
}

export default Sidebar