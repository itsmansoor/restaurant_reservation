import Reservation from '../models/Reservation.js'
export const createReservation = async (req, res) => {
  try {
    const { name, email, date, time, guests } = req.body;

    if (!name || !email || !date || !time || !guests) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const reservation = await Reservation.create({
      name,
      email,
      date,
      time,
      guests,
    });

    res.status(201).json({
      success: true,
      reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({
      createdAt: -1,
    });

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
