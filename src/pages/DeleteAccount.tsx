import { Link } from "react-router-dom";

const DeleteAccount = () => {
  return (
    <main className="min-h-screen flex justify-center items-center px-6">
      <div className="grid place-items-center bg-primary-foreground w-full md:w-2/3 max-w-200 px-6 md:px-11.75 py-12 md:pt-16 md:pb-18.5 rounded-xl text-center shadow-md ring-2 ring-primary/30">
        <h1 className="font-semibold text-heading text-xl md:text-2xl leading-normal">
          Close Account
        </h1>
        <p className="mt-1 md:mt-2 text-base md:text-lg text-muted-dark">Close your account permanently</p>
        <p className="mt-1 md:mt-2 text-xs text-muted-dark">
          <span className="text-error-dark">Warning</span>: If you close your account, you will be unsubscribed from all
          1 of your courses and will lose access to your account and data
          associated with your account forever, even if you choose to create a
          new account using the same email address in the future.
        </p>
        <Link
          to="/login"
          className=" block w-full bg-warning-dark text-primary-foreground hover:bg-warning-dark/80 text-base leading-6 font-semibold mt-9 py-3 md:py-4 rounded-lg"
        >
          Close Account
        </Link>
        <Link
          to="/"
          className=" block w-full text-primary text-base leading-6 font-semibold mt-4 py-3 md:py-4 rounded-lg border border-primary hover:bg-primary/10"
        >
          Go To Homepage
        </Link>
      </div>
    </main>
  );
};

export default DeleteAccount;
