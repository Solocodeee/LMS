// import "./BookingSuccess.css";
// import { useNavigate } from "react-router-dom";

// type BookingSuccessProps = {
//   day: string;
//   date: number;
//   time: string;
// };

// function BookingSuccess({
//   day,
//   date,
//   time,
// }: BookingSuccessProps) {
//   const navigate = useNavigate();

//   const meetLink = "https://meet.google.com/qra-hifz-01";

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(meetLink);
//       alert("تم نسخ رابط Google Meet");
//     } catch {
//       console.log("Unable to copy link");
//     }
//   };

//   const handleReschedule = () => {
//     navigate("/signup/step4");
//   };

//   const handleCancel = () => {
//     const confirmed = window.confirm(
//       "هل أنت متأكد من رغبتك في إلغاء الحجز؟"
//     );

//     if (confirmed) {
//       navigate("/signup/step4");
//     }
//   };

//   return (
//     <div className="success-page">

//       <div className="success-container">

//         {/* =========================
//             Success Message
//         ========================= */}

//         <div className="success-alert">
//           <span>●</span>

//           <strong>
//             تم تأكيد حجزك — أرسلنا التفاصيل إلى بريدك وتجدها دائمًا هنا
//           </strong>
//         </div>


//         {/* =========================
//             Main Layout
//         ========================= */}

//         <div className="success-layout">


//           {/* =========================
//               Left Side
//           ========================= */}

//           <div className="success-side">


//             {/* Preparation */}

//             <div className="success-box preparation-box">

//               <h2>
//                 تجهيزات المقابلة
//               </h2>

//               <ul>

//                 <li>
//                   <span>✓</span>
//                   مصحف بين يديك
//                 </li>

//                 <li>
//                   <span>✓</span>
//                   مكان هادئ
//                 </li>

//                 <li>
//                   <span>✓</span>
//                   سماعة وميك
//                 </li>

//                 <li>
//                   <span>✓</span>
//                   إنترنت مستقر
//                 </li>

//               </ul>

//             </div>


//             {/* Reminder */}

//             <div className="success-box reminder-box">

//               <h2>
//                 التذكيرات
//               </h2>

//               <p>
//                 سنذكّرك قبل الموعد بـ 24 ساعة، ثم بـ 10 دقائق —
//                 عبر الإشعارات والبريد.
//               </p>

//             </div>


//             {/* Actions */}

//             <div className="success-actions">

//               <button
//                 type="button"
//                 onClick={handleReschedule}
//                 className="reschedule-btn"
//               >
//                 إعادة جدولة
//               </button>

//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="cancel-btn"
//               >
//                 إلغاء الحجز
//               </button>

//             </div>

//           </div>


//           {/* =========================
//               Booking Details
//           ========================= */}

//           <div className="success-booking-card">


//             {/* Header */}

//             <div className="success-booking-header">

//               <div className="success-booking-icon">
//                 م
//               </div>

//               <div>

//                 <h1>
//                   {day} {date} يوليو · {time}
//                 </h1>

//                 <p>
//                   مقابلة تحديد المستوى · 15 دقيقة
//                   · سيتم تخصيص الرابط تلقائيًا
//                 </p>

//               </div>

//               <span className="confirmed-badge">
//                 مؤكد
//               </span>

//             </div>


//             <div className="success-divider"></div>


//             {/* Meeting */}

//             <div className="success-meeting">

//               <h3>
//                 رابط المقابلة
//               </h3>


//               <div className="meet-link-box">

//                 <span className="meet-small-icon">
//                   M
//                 </span>

//                 <span className="meet-url">
//                   meet.google.com/qra-hifz-01
//                 </span>

//                 <button
//                   type="button"
//                   onClick={handleCopy}
//                   className="copy-btn"
//                 >
//                   نسخ
//                 </button>

//               </div>


//               <div className="meeting-buttons">

//                 <a
//                   href={meetLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="join-meet-btn"
//                 >
//                   انضم عبر Google Meet
//                 </a>

//                 <button
//                   type="button"
//                   className="calendar-btn"
//                 >
//                   إضافة إلى تقويم Google
//                 </button>

//               </div>


//               <p className="meeting-note">
//                 يفتح الرابط قبل الموعد بـ 10 دقائق
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default BookingSuccess;
//////////////////////////////////////////////

// import "./BookingSuccess.css";
// import { useLocation, useNavigate } from "react-router-dom";

// type BookingData = {
//   day: string;
//   date: number;
//   time: string;
// };

// function BookingSuccess() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const booking = location.state as BookingData | null;

//   const meetLink = "https://meet.google.com/qra-hifz-01";

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(meetLink);
//       alert("تم نسخ رابط Google Meet");
//     } catch {
//       console.log("Unable to copy link");
//     }
//   };

//   const handleReschedule = () => {
//     navigate("/signup/step4");
//   };

//   const handleCancel = () => {
//     const confirmed = window.confirm(
//       "هل أنت متأكد من رغبتك في إلغاء الحجز؟"
//     );

