import { useState } from "react";

export default function FaizEQuranAcademy() {
  const whatsappNumber = "919929949458";

  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
  });

  const handleWhatsAppEnroll = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  };

  const submitEnrollment = () => {
    const message = `📚 New Student Enrollment

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🎂 Age: ${formData.age}
🏙️ City: ${formData.city}
📖 Course: ${selectedCourse}

From Faiz e Quran Academy Website`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  const courses = [
    "Quran Recitation",
    "Noorani Qaida",
    "Islami Aqaid",
    "Namaz Training",
    "Women Islamic Education",
    "Islamic Parenting",
    "Online Imam Training",
  ];

  return (
    <div className="min-h-screen bg-[#062f26] text-white font-sans">
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#0a3b30] w-full max-w-lg rounded-3xl p-8 border border-yellow-600 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Student Enrollment Form
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full mb-4 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full mb-4 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            />

            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full mb-4 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            />

            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full mb-6 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            />

            <button
              onClick={submitEnrollment}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-bold transition"
            >
              Submit & Continue to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-yellow-700">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400">
            Faiz e Quran
          </h1>
          <p className="text-sm text-gray-300">
            Learn Quran & Islam From Home
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#courses" className="hover:text-yellow-400">Courses</a>
          <a href="#teachers" className="hover:text-yellow-400">Teachers</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-20 py-20 items-center">
        <div>
          <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
            Online Islamic Academy
          </span>

          <h2 className="text-5xl md:text-7xl font-bold mt-8 leading-tight">
            Learn Quran & Islamic Education Online
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Professional Islamic courses with experienced Muftis and live online classes.
            Join Faiz e Quran Academy and start your journey of authentic Islamic learning.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <button
              onClick={() => handleWhatsAppEnroll("General Admission")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition"
            >
              Join Now
            </button>

            <button
              onClick={() => handleWhatsAppEnroll("Free Demo Class")}
              className="border border-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-xl font-semibold transition"
            >
              Free Demo Class
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1200&auto=format&fit=crop"
            alt="Islamic Scholar"
            className="rounded-3xl shadow-2xl border-4 border-yellow-500"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-20 py-20 bg-[#0a3b30]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-yellow-400">About Academy</h3>

          <p className="mt-8 text-lg leading-9 text-gray-300">
            Faiz e Quran Academy ek modern online Islamic learning platform hai jahan
            bachchon aur bado dono ke liye Qur’an, Tajweed aur authentic Islamic education
            professional teachers ke zariye di jati hai.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-8 md:px-20 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-yellow-400">Popular Courses</h3>
          <p className="mt-4 text-gray-300">
            Explore our premium Islamic education programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#0a3b30] p-8 rounded-3xl border border-yellow-700 hover:scale-105 transition"
            >
              <div className="text-5xl mb-4">📖</div>
              <h4 className="text-2xl font-bold text-yellow-400">{course}</h4>

              <p className="mt-4 text-gray-300">
                Professional Islamic learning with live classes and expert teachers.
              </p>

              <button
                onClick={() => handleWhatsAppEnroll(course)}
                className="mt-6 bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers */}
      <section id="teachers" className="px-8 md:px-20 py-20 bg-[#0a3b30]">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-yellow-400">Our Teachers</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#062f26] rounded-3xl p-8 border border-yellow-700">
            <h4 className="text-3xl font-bold text-yellow-400">
              Mufti Haider Madani
            </h4>

            <p className="mt-4 text-gray-300">Qualification: Mufti</p>
            <p className="text-gray-300">Experience: 5+ Years</p>
          </div>

          <div className="bg-[#062f26] rounded-3xl p-8 border border-yellow-700">
            <h4 className="text-3xl font-bold text-yellow-400">
              Mufti Shoib Raza
            </h4>

            <p className="mt-4 text-gray-300">Qualification: Mufti</p>
            <p className="text-gray-300">Experience: 5+ Years</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 md:px-20 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-yellow-400">
            Academy Features
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Student Login",
            "Online Classes",
            "Certificates",
            "Blog Section",
            "WhatsApp Chat",
            "Live Classes",
            "Online Payment",
            "Course Videos",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-[#0a3b30] rounded-2xl p-6 text-center border border-yellow-700"
            >
              <h4 className="text-xl font-semibold">{feature}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-8 md:px-20 py-20 bg-[#0a3b30]">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-yellow-400">FAQ</h3>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-[#062f26] p-6 rounded-2xl border border-yellow-700">
            <h4 className="text-2xl font-semibold">Are classes online?</h4>
            <p className="mt-3 text-gray-300">
              Yes, all classes are available online with live interaction.
            </p>
          </div>

          <div className="bg-[#062f26] p-6 rounded-2xl border border-yellow-700">
            <h4 className="text-2xl font-semibold">Do students receive certificates?</h4>
            <p className="mt-3 text-gray-300">
              Yes, certificates are provided after course completion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">Contact Us</h3>

            <div className="mt-8 space-y-4 text-lg text-gray-300">
              <p>📞 8630552631</p>
              <p>📧 faizanrazaansari002gmail.com</p>
              <p>📍 Luniyawas, Jaipur, Rajasthan</p>
            </div>
          </div>

          <div className="bg-[#0a3b30] p-8 rounded-3xl border border-yellow-700">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full mb-4 p-4 rounded-xl bg-[#062f26] border border-yellow-700 outline-none"
            ></textarea>

            <button
              onClick={() => handleWhatsAppEnroll("Contact Inquiry")}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-bold transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-700 px-8 md:px-20 py-10 text-center text-gray-400">
        <h4 className="text-2xl font-bold text-yellow-400">
          Faiz e Quran Academy
        </h4>

        <p className="mt-4">
          © 2026 Faiz e Quran Academy. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
