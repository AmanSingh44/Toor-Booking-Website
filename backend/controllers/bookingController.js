const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
  let savedBooking;
  const newBooking = new Booking(req.body);
  try {
    savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Tour booked successfully",
      data: savedBooking,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "booking failed",
      data: savedBooking,
    });
  }
};
//getsingle booking
const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Not found",
    });
  }
};

//get all booking
const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Not found",
    });
  }
};

module.exports = { createBooking, getBooking, getAllBooking };
