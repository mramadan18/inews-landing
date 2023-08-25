import Image from "next/image";
// Import images
import logo from "#/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
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
              <a className="nav-link active" aria-current="page" href="#home">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                مميزات التطبيق
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#vision-message"
              >
                الرؤية و الرسالة
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#download-app">
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
