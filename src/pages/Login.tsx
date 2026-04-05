"use client";
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
  password?: string;
}
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailBlur = () => {
    if (!email) return;
    if (!isValidEmail(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  // Clear field error as user types
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password)
      setErrors((prev) => ({ ...prev, password: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation before hitting backend
    const newErrors: FormErrors = {};
    if (!email) newErrors.email = "Email is required.";
    else if (!isValidEmail(email))
      newErrors.email = "Please enter a valid email address.";
    if (!password) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
//uncommment this part once you get API
    // try {
      
    //   const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await res.json();

    //   if (!res.ok) {
    //     setErrors({
    //       email: data.errors?.email,
    //       password: data.errors?.password,
    //     });
    //   } else {
    //   }
    // } catch {
    //   setErrors({ password: "Something went wrong. Please try again." });
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans ">
      <div className="flex w-full justify-center max-h-177.5 bg-white ">
        <div className="hidden md:block">
          <LoginImage />
        </div>
        <div className="relative flex flex-col w-full md:w-105 shrink-0 py-12 px-10 ">
          <Header
            title="Welcome"
            subtitle="Login to your TalentFlow account and continue learning"
          />
          <div className="px-5 py-5 rounded-xl border border-gray-200 w-full mb-3">
            <OAuthButton />
            <form onSubmit={handleSubmit} noValidate>
              <InputField
                id="email"
                type="email"
                placeholder="Enter your email"
                error={errors.email}
                onBlur={handleEmailBlur}
                onChange={handleEmailChange}
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
              />
              <PasswordInput
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                error={errors.password}
                onChange={handlePasswordChange}
              />
              <div className="flex justify-end mb-3">
                <button
                  type="button"
                  className="text-[12.5px] text-[gray] hover:text-[#6090FA]"
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11.5 rounded-xl bg-[#6090FA] text-white text-[15px] font-medium hover:bg-[#3451C7] active:scale-[0.99] transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
          <Footer 
            title="Sign up"
            subtitle="Don't have an account?"
              to="/signup"
          />
        </div>
      </div>
    </div>
  );
}
