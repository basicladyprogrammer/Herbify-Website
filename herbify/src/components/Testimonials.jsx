import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import boy1 from "../assets/boy1.jpg";

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

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-green-900 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg text-green-700 mb-12 max-w-2xl mx-auto">
          Don’t just take our word for it — here’s how Herbify has made a
          difference in people’s lives.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-xl">
              {/* Customer Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-green-200 object-cover mb-4"
              />

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-green-800">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>

              {/* Feedback */}
              <p className="mt-3 text-gray-600 text-sm italic">
                “{t.feedback}”
              </p>

              {/* Rating */}
              <div className="flex justify-center mt-3 text-yellow-500">
                {"⭐".repeat(t.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
