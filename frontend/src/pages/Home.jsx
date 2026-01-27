import ReservationForm from "../components/ReservationForm";

const Home = () => {
  return (
    <div>
      <section className="h-[80vh] bg-[url('/food.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold bg-black/60 p-6 rounded-xl">
          Welcome to Our Restaurant
        </h1>
      </section>

      <section className="py-12 bg-gray-100">
        <ReservationForm />
      </section>
    </div>
  );
};

export default Home;
