import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Herbify Logo" className="w-10 h-10" />
          <span className="text-2xl font-extrabold text-green-700">
            Herbify
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-green-800 font-medium hover:text-green-600 transition">
            Home
          </a>
          <a
            href="#products"
            className="text-green-800 font-medium hover:text-green-600 transition">
            Products
          </a>
          <a
            href="#contact"
            className="text-green-800 font-medium hover:text-green-600 transition">
            Contact
          </a>
        </nav>

        {/* Shop Now Button */}
        <a
          href="#shop"
          className="ml-6 px-5 py-2 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition">
          Shop Now
        </a>
      </div>
    </header>
  );
}

export default Header;
