import { useState } from "react";

const Contact = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log(name,email,message);
    
  }
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">
        Contact Us 📞
      </h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e)=>setName(e.target.value)}
          value={name}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          rows="4"
          placeholder="Your Message"
          onChange={(e)=>setMessage(e.target.value)}
          value={message}
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
