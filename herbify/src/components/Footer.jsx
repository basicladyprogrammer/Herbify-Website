function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-10 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Herbify 🌿</h2>
          <p className="text-green-200 text-sm leading-relaxed">
            Bringing nature’s best to you — pure herbal oils and natural
            remedies for a healthy lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-green-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Care
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#faq" className="hover:text-green-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-green-400 transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-green-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-green-400 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Get in Touch
          </h3>
          <p className="text-sm">📍 Colombo, Sri Lanka</p>
          <p className="text-sm">📞 +94 77 123 4567</p>
          <p className="text-sm">✉️ support@herbify.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400">
              🌐
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400">
              📸
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400">
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-green-300 mt-8 border-t border-green-700 pt-4">
        © {new Date().getFullYear()} Herbify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
