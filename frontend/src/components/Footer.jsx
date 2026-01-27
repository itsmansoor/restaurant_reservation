const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-2">
          FoodieHub 🍕
        </h2>
        <p className="text-gray-400">
          Delicious food & cozy ambiance
        </p>
        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} FoodieHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
