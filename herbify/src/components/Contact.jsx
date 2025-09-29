import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-green-900 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-green-700 text-center mb-12 max-w-2xl mx-auto">
          Have a question or want to know more about Herbify products? We’d love
          to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-2xl p-8">
            <div className="mb-4">
              <label className="block text-green-800 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-green-800 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-green-800 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message"
                rows="4"
                className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              Colombo, Sri Lanka
            </p>
            <p className="text-gray-700 mb-2 flex items-center gap-2">
              <FaPhone className="text-green-600" />
              +94 77 123 4567
            </p>
            <p className="text-gray-700 mb-6 flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              support@herbify.com
            </p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:text-green-800 transition">
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:text-green-800 transition">
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-green-600 hover:text-green-800 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
