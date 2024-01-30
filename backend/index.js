const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.js");
const tourRouter = require("./routes/tours.js");
const userRouter = require("./routes/users.js");
const reviewRoute = require("./routes/reviews.js");
const bookingRoute = require("./routes/bookings.js");

dotenv.config();
require("./db");
const app = express();
const PORT = process.env.PORT;
const corsOptions = {
  origin: true,
  credentials: true,
};

//middlewares
app.use(express.json());

app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
