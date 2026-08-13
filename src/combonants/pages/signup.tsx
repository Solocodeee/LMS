import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      phone: "",
      password: "",
      agree: "",
    };

    // الاسم
    if (!name.trim()) {
      newErrors.name = "الاسم الكامل مطلوب";
    }

    // الإيميل
    if (!email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!email.includes("@")) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    // رقم الجوال
    if (!phone.trim()) {
      newErrors.phone = "رقم الجوال مطلوب";
    }

    // كلمة المرور
    if (!password.trim()) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (password.length < 8) {
      newErrors.password =
        "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
    }

    // الموافقة
    if (!agree) {
      newErrors.agree = "يجب الموافقة على الشروط";
    }

    // حفظ الأخطاء
    setErrors(newErrors);

    // هل يوجد أخطاء؟
    const hasErrors = Object.values(newErrors).some(
      (error) => error !== ""
    );

    // لو فيه أخطاء، نوقف هنا
    if (hasErrors) {
      return;
    }

    // لو كل البيانات صحيحة → الخطوة الثانية
    navigate("/signup/step2");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* العنوان */}

        <h1>إنشاء حساب جديد</h1>

        {/* تسجيل الدخول */}

        <p>
          لديك حساب؟{" "}
          <Link to="/login">تسجيل الدخول</Link>
        </p>

        {/* Google */}

        <button type="button">
          المتابعة عبر Google
        </button>

        {/* Divider */}

        <div>
          <span>أو</span>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit}>

          {/* الاسم */}

          <label>الاسم الكامل</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="سالم أحمد"
          />

          {errors.name && (
            <span className="error">
              {errors.name}
            </span>
          )}


          {/* الإيميل */}

          <label>البريد الإلكتروني</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="salem@example.com"
          />

          {errors.email && (
            <span className="error">
              {errors.email}
            </span>
          )}


          {/* الجوال */}

          <label>رقم الجوال</label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="05x xxx xxxx"
          />

          {errors.phone && (
            <span className="error">
              {errors.phone}
            </span>
          )}


          {/* كلمة المرور */}

          <label>كلمة المرور</label>

          <div className="password-wrapper">

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="••••••••"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
            >
              {showPassword ? "إخفاء" : "إظهار"}
            </button>

          </div>

          {errors.password && (
            <span className="error">
              {errors.password}
            </span>
          )}


          {/* الموافقة */}

          <label className="agree-label">

            <input
              type="checkbox"
              checked={agree}
              onChange={(e) =>
                setAgree(e.target.checked)
              }
            />

            <span>
              أوافق على شروط الاستخدام وسياسة الخصوصية
            </span>

          </label>

          {errors.agree && (
            <span className="error">
              {errors.agree}
            </span>
          )}


          {/* Submit */}

          <button type="submit">
            إنشاء الحساب والمتابعة
          </button>

        </form>

      </div>
    </div>
  );
}

export default SignUp;