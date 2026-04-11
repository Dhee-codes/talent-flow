import { Link, useLocation } from "react-router-dom";

const pageNames: Record<string, string> = {
  "/cart": "Cart",
  "/courses": "My Courses",
  "/chat": "Chat",
  "/verify-certificate": "Verify Certificate",
  "/blog": "Blog",
  "/contact": "Contact Us",
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const pageName = pageNames[pathname] ?? "This page";

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{pageName}</h1>
      <p className="text-gray-500 text-sm mb-8">
        We&#39;re working on this. Check back soon.
      </p>
      <Link
        to="/"
        className="bg-primary hover:bg-accent text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
