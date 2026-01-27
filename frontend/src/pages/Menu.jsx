import MenuCard from "../components/MenuCard";

const menuData = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy beef patty with melted cheese",
    price: 8.99,
    image: "/card1-min.png",
  },
  {
    id: 2,
    name: "Italian Pizza",
    description: "Classic pizza with fresh toppings",
    price: 12.99,
    image: "/card2-min.png",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    description: "Creamy pasta with parmesan",
    price: 10.99,
    image: "/card4-min.png",
  },
];

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Menu 🍔
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {menuData.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
