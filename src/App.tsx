// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import SignUp from "./combonants/pages/signup";
// import SignUpStep2 from "./combonants/pages/signup-step2/signup-step2";
// import QuranAssessment from "./combonants/pages/quran-assessment/quran-assessment";
// import SignUpStep4 from "./combonants/pages/signup-step4/signup-step4";
// import BookingSuccess from "./combonants/pages/BookingSuccess/BookingSuccess";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route
//           path="/"
//           element={<SignUp />}
//         />

//         <Route
//           path="/signup/step2"
//           element={<SignUpStep2 />}
//         />

//         <Route
//           path="/signup/quran-assessment"
//           element={<QuranAssessment />}
//         />

//         <Route
//           path="/signup/step4"
//           element={<SignUpStep4 />}
//         />

//         {/* صفحة تأكيد الحجز النهائية */}
//         <Route
//           path="/signup/success"
//           element={<BookingSuccess />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./combonants/pages/signup";
import SignUpStep2 from "./combonants/pages/signup-step2/signup-step2";
import QuranAssessment from "./combonants/pages/quran-assessment/quran-assessment";
import SignUpStep4 from "./combonants/pages/signup-step4/signup-step4";
import BookingSuccess from "./combonants/pages/BookingSuccess/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<SignUp />}
        />

        <Route
          path="/signup/step2"
          element={<SignUpStep2 />}
        />

        <Route
          path="/signup/quran-assessment"
          element={<QuranAssessment />}
        />

        <Route
          path="/signup/step4"
          element={<SignUpStep4 />}
        />

        <Route
          path="/signup/success"
          element={<BookingSuccess />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;