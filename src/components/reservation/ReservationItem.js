import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservations } from '../../redux/reservations/reservations';

 const ReservationItem = ({ reservation }) => {
  const { id, vehicle_id, reservation_date, return_date } = reservation;
  const vehicle = useSelector((state) => state.vehicles.find((vehicle) => vehicle.id == vehicle_id));
  const duration = (new Date(return_date) - new Date(reservation_date))/ (1000 * 3600 * 24);
  const price = duration * vehicle.price_per_day;

  const dispatch = useDispatch()

  return (
    <li className="group py-3 sm:py-4">
                    <div className="flex flex-col sm:flex-row items-center space-x-4">
                        <div className="flex-shrink-0"> 
                            <img className="w-36" src={vehicle.image} alt="Vehicle" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {vehicle.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                Reserved for <strong>{duration} days</strong>
                            </p>
                        </div>
                        <div className="flex flex-col justify-between items-center text-base font-semibold text-gray-900 dark:text-white">
                           <p>${price}</p> 
                            <button onClick={() => dispatch(deleteReservations(id))} className="invisible group-hover:visible">Cancel</button>
                        </div>
                    </div>
                </li>
  )}

export default ReservationItem;