import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <main className="min-h-screen flex justify-center items-center px-6">
      <div className="grid place-items-center bg-primary-foreground w-full md:w-2/3 max-w-200 px-6 md:px-11.75 py-12 md:pt-16 md:pb-18.5 rounded-xl text-center shadow-md ring-2 ring-primary/30">
        <svg
          aria-hidden="true"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 md:w-10 mb-6"
        >
          <path
            d="M32.5 14V10C32.5 4.4 27 0 20 0C13 0 7.5 4.4 7.5 10V14C3.25 14 0 16.6 0 20V34C0 37.4 3.25 40 7.5 40H32.5C36.75 40 40 37.4 40 34V20C40 16.6 36.75 14 32.5 14ZM12.5 10C12.5 6.6 15.75 4 20 4C24.25 4 27.5 6.6 27.5 10V14H12.5V10ZM22.75 27L22.5 27.2V30C22.5 31.2 21.5 32 20 32C18.5 32 17.5 31.2 17.5 30V27.2C16 26 15.75 24.2 17.25 23C18.75 21.8 21 21.6 22.5 22.8C24 23.8 24.25 25.8 22.75 27Z"
            fill="#6B7280"
          />
        </svg>

        <h4 className="font-semibold text-heading text-xl md:text-2xl leading-normal">
          You have been logged out
        </h4>
        <p className="text-sm md:text-base">Thank you for using Talentflow</p>
        <Link
          to="/login"
          className=" block w-full bg-primary text-primary-foreground hover:bg-primary/80 text-base leading-6 font-semibold mt-9 py-2 md:py-4 rounded-xl"
        >
          Log Back In
        </Link>
        <Link
          to="/"
          className=" block w-full text-primary text-base leading-6 font-semibold mt-2 py-2 md:py-4 rounded-xl border border-primary hover:bg-primary/10"
        >
          Go To Homepage
        </Link>
      </div>
    </main>
  );
};

export default Logout;
