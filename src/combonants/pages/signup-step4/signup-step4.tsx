

///////////////////////////////////////////////////

// import "./signup-step4.css";
// import BookingConfirmation from "../BookingConfirmation/BookingConfirmation";
// // import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function SignUpStep4() {
//   // const navigate = useNavigate();

//   const [selectedDay, setSelectedDay] = useState(12);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [showConfirmation, setShowConfirmation] = useState(false);

//   const days = [
//     { day: "السبت", number: 11 },
//     { day: "الأحد", number: 12 },
//     { day: "الإثنين", number: 13 },
//     { day: "الثلاثاء", number: 14 },
//     { day: "الأربعاء", number: 15 },
//     { day: "الخميس", number: 16 },
//     { day: "الجمعة", number: 17 },
//   ];

//   const times = [
//     "٤:٠٠ م",
//     "٤:٣٠ م",
//     "٥:٠٠ م",
//     "٥:٣٠ م",
//     "٦:٠٠ م",
//     "٦:٣٠ م",
//     "٧:٠٠ م",
//     "٧:٣٠ م",
//     "٨:٠٠ م",
//   ];

//   const selectedDayData = days.find(
//     (day) => day.number === selectedDay
//   );

//   const handleContinue = () => {
//     if (!selectedTime) return;

//     console.log({
//       day: selectedDayData,
//       time: selectedTime,
//     });

//     setShowConfirmation(true);
//   };

//   return (
//     <div className="booking-page">

//       <div className="booking-container">

//         {/* =========================
//             Progress
//         ========================= */}

//         <div className="booking-progress">

//           <div className="booking-progress-top">
//             <span>الخطوة 4 من 4</span>

//             <span className="booking-progress-label">
//               حجز مقابلة تحديد المستوى
//             </span>
//           </div>

//           <div className="booking-progress-bar">
//             <div className="booking-progress-fill"></div>
//           </div>

//         </div>


//         {/* =========================
//             Main Layout
//         ========================= */}

//         <div className="booking-layout">

//           {/* =========================
//               Calendar / Time
//           ========================= */}

//           <div className="booking-card">

//             <h1>اختر موعدًا</h1>


//             {/* Days */}

//             <div className="days-section">

//               <div className="days-list">

//                 {days.map((day) => (

//                   <button
//                     key={day.number}
//                     type="button"
//                     className={`day-button ${
//                       selectedDay === day.number
//                         ? "selected"
//                         : ""
//                     }`}
//                     onClick={() => {
//                       setSelectedDay(day.number);
//                       setSelectedTime("");
//                     }}
//                   >

//                     <span className="day-name">
//                       {day.day}
//                     </span>

//                     <strong>
//                       {day.number}
//                     </strong>

//                   </button>

//                 ))}

//               </div>

//             </div>


//             <div className="booking-divider"></div>


//             {/* Times */}

//             <div className="times-section">

//               <h2>
//                 المواعيد المتاحة — الأحد ١٢ يوليو
//               </h2>

//               <p className="timezone">
//                 توقيت مكة المكرمة (GMT+3)
//               </p>


//               <div className="times-grid">

//                 {times.map((time, index) => (

//                   <button
//                     key={time}
//                     type="button"
//                     disabled={index === 5 || index === 7}
//                     className={`time-button ${
//                       selectedTime === time
//                         ? "selected"
//                         : ""
//                     }`}
//                     onClick={() => setSelectedTime(time)}
//                   >
//                     {time}
//                   </button>

//                 ))}

//               </div>


//               <p className="booking-note">
//                 <span>•</span>
//                 ستظهر لك مواعيد متاحة فقط في هذا الموعد تلقائيًا
//               </p>

//             </div>

//           </div>


//           {/* =========================
//               Summary
//           ========================= */}

//           <div className="booking-summary">

//             <h2>ملخص الحجز</h2>


//             <div className="summary-header">

//               <div className="summary-icon">
//                 م
//               </div>

//               <div>
//                 <h3>مقابلة تحديد المستوى</h3>

//                 <p>15 دقيقة · مكالمة فيديو</p>
//               </div>

//             </div>


//             <div className="summary-divider"></div>


//             <div className="summary-selected">

//               <span>الموعد المختار</span>

//               {selectedTime ? (

//                 <div className="selected-appointment">

//                   <strong>
//                     {selectedDayData?.day} {selectedDayData?.number}
//                   </strong>

//                   <span>
//                     {selectedTime}
//                   </span>

//                 </div>

//               ) : (

//                 <div className="no-date">
//                   لم تختر موعدًا بعد
//                 </div>

//               )}

//             </div>


//             <div className="summary-divider"></div>


//             <div className="meeting-info">

//               <span className="meeting-icon">
//                 M
//               </span>

//               <span>
//                 Google Meet · ينشأ الرابط تلقائيًا
//               </span>

//             </div>


//             <button
//               type="button"
//               className={`confirm-booking-btn ${
//                 !selectedTime ? "disabled" : ""
//               }`}
//               disabled={!selectedTime}
//               onClick={handleContinue}
//             >
//               متابعة إلى التأكيد
//             </button>


//             <Link
//               to="/signup/quran-assessment"
//               className="booking-back"
//             >
//               رجوع
//             </Link>


//             <p className="reschedule-text">
//               يمكنك إعادة الجدولة حتى ساعتين قبل الموعد
//             </p>

//           </div>

//         </div>

//       </div>


//       {/* =========================
//           Booking Confirmation
//       ========================= */}

