import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DonationPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const amount = form.amount.value.trim();
    const paymentMethod = form['payment-method'].value;

    if (!name) {
      alert('Please enter your full name.');
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) < 1) {
      alert('Please enter a valid donation amount (minimum ₹1).');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-red-100 to-blue-200 min-h-screen flex flex-col">
      <div className="bg-red-700 text-white shadow-md text-center py-6 px-4">
        <h1 className="text-3xl font-bold">Sahayak</h1>
        <p className="mt-2 italic text-red-100 max-w-3xl mx-auto">
          "The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi
        </p>
      </div>

      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-extrabold text-red-800 mb-6 text-center">
            Support Sahayak - Make a Difference Today
          </h2>
          <p className="text-blue-700 text-center mb-10 text-lg leading-relaxed">
            Your generous donation helps us empower communities, support volunteers, and create lasting change.
            Choose your preferred payment method below and join us in making the world a better place.
          </p>

          {!submitted ? (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label className="block text-red-800 font-semibold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full border border-blue-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block text-red-800 font-semibold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full border border-blue-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="block text-red-800 font-semibold mb-2" htmlFor="amount">
                  Donation Amount (₹)
                </label>
                <input
                  className="w-full border border-blue-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  id="amount"
                  name="amount"
                  min="1"
                  placeholder="Enter amount in INR"
                  required
                  type="number"
                />
              </div>
              <div>
                <label className="block text-red-800 font-semibold mb-4">Choose Payment Method</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer border border-blue-300 rounded-lg p-4 hover:shadow-lg transition">
                    <input className="form-radio text-blue-600" name="payment-method" type="radio" value="upi" required />
                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-700">UPI / QR Code</span>
                      <img
                        className="mt-2 w-28 h-28 object-contain rounded-md border border-blue-300"
                        src="https://storage.googleapis.com/a1aa/image/56c88e73-ad41-4b7b-46f7-9cfa0ba8b976.jpg"
                        alt="UPI QR Code"
                      />
                      <small className="text-blue-600 mt-1">Scan to pay via UPI apps</small>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer border border-blue-300 rounded-lg p-4 hover:shadow-lg transition">
                    <input className="form-radio text-blue-600" name="payment-method" type="radio" value="credit-card" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-700">Credit / Debit Card</span>
                      <i className="fas fa-credit-card fa-3x mt-2 text-blue-600"></i>
                      <small className="text-blue-600 mt-1">Visa, MasterCard, Amex</small>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer border border-blue-300 rounded-lg p-4 hover:shadow-lg transition">
                    <input className="form-radio text-blue-600" name="payment-method" type="radio" value="netbanking" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-blue-700">Net Banking</span>
                      <i className="fas fa-university fa-3x mt-2 text-blue-600"></i>
                      <small className="text-blue-600 mt-1">All major banks supported</small>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-lg shadow-md transition"
              >
                Donate Now
              </button>
            </form>
          ) : (
            <div
              className="mt-10 bg-blue-100 border border-blue-400 text-blue-800 rounded-lg p-6 text-center text-xl font-semibold"
              role="alert"
            >
              <i className="fas fa-heart fa-2x mb-4 text-blue-600"></i>
              <p>Thank you for your generous donation!</p>
              <p className="mt-2 italic text-blue-700 max-w-xl mx-auto">
                "Volunteers don’t get paid, not because they’re worthless, but because they’re priceless." – Sherry Anderson
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-red-700 text-red-100 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm">
          © 2024 Sahayak. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default DonationPage;
