import { useState } from "react";
import SignUpImg from "../assets/images/auth/auth.png";
import Logo from "../assets/logo.svg"
import { Eye, EyeOff, Lock, X } from "lucide-react";

// Google icon kept as SVG since lucide-react doesn't include brand logos
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
    <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"/>
    <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
    <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
  </svg>
);

const TalentFlowLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <img src={Logo} alt="TalentFlow Logo" width={80} height={0} />
</div>

);

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  showToggle = false,
  showPassword = false,
  onTogglePassword,
}: InputFieldProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{
        fontFamily: "'Sans', sans-serif",
        fontSize: "13.5px",
        fontWeight: 500,
        color: "#374151",
      }}>
        {label}
      </label>
      <div style={{
        display: "flex",
        alignItems: "center",
        border: `1.5px solid ${focused ? "#3B82F6" : "#E5E7EB"}`,
        borderRadius: "10px",
        padding: "0 12px",
        gap: "8px",
        background: "#fff",
        transition: "border-color 0.2s",
        boxShadow: focused ? "0 0 0 3px rgba(59,130,246,0.1)" : "none",
      }}>
        <Lock size={14} color="#9CA3AF" />
        <input
          type={showToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            fontFamily: "'sans', sans-serif",
            fontSize: "13.5px",
            color: "#111827",
            padding: "12px 0",
            background: "transparent",
          }}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
          >
            {showPassword ? <Eye size={16} color="#9CA3AF" /> : <EyeOff size={16} color="#9CA3AF" />}
          </button>
        )}
      </div>
    </div>
  );
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Sign up submitted!");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: 'Sans', sans-serif;
        }

        .signup-card {
          display: flex;
          width: 900px;
          min-height: 600px;
          background: #fff;
        //   border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          position: relative;
        }

        .left-panel {
          width: 42%;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .left-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .left-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(59,130,246,0.08) 0%,
            rgba(29,78,216,0.75) 70%,
            rgba(29,78,216,0.92) 100%
          );
        }

        .left-text {
          position: absolute;
          bottom: 32px;
          left: 28px;
          right: 28px;
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.4;
        }

        .right-panel {
          flex: 1;
          padding: 36px 40px 32px;
          overflow-y: auto;
          position: relative;
        }

        .logo-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid #E5E7EB;
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #374151;
          transition: background 0.2s, border-color 0.2s;
        }

        .close-btn:hover {
          background: #F9FAFB;
          border-color: #D1D5DB;
        }

        .welcome-heading {
          font-family: 'Sora', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }

        .welcome-sub {
          font-family: 'Sora', sans-serif;
          font-size: 13.5px;
          color: #6B7280;
          margin-bottom: 24px;
        }

        .form-card {
          border: 1.5px solid #E5E7EB;
          border-radius: 14px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 16px;
        }

        .google-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1.5px solid #E5E7EB;
          background: #fff;
          border-radius: 10px;
          padding: 11px;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }

        .google-btn:hover {
          background: #F9FAFB;
          border-color: #D1D5DB;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #E5E7EB;
        }

        .divider-text {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          color: #9CA3AF;
        }

        .signup-btn {
          width: 100%;
          padding: 13px;
          background: #3B82F6;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.1px;
          transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
        }

        .signup-btn:hover {
          background: #2563EB;
          box-shadow: 0 4px 14px rgba(59,130,246,0.35);
          transform: translateY(-1px);
        }

        .signup-btn:active {
          transform: translateY(0);
        }
 
        .terms-text {
          font-family: 'Sora', sans-serif;
          font-size: 12.5px;
          color: #6B7280;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .terms-text strong {
          color: #111827;
          font-weight: 600;
        }

        .login-row {
          font-family: 'Sora', sans-serif;
          font-size: 13.5px;
          color: #374151;
          text-align: center;
        }

        .login-link {
          color: #3B82F6;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
        }

        .login-link:hover {
          color: #2563EB;
          text-decoration: underline;
        }
      `}</style>

      <div className="signup-card">
        {/* Left Panel */}
        <div className="left-panel">
            
          <img
            src={SignUpImg}
            alt="Students learning together"
          />
          <div className="left-overlay" />

          <div className="left-text">

            Take your prefer courses anywhere, anytime on any device.
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <div className="logo-row">
            <TalentFlowLogo />
            <button className="close-btn" type="button">
              <X size={18} />
            </button>
          </div>

          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-sub">Sign up to TalentFlow to create an account</p>

          <div className="form-card">
            {/* Google Sign In */}
            <button className="google-btn" type="button">
              <GoogleIcon />
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="divider">
              <div className="divider-line" />
              <span className="divider-text">Or</span>
              <div className="divider-line" />
            </div>

            {/* Email */}
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Confirm Email */}
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your Email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />

            {/* Password */}
            <InputField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showToggle
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showToggle
              showPassword={showConfirmPassword}
              onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            />

            {/* Sign Up Button */}
            <button className="signup-btn" type="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>

          {/* Terms */}
          <p className="terms-text">
            By Continuing, you agree to our <strong>Privacy Policy &amp; Terms and conditions.</strong>
          </p>

          {/* Login Link */}
          <p className="login-row">
            Don't have an account?{" "}
            <a href="#" className="login-link">Login</a>
          </p>
        </div>
      </div>
    </>
  );
}
