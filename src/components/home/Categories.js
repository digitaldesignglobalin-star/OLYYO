const categories = [
  "Pizza 🍕",
  "Burger 🍔",
  "Biryani 🍛",
  "Chinese 🥡",
  "Desserts 🍰",
  "South Indian 🥞",
];

export default function Categories() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">
          What’s on your mind?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat}
              className="border rounded-lg p-4 text-center hover:shadow cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
