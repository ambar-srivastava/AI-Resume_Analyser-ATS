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
      navigate("/");
    }
  }, [auth.isAuthenticated, next]);

  return (
    <nav className="navbar gap-2 md:gap-6">
      <div className="flex items-center justify-between w-full gap-4">
        <Link to="/">
          <p className="text-2xl font-bold text-gradient uppercase">
            Resulyzer
          </p>
        </Link>
        <Link to="/upload" className="primary-button text-center w-fit">
          Upload Resume
        </Link>
      </div>
      {auth.isAuthenticated && (
        <button className="primary-button w-fit text-center" onClick={auth.signOut}>
          <p>Logout</p>
        </button>
      )}
    </nav>
  );
};

export default Navbar;
