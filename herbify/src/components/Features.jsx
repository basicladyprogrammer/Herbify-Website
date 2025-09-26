function Features() {
  const features = [
    {
      id: 1,
      icon: "🌱",
      title: "100% Organic",
      description:
        "All our products are made with pure, natural, and organic ingredients for your health and wellness.",
    },
    {
      id: 2,
      icon: "💧",
      title: "Cold-Pressed Oils",
      description:
        "We use traditional cold-pressing techniques to preserve nutrients and ensure maximum benefits.",
    },
    {
      id: 3,
      icon: "♻️",
      title: "Eco-Friendly Packaging",
      description:
        "Sustainable packaging that’s kind to the planet and safe for you and your family.",
    },
    {
      id: 4,
      icon: "🧘",
      title: "Wellness Focused",
      description:
        "Designed to promote balance, relaxation, and natural healing in your daily life.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-green-50">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-green-900 mb-6">
          Why Choose Herbify?
        </h2>
        <p className="text-lg text-green-700 max-w-2xl mx-auto mb-12">
          We believe in harnessing the power of nature to create products that
          nurture your body, mind, and spirit.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-xl">
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
