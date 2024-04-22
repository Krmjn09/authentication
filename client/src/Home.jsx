// import { useState } from "react";
// import moment from "moment";

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(moment());

//   const startDay = currentDate.clone().startOf("month").startOf("week");
//   const endDay = currentDate.clone().endOf("month").endOf("week");
//   const day = startDay.clone().subtract(1, "day");
//   const calendar = [];

//   while (day.isBefore(endDay, "day")) {
//     calendar.push(
//       Array(7)
//         .fill(0)
//         .map(() => day.add(1, "day").clone())
//     );
//   }

//   const isSelected = (day) => moment().isSame(day, "day");

//   const prevMonth = () =>
//     setCurrentDate(currentDate.clone().subtract(1, "month"));
//   const nextMonth = () => setCurrentDate(currentDate.clone().add(1, "month"));

//   return (
//     <div>
//       <div>
//         <button onClick={prevMonth}>Prev</button>
//         <span>{currentDate.format("MMMM YYYY")}</span>
//         <button onClick={nextMonth}>Next</button>
//       </div>
//       <div>
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <span key={day}>{day}</span>
//         ))}
//       </div>
//       <div>
//         {calendar.map((week, i) => (
//           <div key={i}>
//             {week.map((day, i) => (
//               <div
//                 key={i}
//                 style={{
//                   backgroundColor: isSelected(day) ? "lightgray" : "white",
//                 }}
//               >
//                 {day.date()}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

// import React, { useState } from "react";
// import moment from "moment";

// const Calendar = () => {
//   const [currentDate, setCurrentDate] = useState(moment());

//   const startDay = currentDate.clone().startOf("month").startOf("week");
//   const endDay = currentDate.clone().endOf("month").endOf("week");

//   const calendar = [];
//   let day = startDay
//     .clone()
//     .subtract(startDay.day() === 0 ? 6 : startDay.day() - 1, "day"); // Adjusted for Sunday as first day

//   while (day.isBefore(endDay, "day")) {
//     calendar.push(
//       Array(7)
//         .fill(0)
//         .map(() => day.add(1, "day").clone())
//     );
//   }

//   const isSelected = (day) => moment().isSame(day, "day");

//   const prevMonth = () =>
//     setCurrentDate(currentDate.clone().subtract(1, "month"));
//   const nextMonth = () => setCurrentDate(currentDate.clone().add(1, "month"));

//   const handleDateClick = (selectedDate) => {
//     // Handle navigation to a new page based on selectedDate
//     console.log(
//       "Navigate to a new page for",
//       selectedDate.format("YYYY-MM-DD")
//     ); // Example placeholder
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <button onClick={prevMonth} className="calendar-header-button">
//           Prev
//         </button>
//         <span className="calendar-header-title">
//           {currentDate.format("MMMM YYYY")}
//         </span>
//         <button onClick={nextMonth} className="calendar-header-button">
//           Next
//         </button>
//       </div>
//       <div className="calendar-weekdays">
//         {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//           <span key={day} className="calendar-weekday">
//             {day}
//           </span>
//         ))}
//       </div>
//       <div className="calendar-days">
//         {calendar.map((week, i) => (
//           <div key={i} className="calendar-week">
//             {week.map((day, i) => (
//               <button
//                 key={i}
//                 className={`calendar-day ${isSelected(day) ? "selected" : ""}`}
//                 onClick={() => handleDateClick(day)}
//               >
//                 {day.date()}
//               </button>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Calendar;

//

import { useState } from "react";
import moment from "moment";
import "./Calendar.css";
import { Link } from "react-router-dom";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const startDay = currentDate.clone().startOf("month").startOf("week");
  const endDay = currentDate.clone().endOf("month").endOf("week");

  const calendar = [];
  let day = startDay
    .clone()
    .subtract(startDay.day() === 0 ? 6 : startDay.day() - 1, "day"); // Adjusted for Sunday as first day

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  const isSelected = (day) => moment().isSame(day, "day");

  const prevMonth = () =>
    setCurrentDate(currentDate.clone().subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.clone().add(1, "month"));

  const handleDateClick = (selectedDate) => {
    const formattedDate = selectedDate.format("YYYY-MM-DD");
    // navigate to a new page using the formattedDate
    window.location.href = `/home/${formattedDate}`;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Chronicles
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>

            <Link
              to="/login"
              className="btn btn-primary d-flex align-items-center gap-3"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#addNewModal"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </nav>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="calendar card shadow rounded overflow-hidden"
          style={{
            background: `linear-gradient(to right, #f7f9fb, #e2e6ea)`, // Lighter gradient
            width: "500px", // Adjust width as desired
            height: "400px", // Adjust height as desired
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="calendar-header d-flex justify-content-between mb-3">
            <button onClick={prevMonth} className="btn btn-primary">
              Prev
            </button>
            <span className="calendar-header-title text-primary fs-4">
              {currentDate.format("MMMM YYYY")}
            </span>
            <button onClick={nextMonth} className="btn btn-primary">
              Next
            </button>
          </div>
          <div className="calendar-weekdays d-flex justify-content-between">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <span
                key={day}
                className="calendar-weekday text-center text-muted fw-bold"
                style={{ fontSize: "14px", padding: "5px" }} // Adjust weekday font size and padding
              >
                {day}
              </span>
            ))}
          </div>
          <div className="calendar-days">
            {calendar.map((week, i) => (
              <div
                key={i}
                className="calendar-week d-flex justify-content-between"
              >
                {week.map((day, i) => {
                  const isCurrentMonth = day.isSame(currentDate, "month");
                  const isPreviousMonth = day.isBefore(currentDate, "month");
                  const isNextMonth = day.isAfter(currentDate, "month");

                  return (
                    <button
                      key={i}
                      className={`calendar-day btn text-center fs-5 ${
                        isSelected(day)
                          ? "bg-teal-500 text-white" // More aesthetic primary color (teal)
                          : isCurrentMonth
                          ? "btn-outline-teal-500" // Teal outline for current month
                          : "btn-light text-muted" // Style for previous/next month dates
                      }`}
                      onClick={() => handleDateClick(day)}
                      style={{
                        opacity: isCurrentMonth ? 1 : 0.5, // Reduce opacity for previous/next month dates
                        cursor: isCurrentMonth ? "pointer" : "default", // Disable pointer for previous/next month dates
                      }}
                      disabled={!isCurrentMonth} // Disable buttons for previous/next month dates
                    >
                      {isCurrentMonth ? day.date() : ""}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Calendar;
