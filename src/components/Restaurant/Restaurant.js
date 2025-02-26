let reservationData = {
    adults: 1,
    children: 1,
    date: "2025-07-12",
    time: "8:00",
    comments: "",
  };
  
  export const getReservationData = () => {
    return reservationData;
  };
  
  export const setReservationData = (key, value) => {
    reservationData[key] = value;
  };
  