//     if (confirmed) {
//       navigate("/signup/step4");
//     }
//   };

//   // لو دخل صفحة النجاح مباشرة من غير حجز
//   if (!booking) {
//     return (
//       <div className="success-page">
//         <div className="success-container">

//           <div className="success-alert">
//             <span>!</span>

//             <strong>
//               لا توجد بيانات حجز متاحة
//             </strong>
//           </div>

//           <button
//             type="button"
//             className="reschedule-btn"
//             onClick={() => navigate("/signup/step4")}
//           >
//             العودة إلى الحجز
//           </button>

//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="success-page">

//       <div className="success-container">

//         {/* =========================
//             Success Message
//         ========================= */}

//         <div className="success-alert">

//           <span>●</span>

//           <strong>
//             تم تأكيد حجزك — أرسلنا التفاصيل إلى بريدك وتجدها دائمًا هنا
//           </strong>

//         </div>


//         {/* =========================
//             Main Layout
//         ========================= */}

//         <div className="success-layout">


//           {/* =========================
//               Left Side
//           ========================= */}

//           <div className="success-side">


//             {/* Preparation */}

//             <div className="success-box preparation-box">

//               <h2>
//                 تجهيزات المقابلة
//               </h2>

//               <ul>

//                 <li>
//                   <span>✓</span>
//                   مصحف بين يديك
//                 </li>

//                 <li>
//                   <span>✓</span>
//                   مكان هادئ
//                 </li>

//                 <li>
//                   <span>✓</span>
//                   سماعة وميك
//                 </li>

//                 <li>
//                   <span>✓</span>
//                   إنترنت مستقر
//                 </li>

//               </ul>

//             </div>


//             {/* Reminder */}

//             <div className="success-box reminder-box">

//               <h2>
//                 التذكيرات
//               </h2>

//               <p>
//                 سنذكّرك قبل الموعد بـ 24 ساعة، ثم بـ 10 دقائق —
//                 عبر الإشعارات والبريد.
//               </p>

//             </div>


//             {/* Actions */}

//             <div className="success-actions">

//               <button
//                 type="button"
//                 onClick={handleReschedule}
//                 className="reschedule-btn"
//               >
//                 إعادة جدولة
//               </button>

//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="cancel-btn"
//               >
//                 إلغاء الحجز
//               </button>

//             </div>

//           </div>


//           {/* =========================
//               Booking Details
//           ========================= */}

//           <div className="success-booking-card">


//             {/* Header */}

//             <div className="success-booking-header">

//               <div className="success-booking-icon">
//                 م
//               </div>

//               <div>

//                 <h1>
//                   {booking.day} {booking.date} يوليو · {booking.time}
//                 </h1>

//                 <p>
//                   مقابلة تحديد المستوى · 15 دقيقة
//                   · سيتم تخصيص الرابط تلقائيًا
//                 </p>

//               </div>

//               <span className="confirmed-badge">
//                 مؤكد
//               </span>

//             </div>


//             <div className="success-divider"></div>


//             {/* Meeting */}

//             <div className="success-meeting">

//               <h3>
//                 رابط المقابلة
//               </h3>


//               <div className="meet-link-box">

//                 <span className="meet-small-icon">
//                   M
//                 </span>

//                 <span className="meet-url">
//                   meet.google.com/qra-hifz-01
//                 </span>

//                 <button
//                   type="button"
//                   onClick={handleCopy}
//                   className="copy-btn"
//                 >
//                   نسخ
//                 </button>

//               </div>


//               <div className="meeting-buttons">

//                 <a
//                   href={meetLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="join-meet-btn"
//                 >
//                   انضم عبر Google Meet
//                 </a>

//                 <button
//                   type="button"
//                   className="calendar-btn"
//                 >
//                   إضافة إلى تقويم Google
//                 </button>

//               </div>


//               <p className="meeting-note">
//                 يفتح الرابط قبل الموعد بـ 10 دقائق
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default BookingSuccess;

////////////////////////////////2

import "./BookingSuccess.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

type BookingState = {
  day: string;
  date: number;
  time: string;
};

