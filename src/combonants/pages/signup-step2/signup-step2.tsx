import "./signup-step2.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUpStep2() {
  const [selectedGoal, setSelectedGoal] = useState("quran");

  const navigate = useNavigate();

  const handleContinue = () => {
  if (!selectedGoal) return;

  if (selectedGoal === "quran") {
    navigate("/signup/quran-assessment");
  }

  if (selectedGoal === "arabic") {
    console.log("Arabic selected");
  }

    // الخطوة اللي بعدها
    // navigate("/signup/step3");
  };

  return (
    <div className="signup-step-page">

      <div className="signup-step-container">

        {/* =========================
            Progress
        ========================= */}

        <div className="signup-progress">

          <div className="progress-top">
            <span>الخطوة ١ من ٢</span>

            <span className="choose-text">
              اختيار المسار
            </span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

        </div>


        {/* =========================
            Header
        ========================= */}

        <div className="step-header">

          <h1>ما الذي تود أن تبدأ به؟</h1>

          <p>
            اختر مسارك، ويمكنك إضافة مسار آخر لاحقًا من حسابك.
          </p>

        </div>


        {/* =========================
            Options
        ========================= */}

        <div className="goal-options">

          {/* Quran */}

          <button
            type="button"
            className={`goal-card ${
              selectedGoal === "quran" ? "selected" : ""
            }`}
            onClick={() => setSelectedGoal("quran")}
          >

            <div className="goal-top">

              <div className="goal-icon">
                ق
              </div>

              {selectedGoal === "quran" && (
                <div className="selected-check">
                  ✓
                </div>
              )}

            </div>

            <h2>تحفيظ القرآن الكريم</h2>

            <p>
              حفظ ومراجعة مع خطط حفظ متدرجة، مقسمة إلى أجزاء
              حسب مستواك، مع تقييم مستمر وامتحانات انتقال.
            </p>

          </button>


          {/* Arabic */}

          <button
            type="button"
            className={`goal-card ${
              selectedGoal === "arabic" ? "selected" : ""
            }`}
            onClick={() => setSelectedGoal("arabic")}
          >

            <div className="goal-top">

              <div className="goal-icon arabic-icon">
                ع
              </div>

              <span className="new-badge">
                قريبًا
              </span>

            </div>

            <h2>تعليم اللغة العربية</h2>

            <p>
              قراءة وكتابة وقواعد للناطقين وغير الناطقين بها،
              بنفس نظام الدفعات والمتابعة.
            </p>

          </button>

        </div>


        {/* =========================
            Buttons
        ========================= */}

        <div className="step-actions">

          <button
            type="button"
            className="continue-btn"
            onClick={handleContinue}
          >
            متابعة
          </button>

          <Link
            to="/signup"
            className="back-btn"
          >
            رجوع
          </Link>

        </div>

      </div>

    </div>
  );
}

export default SignUpStep2;