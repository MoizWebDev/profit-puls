import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Cookies from "js-cookie";

// function Header() {
//   const { data: session, status } = useSession();

//   if (status === "authenticated") {
//     return (
//       <header>
//         <p>!</p>
//       </header>
//     );
//   }

//   return <header>Not logged in</header>;
// }

const Header = () => {
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check client-side only
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    Cookies.remove("user");
    await signOut({ redirect: false }); // Call signOut from next-auth
    // Optional: Manually handle redirect or state update after logout
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow sticky-top p-0">
      <a
        href="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <img
          src="/img/logoo.png"
          alt="/img/logoo.png"
          className="me-3 h-100 w-100"
          style={{
            filter: "invert(100%)",
            height: "65px!important",
            width: "65px!important",
          }}
        />
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item nav-link active">
            Home
          </a>
          <Link href="/about" className="nav-item nav-link">
            About Us
          </Link>
          <Link href="/team" className="nav-item nav-link">
            Our Team
          </Link>
          <Link href="/services" className="nav-item nav-link">
            Services
          </Link>
          <Link href="/contact" className="nav-item nav-link">
            Contact Us
          </Link>
          {!isClient ? (
            <></>
          ) : !session ? (
            <>
              <Link href="/login" className="nav-item nav-link">
                Login
              </Link>
              <Link href="/register" className="nav-item nav-link">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="btn py-4 px-lg-5 d-none d-lg-block rounded-pill"
                style={{
                  backgroundColor: "orange",
                  borderColor: "orange",
                  color: "pink",
                }}
              >
                {/* Welcome, {session.user.username} */}
                {/* Update property access */}
                <i className="fa fa-arrow-right ms-3"></i>
              </Link>
              <button
                onClick={handleLogout}
                className="btn py-4 px-lg-5 d-none d-lg-block rounded-pill"
                style={{
                  backgroundColor: "orange",
                  borderColor: "orange",
                  color: "pink",
                }}
              >
                LOGOUT
                {/* Update property access */}
                <i className="fa fa-arrow-right ms-3"></i>
              </button>
            </>
          )}
        </div>
        {!isClient ? (
          <></>
        ) : !session ? (
          <Link
            href="/register"
            className="btn py-4 px-lg-5 d-none d-lg-block rounded-pill"
            style={{
              backgroundColor: "orange",
              borderColor: "orange",
              color: "white",
            }}
          >
            Join Now<i className="fa fa-arrow-right ms-3"></i>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Header;
