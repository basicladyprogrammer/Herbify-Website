import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import boy1 from "../assets/boy1.jpg";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Anushka Perera",
      role: "Regular Customer",
      feedback:
        "Herbify’s Herbal Hair Oil transformed my hair! It feels stronger and healthier every day. 🌿",
      image: girl1,
      rating: 5,
    },
    {
      id: 2,
      name: "Nadeesha Silva",
      role: "Yoga Instructor",
      feedback:
        "I love the Aloe Vera Gel. It keeps my skin fresh and natural after every yoga session. 💧",
      image: girl2,
      rating: 4,
    },
    {
      id: 3,
      name: "Tharindu Fernando",
      role: "Fitness Coach",
      feedback:
        "The Neem Face Wash is a game-changer. No more acne issues, and I feel confident again! 💪",
      image: boy1,
      rating: 5,
    },
  ];

  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg text-green-700 mb-12 max-w-2xl mx-auto">
          Don’t just take our word for it — here’s how Herbify has made a
          difference in people’s lives.
        </p>

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          {scrollingTestimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center min-w-[300px] max-w-[300px]">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-green-800 object-cover mb-4"
              />

              <h3 className="text-lg font-bold text-green-800">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>

              <p className="mt-3 text-gray-600 text-sm italic">
                “{t.feedback}”
              </p>

              <div className="flex justify-center mt-3 text-yellow-500">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
