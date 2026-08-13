import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      email: "",
      password: "",
    };

    if (!email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!email.includes("@")) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!password.trim()) {
      newErrors.password = "كلمة المرور مطلوبة";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return;
    }

    console.log({
      email,
      password,
      remember,
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>تسجيل الدخول</h1>

        <p className="login-subtitle">
          ليس لديك حساب؟{" "}
          <Link to="/signup">إنشاء حساب جديد</Link>
        </p>

        <button type="button" className="google-login">
          المتابعة عبر Google
        </button>

        <div className="login-divider">
          <span>أو</span>
        </div>

        <form onSubmit={handleSubmit}>

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

          <label>كلمة المرور</label>

          <div className="login-password-wrapper">

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="login-options">

            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(e.target.checked)
                }
              />

              <span>تذكرني</span>
            </label>

            <a href="#" className="forgot-password">
              نسيت كلمة المرور؟
            </a>

          </div>

          <button
            type="submit"
            className="login-submit"
          >
            تسجيل الدخول
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;