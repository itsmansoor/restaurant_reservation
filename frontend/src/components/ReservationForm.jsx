import { useState } from "react";
import toast from "react-hot-toast";
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      toast.success("Reservation confirmed! Check your email");

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
      });
    } catch (error) {
      toast.error("Server error");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center">Book a Table 🍽️</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        value={formData.guests}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg"
        required
      />

      <button
        disabled={loading}
        className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
      >
        {loading ? "Booking..." : "Reserve Now"}
      </button>
    </form>
  );
};

export default ReservationForm;
