import "./quran-assessment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuranAssessment() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    memorization: "",
    tajweed: "",
    goal: "",
    time: "",
  });

  const handleAnswer = (question: keyof typeof answers, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  const handleContinue = () => {
    if (!allAnswered) {
      return;
    }

    console.log("Quran assessment:", answers);

    navigate("/signup/step4");
  };

  const allAnswered =
    answers.memorization !== "" &&
    answers.tajweed !== "" &&
    answers.goal !== "" &&
    answers.time !== "";

  return (
    <div className="assessment-page">
      <div className="assessment-container">
        {/* =========================
            Progress
        ========================= */}

        <div className="assessment-progress">
          <div className="assessment-progress-top">
            <span>الخطوة ٢ من ٢</span>

            <span>تقدم رائع! استمر</span>
          </div>

          <div className="assessment-progress-bar">
            <div className="assessment-progress-fill"></div>
          </div>
        </div>

        {/* =========================
            Main Layout
        ========================= */}

        <div className="assessment-layout">
          {/* =========================
              Left Summary
          ========================= */}

          <div className="assessment-summary">
            <h3>لماذا نسألك هذا؟</h3>

            <p>
              إجاباتك تتيح لنا معرفة المستوى وتوقيتات الحلقات، لكن القرار
              النهائي يعتمد على تقييم المستوى مع المعلم.
            </p>

            <div className="summary-divider"></div>

            <span className="summary-title">اختياراتك الحالية</span>

            <strong>
              {answers.memorization} - {answers.tajweed}
            </strong>
          </div>

          {/* =========================
              Questions
          ========================= */}

          <div className="assessment-content">
            <h1>تقييم سريع لمستواك</h1>

            <p className="assessment-description">
              يساعدنا على تجهيز الحلقة وترشيح الفرقة الأنسب. لا توجد إجابة
              خاطئة.
            </p>

            {/* =========================
                Question 1
            ========================= */}

            <div className="question">
              <h2>كم تحفظ من القرآن حاليًا؟</h2>

              <div className="options">
                {[
                  "مبتدئ - أقل من جزء",
                  "٣ أجزاء تقريبًا",
                  "٥ إلى ١٠ أجزاء",
                  "أكثر من ١٠ أجزاء",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      answers.memorization === option
                        ? "option selected"
                        : "option"
                    }
                    onClick={() => handleAnswer("memorization", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* =========================
                Question 2
            ========================= */}

            <div className="question">
              <h2>مستوى إتقان التلاوة والتجويد</h2>

              <div className="options small-options">
                {["مبتدئ", "متوسط", "متقن"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      answers.tajweed === option ? "option selected" : "option"
                    }
                    onClick={() => handleAnswer("tajweed", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* =========================
                Question 3
            ========================= */}

            <div className="question">
              <h2>هدفك من الانضمام</h2>

              <div className="options">
                {[
                  "حفظ القرآن كاملًا",
                  "تثبيت المحفوظ",
                  "تحسين التلاوة",
                  "إجازة بالسند",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={
                      answers.goal === option ? "option selected" : "option"
                    }
                    onClick={() => handleAnswer("goal", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* =========================
                Question 4
            ========================= */}

            <div className="question">
              <h2>أوقاتك المفضلة للحلقات</h2>

              <div className="options">
                {["صباحًا", "بعد العصر", "بعد العشاء", "نهاية الأسبوع"].map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        answers.time === option ? "option selected" : "option"
                      }
                      onClick={() => handleAnswer("time", option)}
                    >
                      {option}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* =========================
                Actions
            ========================= */}

            <div className="assessment-actions">
              <button
                type="button"
                className="assessment-continue"
                disabled={!allAnswered}
                onClick={handleContinue}
              >
                متابعة إلى حجز المقابلة
              </button>

              <button
                type="button"
                className="assessment-back"
                onClick={() => navigate("/signup/step2")}
              >
                رجوع
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuranAssessment;
