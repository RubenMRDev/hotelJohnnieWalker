let reservationData = {
    adults: 3,
    children: 1,
    date: "2025-07-12",
    time: "20:00",
    comments: "Comentarios de ejemplo",
  };
  
  export const getReservationData = () => {
    return reservationData;
  };
  
  export const setReservationData = (key, value) => {
    reservationData[key] = value;
  };
  