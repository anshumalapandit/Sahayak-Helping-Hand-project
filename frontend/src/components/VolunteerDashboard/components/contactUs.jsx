import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jysi93s",  // replace
      "template_ymkmkha", // replace
      form.current,
      "aqQ8b3qPpmn-BKfHW"  // replace
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Something went wrong: " + error.text);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-md rounded-2xl p-8 max-w-xl w-full space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 border border-gray-300 rounded-xl"
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          required
          className="w-full p-2 border border-gray-300 rounded-xl"
        />

        <input
          type="text"
          name="year"
          placeholder="Year"
          required
          className="w-full p-2 border border-gray-300 rounded-xl"
        />

        <input
          type="text"
          name="prn"
          placeholder="PRN Number"
          required
          className="w-full p-2 border border-gray-300 rounded-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 border border-gray-300 rounded-xl"
        />

        <textarea
          name="query"
          placeholder="Your Query"
          required
          rows="4"
          className="w-full p-2 border border-gray-300 rounded-xl"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
