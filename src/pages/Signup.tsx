import { useState } from "react";
import Header from "../components/LoginPage/LoginHeader";
import OAuthButton from "../components/LoginPage/LoginOauth";
import InputField from "../components/LoginPage/LoginInput";
import PasswordInput from "../components/LoginPage/LoginPassword";
import LoginImage from "../components/LoginPage/LoginImage";
import Footer from "../components/LoginPage/LoginFooter";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

interface FormErrors {
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleEmailBlur = () => {
    if (!formData.email) return;
    if (!isValidEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.email) newErrors.email = "Email is required.";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Please enter a valid email address.";

    if (!formData.phone) newErrors.phone = "Phone number is required.";

    if (!formData.password) newErrors.password = "Password is required.";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    //api goes here
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans ">
      <div className="flex w-full justify-center max-h-220 bg-white ">
        <div className="hidden md:block">
          <LoginImage />
        </div>
        <div className="relative flex flex-col w-full md:w-105 shrink-0 py-17 px-10 ">
          <Header
            title="Welcome"
            subtitle="Sign up to TalentFlow to create an account"
          />
          <div className="px-5 py-5 rounded-xl border border-gray-200 w-full mb-3">
            <OAuthButton />
            <form onSubmit={handleSubmit} noValidate>
              <InputField
                id="email"
                type="email"
                placeholder="Enter your email"
                icon={
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <rect
                      x="1"
                      y="3"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M1 5.5L8 10L15 5.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                error={errors.email}
                onBlur={handleEmailBlur}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <InputField
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                error={errors.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <PasswordInput
                id="password"
                label="Password"
                placeholder="Create a password"
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                error={errors.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <PasswordInput
                id="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
                error={errors.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11.5 rounded-xl bg-[#6090FA] text-white text-[15px] font-medium hover:bg-[#3451C7] active:scale-[0.99] transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </button>
            </form>
          </div>
          <Footer
            title="Login"
          />
        </div>
      </div>
    </div>
  );
}
