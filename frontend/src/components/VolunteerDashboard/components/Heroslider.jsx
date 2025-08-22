import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../../assets/1.png'; // Adjust the path as necessary
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import img4 from '../../../assets/4.png';
import img5 from '../../../assets/5.png';
import img6 from '../../../assets/6.png';
import img7 from '../../../assets/7.png';
import { Link } from 'react-router-dom';

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Heroslider() {
  return (
    <div className="relative w-full mt-16">
      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-64px)]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                  <h1 className="text-5xl md:text-7xl text-red-800 font-bold drop-shadow-lg">
                    Sahayak - A Helping Hand
                  </h1>
                  <Link to="/volunteer-dashboard/learn">
                    <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-lg">
                      Learn How to Help
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Impact & Milestones */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Our Impact</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Sahayak has reached over 10,000 lives across India through our network of passionate volunteers, social initiatives, and partner NGOs. We are empowering differently-abled people by providing the right support and care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800">10,000+</h3>
            <p className="text-gray-600">People Supported</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800">100+</h3>
            <p className="text-gray-600">Volunteers Registered</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-800">50+</h3>
            <p className="text-gray-600">Partner NGOs & Colleges</p>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section className="py-16 px-6 bg-red-50 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Stories of Change</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Discover inspiring stories of individuals whose lives were transformed through the power of care, support, and volunteers.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Ravi's Journey</h3>
            <p className="text-gray-600">
              Ravi, who lost both arms in an accident, now works at a tech firm after receiving support from Sahayak’s team and volunteer training.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Meena’s New Life</h3>
            <p className="text-gray-600">
              With mobility aids and emotional support, Meena started her own small tailoring business. Our volunteers helped her every step.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">What Our Volunteers Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <blockquote className="p-6 bg-white shadow rounded-xl">
            <p className="text-gray-700 italic">
              “Volunteering with Sahayak changed my life. I feel more connected to my community and I’ve learned so much.”
            </p>
            <footer className="mt-4 text-blue-800 font-semibold">- Anjali, NSS Volunteer</footer>
          </blockquote>
          <blockquote className="p-6 bg-white shadow rounded-xl">
            <p className="text-gray-700 italic">
              “Helping others brings joy. Sahayak gave me the platform to do meaningful work.”
            </p>
            <footer className="mt-4 text-blue-800 font-semibold">- Ramesh, Student Volunteer</footer>
          </blockquote>
        </div>
      </section>

      {/* Our Supporters */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Our Supporters</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          We are proud to be supported by numerous NGOs, colleges, and social organizations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <span className="text-blue-800 font-semibold">NSS India</span>
          <span className="text-blue-800 font-semibold">Samarth NGO</span>
          <span className="text-blue-800 font-semibold">VIT College</span>
          <span className="text-blue-800 font-semibold">Rotaract Club</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6 text-center mt-10">
        <p className="text-lg font-semibold">© {new Date().getFullYear()} Sahayak | Together, we empower.</p>
      </footer>
    </div>
  );
}
