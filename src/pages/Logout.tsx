import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";

const Logout = () => {
  return (
    <>
      <div className="relative bg-primary-foreground w-[60%] my-50 mx-auto py-50 rounded-xl text-center shadow-md ring-2 ring-primary/30">
       <LockKeyhole className="absolute w-18 h-18  text-text-muted top-1/10 left-1/2  -translate-x-1/2"/>
        <h4 className="font-bold text-heading text-4xl mt-4 mb-2">
          You have been logged out
        </h4>
        <p className="text-xl">Thank you for using Talentflow</p>
        <Link
          to="/"
          className=" block w-[80%] mx-auto bg-primary text-primary-foreground hover:bg-primary/80 text-2xl mt-15 py-6 rounded-xl"
        >
          Log Back In
        </Link>
        <Link
          to="/"
          className=" block w-[80%] mx-auto  text-primary  text-2xl mt-6 py-5 rounded-xl border border-primary hover:bg-primary/10"
        >
          Go To Homepage
        </Link>
      </div>
        
    </>
  );
};

export default Logout;
