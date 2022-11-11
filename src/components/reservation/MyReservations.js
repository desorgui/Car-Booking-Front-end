import React from 'react';
import { useSelector } from 'react-redux';
import ReservationItem from './ReservationItem';

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations);
  return (
    <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">My Reservations</h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {reservations.map((reservation) => (
            <ReservationItem key={reservation.id} reservation={reservation} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyReservations;
