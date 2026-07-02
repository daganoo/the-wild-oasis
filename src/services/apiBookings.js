import { getToday } from "../utils/helpers";
import { PAGE_SIZE } from "../utils/constants";
import { mockBookings, mockCabins, mockGuests } from "../data/mockData";

export async function getBookings({ filter, sortBy, page }) {
  let bookings = [...mockBookings];

  if (filter) {
    const { field, value, method } = filter;
    if (method === "gte") {
      bookings = bookings.filter((b) => b[field] >= value);
    } else {
      bookings = bookings.filter((b) => b[field] === value);
    }
  }

  if (sortBy) {
    const { field, direction } = sortBy;
    bookings.sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const count = bookings.length;

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    bookings = bookings.slice(from, to);
  }

  return { data: bookings, count };
}

export async function getBooking(id) {
  const booking = mockBookings.find((b) => b.id === Number(id));
  if (!booking) throw new Error("Booking not found");

  const cabin = mockCabins.find((c) => c.id === booking.cabinId);
  const guest = mockGuests.find((g) => g.id === booking.guestId);

  return { ...booking, cabins: cabin, guests: guest };
}

export async function getBookingsAfterDate(date) {
  return mockBookings
    .filter((b) => b.created_at.substring(0, 19) >= date.substring(0, 19))
    .map((b) => ({
      created_at: b.created_at,
      totalPrice: b.totalPrice,
      extrasPrice: b.extrasPrice,
    }));
}

export async function getStaysAfterDate(date) {
  const todayStr = getToday();
  return mockBookings
    .filter((b) => {
      const x = b.startDate.substring(0, 10);
      const todayDate = todayStr.substring(0, 10);
      const filterDate = date.substring(0, 10);
      return x >= filterDate && x <= todayDate;
    })
    .map((b) => ({ ...b, guests: { fullName: b.guests.fullName } }));
}

export async function getStaysTodayActivity() {
  const today = getToday().substring(0, 10);
  return mockBookings.filter((b) => {
    const start = b.startDate.substring(0, 10);
    const end = b.endDate.substring(0, 10);
    return (
      (b.status === "unconfirmed" && start === today) ||
      (b.status === "checked-in" && end === today)
    );
  });
}

export async function updateBooking(id, obj) {
  const booking = mockBookings.find((b) => b.id === Number(id));
  if (!booking) throw new Error("Booking not found");
  Object.assign(booking, obj);
  return booking;
}

export async function deleteBooking(id) {
  const idx = mockBookings.findIndex((b) => b.id === Number(id));
  if (idx !== -1) mockBookings.splice(idx, 1);
  return null;
}
