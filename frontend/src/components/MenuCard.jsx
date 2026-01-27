const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-red-600 font-bold">
            ${item.price}
          </span>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
