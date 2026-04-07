export default function LoginOauth() {
  const handleGoogleLogin = () => {
  console.log("Google login clicked");
};
  return (
    <div className="w-full flex items-center justify-center flex-col ">
    <button className="w-full flex items-center justify-center gap-2.5 h-11 rounded-xl border border-gray-500 bg-white text-[14px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition cursor-pointer" onClick={handleGoogleLogin}>
      <svg width="18" height="18" viewBox="0 0 18 18">
        <path
          d="M16.51 8H9v2.7h4.3c-.4 2-2.1 3.3-4.3 3.3-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7c1.2 0 2.3.5 3.1 1.2L14 3.7C12.6 2.4 10.9 1.5 9 1.5 4.9 1.5 1.5 4.9 1.5 9s3.4 7.5 7.5 7.5c4.2 0 7-2.9 7-7.2 0-.5 0-1-.49-1.3z"
          fill="#4285F4"
        />
        <path
          d="M1.5 5.3l2.2 1.6c.6-1.8 2.3-3 4.3-3 1.2 0 2.3.5 3.1 1.2L14 3.7C12.6 2.4 10.9 1.5 9 1.5c-3 0-5.6 1.6-7.1 3.8z"
          fill="#EA4335"
        />
        <path
          d="M9 16.5c1.9 0 3.5-.6 4.7-1.7l-2.2-1.8c-.7.5-1.6.8-2.5.8-2.2 0-4-1.4-4.7-3.3L1.6 12c1.4 2.5 4 4.5 7.4 4.5z"
          fill="#34A853"
        />
        <path
          d="M16.51 8H9v2.7h4.3c-.2.9-.8 1.7-1.6 2.2l2.2 1.8c1.3-1.2 2.1-3 2.1-5.2 0-.5-.04-1-.06-1.5z"
          fill="#FBBC05"
        />
      </svg>
      Sign in with Google
    </button>
    <div className="flex items-center gap-3 my-3 w-full">
      <div className="flex-1 h-px bg-gray-300" />
      <span className="text-s text-gray-600 font-medium">Or</span>
      <div className="flex-1 h-px bg-gray-400" />
    </div>
    </div>
  );
}
