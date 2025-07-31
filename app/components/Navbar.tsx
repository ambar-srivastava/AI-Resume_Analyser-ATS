import { useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import auth from "~/routes/auth";

const Navbar = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next]);

  return (
    <nav className="navbar gap-6">
      <div className="flex items-center justify-between w-full">
        <Link to="/">
          <p className="text-2xl font-bold text-gradient uppercase">
            Resulyzer
          </p>
        </Link>
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      </div>
      {auth.isAuthenticated && (
        <button className="primary-button w-fit" onClick={auth.signOut}>
          <p>Logout</p>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
