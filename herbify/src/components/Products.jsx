import oil from "../assets/oil.png";
import aloe from "../assets/aloe.png";
import hairoil from "../assets/hairoil.png";
import neem from "../assets/neem.png";

function Products() {
  const products = [
    {
      id: 1,
      name: "Herbal Hair Oil",
      description: "Strengthens roots and promotes healthy growth.",
      price: "Rs. 1,200",
      image: hairoil,
    },
    {
      id: 2,
      name: "Aloe Vera Gel",
      description: "Soothes skin and provides natural hydration.",
      price: "Rs. 950",
      image: aloe,
    },
    {
      id: 3,
      name: "Neem Face Wash",
      description: "Cleanses deeply and prevents acne naturally.",
      price: "Rs. 850",
      image: neem,
    },
    {
      id: 4,
      name: "Coconut Body Oil",
      description: "Pure coconut oil for silky smooth skin.",
      price: "Rs. 1,500",
      image: oil,
    },
  ];

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-green-900 mb-12">
          Our Herbal Products 🌿
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-2xl">
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mb-4 hover:rotate-3 transition"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-green-800">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">
                {product.description}
              </p>

              {/* Price */}
              <span className="mt-3 text-lg font-bold text-green-700">
                {product.price}
              </span>

              {/* Button */}
              <a
                href="#shop"
                className="mt-4 px-5 py-2 bg-green-600 text-white rounded-full font-medium shadow-md hover:bg-green-700 transition">
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
