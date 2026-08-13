import "./BookingConfirmation.css";

type BookingConfirmationProps = {
  day: string;
  date: number;
  time: string;
  onClose: () => void;
  onConfirm: () => void;
};

function BookingConfirmation({
  day,
  date,
  time,
  onClose,
  onConfirm,
}: BookingConfirmationProps) {
  const meetLink = "https://meet.google.com/";

  return (
    <div className="confirmation-overlay">

      <div className="confirmation-modal">

        {/* Close */}

        <button
          type="button"
          className="confirmation-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* Header */}

        <div className="confirmation-header">

          <div className="confirmation-check">
            ✓
          </div>

          <h2>
            تأكيد الحجز
          </h2>

          <p>
            راجع تفاصيل موعدك قبل تأكيد الحجز
          </p>

        </div>


        {/* Booking Details */}

        <div className="confirmation-details">

          <div className="confirmation-detail">

            <span className="detail-icon">
              م
            </span>

            <div>
              <span className="detail-label">
                نوع المقابلة
              </span>

              <strong>
                مقابلة تحديد المستوى
              </strong>
            </div>

          </div>


          <div className="confirmation-detail">

            <span className="detail-icon">
              📅
            </span>

            <div>
              <span className="detail-label">
                الموعد
              </span>

              <strong>
                {day} {date} · {time}
              </strong>
            </div>

          </div>


          <div className="confirmation-detail">

            <span className="detail-icon">
              ⏱
            </span>

            <div>
              <span className="detail-label">
                المدة
              </span>

              <strong>
                15 دقيقة
              </strong>
            </div>

          </div>


          <div className="confirmation-detail">

            <span className="detail-icon">
              M
            </span>

            <div>
              <span className="detail-label">
                طريقة المقابلة
              </span>

              <strong>
                Google Meet
              </strong>
            </div>

          </div>

        </div>


        {/* Meet */}

        <div className="meet-box">

          <div className="meet-box-icon">
            M
          </div>

          <div className="meet-box-content">

            <strong>
              رابط المقابلة
            </strong>

            <a
              href={meetLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              فتح رابط Google Meet
            </a>

          </div>

        </div>


        {/* Preparation */}

        <div className="prepare-box">

          <h3>
            جهز نفسك للمقابلة
          </h3>

          <ul>

            <li>
              <span>✓</span>
              استخدم متصفحًا حديثًا
            </li>

            <li>
              <span>✓</span>
              تأكد من السماعة والميكروفون
            </li>

            <li>
              <span>✓</span>
              اختر مكانًا هادئًا
            </li>

            <li>
              <span>✓</span>
              تأكد من اتصال الإنترنت
            </li>

          </ul>

        </div>


        {/* Actions */}

        <div className="confirmation-actions">

          <button
            type="button"
            className="confirm-final-btn"
            onClick={onConfirm}
          >
            تأكيد الحجز
          </button>

          <button
            type="button"
            className="confirmation-back-btn"
            onClick={onClose}
          >
            رجوع
          </button>

        </div>


        <p className="confirmation-footer">
          يمكنك إعادة الجدولة حتى ساعتين قبل الموعد
        </p>

      </div>

    </div>
  );
}

export default BookingConfirmation;