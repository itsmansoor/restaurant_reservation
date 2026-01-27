import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">
          🍽️ FoodieHub
        </h1>

        <ul className="flex gap-6 font-medium">
          <li><Link to="/" className="hover:text-red-600">Home</Link></li>
          <li><Link to="/menu" className="hover:text-red-600">Menu</Link></li>
          <li><Link to="/about" className="hover:text-red-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
