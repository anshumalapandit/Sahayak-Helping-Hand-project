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
      "aqQ8b3qPpmn-BKfHW"   // replace
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-100 to-pink-100 p-6">
      <h2 className="text-4xl font-bold text-red-800 mb-6">Get in Touch with Sahayak</h2>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        <div className="hidden md:block md:w-1/2">
          <img src="https://img.freepik.com/premium-vector/disabled-woman-wheelchair-walking-city-park-with-accompanying-person-outdoor-activity-social-worker-volunteer-with-seniors_370161-87.jpg" alt="Contact Support Graphic" className="w-full h-auto" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-xl rounded-2xl p-8 w-full md:w-1/2 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <input
            type="text"
            name="location"
            placeholder="Your Location (City / Area)"
            required
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-xl"
          />

          <textarea
            name="query"
            placeholder="How can we help you? Write your query or message."
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-xl"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
