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
  const styles = {
    container: {
      backgroundImage: `url("https://i.pinimg.com/564x/9c/85/78/9c85786437d7abed5b16964b8350fd79.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      // display: "flex", // Enables vertical centering of content (optional)
      flexDirection: "column", // Stacks content vertically (optional)
      justifyContent: "center", // Centers content vertically within the container (optional)
      alignItems: "center", // Centers content horizontally within the container (optional)
    },
    navbar: {
      backgroundColor: "#191b5b", // Royal blue
      color: "white", // Light text for contrast
      padding: "1rem 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navbarBrand: {
      fontSize: "1.2rem", // Slightly larger font for brand name
      fontWeight: "bold", // Add boldness for emphasis
    },
    navLink: {
      textDecoration: "none",
      color: "inherit", // Inherit color from navbar
      marginRight: "1.5rem", // Spacing between links
      transition: "color 0.2s ease-in-out", // Smooth hover effect
    },
    navLinkActive: {
      color: "#2942C8", // Darker royal blue for active link
    },
    navBtn: {
      backgroundColor: "#EB370F", // Darker royal blue for button
      color: "white",
      padding: "0.75rem 1.5rem", // Adjust padding for button size
      borderRadius: "5px", // Rounded corners for aesthetics
      transition: "background-color 0.2s ease-in-out", // Smooth button hover effect
    },
    navBtnHover: {
      backgroundColor: "#3f5baf", // Slightly darker blue on hover
    },
    footer: {
      backgroundColor: "#6F494C", // Dark gray background
      color: "white", // Light text for contrast
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between", // Distribute content evenly
      alignItems: "center", // Align vertically
    },
    footerLink: {
      textDecoration: "none",
      color: "inherit", // Inherit color from footer
      marginRight: "1rem", // Spacing between links
      transition: "color 0.2s ease-in-out", // Smooth hover effect
    },
    footerLinkHover: {
      color: "#2962FF", // Light blue on hover for emphasis
    },
    copyright: {
      fontSize: "0.8rem", // Smaller font for copyright
      opacity: 0.7, // Slightly translucent for subtle feel
    },
    socialIcons: {
      display: "flex", // Inline display for social icons
    },
    socialIcon: {
      marginRight: "0.5rem", // Spacing between icons
      fontSize: "1.2rem", // Adjust size based on your icons
      color: "inherit", // Inherit color from footer
      transition: "color 0.2s ease-in-out", // Smooth hover effect
    },
    socialIconHover: {
      color: "#2962FF", // Light blue on hover for emphasis
    },
  };
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
      <nav style={styles.navbar}>
        <a href="#" className="navbar-brand" style={styles.navbarBrand}>
          Chronicles
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className={`nav-link ${styles.navLinkActive}`} href="#">
              Home
            </a> */}
          </li>
          {/* Add more links here as needed */}
        </ul>
        <Link to="/login" style={styles.navBtn}>
          Sign Out
        </Link>
      </nav>
      <div style={styles.container}>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div
            className="calendar card shadow rounded overflow-hidden"
            style={{
              background: `linear-gradient(to right, #f7f9fb, #e2e6ea)`, // Lighter gradient
              width: "550px", // Adjust width as desired
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
                            ? "bg-teal-500 text-primary" // More aesthetic primary color (teal)
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
        <footer style={styles.footer}>
          {/* Footer content */}
          <p className="align-items-center">
            {" "}
            &copy; 2024 Chronicles. All rights reserved
          </p>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.socialIcon}>
              {/* Social media icon (replace with your icon component) */}
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </footer>
      </div>
    </>
  );
};
export default Calendar;