//       {showConfirmation && selectedDayData && selectedTime && (
//         <BookingConfirmation
//           day={selectedDayData.day}
//           date={selectedDayData.number}
//           time={selectedTime}
//           onClose={() => setShowConfirmation(false)}
//           onConfirm={() => {
//             console.log("Booking confirmed:", {
//               day: selectedDayData.day,
//               date: selectedDayData.number,
//               time: selectedTime,
//             });

//             setShowConfirmation(false);
//           }}
//         />
//       )}

//     </div>
//   );
// }

// export default SignUpStep4;
//////////////////////////////////////////////
import "./signup-step4.css";
import BookingConfirmation from "../BookingConfirmation/BookingConfirmation";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUpStep4() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(12);
  const [selectedTime, setSelectedTime] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const days = [
    { day: "السبت", number: 11 },
    { day: "الأحد", number: 12 },
    { day: "الإثنين", number: 13 },
    { day: "الثلاثاء", number: 14 },
    { day: "الأربعاء", number: 15 },
    { day: "الخميس", number: 16 },
    { day: "الجمعة", number: 17 },
  ];

  const times = [
    "٤:٠٠ م",
    "٤:٣٠ م",
    "٥:٠٠ م",
    "٥:٣٠ م",
    "٦:٠٠ م",
    "٦:٣٠ م",
    "٧:٠٠ م",
    "٧:٣٠ م",
    "٨:٠٠ م",
  ];

  const selectedDayData = days.find(
    (day) => day.number === selectedDay
  );

  const handleContinue = () => {
    if (!selectedTime) return;

    console.log({
      day: selectedDayData,
      time: selectedTime,
    });

    setShowConfirmation(true);
  };

  return (
    <div className="booking-page">

      <div className="booking-container">

        {/* =========================
            Progress
        ========================= */}

        <div className="booking-progress">

          <div className="booking-progress-top">
            <span>الخطوة 4 من 4</span>

            <span className="booking-progress-label">
              حجز مقابلة تحديد المستوى
            </span>
          </div>

          <div className="booking-progress-bar">
            <div className="booking-progress-fill"></div>
          </div>

        </div>


        {/* =========================
            Main Layout
        ========================= */}

        <div className="booking-layout">

          {/* =========================
              Calendar / Time
          ========================= */}

          <div className="booking-card">

            <h1>اختر موعدًا</h1>

            {/* Days */}

            <div className="days-section">

              <div className="days-list">

                {days.map((day) => (

                  <button
                    key={day.number}
                    type="button"
                    className={`day-button ${
                      selectedDay === day.number
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedDay(day.number);
                      setSelectedTime("");
                    }}
                  >

                    <span className="day-name">
                      {day.day}
                    </span>

                    <strong>
                      {day.number}
                    </strong>

                  </button>

                ))}

              </div>

            </div>


            <div className="booking-divider"></div>


            {/* Times */}

            <div className="times-section">

              <h2>
                المواعيد المتاحة — الأحد ١٢ يوليو
              </h2>

              <p className="timezone">
                توقيت مكة المكرمة (GMT+3)
              </p>


              <div className="times-grid">

                {times.map((time, index) => (

                  <button
                    key={time}
                    type="button"
                    disabled={index === 5 || index === 7}
                    className={`time-button ${
                      selectedTime === time
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>

                ))}

              </div>


              <p className="booking-note">
                <span>•</span>
                ستظهر لك مواعيد متاحة فقط في هذا الموعد تلقائيًا
              </p>

            </div>

          </div>


          {/* =========================
              Summary
          ========================= */}

          <div className="booking-summary">

            <h2>ملخص الحجز</h2>


            <div className="summary-header">

              <div className="summary-icon">
                م
              </div>

              <div>
                <h3>مقابلة تحديد المستوى</h3>

                <p>15 دقيقة · مكالمة فيديو</p>
              </div>

            </div>


            <div className="summary-divider"></div>


            <div className="summary-selected">

              <span>الموعد المختار</span>

              {selectedTime ? (

                <div className="selected-appointment">

                  <strong>
                    {selectedDayData?.day} {selectedDayData?.number}
                  </strong>

                  <span>
                    {selectedTime}
                  </span>

                </div>

              ) : (

                <div className="no-date">
                  لم تختر موعدًا بعد
                </div>

              )}

            </div>


            <div className="summary-divider"></div>


            <div className="meeting-info">

              <span className="meeting-icon">
                M
              </span>

              <span>
                Google Meet · ينشأ الرابط تلقائيًا
              </span>

            </div>


            <button
              type="button"
              className={`confirm-booking-btn ${
                !selectedTime ? "disabled" : ""
              }`}
              disabled={!selectedTime}
              onClick={handleContinue}
            >
              متابعة إلى التأكيد
            </button>


            <Link
              to="/signup/quran-assessment"
              className="booking-back"
            >
              رجوع
            </Link>


            <p className="reschedule-text">
              يمكنك إعادة الجدولة حتى ساعتين قبل الموعد
            </p>

          </div>

        </div>

      </div>


      {/* =========================
          Booking Confirmation
      ========================= */}

      {showConfirmation &&
        selectedDayData &&
        selectedTime && (

          <BookingConfirmation

            day={selectedDayData.day}

            date={selectedDayData.number}

            time={selectedTime}

            onClose={() => {
              setShowConfirmation(false);
            }}

            onConfirm={() => {

              console.log("Booking confirmed:", {
                day: selectedDayData.day,
                date: selectedDayData.number,
                time: selectedTime,
              });


              // إغلاق الـ Modal
              setShowConfirmation(false);


              // الانتقال إلى صفحة الحجز المؤكد
              navigate("/signup/success", {

                state: {
                  day: selectedDayData.day,
                  date: selectedDayData.number,
                  time: selectedTime,
                },

              });

            }}

          />

        )}

    </div>
  );
}

export default SignUpStep4;