import Image from "next/image";
// Import images
import logo from "#/images/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [hash, setHash] = useState("#home");

  useEffect(() => {
    if (location.hash) {
      setHash(location.hash);
    }
  }, []);

  const handleClick = (hash) => {
    setHash(hash);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white position-fixed top-0 start-0 w-100 z-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image src={logo} alt="logo-img" priority />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4 gap-4">
            <li className="nav-item">
              <a
                className={`nav-link ${hash === "#home" ? "active" : ""}`}
                aria-current="page"
                href="#home"
                onClick={() => handleClick("#home")}
              >
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${hash === "#features" ? "active" : ""}`}
                href="#features"
                onClick={() => handleClick("#features")}
              >
                مميزات التطبيق
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  hash === "#vision-message" ? "active" : ""
                }`}
                aria-current="page"
                href="#vision-message"
                onClick={() => handleClick("#vision-message")}
              >
                الرؤية و الرسالة
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  hash === "#download-app" ? "active" : ""
                }`}
                aria-current="page"
                href="#download-app"
                onClick={() => handleClick("#download-app")}
              >
                تحميل التطبيق
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn text-white rounded-0 px-4" type="submit">
              حمل التطبيق
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
