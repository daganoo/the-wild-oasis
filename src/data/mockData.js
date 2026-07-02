import { add } from "date-fns";
import { isPast, isToday, isFuture } from "date-fns";
import { subtractDates } from "../utils/helpers";
import { cabins as cabinsSeed } from "./data-cabins";
import { guests as guestsSeed } from "./data-guests";
import { bookings as bookingsSeed } from "./data-bookings";

import cabin001 from "./cabins/cabin-001.jpg";
import cabin002 from "./cabins/cabin-002.jpg";
import cabin003 from "./cabins/cabin-003.jpg";
import cabin004 from "./cabins/cabin-004.jpg";
import cabin005 from "./cabins/cabin-005.jpg";
import cabin006 from "./cabins/cabin-006.jpg";
import cabin007 from "./cabins/cabin-007.jpg";
import cabin008 from "./cabins/cabin-008.jpg";

const cabinImages = {
  "001": cabin001,
  "002": cabin002,
  "003": cabin003,
  "004": cabin004,
  "005": cabin005,
  "006": cabin006,
  "007": cabin007,
  "008": cabin008,
};

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const mockCabins = cabinsSeed.map((cabin, i) => ({
  id: i + 1,
  ...cabin,
  image: cabinImages[cabin.name] || cabin.image,
  created_at: fromToday(-100, true),
}));

export const mockGuests = guestsSeed.map((guest, i) => ({
  id: i + 1,
  ...guest,
}));

export const mockBookings = bookingsSeed.map((booking) => {
  const cabin = mockCabins[booking.cabinId - 1];
  const guest = mockGuests[booking.guestId - 1];
  const numNights = subtractDates(booking.endDate, booking.startDate);
  const cabinPrice = numNights * (cabin.regularPrice - cabin.discount);
  const extrasPrice = booking.hasBreakfast
    ? numNights * 15 * booking.numGuests
    : 0;
  const totalPrice = cabinPrice + extrasPrice;

  let status;
  if (
    isPast(new Date(booking.endDate)) &&
    !isToday(new Date(booking.endDate))
  )
    status = "checked-out";
  if (
    isFuture(new Date(booking.startDate)) ||
    isToday(new Date(booking.startDate))
  )
    status = "unconfirmed";
  if (
    (isFuture(new Date(booking.endDate)) ||
      isToday(new Date(booking.endDate))) &&
    isPast(new Date(booking.startDate)) &&
    !isToday(new Date(booking.startDate))
  )
    status = "checked-in";

  return {
    id: booking.cabinId * 100 + booking.guestId,
    created_at: booking.created_at,
    startDate: booking.startDate,
    endDate: booking.endDate,
    numNights,
    numGuests: booking.numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    status,
    hasBreakfast: booking.hasBreakfast,
    observations: booking.observations,
    isPaid: booking.isPaid,
    cabinId: booking.cabinId,
    guestId: booking.guestId,
    cabins: { id: cabin.id, name: cabin.name },
    guests: {
      id: guest.id,
      fullName: guest.fullName,
      email: guest.email,
      nationality: guest.nationality,
      countryFlag: guest.countryFlag,
    },
  };
});

export const mockSettings = {
  id: 1,
  minBookingLength: 3,
  maxBookingLength: 30,
  maxGuestsPerBooking: 10,
  breakfastPrice: 15,
};
