const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us 🍽️</h1>
      <p className="text-gray-700 text-lg leading-relaxed text-center">
        Welcome to <span className="font-semibold">FoodieHub</span>, where
        flavor meets passion. We serve freshly cooked meals using high-quality
        ingredients in a cozy and friendly environment.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <img src="/restaurant-min.jpg" className="rounded-xl" />
        <div>
          <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Fresh & hygienic food prepared daily</li>
            <li>Professional and experienced chefs</li>
            <li>Comfortable and family-friendly seating</li>
            <li>Easy online table reservation system</li>
            <li>Fast and friendly customer service</li>
            <li>Wide variety of local & international dishes</li>
            <li>Affordable prices with premium quality</li>
            <li>Clean and modern restaurant environment</li>
            <li>Special discounts for events and groups</li>
            <li>Fresh ingredients sourced daily</li>
            <li>Takeaway and dine-in options available</li>
            <li>Quick order preparation time</li>
            <li>Secure online booking experience</li>
            <li>Perfect place for family gatherings</li>
            <li>Free Wi-Fi for customers</li>
            <li>Hygienic kitchen and food safety standards</li>
            <li>Custom orders available on request</li>
            <li>Peaceful ambiance with great music</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
