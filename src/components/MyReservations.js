import React from "react";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import jeep1 from "../images/jeep1.png";
import ReservationItem from "./ReservationItem";

const MyReservations = () => {
    // const { id } = useParams();
    const reservations = useSelector((state) => state.reservations);
    // const reservations = useSelector((state) => state.reservations.find((elem) => JSON.stringify(elem.user_id) === JSON.stringify(id)));
  return (    
    <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">My Reservations</h5>
            <a href="/my_reservations" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
            </a>
      </div>
      <div class="flow-root">
            <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                {reservations.map((reservation) => (
                    <ReservationItem key={reservation.id} reservation={reservation} />
                ))}
            </ul>
      </div>
    </div>
  );
};

export default MyReservations;