function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const state = location.state as BookingState | null;

  if (!state) {
    return (
      <div className="success-page">
        <div className="success-container">

          <div className="success-alert">
            <span>●</span>

            <strong>
              لا توجد بيانات حجز حالية
            </strong>
          </div>

          <button
            type="button"
            className="reschedule-btn"
            onClick={() => navigate("/signup/step4")}
          >
            العودة إلى حجز الموعد
          </button>

        </div>
      </div>
    );
  }

  const { day, date, time } = state;

  const meetLink =
    "https://meet.google.com/qra-hifz-01";


  /* =========================
     Copy Meet Link
  ========================= */

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(meetLink);

      alert("تم نسخ رابط Google Meet");

    } catch {
      console.log("Unable to copy link");
    }
  };


  /* =========================
     Reschedule
  ========================= */

  const handleReschedule = () => {
    navigate("/signup/step4");
  };


  /* =========================
     Open Cancel Modal
  ========================= */

  const handleCancel = () => {
    setCancelled(false);
    setShowCancelModal(true);
  };


  /* =========================
     Confirm Cancellation
  ========================= */

  const confirmCancel = () => {
    setCancelled(true);
  };


  /* =========================
     Go To New Appointment
  ========================= */

  const chooseNewAppointment = () => {

    setShowCancelModal(false);

    setCancelled(false);

    navigate("/signup/step4");
  };


  return (
    <div className="success-page">

      <div className="success-container">


        {/* =========================
            Success Message
        ========================= */}

        <div className="success-alert">

          <span>●</span>

          <strong>
            تم تأكيد حجزك — أرسلنا التفاصيل إلى بريدك وتجدها دائمًا هنا
          </strong>

        </div>


        {/* =========================
            Main Layout
        ========================= */}

        <div className="success-layout">


          {/* =========================
              Left Side
          ========================= */}

          <div className="success-side">


            {/* Preparation */}

            <div className="success-box preparation-box">

              <h2>
                تجهيزات المقابلة
              </h2>

              <ul>

                <li>
                  <span>✓</span>
                  مصحف بين يديك
                </li>

                <li>
                  <span>✓</span>
                  مكان هادئ
                </li>

                <li>
                  <span>✓</span>
                  سماعة وميك
                </li>

                <li>
                  <span>✓</span>
                  إنترنت مستقر
                </li>

              </ul>

            </div>


            {/* Reminder */}

            <div className="success-box reminder-box">

              <h2>
                التذكيرات
              </h2>

              <p>
                سنذكّرك قبل الموعد بـ 24 ساعة، ثم بـ 10 دقائق —
                عبر الإشعارات والبريد.
              </p>

            </div>


            {/* Actions */}

            <div className="success-actions">

              <button
                type="button"
                onClick={handleReschedule}
                className="reschedule-btn"
              >
                إعادة جدولة
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="cancel-btn"
              >
                إلغاء الحجز
              </button>

            </div>

          </div>


          {/* =========================
              Booking Details
          ========================= */}

          <div className="success-booking-card">


            {/* Header */}

            <div className="success-booking-header">

              <div className="success-booking-icon">
                م
              </div>

              <div>

                <h1>
                  {day} {date} يوليو · {time}
                </h1>

                <p>
                  مقابلة تحديد المستوى · 15 دقيقة
                  · سيتم تخصيص الرابط تلقائيًا
                </p>

              </div>

              <span className="confirmed-badge">
                مؤكد
              </span>

            </div>


            <div className="success-divider"></div>


            {/* Meeting */}

            <div className="success-meeting">

              <h3>
                رابط المقابلة
              </h3>


              <div className="meet-link-box">

                <span className="meet-small-icon">
                  M
                </span>

                <span className="meet-url">
                  meet.google.com/qra-hifz-01
                </span>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="copy-btn"
                >
                  نسخ
                </button>

              </div>


              <div className="meeting-buttons">

                <a
                  href={meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="join-meet-btn"
                >
                  انضم عبر Google Meet
                </a>

                <button
                  type="button"
                  className="calendar-btn"
                >
                  إضافة إلى تقويم Google
                </button>

              </div>


              <p className="meeting-note">
                يفتح الرابط قبل الموعد بـ 10 دقائق
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          Cancel Booking Modal
      ================================================= */}

      {showCancelModal && (

        <div className="cancel-modal-overlay">

          <div className="cancel-modal">


            {!cancelled ? (

              <>

                {/* Icon */}

                <div className="cancel-modal-icon">
                  !
                </div>


                {/* Title */}

                <h2>
                  إلغاء الحجز
                </h2>


                {/* Description */}

                <p>
                  هل أنت متأكد من رغبتك في إلغاء موعد
                  المقابلة الحالي؟
                </p>


                <div className="cancel-modal-details">

                  <strong>
                    {day} {date} يوليو · {time}
                  </strong>

                  <span>
                    مقابلة تحديد المستوى
                  </span>

                </div>


                {/* Actions */}

                <div className="cancel-modal-actions">

                  <button
                    type="button"
                    className="cancel-confirm-btn"
                    onClick={confirmCancel}
                  >
                    إلغاء الحجز
                  </button>

                  <button
                    type="button"
                    className="cancel-keep-btn"
                    onClick={() => setShowCancelModal(false)}
                  >
                    الاحتفاظ بالحجز
                  </button>

                </div>

              </>

            ) : (

              <>

                {/* Success Icon */}

                <div className="cancel-success-icon">
                  ✓
                </div>


                <h2>
                  تم إلغاء الحجز
                </h2>


                <p>
                  تم إلغاء موعد المقابلة بنجاح.
                  يمكنك الآن اختيار موعد جديد.
                </p>


                <button
                  type="button"
                  className="new-appointment-btn"
                  onClick={chooseNewAppointment}
                >
                  اختيار موعد جديد
                </button>

              </>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default BookingSuccess;